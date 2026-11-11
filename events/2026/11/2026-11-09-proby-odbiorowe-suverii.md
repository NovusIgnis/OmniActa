---
id: 2026-11-09-proby-odbiorowe-suverii
typ: proba
data: 2026-11-10 00:30
sprawy: suveria
rodzice: 2026-11-09-przeglad-krzyzowy-kontenera, 2026-11-05-sesja-wieczorna, 2026-10-30-whitepaper-suverii-koncowy
kto: Claude (Fable 5.1), Codex (gpt-6-astra)
zrodla: Research/suveria-odbior-2026-11-09/WYNIK.md; Research/suveria-odbior-2026-11-09/WYNIK.przed-2026-11-10.md; Research/suveria-przeglad-claude-2026-11-09/PRZEGLAD-CODEX-ODBIOR-2026-11-09.md; Suveria (gałąź odbior-2026-11-09, commity e720034 i a7058dd)
dokladnosc: dokladna
publikacja: 2026-11-11
---

## PL

### Pierwsze próby odbiorowe Suverii: 4 zaliczone, 5 częściowo

Rozdział 9 whitepapera Suverii wymienia próby, które udokumentujemy, zanim nazwiemy jakiekolwiek wydanie poufnym. Program prób wykonuje dziewięć z nich na prawdziwym kodzie kontenera, strony próbnej i bramy do modeli. Działa na jednym komputerze, na wymyślonych danych. Nic nie wychodzi poza ten komputer i żaden model nie jest pytany.

Pierwszy przebieg (9 listopada, 20:53) dał 5 prób zaliczonych i 4 częściowo. Potem kod prób przeczytał Codex. Wynik odtworzył, ale w samych próbach znalazł dziewięć słabych miejsc, w tym cztery wysokiej wagi: niektóre próby mogły przejść, choć system zachowałby się źle. Próba awarii mogła się na przykład zaliczyć bez żadnego zapisu, a próba podmiany środowiska sprawdzała tylko jeden rodzaj żądania. Odradził publikację wyniku bez poprawek. Po poprawkach według wszystkich dziewięciu uwag drugi przebieg (10 listopada, 00:30) dał 4 próby zaliczone i 5 częściowo. Niezaliczonych nie było.

Zaliczone: kopia na drugim urządzeniu i odmowa odczytu bez klucza, równoległe zmiany bez cichego nadpisania, odczyt eksportu w niezależnym narzędziu, ograniczenie zakresu integracji i cofnięcie dostępu. Częściowo: odzyskiwanie dostępu (brakuje zrozumiałego wyjaśnienia skutków utraty wszystkich kluczy), dowód środowiska (sprawdzany na nagraniu z 2 listopada, nie na żywo), treść w dziennikach (bez zrzutów pamięci, telemetrii i dzienników dostawcy), zachowanie po awarii (losowe zabicie procesu nie celuje w chwilę zapisu, a utraty zasilania nie sprawdzano) oraz usuwanie (nie da się stąd potwierdzić, że operator magazynu skasował swoje kopie). Przy każdej próbie raport wypisuje jej granice, a testy programu celowo psują każdą próbę i sprawdzają, że wtedy nie przechodzi.

To wynik prototypu, a nie audyt ani dowód poufności usługi. Najważniejszej próby, w której ludzie z uprawnieniami operatora szukają ukrytych danych, ten przebieg nie obejmuje.

## EN

### First acceptance trials of Suveria: 4 passed, 5 partly

Chapter 9 of the Suveria whitepaper lists the trials we will document before we call any release confidential. The trial program runs nine of them on the real code of the container, the trial page and the gateway to the models. It runs on one computer, on made-up data. Nothing leaves that computer and no model is asked.

The first run (9 November, 20:53) gave 5 trials passed and 4 partly. Then Codex read the code of the trials. It reproduced the result, but found nine weak points in the trials themselves, four of them of high severity: some trials could pass even though the system would behave badly. For example, the crash trial could pass without a single write, and the trial of a swapped environment checked only one kind of request. It advised against publishing the result without fixes. After fixes following all nine findings, the second run (10 November, 00:30) gave 4 trials passed and 5 partly. None failed.

Passed: a copy on a second device and refusal to read without the key, concurrent changes without silent overwriting, reading the export in an independent tool, limiting the scope of an integration and revoking its access. Partly: recovering access (an understandable explanation of what losing all keys means is missing), proof of the environment (checked on a recording from 2 November, not live), content in logs (without memory dumps, telemetry and the provider's logs), behaviour after a crash (a random kill of the process does not aim at the moment of writing, and power loss was not tested) and deletion (from here we cannot confirm that the storage operator deleted its copies). For each trial the report lists its limits, and the program's tests deliberately break every trial and check that it then fails.

This is the result of a prototype, not an audit or a proof of the service's confidentiality. The most important trial, in which people with operator permissions search for hidden data, is not part of this run.
