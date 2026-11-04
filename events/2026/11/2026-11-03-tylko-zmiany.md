---
id: 2026-11-03-tylko-zmiany
typ: decyzja
data: 2026-11-03 01:00
sprawy: wgrywanie
rodzice: 2026-11-03-kolejka-wgrywania
kto: fundator
zrodla: github.com/NovusIgnis/NovusIgnis.org commit 263681a; WGRYWANIE.md
stan: wykonana
dokladnosc: dokladna
publikacja: 2026-11-04
---

## PL

### Wgrywamy tylko zmienione pliki

**Cel:** krótsze wgrania i krótszy czas, w którym na serwerze jest pół starej, pół nowej strony.

**Warianty:** zawsze całość (dotąd, ok. 900 plików i 66 MB); porównanie dat i rozmiarów (niebezpieczne: zmiana „2” na „3” nie zmienia rozmiaru); porównanie odcisków treści. Wybrane: odciski.

**Kogo dotyczy:** czytelników (mniej pobierania, gdy pliki się nie zmieniły) i fundatora (zatwierdzanie wgrań).

**Wykonanie:** Claude dopisał porównanie odcisków SHA-256 z listą zapisaną na serwerze; całość idzie, gdy listy nie ma, gdy zmienia się ponad 40% plików albo na żądanie. Wysłane na polecenie fundatora.

**Przegląd:** drugie wgranie po zmianie pokaże liczbę wysłanych plików.

## EN

### We upload only the changed files

**Goal:** shorter deployments and a shorter time during which the server holds half of the old and half of the new site.

**Options:** always everything (so far, about 900 files and 66 MB); comparing dates and sizes (unsafe: changing “2” to “3” does not change the size); comparing content fingerprints. Chosen: fingerprints.

**Who it affects:** readers (less downloading when files did not change) and the founder (approving deployments).

**Execution:** Claude added a comparison of SHA-256 fingerprints with a list kept on the server; everything is sent when there is no list, when more than 40% of files change, or on request. Pushed on the founder's instruction.

**Review:** the second deployment after the change will show the number of files sent.
