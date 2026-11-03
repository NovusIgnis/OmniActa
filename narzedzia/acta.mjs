#!/usr/bin/env node
/**
 * OmniActa · narzędzie repozytorium.
 *
 *   node narzedzia/acta.mjs sprawdz            kontrola: pola, odnośniki, daty, prywatność, łańcuch
 *   node narzedzia/acta.mjs dopisz [--powod "…"]   dopisuje do lancuch.jsonl nowe i zmienione wpisy
 *   node narzedzia/acta.mjs wydanie [--podglad]    zapisuje wydanie/acta.json (dla strony) i wydanie/acta.jsonl (zbiór)
 *
 * Wpisy: sprawy/<id>.md i zdarzenia/<rok>/<miesiąc>/<id>.md. Każde zdarzenie ma odcisk SHA-256 liczony z jego treści
 * i z odcisków rodziców (zdarzeń, z których wynika), więc całość tworzy drzewo Merkla w postaci grafu bez cykli:
 * zmiana dawnego wpisu zmienia odciski wszystkich późniejszych, które z niego wynikają. lancuch.jsonl to rejestr tylko do
 * dopisywania (whitepaper zasad fundacji, punkt 12.2): każdy wiersz zawiera odcisk poprzedniego wiersza.
 * Pole „publikacja” (data wydania) nie wchodzi do odcisku: ustawiamy je dopiero w dniu publikacji.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LANCUCH = path.join(ROOT, 'lancuch.jsonl');
// Lista nazwisk osób spoza fundacji do blokowania: poza repozytorium, ścieżka w zmiennej OMNIACTA_PRYWATNE.
// Plik .dpapi jest zaszyfrowany kluczem konta Windows (DPAPI) i odszyfrowuje go tylko to konto.
function prywatne() {
  const p = process.env.OMNIACTA_PRYWATNE;
  if (!p || !fs.existsSync(p)) return null;
  let t = '';
  if (p.endsWith('.dpapi')) {
    const ps = "$ErrorActionPreference='Stop';Add-Type -AssemblyName System.Security;[Console]::OutputEncoding=[Text.Encoding]::UTF8;" +
      "[Console]::Out.Write([Text.Encoding]::UTF8.GetString([Security.Cryptography.ProtectedData]::Unprotect([IO.File]::ReadAllBytes($env:OMNIACTA_PRYWATNE),$null,'CurrentUser')))";
    const r = spawnSync('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', ps], { encoding: 'utf8' });
    if (r.status !== 0) return null;
    t = r.stdout;
  } else t = fs.readFileSync(p, 'utf8');
  return t.replace(/^\uFEFF/, '').split(/\r?\n/).map(s => s.trim()).filter(s => s && !s.startsWith('#'));
}
const sha = s => crypto.createHash('sha256').update(s, 'utf8').digest('hex');

// Granica: publikacja strony novusignis.org (przebieg GitHub Actions 41249207037, 31.10.2026, 23:40 czasu polskiego).
export const PUBLIKACJA_STRONY = '2026-10-31 23:40';

export const TYPY = ['pomysl', 'decyzja', 'dzialanie', 'proba', 'wynik', 'blad', 'korekta', 'publikacja', 'rozdzielenie', 'polaczenie', 'raport'];
const STANY_SPRAW = ['otwarta', 'zamknieta', 'rozdzielona', 'polaczona', 'wstrzymana'];

// ---------------------------------------------------------------- odczyt
function frontMatter(text, file) {
  const t = text.replace(/\r\n?/g, '\n');
  const m = t.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error(file + ': brak bloku metadanych');
  const meta = {};
  for (const line of m[1].split('\n')) {
    if (!line.trim() || /^\s*#/.test(line)) continue;
    const kv = line.match(/^([a-z_]+):\s*(.*?)\s*(?:\s#\s.*)?$/);
    if (!kv) throw new Error(file + ': nieczytelny wiersz metadanych: ' + line);
    meta[kv[1]] = kv[2];
  }
  return { meta, body: m[2].trim() + '\n', raw: t };
}
const list = v => (v || '').split(',').map(s => s.trim()).filter(Boolean);

// Treść w dwóch językach: „## PL” i „## EN”, w każdej tytuł „### …” i dalej tekst.
function langs(body) {
  const out = {};
  for (const part of body.split(/^## (?=PL|EN)/m).slice(1)) {
    const lang = part.slice(0, 2).toLowerCase();
    const rest = part.slice(2).trim();
    const t = rest.match(/^### (.+)\n?([\s\S]*)$/);
    out[lang] = t ? { tytul: t[1].trim(), tekst: t[2].trim() } : { tytul: '', tekst: rest };
  }
  return out;
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir, e.name)) : e.name.endsWith('.md') ? [path.join(dir, e.name)] : []);
}
const rel = f => path.relative(ROOT, f).split(path.sep).join('/');
// Do odcisku: treść bez pola „publikacja” i bez końcowych spacji.
const kanon = raw => raw.replace(/\r\n?/g, '\n').split('\n').filter(l => !/^publikacja:/.test(l)).map(l => l.replace(/\s+$/, '')).join('\n').trim() + '\n';

export function wczytaj() {
  const sprawy = walk(path.join(ROOT, 'sprawy')).map(f => {
    const { meta, body, raw } = frontMatter(fs.readFileSync(f, 'utf8'), rel(f));
    return { plik: rel(f), ...meta, z: list(meta.z), w: list(meta.w), teksty: langs(body), skrot: sha('sprawa\n' + kanon(raw)) };
  }).sort((a, b) => (a.otwarta || '').localeCompare(b.otwarta || '') || a.id.localeCompare(b.id));
  const zdarzenia = walk(path.join(ROOT, 'zdarzenia')).map(f => {
    const { meta, body, raw } = frontMatter(fs.readFileSync(f, 'utf8'), rel(f));
    return { plik: rel(f), ...meta, sprawy: list(meta.sprawy), rodzice: list(meta.rodzice), kto: list(meta.kto), uprzedzic: list(meta.uprzedzic),
      zrodla: (meta.zrodla || '').split(';').map(s => s.trim()).filter(Boolean), teksty: langs(body), _kanon: kanon(raw) };
  }).sort((a, b) => a.data.localeCompare(b.data) || a.id.localeCompare(b.id));
  // odciski: najpierw rodzice (kolejność topologiczna)
  const byId = new Map(zdarzenia.map(z => [z.id, z]));
  const done = new Map();
  const odcisk = (z, stos = new Set()) => {
    if (done.has(z.id)) return done.get(z.id);
    if (stos.has(z.id)) throw new Error('cykl w rodzicach przy ' + z.id);
    stos.add(z.id);
    const rodz = z.rodzice.filter(r => byId.has(r)).map(r => odcisk(byId.get(r), stos)).sort();
    const h = sha('zdarzenie\n' + z._kanon + '\n' + rodz.join('\n'));
    done.set(z.id, h); return h;
  };
  for (const z of zdarzenia) z.skrot = odcisk(z);
  return { sprawy, zdarzenia };
}

// ---------------------------------------------------------------- kontrola
const WZORY_PRYWATNOSCI = [
  [/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/, 'adres e-mail'],
  [/\+\d{2,3}[ -]?\d{2,3}[ -]?\d{3}[ -]?\d{3,4}\b|\b\d{3}[ -]\d{3}[ -]\d{3}\b/, 'numer telefonu'],
  [/\b\d{2}(?: ?\d{4}){6}\b/, 'numer rachunku'],
  [/\b[A-Z]{2}\d{2}(?: ?[A-Z0-9]{4}){3,7}\b/, 'numer IBAN'],
  [/\b(?:sk|pk|rk)[-_][A-Za-z0-9_-]{16,}\b|\bghp_[A-Za-z0-9]{20,}|\bAKIA[0-9A-Z]{16}\b/, 'klucz albo token'],
  [/-----BEGIN [A-Z ]*PRIVATE KEY-----/, 'klucz prywatny'],
  [/\b(?:ul\.|ulica|al\.)\s+[A-ZŁŚŻŹĆ][\p{L}-]+\s+\d+/u, 'adres pocztowy']
];
// PESEL: 11 cyfr z poprawną cyfrą kontrolną (same 11 cyfr to np. numer przebiegu GitHub Actions)
const pesel = t => (t.match(/\b\d{11}\b/g) || []).find(n => (10 - [1, 3, 7, 9, 1, 3, 7, 9, 1, 3].reduce((s, w, i) => s + w * +n[i], 0) % 10) % 10 === +n[10]);
// Adresy fundacji, które mogą się pojawić.
const DOZWOLONE = [/salve@novusignis\.org/g, /https?:\/\/\S+/g];

export function sprawdz({ zdarzenia, sprawy }) {
  const bledy = [], uwagi = [];
  const ids = new Set(), sIds = new Set(sprawy.map(s => s.id));
  const lista = prywatne();
  if (lista === null) uwagi.push('brak prywatnej listy nazwisk (zmienna OMNIACTA_PRYWATNE): kontrola nazwisk pominięta');
  const nazwiska = lista || [];
  for (const s of sprawy) {
    if (!s.id || !/^[a-z0-9-]+$/.test(s.id)) bledy.push(s.plik + ': id sprawy tylko małe litery, cyfry i „-”');
    if (path.basename(s.plik, '.md') !== s.id) bledy.push(s.plik + ': nazwa pliku inna niż id');
    if (!STANY_SPRAW.includes(s.stan)) bledy.push(s.plik + ': stan spoza listy ' + STANY_SPRAW.join('/'));
    if (!/^\d{4}-\d{2}-\d{2}$/.test(s.otwarta || '')) bledy.push(s.plik + ': „otwarta” w formacie RRRR-MM-DD');
    for (const x of [...s.z, ...s.w]) if (!sIds.has(x)) bledy.push(s.plik + ': nieznana sprawa ' + x);
    for (const l of ['pl', 'en']) if (!s.teksty[l]?.tytul) bledy.push(s.plik + ': brak tytułu ' + l.toUpperCase());
  }
  for (const z of zdarzenia) {
    if (ids.has(z.id)) bledy.push(z.plik + ': powtórzone id ' + z.id); ids.add(z.id);
    if (path.basename(z.plik, '.md') !== z.id) bledy.push(z.plik + ': nazwa pliku inna niż id');
    if (!TYPY.includes(z.typ)) bledy.push(z.plik + ': typ spoza listy ' + TYPY.join('/'));
    if (!/^\d{4}-\d{2}-\d{2}( \d{2}:\d{2})?$/.test(z.data || '')) bledy.push(z.plik + ': „data” w formacie RRRR-MM-DD albo RRRR-MM-DD GG:MM');
    if (!z.sprawy.length) bledy.push(z.plik + ': brak sprawy');
    for (const s of z.sprawy) if (!sIds.has(s)) bledy.push(z.plik + ': nieznana sprawa ' + s);
    for (const r of z.rodzice) if (!zdarzenia.some(x => x.id === r)) bledy.push(z.plik + ': nieznany rodzic ' + r);
      else if (zdarzenia.find(x => x.id === r).data > z.data) bledy.push(z.plik + ': rodzic ' + r + ' jest późniejszy');
    if (!z.kto.length) bledy.push(z.plik + ': brak pola „kto” (rola)');
    for (const l of ['pl', 'en']) if (!z.teksty[l]?.tytul || !z.teksty[l]?.tekst) bledy.push(z.plik + ': brak tytułu albo tekstu ' + l.toUpperCase());
    const archiwum = z.data < PUBLIKACJA_STRONY;
    if (archiwum && !/^\d{4}-\d{2}-\d{2}$/.test(z.odtworzono || '')) bledy.push(z.plik + ': wpis sprzed publikacji strony wymaga pola „odtworzono” (data odtworzenia)');
    if (!['dokladna', 'dzien', 'przyblizona'].includes(z.dokladnosc)) bledy.push(z.plik + ': „dokladnosc”: dokladna (godzina ze sprawdzalnego zapisu) / dzien (godzina tylko do kolejności) / przyblizona');
    if (z.typ === 'blad') for (const p of ['Co się stało', 'Skutki', 'Przyczyna', 'Naprawa', 'Wniosek'])
      if (!z.teksty.pl?.tekst.includes('**' + p)) uwagi.push(z.plik + ': błąd bez części „' + p + '” (manifest 8.1)');
    if (z.typ === 'decyzja') for (const p of ['Cel', 'Warianty', 'Kogo dotyczy', 'Wykonanie'])
      if (!z.teksty.pl?.tekst.includes('**' + p)) uwagi.push(z.plik + ': decyzja bez części „' + p + '” (whitepaper zasad 12.1)');
    // prywatność: cała treść wpisu
    let tekst = z._kanon;
    for (const d of DOZWOLONE) tekst = tekst.replace(d, '');
    tekst = tekst.replace(/^(id|rodzice|zrodla|sprawy):.*$/gm, '');
    for (const [re, co] of WZORY_PRYWATNOSCI) if (re.test(tekst)) bledy.push(z.plik + ': prywatność: ' + co + ' („' + tekst.match(re)[0] + '”)');
    if (pesel(tekst)) uwagi.push(z.plik + ': 11 cyfr z poprawną sumą PESEL („' + pesel(tekst) + '”): sprawdź, czy to nie numer PESEL');
    for (const n of nazwiska) if (new RegExp('(?<![\\p{L}])' + n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![\\p{L}])', 'iu').test(tekst)) bledy.push(z.plik + ': prywatność: nazwisko z listy lokalnej („' + n + '”)');
    if (z.uprzedzic.length && !z.uprzedzono) uwagi.push(z.plik + ': przed publikacją uprzedzić: ' + z.uprzedzic.join(', '));
  }
  for (const s of sprawy) if (!zdarzenia.some(z => z.sprawy.includes(s.id))) uwagi.push(s.plik + ': sprawa bez zdarzeń');
  // łańcuch: każdy wiersz potwierdza poprzedni, każdy wpis ma aktualny odcisk w rejestrze
  const wiersze = fs.existsSync(LANCUCH) ? fs.readFileSync(LANCUCH, 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l)) : [];
  let prev = '';
  const ostatni = new Map();
  wiersze.forEach((w, i) => {
    const { ten, ...reszta } = w;
    if (w.poprzedni !== prev) bledy.push('lancuch.jsonl: wiersz ' + (i + 1) + ' nie wskazuje poprzedniego');
    if (sha(JSON.stringify(reszta)) !== ten) bledy.push('lancuch.jsonl: wiersz ' + (i + 1) + ' zmieniony po zapisaniu');
    prev = ten; ostatni.set(w.id, w.skrot);
  });
  const niezapisane = [...sprawy.map(s => [s.id, s.skrot]), ...zdarzenia.map(z => [z.id, z.skrot])].filter(([id, h]) => ostatni.get(id) !== h);
  if (wiersze.length && niezapisane.length) uwagi.push('lancuch.jsonl: ' + niezapisane.length + ' wpisów nowych albo zmienionych od ostatniego dopisania (node narzedzia/acta.mjs dopisz)');
  return { bledy, uwagi, niezapisane };
}

// ---------------------------------------------------------------- łańcuch
function dopisz(dane, powod) {
  const wiersze = fs.existsSync(LANCUCH) ? fs.readFileSync(LANCUCH, 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l)) : [];
  const ostatni = new Map(wiersze.map(w => [w.id, w.skrot]));
  let prev = wiersze.length ? wiersze[wiersze.length - 1].ten : '';
  const czas = new Date().toISOString();
  const nowe = [];
  for (const [rodzaj, wpis] of [...dane.sprawy.map(s => ['sprawa', s]), ...dane.zdarzenia.map(z => ['zdarzenie', z])]) {
    if (ostatni.get(wpis.id) === wpis.skrot) continue;
    const zmiana = ostatni.has(wpis.id);
    if (zmiana && !powod) throw new Error('Wpis ' + wpis.id + ' zmienił się po zapisaniu w łańcuchu: podaj --powod "…" (zmiana zostanie jawnie odnotowana).');
    const w = { n: wiersze.length + nowe.length + 1, czas, rodzaj, id: wpis.id, skrot: wpis.skrot, ...(rodzaj === 'zdarzenie' ? { rodzice: wpis.rodzice } : {}), ...(zmiana ? { zmiana: powod } : {}), poprzedni: prev };
    w.ten = sha(JSON.stringify(w)); prev = w.ten; nowe.push(w);
  }
  if (nowe.length) fs.appendFileSync(LANCUCH, nowe.map(w => JSON.stringify(w)).join('\n') + '\n');
  return nowe;
}

// ---------------------------------------------------------------- wydanie
function wydanie(dane, podglad) {
  const ok = z => podglad || !z.uprzedzic.length || z.uprzedzono;
  const zd = dane.zdarzenia.filter(ok);
  const out = {
    nazwa: 'OmniActa', licencja: 'CC-BY-4.0', publikacja_strony: PUBLIKACJA_STRONY, utworzono: new Date().toISOString(), podglad: !!podglad,
    sprawy: dane.sprawy.map(({ plik, teksty, skrot, ...s }) => ({ ...s, plik, skrot, pl: teksty.pl, en: teksty.en })),
    zdarzenia: zd.map(({ _kanon, teksty, ...z }) => ({ ...z, archiwum: z.data < PUBLIKACJA_STRONY, pl: teksty.pl, en: teksty.en }))
  };
  fs.mkdirSync(path.join(ROOT, 'wydanie'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'wydanie', 'acta.json'), JSON.stringify(out, null, 1) + '\n');
  // zbiór do badań: jeden wiersz na zdarzenie, z rejestrem pochodzenia (whitepaper materiałów)
  const jsonl = out.zdarzenia.map(z => JSON.stringify({ id: z.id, typ: z.typ, data: z.data, archiwum: z.archiwum, sprawy: z.sprawy, rodzice: z.rodzice, kto: z.kto, pl: z.pl, en: z.en,
    pochodzenie: { wlasciciel: 'Fundacja Novus Ignis', licencja: 'CC-BY-4.0', zrodla: z.zrodla, odcisk: z.skrot, dane_osobowe: 'brak (role zamiast nazwisk; kontrola narzedzia/acta.mjs)' } }));
  fs.writeFileSync(path.join(ROOT, 'wydanie', 'acta.jsonl'), jsonl.join('\n') + '\n');
  return out;
}

// ---------------------------------------------------------------- polecenia
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [cmd, ...args] = process.argv.slice(2);
  const opt = n => { const i = args.indexOf(n); return i >= 0 ? (args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true) : null; };
  const dane = wczytaj();
  if (cmd === 'sprawdz' || !cmd) {
    const { bledy, uwagi } = sprawdz(dane);
    console.log('Sprawy: ' + dane.sprawy.length + ', zdarzenia: ' + dane.zdarzenia.length + ' (archiwum: ' + dane.zdarzenia.filter(z => z.data < PUBLIKACJA_STRONY).length + ').');
    uwagi.forEach(u => console.log('  uwaga: ' + u));
    bledy.forEach(b => console.log('  BŁĄD: ' + b));
    console.log(bledy.length ? 'Błędów: ' + bledy.length + '.' : 'Bez błędów.');
    process.exit(bledy.length ? 1 : 0);
  } else if (cmd === 'dopisz') {
    const { bledy } = sprawdz(dane);
    if (bledy.length) { bledy.forEach(b => console.log('  BŁĄD: ' + b)); console.log('Najpierw popraw błędy.'); process.exit(1); }
    const nowe = dopisz(dane, opt('--powod'));
    console.log('Dopisano do lancuch.jsonl: ' + nowe.length + ' wierszy.');
  } else if (cmd === 'wydanie') {
    const out = wydanie(dane, opt('--podglad'));
    console.log('wydanie/acta.json: ' + out.sprawy.length + ' spraw, ' + out.zdarzenia.length + ' zdarzeń' + (out.podglad ? ' (podgląd: z wpisami czekającymi na uprzedzenie)' : '') + '; wydanie/acta.jsonl.');
  } else { console.log('Polecenia: sprawdz, dopisz [--powod "…"], wydanie [--podglad]'); process.exit(2); }
}
