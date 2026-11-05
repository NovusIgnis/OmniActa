---
id: 2026-11-04-limit-zapytan
typ: blad
data: 2026-11-04 20:44
sprawy: sposob-pracy, wgrywanie
rodzice: 2026-11-04-formularz-bez-konta
kto: Claude (Opus 5.5)
zrodla: Claude/pamiec/00-pamiec-rdzen.md (04.11.2026, 20:44)
stan: naprawiony
dokladnosc: dzien
wykryto: 2026-11-04 20:43 (Claude, odpowiedź API o wyczerpanym limicie)
plan_naprawy: 2026-11-04
naprawiono: 2026-11-04 20:44 (sprawdzanie skutku na serwerze fundacji co minutę)
odpowiada: Claude (śledzenie wgrań)
sprawdzenie_do: przy każdym śledzeniu przebiegu
publikacja: 2026-11-05
---

## PL

### Wyczerpany limit zapytań do GitHuba

**Co się stało:** Claude sprawdzał stan wgrania strony co 20 sekund przez publiczne API GitHuba. Bez logowania API przyjmuje 60 zapytań na godzinę. Limit skończył się o 20:43 i do 21:23 Claude nie widział stanu przebiegów.

**Skutki:** żadne dla strony ani formularza. Przez chwilę fundator sam opisywał, co widzi na GitHubie.

**Przyczyna:** zbyt częste sprawdzanie, bez policzenia limitu.

**Naprawa:** Claude sprawdzał dalej skutek na serwerze fundacji, czyli to, czy formularz odczytał ustawienia, raz na minutę.

**Wniosek:** stan sprawdzamy rzadko (co 60 do 90 sekund) i tam, gdzie widać skutek: na naszym serwerze.

## EN

### The GitHub request limit used up

**What happened:** Claude checked the state of the website deployment every 20 seconds through GitHub's public API. Without signing in, the API accepts 60 requests per hour. The limit ran out at 20:43, and until 21:23 Claude could not see the state of the runs.

**Effects:** none for the website or the form. For a while the founder himself described what he saw on GitHub.

**Cause:** checking too often, without counting the limit.

**Fix:** Claude went on checking the effect on the foundation's server, that is, whether the form had read its settings, once a minute.

**Lesson:** we check state rarely (every 60 to 90 seconds) and where the effect is visible: on our own server.
