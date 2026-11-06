---
id: 2026-11-03-kolejka-wgrywania
typ: wynik
data: 2026-11-03 00:55
sprawy: wgrywanie
rodzice: 2026-11-03-manifest-opublikowany
kto: fundator, Claude (Opus 5.5)
zrodla: GitHub Actions przebiegi 41322797506 i 41548343604
dokladnosc: dzien
publikacja: 2026-11-06
---

## PL

### Nowe wgranie czekało na stare

Nowe wgranie nie ruszało, bo w kolejce od 1 listopada stał niezatwierdzony przebieg (zmiana wersji akcji GitHuba). Automat wgrywa po jednym naraz i nie przerywa poprzedniego. Stary przebieg został zatwierdzony i wgrał stan sprzed zmian, potem przeszedł nowy. Wniosek: niezatwierdzone przebiegi trzeba odrzucać od razu, bo blokują kolejkę.

## EN

### The new deployment waited for an old one

The new deployment did not start, because an unapproved run (a GitHub Actions version change) had been in the queue since 1 November. The automation deploys one at a time and does not cancel the previous one. The old run was approved and deployed the state from before the changes, then the new one went through. Lesson: unapproved runs must be rejected right away, because they block the queue.
