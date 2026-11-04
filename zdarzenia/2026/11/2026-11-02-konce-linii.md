---
id: 2026-11-02-konce-linii
typ: blad
data: 2026-11-02 14:30
sprawy: strona
rodzice: 2026-11-02-akapit-8-1-przyjety
kto: Claude (Opus 5.5)
zrodla:
stan: naprawiony
dokladnosc: dokladna
wykryto: 2026-11-02 14:30 (porównanie wersji przed wysyłką)
plan_naprawy: 2026-11-02
naprawiono: 2026-11-02 (commity zrobione od nowa)
odpowiada: Claude (zapisy plików)
sprawdzenie_do: przy kolejnych commitach
publikacja: 2026-11-04
---

## PL

### Zmienione końce linii w dwóch plikach

**Co się stało:** przy wpisywaniu akapitu do polskiego i angielskiego manifestu na stronie Claude zapisał pliki z windowsowymi końcami linii.

**Skutki:** porównanie wersji pokazywało zmianę całych plików zamiast jednego akapitu. Commit nie trafił do publicznego repozytorium.

**Przyczyna:** narzędzie zapisu w systemie Windows, bez sprawdzenia porównania przed commitem.

**Naprawa:** przy wprowadzaniu przekładów pliki wróciły do poprzedniego zapisu; publiczne commity zrobiliśmy od nowa.

**Wniosek:** przed commitem patrzeć na liczbę zmienionych wierszy; skrypty zachowują końce linii każdego pliku.

## EN

### Changed line endings in two files

**What happened:** while adding the paragraph to the Polish and English manifesto on the site, Claude saved the files with Windows line endings.

**Effects:** the version comparison showed whole files changed instead of one paragraph. The commit did not reach the public repository.

**Cause:** the saving tool on Windows, without checking the comparison before committing.

**Fix:** when the translations were brought in, the files returned to the previous format; the public commits were made anew.

**Lesson:** before committing, look at the number of changed lines; scripts keep each file's line endings.
