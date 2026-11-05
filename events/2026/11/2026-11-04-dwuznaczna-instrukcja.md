---
id: 2026-11-04-dwuznaczna-instrukcja
typ: blad
data: 2026-11-04 20:31
sprawy: sposob-pracy, wgrywanie
rodzice: 2026-11-04-formularz-bez-konta
kto: Claude (Opus 5.5), fundator
zrodla: Claude/pamiec/00-pamiec-rdzen.md (04.11.2026, 20:26–20:31)
stan: naprawiony
dokladnosc: dzien
wykryto: 2026-11-04 20:27 (krok konfiguracji formularza przy wgraniu strony)
plan_naprawy: 2026-11-04
naprawiono: 2026-11-04 20:31 (fundator wpisał właściwe numery)
odpowiada: Claude (instrukcje dla fundatora)
sprawdzenie_do: przy każdej instrukcji ustawień
publikacja: 2026-11-05
---

## PL

### Dwuznaczna instrukcja ustawień formularza

**Co się stało:** Claude napisał fundatorowi w jednym zdaniu, żeby ustawił trzy zmienne: numer aplikacji, numer instalacji i tryb próbny, z wartością „tak” podaną tylko na końcu. Fundator odczytał to tak, że wszystkie trzy mają wartość „tak”, i tak je wpisał.

**Skutki:** krok konfiguracji formularza przy wgraniu strony zatrzymał się na sprawdzeniu numerów. Strona wgrała się poprawnie, nic nie zostało opublikowane.

**Przyczyna:** kilka ustawień w jednym zdaniu, z wartością tylko przy ostatnim.

**Naprawa:** fundator wpisał numery aplikacji i instalacji; kolejne wgranie przeszło.

**Wniosek:** w instrukcjach każde ustawienie stoi w osobnym wierszu, z własną wartością, a przy nim bezpośredni link do miejsca, w którym się je wpisuje.

## EN

### An ambiguous instruction for the form's settings

**What happened:** Claude wrote to the founder in one sentence to set three variables: the app number, the installation number and the trial mode, with the value "tak" (yes) given only at the end. The founder read it as all three having the value "tak" and entered them that way.

**Effects:** the form's configuration step during the website deployment stopped at the check of the numbers. The website deployed correctly, nothing was published.

**Cause:** several settings in one sentence, with a value only at the last one.

**Fix:** the founder entered the app and installation numbers; the next deployment went through.

**Lesson:** in instructions every setting stands on its own line, with its own value, together with a direct link to the place where it is entered.
