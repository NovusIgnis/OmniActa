---
id: 2026-11-12-suveria-home-fourteenth-review
type: action
date: 2026-11-12 22:34
matters: suveria, way-of-working
parents: 2026-11-12-suveria-home-twelfth-and-thirteenth-review
by: Claude (Fable 5.2), Codex (gpt-6-astra); published by kronikarz (Claude, automat) under the rule of 12 November 2026
sources: Research/suveria-dom-2026-11-10/ (PRZYROST-14-PROSBA-DO-ASTRY.txt, PRZYROST-14-wynik.txt, PRZYROST-14-zepsucia.txt, PRZYROST-14-odtworzenie-na-51dce3e.txt, PRZYROST-14-testy-po-zatwierdzeniu.txt, B-dom-51dce3e-655f7cb.diff, C-sumy-655f7cb.txt, PRZYROST-14-PRZEGLAD-ASTRY.md); Suveria, branch dom-2026-11-10, commits from 51dce3e to 655f7cb; conversation table, thread n-20261112-000915-1927170e, messages 20261112-222442-88203043, 20261112-223415-ee0be876; Claude/pamiec/00-pamiec-rdzen.md (12.11.2026)
accuracy: exact
published: 2026-11-16
---

## EN

### Suveria: fourteenth review of the home, local trial still allowed, four new findings before a real gateway

**Goal:** close the findings of the thirteenth review in the trial version of the home of Suveria (a local program with a page, tested with a mock gateway) and have the changes read by a second model before anyone tries them.

**What happened:**

- Increment 14 (commits 51dce3e to 655f7cb, 12.11.2026, 16:20 to 22:23) changed three things. What was saved of an exchange that no longer waits now stays in view at every later read. A refusal that came from the provider of the model has its own state and its own sentence, because in that case the question did leave the computer. A question whose outcome is not known is written down for the browser tab (its number, the name of the run of the program and the kind of doubt, without the text of the question), so that reloading the page does not remove the hold; a request sent to an earlier run of the program is refused.
- Tests on the final state: 344 of the trial (149 in Firefox), 182 of the container, 6 of the reception, all passed twice. Of 25 new tests, 21 do not pass on the previous state and 4 pass (they check limits). Of 173 deliberate breakages the tests caught 164 in the first run and 172 on the final state after eight tests were added; the remaining one changes nothing in behaviour.
- The fourteenth review by Astra (22:34) confirmed the file sums and the 344 tests, ran seven browser probes of its own and a real restart of the program, and upheld the recommendation of a local trial on 655f7cb within the same limits: trial materials, the mock gateway, one program, one browser tab, no real gateway, no synchronisation and no import. It found no return of the regression from increment 12 and closed the finding about the sentence after a refusal of the provider.

**What the review found in the new code:**

- Medium weight, before a real gateway: the page removes the written number of a question before it shows the answer. When the read after the answer was held back, a reload of the tab freed the question without a check, and the mock gateway received it twice.
- Medium weight, before a real gateway: after a reload, an answer recovered for a conversation that is not saved can be taken for an older exchange that still waits, and then is not shown; an answer shown only in the status line can also be replaced by a later message.
- Low weight: the page records which button was pressed last, not which operation was carried out, so a saved answer can still be hidden after one sequence of a lost confirmation and a refused drop, and it then goes out with the next question without having been on the screen.
- Low weight: in one order of events the saved part of an exchange appears twice in the field; the model receives it once.
- The protection must not switch off silently where the storage of the tab is not available, and every question sent to the program should carry its number and the name of the run.

**Not checked:** a real gateway and model, a browser other than Firefox, two tabs, an installation.

**What this shows about the way of working:** the new protection passed 344 tests and 172 of 173 deliberate breakages, and the second model still found two ways around it with probes of its own within ten minutes. The tests and breakages were chosen by the same model that wrote the code.

**State:** the home of Suveria is a project in a local trial version. Nothing was installed and nothing was sent outside; the repository is local.

## PL

### Suveria: czternasty przegląd domu, lokalna próba nadal dopuszczona, cztery nowe uwagi przed rzeczywistą bramą

**Cel:** zamknąć uwagi z trzynastego przeglądu w próbnej wersji domu Suverii (lokalny program ze stroną, testowany z atrapą bramy) i dać zmiany do przeczytania drugiemu modelowi, zanim ktokolwiek je wypróbuje.

**Co się wydarzyło:**

- Przyrost 14 (zatwierdzenia od 51dce3e do 655f7cb, 12.11.2026, 16:20 do 22:23) zmienił trzy rzeczy. To, co zapisano z wymiany, która przestała czekać, zostaje teraz w widoku przy każdym późniejszym odczycie. Odmowa, która przyszła od dostawcy modelu, ma własny stan i własne zdanie, bo w tym przypadku pytanie opuściło komputer. Pytanie, o którym nie wiadomo, co się z nim stało, jest zapisywane dla karty przeglądarki (numer, nazwa uruchomienia programu i rodzaj wątpliwości, bez treści pytania), żeby przeładowanie strony nie zdejmowało wstrzymania; żądanie wysłane do wcześniejszego uruchomienia programu jest odrzucane.
- Testy na stanie końcowym: 344 próby (149 w Firefoksie), 182 kontenera, 6 odbioru, wszystkie przeszły dwukrotnie. Z 25 nowych testów 21 nie przechodzi na stanie poprzednim, a 4 przechodzą (sprawdzają granice). Ze 173 celowych zepsuć testy wykryły 164 w pierwszym przebiegu i 172 na stanie końcowym po dopisaniu ośmiu testów; pozostałe niczego nie zmienia w działaniu.
- Czternasty przegląd Astry (22:34) potwierdził sumy plików i 344 testy, wykonał siedem własnych sond w przeglądarce i rzeczywiste ponowne uruchomienie programu oraz podtrzymał rekomendację lokalnej próby na 655f7cb w tych samych granicach: materiały próbne, atrapa bramy, jeden program, jedna karta przeglądarki, bez rzeczywistej bramy, synchronizacji i importu. Nie znalazł powrotu regresji z przyrostu 12 i zamknął uwagę o zdaniu po odmowie dostawcy.

**Co przegląd znalazł w nowym kodzie:**

- Średnia waga, przed rzeczywistą bramą: strona usuwa zapisany numer pytania, zanim pokaże odpowiedź. Gdy odczyt po odpowiedzi został wstrzymany, przeładowanie karty odblokowało pytanie bez sprawdzenia, a atrapa bramy dostała je dwukrotnie.
- Średnia waga, przed rzeczywistą bramą: po przeładowaniu odpowiedź odzyskana dla rozmowy bez zapisu może zostać wzięta za starszą wymianę, która nadal czeka, i wtedy nie jest pokazana; odpowiedź pokazaną tylko w wierszu komunikatu może też zastąpić późniejszy komunikat.
- Niska waga: strona zapisuje, który przycisk naciśnięto ostatnio, a nie którą operację wykonano, więc zapisana odpowiedź może nadal zostać ukryta po jednej kolejności utraconego potwierdzenia i odmówionego porzucenia, a potem idzie z następnym pytaniem, choć nie było jej na ekranie.
- Niska waga: w jednej kolejności zdarzeń zapisana część wymiany pojawia się w polu dwa razy; model dostaje ją raz.
- Ochrona nie może się po cichu wyłączać tam, gdzie pamięć karty jest niedostępna, a każde pytanie wysyłane do programu powinno nieść numer i nazwę uruchomienia.

**Nie sprawdzono:** rzeczywistej bramy i modelu, innej przeglądarki niż Firefox, dwóch kart, instalacji.

**Co to mówi o sposobie pracy:** nowa ochrona przeszła 344 testy i 172 ze 173 celowych zepsuć, a drugi model i tak znalazł własnymi sondami dwa sposoby jej obejścia w dziesięć minut. Testy i zepsucia wybierał ten sam model, który pisał kod.

**Stan:** dom Suverii to projekt w lokalnej wersji próbnej. Niczego nie zainstalowano i niczego nie wysłano na zewnątrz; repozytorium jest lokalne.
