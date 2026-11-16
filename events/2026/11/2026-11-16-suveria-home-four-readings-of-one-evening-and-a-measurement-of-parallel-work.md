---
id: 2026-11-16-suveria-home-four-readings-of-one-evening-and-a-measurement-of-parallel-work
type: action
date: 2026-11-16 08:58
matters: suveria, way-of-working
parents: 2026-11-15-suveria-home-export-written-read-three-times-and-joined-to-the-trial
by: founder, Claude (Fable 5.2), Codex (gpt-6-astra)
sources: Research/suveria-dom-2026-11-10/ (PRZYROST-20-PROSBA-DO-ASTRY.txt, -2.txt, -3.txt, -4.txt, PRZEGLAD-20-ASTRY.md, -2.md, -2b.md, -3.md, -4.md, przeglad-20-astra-zalaczniki/, PRZED-BRAMA-lista-z-przegladow-4-13.md section N, proba-domu/KARTA-atrapa-6fc46a5.pl.txt, proba-domu/CO-SPRAWDZIC-6fc46a5.md, narzedzia-przyrost-20/zepsucia20.py, narzedzia-przyrost-20/POMIAR-rownolegle-2026-11-16.md, narzedzia-przyrost-20/surowe/*.txt); Suveria, branch dom-2026-11-10, commits 52cb9c4, 14a623a, 2bc42e0, 6fc46a5, a94f0fc; conversation table, messages 20261115-194743-a8522dea, 20261115-211243-25abc394, 20261115-231106-b5d6baa1, 20261116-004209-3a5b6fa3; events of the Programmer session of 2026-11-15 and 2026-11-16
accuracy: exact
published: 2026-11-16
---

## EN

### Suveria: three small corrections take four readings; the founder leaves his stronger computer on for the night and the same work runs ten times faster there

**Goal:** close three open items of the home of Suveria (a local program with a page, tried with a mock in place of a model) before the next visible feature, and, at the founder's question, measure how much of his stronger computer the tests can really use.

**What happened:**

- In the evening of 15 November the author session corrected three items from the list of things open before a real gateway: the hour of a routine that falls into the hour that does not exist on the night the clocks go forward (the data contract says 03:00, the program counted 03:30); the zone in which a routine's hour is counted (the routine's own, not the home's); and the page showing the passphrase of a copy that the program had already let go of when an answer came late.
- The reviewer (Astra) read the corrections four times between 19:47 and 00:42. It accepted the first at once, after checking more than 120 thousand recorded clock changes in 598 time zones without one difference. In the other two it found errors three times running.
- First reading: the way the author session counted the day of a routine in another zone gave two different days for the same question, depending on the hour; the page did not name the day an answer would mark; the page said "the program has deleted the copy" while the program still held it; a clock set back brought back the late passphrase.
- Second reading: an answer of the program that arrived after the copy's time still opened the download step; a clock that jumped ahead left the passphrase on the screen until the next click. The reviewer also wrote two additions to documents in its own name, which the author session applied unchanged: the monthly rule that the program had always followed and the contract had never stated, and a dated note to the description of the independent reader.
- Third reading: the author session had removed a guard because none of its 52 deliberate breakages could tell the page with the guard from the page without it. The reviewer showed that the tests were missing, not the need: with a wrong passphrase or a lost answer after the copy's time, the form stayed open. The guard came back, with the tests.
- Fourth reading: no error that would block the trial. The reviewer recommends replacing the state the founder is trying with the new one, within the same limits as before.
- Along the way the author session made five errors of its own in the tests and tools, each found by a run and corrected: twice a new name in the test file hid an older one of the same name (2 and then 16 tests failed for that reason on both computers); one new test compared two readings of a clock for equality; one new test passed although the change it relied on never reached the page; one command on Windows used two names that differ only in the case of a letter, which Windows takes for one.
- At 23:07 the founder asked whether to leave his stronger computer on, and then how much faster the work would go there. He left it on for the night and logged out of his own account. The author session made its list of deliberate breakages able to run several at once and measured the same work on both machines.
- The measurement: the list of 52 breakages took 57 minutes one after another on the small workshop computer (4 processor threads) and 6 minutes on the stronger one (24 threads) with 20 or more at once, with the same 52 of 52 caught. The full tests took 9.5 minutes on the workshop computer and 51 seconds on the stronger one split into 12 parts. On average 9 to 12 of the 24 threads were busy; more parts at once kept the processor busier and saved almost no time.
- The parallel runs showed two things that are not understood. With 16 or more parts at once, one part now and then loses all its page tests because the test browser reports that its window is gone. And twice in a day, in an ordinary run, the test browser on Windows did not open the page of the trial for the whole run. The author session first wrote to the founder that the first was a race for a network port; the reviewer called that a guess, the correction of the port did not remove it, and the author session took the statement back in the same night.
- At 01:33 the workshop computer stopped answering on the local network. The cause is not known; the last commit of the night is therefore only on one machine.
- On 16 November at 08:45 the founder decided, against the author session's advice to wait for the next visible feature, to move his trial on the stronger computer to the new state, because he prefers to try the current version. At 08:57 he approved the card that says what this state protects and what it does not. He also asked why a reply carried an hour six hours old in its first line; the line is copied from a clock that speaks only when a message arrives, and an answer given in a form is not one. This is recorded for the session that keeps that clock.

**Not checked:** a computer that really sleeps while a passphrase is on the screen; a tab in the background whose timers the browser slows down; Safari; the saving of the downloaded copy by a browser on Windows and its opening there by a person; whether the browser trouble seen in the tests can happen to a person in an ordinary browser; a real gateway and model; a second person using the home. Agents have no access to the founder's account or to his trial containers.

**What this shows about the way of working:**

- A list of deliberate breakages that catches everything says that the tests see the breakages on the list. It does not say that a guard no test exercises is unnecessary. The reviewer's sentence is kept in the notes of the session.
- A cause was named before the browser had been asked what went wrong. The tool that drives the browser now records the browser's own answer, and the first statement was withdrawn within the hour, in the same file the founder had been given.
- The stronger computer was not the limit. The work was: one long check sets the time of the whole list. Using more of the machine means cutting the work differently.
- The founder chose otherwise than advised, said why, and the reason is recorded in his words.

**State:** the home of Suveria is a project in a local trial with a mock. The reviewed state (6fc46a5) is being prepared for the founder's stronger computer; his other computer stays on the earlier state. Nothing was sent outside; the repository is local.

## PL

### Suveria: trzy małe poprawki wymagają czterech czytań; fundator zostawia na noc mocniejszy komputer i ta sama praca biegnie na nim dziesięć razy szybciej

**Cel:** zamknąć trzy otwarte pozycje domu Suverii (lokalny program ze stroną, próbowany z atrapą zamiast modelu) przed następną widoczną funkcją i, na pytanie fundatora, zmierzyć, ile z jego mocniejszego komputera testy naprawdę umieją wykorzystać.

**Co się wydarzyło:**

- Wieczorem 15 listopada sesja autorska poprawiła trzy pozycje z listy rzeczy otwartych przed prawdziwą bramą: godzinę rutyny, która wypada w godzinie nieistniejącej w noc przejścia na czas letni (kontrakt danych mówi 03:00, program liczył 03:30); strefę, w której liczy się godzina rutyny (własna strefa rutyny, nie strefa domu); oraz stronę, która przy spóźnionej odpowiedzi pokazywała hasło kopii, której program już nie miał.
- Recenzent (Astra) czytał poprawki cztery razy między 19:47 a 00:42. Pierwszą przyjął od razu, po sprawdzeniu ponad 120 tysięcy zapisanych zmian czasu w 598 strefach bez jednej różnicy. W dwóch pozostałych trzy razy z rzędu znajdował błędy.
- Pierwsze czytanie: sposób, w jaki sesja autorska liczyła dzień rutyny z innej strefy, dawał dla tego samego pytania dwa różne dni, zależnie od godziny; strona nie nazywała dnia, który zapisze odpowiedź; strona mówiła „program usunął kopię”, gdy program jeszcze ją trzymał; cofnięty zegar przywracał spóźnione hasło.
- Drugie czytanie: odpowiedź programu, która przyszła po czasie kopii, nadal otwierała krok pobrania; zegar, który przeskoczył do przodu, zostawiał hasło na ekranie do następnego kliknięcia. Recenzent napisał też we własnym imieniu dwa dopiski do dokumentów, które sesja autorska nałożyła bez zmian: regułę miesięczną, którą program zawsze stosował, a kontrakt nigdy nie zapisał, oraz datowaną notę do opisu niezależnego czytnika.
- Trzecie czytanie: sesja autorska usunęła zabezpieczenie, bo żadne z jej 52 celowych zepsuć nie odróżniało strony z nim od strony bez niego. Recenzent pokazał, że brakowało testów, a nie potrzeby: przy błędnym haśle albo utraconej odpowiedzi po czasie kopii formularz zostawał otwarty. Zabezpieczenie wróciło, razem z testami.
- Czwarte czytanie: żadnego błędu, który blokowałby próbę. Recenzent poleca zastąpienie stanu, który próbuje fundator, nowym stanem, w tych samych granicach co dotąd.
- Po drodze sesja autorska zrobiła pięć własnych błędów w testach i narzędziach; każdy wyszedł w przebiegu i każdy został poprawiony: dwa razy nowa nazwa w pliku testów zasłoniła starszą o tej samej nazwie (z tego powodu nie przeszły 2, a potem 16 testów na obu komputerach); jeden nowy test porównywał dwa odczyty zegara na równość; jeden nowy test przechodził, choć zmiana, na której się opierał, w ogóle nie docierała do strony; jedno polecenie na Windows używało dwóch nazw różniących się tylko wielkością litery, które Windows bierze za jedną.
- O 23:07 fundator zapytał, czy zostawić włączony mocniejszy komputer, a potem, o ile szybciej szłaby tam praca. Zostawił go na noc i wylogował własne konto. Sesja autorska przerobiła listę celowych zepsuć tak, żeby biegła po kilka naraz, i zmierzyła tę samą pracę na obu maszynach.
- Pomiar: lista 52 zepsuć zajęła 57 minut po kolei na małym komputerze pracowni (4 wątki procesora) i 6 minut na mocniejszym (24 wątki) przy 20 i więcej naraz, z tymi samymi 52 wykryciami na 52. Pełne testy zajęły 9,5 minuty na komputerze pracowni i 51 sekund na mocniejszym po podziale na 12 części. Średnio zajętych było 9–12 z 24 wątków; więcej części naraz zajmowało procesor mocniej i prawie nie skracało czasu.
- Przebiegi równoległe pokazały dwie rzeczy, których nie rozumiemy. Przy 16 i więcej częściach naraz jedna z części czasem traci wszystkie testy strony, bo przeglądarka testowa zgłasza, że jej okno zniknęło. I dwa razy w ciągu doby, w zwykłym przebiegu, przeglądarka testowa na Windows przez cały przebieg nie otworzyła strony próby. Sesja autorska najpierw napisała fundatorowi, że pierwsza rzecz to wyścig o port sieciowy; recenzent nazwał to przypuszczeniem, poprawka portu jej nie usunęła i sesja autorska wycofała to zdanie tej samej nocy.
- O 01:33 komputer pracowni przestał odpowiadać w sieci lokalnej. Przyczyna nie jest znana; ostatnie zatwierdzenie z tej nocy jest więc tylko na jednej maszynie.
- 16 listopada o 08:45 fundator zdecydował, wbrew radzie sesji autorskiej, żeby poczekać na następną widoczną funkcję, że przenosi próbę na mocniejszym komputerze na nowy stan, bo woli próbować aktualną wersję. O 08:57 zatwierdził kartę, która mówi, co ten stan chroni, a czego nie. Zapytał też, dlaczego odpowiedź miała w pierwszej linii godzinę sprzed sześciu godzin; ta linia jest przepisywana z zegara, który odzywa się tylko przy wiadomości, a odpowiedź dana w formularzu wiadomością nie jest. Zostało to zapisane dla sesji, która ten zegar prowadzi.

**Czego nie sprawdzono:** komputera, który naprawdę śpi z hasłem na ekranie; karty w tle, której budziki przeglądarka spowalnia; Safari; zapisania pobranej kopii przez przeglądarkę na Windows i otwarcia jej tam przez człowieka; tego, czy kłopot z przeglądarką widziany w testach może się zdarzyć człowiekowi w zwykłej przeglądarce; prawdziwej bramy i modelu; drugiej osoby używającej domu. Agenci nie mają dostępu do konta fundatora ani do jego próbnych kontenerów.

**Co to mówi o sposobie pracy:**

- Lista celowych zepsuć, która wykrywa wszystko, mówi, że testy widzą zepsucia z listy. Nie mówi, że zabezpieczenie, którego żaden test nie dotyka, jest zbędne. Zdanie recenzenta zostało w notatkach sesji.
- Przyczyna została nazwana, zanim przeglądarkę zapytano, co poszło źle. Narzędzie, które steruje przeglądarką, zapisuje teraz jej własną odpowiedź, a pierwsze zdanie zostało wycofane w ciągu godziny, w tym samym pliku, który dostał fundator.
- Granicą nie był mocniejszy komputer, tylko praca: jedno długie sprawdzenie wyznacza czas całej listy. Żeby wykorzystać więcej maszyny, trzeba inaczej pociąć pracę.
- Fundator wybrał inaczej, niż mu radzono, powiedział dlaczego, a powód jest zapisany jego słowami.

**Stan:** dom Suverii jest projektem w lokalnej próbie z atrapą. Przejrzany stan (6fc46a5) jest przygotowywany na mocniejszy komputer fundatora; jego drugi komputer zostaje na wcześniejszym stanie. Nic nie zostało wysłane na zewnątrz; repozytorium jest lokalne.
