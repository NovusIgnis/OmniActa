---
id: 2026-11-12-suveria-home-twelfth-and-thirteenth-review
type: action
date: 2026-11-12 16:16
matters: suveria, way-of-working
parents: 2026-11-12-suveria-dom-dziesiaty-i-jedenasty-przeglad
by: Claude (Fable 5.2), Codex (gpt-6-astra)
sources: Research/suveria-dom-2026-11-10/ (PRZYROST-12-PROSBA-DO-ASTRY.txt, PRZYROST-12-wynik.txt, PRZYROST-12-zepsucia.txt, PRZYROST-12-odtworzenie-na-36edbdc.txt, B-dom-36edbdc-50da33a.diff, PRZYROST-12-PRZEGLAD-ASTRY.md, PRZYROST-13-PROSBA-DO-ASTRY.txt, PRZYROST-13-wynik.txt, PRZYROST-13-zepsucia.txt, PRZYROST-13-odtworzenie-na-50da33a.txt, B-dom-50da33a-51dce3e.diff, C-sumy-51dce3e.txt, PRZYROST-13-PRZEGLAD-ASTRY.md); Suveria, branch dom-2026-11-10, commits from 36edbdc to 51dce3e; conversation table, thread n-20261112-000915-1927170e, messages 20261112-121354-a2bc6373, 20261112-122604-4766edaa, 20261112-161615-27adddf2; Claude/pamiec/00-pamiec-rdzen.md (12.11.2026)
accuracy: exact
published: 2026-11-12
---

## EN

### Suveria: twelfth and thirteenth review of the home, a regression found and closed, local trial of the conversation allowed again

**Goal:** close the findings of the eleventh review in the trial version of the home of Suveria (a local program with a page, tested with a mock gateway) and have every change read by a second model before anyone tries it.

**What happened:**

- Increment 12 (commits 36edbdc to 50da33a, 12.11.2026, 09:49 to 12:12) made the page number its questions and ask the program what came of a question to which no answer arrived, instead of asking the model again. It also kept a conversation that is not saved when another one is chosen from the list, and added the button "Odczytaj ponownie" (read again) for a failed read of the container. Tests: 286 of the trial, 182 of the container, 6 of the reception, all passed twice. Of 88 deliberate breakages of the new code the tests caught 75 in the first run and 87 after more tests were added.
- The twelfth review by Astra (12:26) confirmed the 286 tests and found, with additional probes, a new finding of the highest weight that increment 12 itself had introduced: the two new buttons could run at the same time, and the one that ended later unlocked the screen during the next question. The result was an answer lost from view or a refused next question. A finding of medium weight stayed open as well: some refusals of the gateway do not prove that a question was not carried out, and asking again could call the model a second time. Astra withheld the recommendation to try the conversation on that state.
- Increment 13 (commits 50da33a to 51dce3e, 12:27 to 15:50) put all seven actions of the conversation behind one lock, so that a second action does not begin while the first one is on its way. The program now tells a certain refusal from a question that may have been carried out and counted; in the second case the conversation is held until the person confirms it. Each number of a question is taken once in one run of the program. Tests: 319 of the trial (128 in Firefox), 182, 6, all passed twice. Of 120 deliberate breakages the tests caught 119 on the final state; the remaining one changes nothing in behaviour.
- The thirteenth review by Astra (16:16) closed the finding of the highest weight and lifted the hold on a local trial of the conversation on 51dce3e, within limits: a new folder, trial materials, one device, one program, one browser tab, the mock gateway, no real gateway, no synchronisation and no import.

**What remains open:**

- Two findings of low weight: a saved part of an abandoned exchange can still disappear from the screen after a later read, and one message says that a question was refused before the model was asked, which is not true for one refusal code of the gateway.
- Before a real gateway: reloading the page removes the hold on a question that may have been carried out, and a late request can be taken by a program that was started again. Astra stated that a description alone is not enough here.
- Not checked: a real gateway and model, a browser other than Firefox, two tabs, an installation.

**What this shows about the way of working:** all tests passed on the state that contained the regression. It was found by a second model that probed the page independently, which is why each increment goes to review before a trial.

**State:** the home of Suveria is a project in a local trial version. Nothing was installed and nothing was sent outside; the repository is local.

## PL

### Suveria: dwunasty i trzynasty przegląd domu, regresja znaleziona i zamknięta, lokalna próba rozmowy znów dopuszczona

**Cel:** zamknąć uwagi z jedenastego przeglądu w próbnej wersji domu Suverii (lokalny program ze stroną, testowany z atrapą bramy) i dać każdą zmianę do przeczytania drugiemu modelowi, zanim ktokolwiek ją wypróbuje.

**Co się wydarzyło:**

- Przyrost 12 (zatwierdzenia od 36edbdc do 50da33a, 12.11.2026, 09:49 do 12:12) sprawił, że strona numeruje pytania i pyta program, co się stało z pytaniem, na które nie przyszła odpowiedź, zamiast pytać model drugi raz. Zachował też rozmowę bez zapisu przy wyborze innej z listy i dodał przycisk „Odczytaj ponownie” po nieudanym odczycie kontenera. Testy: 286 próby, 182 kontenera, 6 odbioru, wszystkie przeszły dwukrotnie. Z 88 celowych zepsuć nowego kodu testy wykryły 75 w pierwszym przebiegu i 87 po dopisaniu testów.
- Dwunasty przegląd Astry (12:26) potwierdził 286 testów i dodatkowymi sondami znalazł nową uwagę najwyższej wagi, którą wprowadził sam przyrost 12: dwa nowe przyciski mogły działać jednocześnie, a ten, który kończył później, odblokowywał ekran w trakcie następnego pytania. Skutkiem była odpowiedź zgubiona z widoku albo odmowa kolejnego pytania. Otwarta została też uwaga średniej wagi: część odmów bramy nie dowodzi, że pytanie nie zostało wykonane, a ponowienie mogło wywołać model drugi raz. Astra wstrzymała rekomendację próby rozmowy na tym stanie.
- Przyrost 13 (zatwierdzenia od 50da33a do 51dce3e, 12:27 do 15:50) objął wszystkie siedem czynności rozmowy jedną blokadą, tak że druga czynność nie zaczyna się, dopóki pierwsza trwa. Program odróżnia teraz pewną odmowę od pytania, które mogło zostać wykonane i policzone; w drugim przypadku rozmowa jest wstrzymana, dopóki osoba tego nie potwierdzi. Każdy numer pytania jest przyjmowany raz w jednym uruchomieniu programu. Testy: 319 próby (128 w Firefoksie), 182, 6, wszystkie przeszły dwukrotnie. Ze 120 celowych zepsuć testy wykryły 119 na stanie końcowym; pozostałe niczego nie zmienia w działaniu.
- Trzynasty przegląd Astry (16:16) zamknął uwagę najwyższej wagi i zdjął wstrzymanie lokalnej próby rozmowy na 51dce3e, w granicach: nowy folder, materiały próbne, jedno urządzenie, jeden program, jedna karta przeglądarki, atrapa bramy, bez rzeczywistej bramy, synchronizacji i importu.

**Co zostaje otwarte:**

- Dwie uwagi niskiej wagi: zapisana część porzuconej wymiany może nadal zniknąć z ekranu po późniejszym odczycie, a jeden komunikat mówi, że pytania odmówiono, zanim zapytano model, co nie jest prawdą dla jednego kodu odmowy bramy.
- Przed rzeczywistą bramą: przeładowanie strony usuwa wstrzymanie pytania, które mogło zostać wykonane, a spóźnione żądanie może przyjąć program uruchomiony ponownie. Astra stwierdziła, że sam opis tu nie wystarczy.
- Nie sprawdzono: rzeczywistej bramy i modelu, innej przeglądarki niż Firefox, dwóch kart, instalacji.

**Co to mówi o sposobie pracy:** wszystkie testy przechodziły na stanie, który zawierał regresję. Znalazł ją drugi model, który niezależnie sondował stronę; dlatego każdy przyrost idzie do przeglądu przed próbą.

**Stan:** dom Suverii to projekt w lokalnej wersji próbnej. Niczego nie zainstalowano i niczego nie wysłano na zewnątrz; repozytorium jest lokalne.
