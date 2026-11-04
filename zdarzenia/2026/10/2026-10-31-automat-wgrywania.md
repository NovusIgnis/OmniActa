---
id: 2026-10-31-automat-wgrywania
typ: polaczenie
data: 2026-10-31 19:11
sprawy: wgrywanie, hosting-i-domeny
rodzice: 2026-10-31-wiekszy-hosting, 2026-10-31-publiczne-repozytorium
kto: Claude (sesja lokalna), fundator
zrodla: novusignis.org-3110 commity 47ff560 (19:11) i 0f4a484 (19:52); Claude/pamiec/00-pamiec-rdzen.md:218-219
odtworzono: 2026-11-03
dokladnosc: dokladna
publikacja: 2026-11-04
---

## PL

### Automat wgrywania z zatwierdzeniem fundatora

Claude przygotował automat GitHuba: po zmianie w gałęzi głównej buduje stronę, uruchamia kontrole, składa paczkę i wysyła ją przez SFTP na serwer Infomaniaka; usuwanie plików na serwerze tylko po włączeniu osobnej zmiennej. Fundator przygotował po stronie serwera folder strony i dostęp kluczem, sam wpisał dane dostępowe i ustawił środowisko „prod”, które wymaga jego zatwierdzenia przed każdym wgraniem (19:52); Claude sprawdził tylko logowanie kluczem bez hasła. Od tej chwili sprawa hostingu toczy się dalej w sprawie wgrywania strony.

## EN

### Deployment automation with the founder's approval

Claude prepared a GitHub automation: after a change in the main branch it builds the site, runs the checks, assembles the package and sends it over SFTP to the Infomaniak server; deleting files on the server only after a separate variable is switched on. The founder prepared the site folder and key-based access on the server side, entered the access details himself and set up a “prod” environment that requires his approval before every deployment (19:52); Claude only checked key-based login without a password. From this point the hosting matter continues in the matter of deploying the site.
