---
id: 2026-10-30-audyt-z-kontekstem
typ: blad
data: 2026-10-30 19:25
sprawy: audyt, dziennik-claude
rodzice: 2026-10-30-audyt-trzech-modeli
kto: Claude (sesja lokalna), Claude (Fable 5.1) jako audytor, GPT-6 Codex jako audytor
zrodla: Research/audyt-2026-10-30/AUDYT-polecenie.md:16-18; Research/audyt-2026-10-30/zestawienie-faza1.md:5; Claude/pamiec/00-pamiec-rdzen.md:174, :176-177
stan: naprawiony
odtworzono: 2026-11-03
dokladnosc: dzien
publikacja: 2026-11-06
---

## PL

### Audyt bez kontekstu nie był w pełni bez kontekstu

**Co się stało:** instrukcja kazała kopiować pakiet poza folder projektu, ale kopie leżały w projekcie: sesja Claude Fable wczytała instrukcje projektu i przed poleceniem przeczytała sprawdzenie spójności, model GPT zajrzał do swojej pamięci projektu, a sesja audytu dopisała o 19:25 własny wpis do dziennika Claude'a.

**Skutki:** część uwag mogła powstać pod wpływem wcześniejszych ustaleń, a nie z samej lektury dokumentów.

**Przyczyna:** pakiet audytu leżał w folderze projektu.

**Naprawa:** oba modele same to zgłosiły; uwagi zbieżne ze sprawdzeniem spójności traktujemy jako słabsze potwierdzenie.

**Wniosek:** pakiet audytu musi leżeć poza projektem.

## EN

### The audit without context was not fully without context

**What happened:** the instructions said to copy the package outside the project folder, but the copies were inside the project: the Claude Fable session loaded the project instructions and read the consistency check before the task, the GPT model looked into its project memory, and the audit session added its own entry to Claude's log at 19:25.

**Effects:** some remarks may have been influenced by earlier findings rather than coming from reading the documents alone.

**Cause:** the audit package was in the project folder.

**Fix:** both models reported it themselves; remarks that coincide with the consistency check are treated as weaker confirmation.

**Lesson:** an audit package must be kept outside the project.
