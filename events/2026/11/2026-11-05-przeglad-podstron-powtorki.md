---
id: 2026-11-05-przeglad-podstron-powtorki
typ: blad
data: 2026-11-05 17:44
sprawy: przeklady, sposob-pracy
rodzice: 2026-11-05-sesja-popoludniowa
kto: Claude (Opus 5.5)
zrodla: Research/codex-2026-11-05/PROMPTY.md (prompt 1, zadanie B); Research/tlumaczenia-2026-10-31/przeglad/ (raporty z 31.10–1.11 i 5.11); Research/agenci/delegacje/oceny/D-006-przeglad-przekladow.md
stan: naprawiany
dokladnosc: dzien
publikacja: 2026-11-06
wykryto: 2026-11-06 09:00 (Claude, przy liczeniu, ile błędów znajdowały dotąd przeglądy przekładów, na pytanie fundatora)
plan_naprawy: zawężona runda po odnowieniu limitu modelu (7.11 po 21:00); zawężenie zatwierdził fundator 6.11
odpowiada: Claude (zlecenia dla koordynatora przekładów)
sprawdzenie_do: przy każdym zleceniu przeglądu
---

## PL

### Ponowny przegląd podstron, które już były sprawdzone

**Co się stało:** Claude zlecił koordynatorowi przekładów pełny przegląd podstron w 16 językach, z uzasadnieniem, że dotąd każdy język miał pełny przegląd tylko trzech podstron. To nie była prawda. Prawie połowa plików, 184 z 384, miała już pełny przegląd dokładnie tej samej wersji z 31 października albo 1 listopada.

**Skutki:** w trzech pierwszych językach 56 przeglądów dotyczyło plików przejrzanych już wcześniej w całości. Dały dwie nowe, trafne uwagi: termin w hiszpańskim przekładzie statutu i jedną drobną stylistyczną w niemieckim. Za to zużyły znaczną część tygodniowego limitu modelu, który robi przeglądy.

**Przyczyna:** Claude opisał stan przeglądów z pamięci, zamiast porównać sumy kontrolne plików z istniejącymi raportami.

**Naprawa:** Claude policzył, które pliki miały już pełny przegląd tej samej wersji, i przygotował zawężenie rundy do plików nigdy nieprzejrzanych, zmienionych albo nowych. Fundator je zatwierdził; ruszy, gdy odnowi się limit modelu.

**Wniosek:** przed zleceniem przeglądu porównujemy sumy kontrolne plików z istniejącymi raportami. Opis stanu z pamięci to za mało.

## EN

### Another review of subpages that had already been checked

**What happened:** Claude asked the translation coordinator for a full review of the subpages in 16 languages, explaining that so far each language had a full review of only three subpages. That was not true. Almost half of the files, 184 of 384, had already had a full review of exactly the same version on 31 October or 1 November.

**Effects:** in the first three languages, 56 reviews concerned files that had already been reviewed in full. They produced two new, accurate points: a term in the Spanish translation of the statute and one minor point of style in the German one. In exchange, they used a considerable part of the weekly limit of the model that does the reviews.

**Cause:** Claude described the state of the reviews from memory instead of comparing the files' checksums with the existing reports.

**Fix:** Claude counted which files had already had a full review of the same version and prepared a narrowing of the round to files never reviewed, changed or new. The founder approved it; it will start when the model's limit renews.

**Lesson:** before ordering a review, we compare the files' checksums with the existing reports. A description of the state from memory is not enough.
