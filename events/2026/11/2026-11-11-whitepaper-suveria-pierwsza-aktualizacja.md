---
id: 2026-11-11-whitepaper-suveria-pierwsza-aktualizacja
typ: dzialanie
data: 2026-11-11 20:26
sprawy: suveria, strona, wersje-dokumentow
rodzice: 2026-11-03-data-wersji
kto: fundator, Claude (Opus 5.5)
zrodla: Claude/pamiec/sesje/strona.md (9.11, 21:27–21:59; 11.11, 17:11–20:27); Claude/strona/suveria-aktualizacja-2026-11-09/; Treści/whitepaper-suveria.md; teczka zatwierdzeń, sprawa w13; repozytorium NovusIgnis/NovusIgnis.org, commity c4cc3bf i f4f0023; GitHub Actions, przebieg 43056518851
dokladnosc: dokladna
publikacja: 2026-11-11
---

## PL

### Whitepaper Suverii: pierwsza datowana aktualizacja, na stronie w 19 językach

W rozdziale 6 whitepapera Suverii fundacja zapowiedziała datowane aktualizacje o modelach, których wagi mają stać się publiczne. Pierwsza dotyczy modelu Kimi K3.1 Pro. Według stanu z 9 listopada 2026 r. jego wagi są publiczne. Nowy akapit opisuje ich rozmiar, licencję, przepisy silników do uruchamiania modelu i dostępność w poufnych API, z pięcioma przypisami do źródeł. Fundator zatwierdził to brzmienie 9 listopada, między 20:59 a 21:24. Pierwszym kandydatem na model Suverii pozostaje DeepSeek-V4.1-Flash.

Claude (Opus 5.5) przełożył akapit, przypisy, opis wersji i wpis w dzienniku zmian na 18 pozostałych języków strony. Przygotował też nowy opis Kimi K3.1 Pro na podstronie o modelach Suverii, która dotąd podawała, że wagi dopiero zapowiedziano. Fundator zatwierdził opis wersji, wpis w dzienniku, opis na podstronie i wysyłkę 11 listopada o 17:11. Zgodnie z decyzją z 3 listopada nowa wersja dokumentu ma datę dnia publikacji: 11 listopada 2026 r. Poprzednia wersja, z 8 listopada, jest zachowana w historii wersji, a strona „Co się zmieniło” pokazuje różnicę.

Przy tej pracy poprawiono generator strony. Na stronach zmian odwołania do przypisów mają teraz takie same numery jak w dokumencie. Wcześniej w akapicie dodanym albo usuniętym widać było surową etykietę przypisu, a w zmienionym odwołanie znikało. Poprawka uzupełniła 72 numery na 54 stronach zmian manifestu i trzech whitepaperów.

Zmiany trafiły do publicznego repozytorium strony 11 listopada o 17:15 (commity c4cc3bf i f4f0023, razem z odświeżoną kopią akt). Pierwsze wgranie na serwer nie przeszło, bo maszyna GitHuba chwilowo nie mogła połączyć się z serwerem pakietów Ubuntu; strona została wtedy bez zmian. Wgranie udało się w czwartym podejściu, o 20:22. O 20:26 Claude sprawdził serwer: wszystkie 1142 pliki zgadzają się z przebudową commitu f4f0023, a 131 pobranych stron jest z nią identycznych co do bajtu.

Stan: działa. Kosztu i szybkości Kimi K3.1 Pro w chronionym środowisku jeszcze nie zmierzono. Czego to nie znaczy: że fundacja zmienia kandydata na model Suverii ani że nasze odczytanie licencji jest opinią prawną.

## EN

### Suveria whitepaper: the first dated update, on the website in 19 languages

In chapter 6 of the Suveria whitepaper the foundation announced dated updates about models whose weights are expected to become public. The first concerns the Kimi K3.1 Pro model. As of 9 November 2026 its weights are public. The new paragraph describes their size, the license, the engine recipes for running the model and availability in confidential APIs, with five footnotes to sources. The founder approved this wording on 9 November, between 20:59 and 21:24. DeepSeek-V4.1-Flash remains the first candidate for the Suveria model.

Claude (Opus 5.5) translated the paragraph, the footnotes, the version description and the changelog entry into the website's 18 other languages. It also prepared a new description of Kimi K3.1 Pro for the page about the Suveria models, which until then said that the weights had only been announced. The founder approved the version description, the changelog entry, the description on that page and the release on 11 November at 17:11. In line with the decision of 3 November, the new version of the document is dated on the day of publication: 11 November 2026. The previous version, of 8 November, is kept in the version history, and the "What changed" page shows the difference.

During this work the website generator was fixed. On the change pages, references to footnotes now carry the same numbers as in the document. Before, a paragraph that had been added or removed showed the raw footnote label, and in a changed paragraph the reference disappeared. The fix filled in 72 numbers on 54 change pages of the manifesto and three whitepapers.

The changes reached the website's public repository on 11 November at 17:15 (commits c4cc3bf and f4f0023, together with a refreshed copy of the records). The first upload to the server failed because the GitHub machine briefly could not reach the Ubuntu package server; the website stayed unchanged at that point. The upload succeeded on the fourth attempt, at 20:22. At 20:26 Claude checked the server: all 1142 files match a rebuild of commit f4f0023, and 131 downloaded pages are identical to it byte for byte.

Status: working. The cost and speed of Kimi K3.1 Pro in the protected environment have not yet been measured. What this does not mean: that the foundation is changing the candidate for the Suveria model, or that our reading of the license is a legal opinion.
