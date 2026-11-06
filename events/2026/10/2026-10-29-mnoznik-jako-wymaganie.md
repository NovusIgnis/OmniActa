---
id: 2026-10-29-mnoznik-jako-wymaganie
typ: blad
data: 2026-10-29 15:46
sprawy: suveria
rodzice: 2026-10-29-narada-infrastruktura
kto: Claude (rozmowa w claude.ai)
zrodla: Claude/rozmowa-2026-10-28-30.md:883, :900 (14:46 UTC); Claude/pamiec/00-pamiec-rdzen.md:116
stan: naprawiony
odtworzono: 2026-11-03
dokladnosc: dokladna
publikacja: 2026-11-06
---

## PL

### Założenie do testu policzone jak wymaganie

**Co się stało:** w rachunku kosztów Suverii Claude użył mnożnika 5× z wcześniejszej wersji whitepapera, opisanego tam wprost jako „założenie do testu”, tak jakby maszyna musiała wytrzymać pięciokrotny skok ruchu bez czekania.

**Skutki:** koszt własnej maszyny wychodził mniej więcej dwu- do trzykrotnie za wysoki.

**Przyczyna:** założenie bez pomiaru zostało przeniesione do rachunku bez sprawdzenia jego statusu.

**Naprawa:** Claude przyznał błąd, a rachunek policzono od nowa, z ruchem ogólnoświatowym; mnożnik 5× został tylko jako scenariusz próby obciążenia.

**Wniosek:** założenie do testu zostaje scenariuszem próby, a nie podstawą rachunku.

## EN

### A test assumption counted as a requirement

**What happened:** in the Suveria cost calculation Claude used a 5× multiplier from an earlier version of the whitepaper, described there explicitly as a “test assumption”, as if the machine had to withstand a fivefold traffic spike without any waiting.

**Effects:** the cost of our own machine came out roughly two to three times too high.

**Cause:** an unmeasured assumption was carried into the calculation without checking its status.

**Fix:** Claude admitted the mistake, and the calculation was redone with worldwide traffic; the 5× multiplier remained only as a load-test scenario.

**Lesson:** a test assumption remains a test scenario, not the basis of a calculation.
