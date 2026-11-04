---
id: 2026-11-03-godziny-poprawione
typ: korekta
data: 2026-11-03 02:20
sprawy: omniacta
rodzice: 2026-11-03-omniacta-zalozona, 2026-10-30-szacowane-godziny
kto: Claude (Opus 5.5)
zrodla: Research/omniacta/archiwum/B-proces-i-strona.md (B-22); Research/omniacta/popraw_czasy.py
dokladnosc: dzien
publikacja: 2026-11-04
---

## PL

### Godziny zdarzeń poprawione

Odtwarzanie archiwum pokazało, że godziny w dzienniku pracy Claude'a bywały szacowane, nawet o kilka godzin od czasu commitów i plików. Część pierwszych wpisów OmniActa miała takie szacowane godziny. Poprawiliśmy kolejność według sprawdzalnych zapisów, a każdy wpis ma teraz dokładność: „dokładna” tylko wtedy, gdy godzina pochodzi z commitu, przebiegu GitHub Actions, nagłówka wiadomości albo pliku wyniku; w pozostałych pewny jest dzień, a godzina służy tylko do kolejności.

## EN

### Event times corrected

Reconstructing the archive showed that the times in Claude's work log were sometimes estimated, by as much as several hours from the commit and file times. Some of the first OmniActa entries had such estimated times. We corrected the order according to verifiable records, and every entry now has an accuracy: “exact” only when the time comes from a commit, a GitHub Actions run, a message header or a result file; in the others only the day is certain and the time serves just for ordering.
