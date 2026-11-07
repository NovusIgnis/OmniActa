---
id: 2026-11-06-publikacja-bez-daty
typ: blad
data: 2026-11-06 13:17
sprawy: omniacta
rodzice: 2026-11-04-publikacja-partiami
kto: Claude (Opus 5.5)
zrodla: Claude/pamiec/00-pamiec-rdzen.md (06.11.2026, 13:16–13:30); omniacta-publiczne, commity 8ebe494, 0ea3cc1 i 94de7b1; Research/omniacta/publikuj.py
stan: naprawiony
dokladnosc: dzien
publikacja: 2026-11-07
wykryto: 2026-11-06 13:17 (Claude, przy publikacji 65 wpisów)
plan_naprawy: 2026-11-06 13:18
naprawiono: 2026-11-07 21:44
odpowiada: Claude (szkice wpisów i narzędzie publikacji)
sprawdzenie_do: przy każdej publikacji
---

## PL

### Pięć wpisów opublikowanych bez daty publikacji

**Co się stało:** 6 listopada do publicznych akt trafiło pięć wpisów napisanych przez Claude'a 5 i 6 listopada bez daty publikacji: trzy rano i dwa w południowej partii 65 wpisów. Ich szkice nie miały pola na tę datę, a narzędzie publikacji wpisuje ją tylko w puste pole, więc te wpisy przeszły bez niej. Claude zauważył to zaraz po drugiej publikacji.

**Skutki:** w publicznej kopii te wpisy nie pokazywały dnia publikacji; można go było ustalić tylko z historii repozytorium. Treść i odciski wpisów były poprawne, bo data publikacji do odcisku nie wchodzi.

**Przyczyna:** Claude pisał te szkice bez pola „publikacja”, a ani narzędzie publikacji, ani kontrola akt go nie wymagały. Wpis bez pola przechodził bez ostrzeżenia.

**Naprawa:** tego samego dnia Claude dopisał datę 6 listopada w pięciu wpisach w obu kopiach akt; łańcuch się nie zmienił. Poprawka trafiła do publicznego repozytorium 7 listopada o 21:44. Narzędzie publikacji sprawdza teraz wszystkie wpisy, zanim cokolwiek przeniesie, i odmawia, gdy któremuś brakuje tego pola albo gdy wpis czeka na uprzedzenie dostawcy. Wcześniej w tym drugim przypadku mogło się zatrzymać dopiero po przeniesieniu części wpisów.

**Wniosek:** brak wymaganego pola ma zatrzymać publikację, a nie przejść po cichu. Każdy nowy szkic dostaje puste pole „publikacja” od razu.

## EN

### Five entries published without a publication date

**What happened:** on 6 November five entries written by Claude on 5 and 6 November went into the public records without a publication date: three in the morning and two in the midday batch of 65 entries. Their drafts had no field for that date, and the publishing tool only fills in an empty field, so these entries went through without it. Claude noticed this right after the second publication.

**Consequences:** in the public copy these entries did not show the day of publication; it could only be established from the repository history. The content and the fingerprints of the entries were correct, because the publication date is not part of the fingerprint.

**Cause:** Claude wrote these drafts without the "publication" field, and neither the publishing tool nor the check of the records required it. An entry without the field went through without a warning.

**Fix:** the same day Claude added the date 6 November to the five entries in both copies of the records; the chain did not change. The correction reached the public repository on 7 November at 21:44. The publishing tool now checks all entries before moving any of them, and refuses when one lacks this field or when an entry is waiting for notice to a provider. Previously, in the latter case, it could stop only after some entries had already been moved.

**Lesson:** a missing required field must stop the publication, not pass silently. Every new draft gets an empty "publication" field from the start.
