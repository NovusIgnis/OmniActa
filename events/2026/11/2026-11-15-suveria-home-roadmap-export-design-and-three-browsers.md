---
id: 2026-11-15-suveria-home-roadmap-export-design-and-three-browsers
type: action
date: 2026-11-15 13:46
matters: suveria, way-of-working
parents: 2026-11-14-suveria-home-increment-17-four-reviews-in-one-day
by: founder, Claude (Fable 5.2), Codex (gpt-6-astra)
sources: Research/suveria-dom-2026-11-10/ (ROADMAPA-szkic-2026-11-15.md, otwarte-klocki/WNIOSKI.md, otwarte-klocki/SPRAWDZENIE.md, EKSPORT-projekt-2026-11-15.md, EKSPORT-projekt-2026-11-15.wersja-2.md, EKSPORT-PROSBA-DO-ASTRY.txt, EKSPORT-PROSBA-DO-ASTRY-2.txt, EKSPORT-PRZEGLAD-ASTRY.md, EKSPORT-PRZEGLAD-ASTRY-2.md, PRZED-BRAMA-lista-z-przegladow-4-13.md, narzedzia-przyrost-17/surowe/pelne-*.txt, narzedzia-przyrost-18/surowe/z18-*.txt, narzedzia-przyrost-18/surowe/przegladarka-*.txt); Suveria, branch dom-2026-11-10, commits b2a57be, 41584af, faf8411; conversation table, thread n-20261115-115932-eeefb551 (messages 20261115-120024-25224803, 20261115-120823-38562b3a, 20261115-121037-2c56e28a); events of the Programmer session of 2026-11-15
accuracy: exact
published: 2026-11-16
---

## EN

### Suveria: the founder asks for a roadmap and a brake; the export of the home is designed and reviewed before any code; the page tests now run in three browsers

**Goal:** put the home of Suveria (a local program with a page for notes, matters, routines, receipts and conversation, tried with a mock in place of a model) back in the order the whitepapers set, design the way a person takes their materials out of it, and widen the tests to Windows and to browsers of the Chromium family.

**What happened:**

- In the night and morning of 15 November the two small items left open by the last review of 14 November were corrected (state b2a57be). The tests passed twice on two computers of the agents: 447 of the trial, 182 of the container, 6 of the reception. Of 277 deliberate breakages of the conversation the tests caught 275, and the remaining two are the same as in earlier increments; of 48 breakages of the home they caught 48.
- The tests ran on Windows for the first time, with Firefox, on a separate account of the agents on the founder's stronger computer. On the state the founder is trying (e23cef4): 444 of the trial passed, 180 of the container passed and 2 were skipped (they test file permissions that Windows does not have), 5 of 6 of the reception passed. The sixth counted a sudden stop of the program by a code that exists only on Linux. After a correction of that count (41584af): 447, 180 and 2 skipped, 6.
- At 10:15 the founder wrote that the home may have jumped over what should come first, asked whether the home is in fact the OmniArca, described a minimal private container with add-ons a person installs, and asked for a roadmap that follows the whitepapers and for someone to slow him down when a new idea turns off the chosen road. In two forms (10:17 to 10:33) he chose: three layers (the container with the person, the screens as add-ons, Suveria as a service), the core before the add-ons, and as the next work a design of the export without code. A first draft of the roadmap in seven steps was written; it has not been discussed yet.
- At 10:52 he asked whether existing open projects could be used. Three helpers surveyed them in a few minutes; the author session checked fifteen of their claims at the primary sources, found all fifteen sound in substance, and left about a hundred rows unchecked and marked as such.
- The design of the export was written between 11:50 and 11:59: one button, one encrypted file in the open age format with a passphrase made by the program, and inside it the complete archive in the existing described format next to views in standard formats (calendar files for matters and routines, tables, plain text, the original files).
- Reading the sources for the design showed that today's export of the container refuses anything above about 4 MB, and that the calendar standard treats a month without a given day differently than the routines of the home do.
- Two minutes after sending the design to the reviewer the author session found its own error in it: it had repeated a sentence of the data contract (an hour that does not exist on the night the clocks go forward counts as 03:00) without checking the program, which counts 03:30. It corrected the design and told the reviewer. The reviewer confirmed the difference by running the function and recommended keeping the contract and correcting the program in a separate increment.
- The reviewer (Astra) answered at 12:08 and 12:10: it supported the layout and wrote that the design needs corrections before any code. Among them: "everything, without loss" was too broad a name for an archive that leaves out deleted entries; files take about 3.67 times their size in the package, not 2.3; the existing independent reader cannot read the bare archive; promises such as "never on disk" have to be narrowed to what the program does and checked while it runs. It also found a second difference in the program: the kiosk counts the hour of a routine in the zone of the home, not in the zone written in the routine. The author session checked three of the reviewer's claims at the source and corrected the design (version 3).
- Three questions of the design were put to the founder in a form. He left all three without a preference. The author session took its recommended answers as its own choice, open to change at his word.
- The tests of the page had run only in Firefox. A driver for browsers of the Chromium family first hung; the cause was a wait for the browser to close a connection that it keeps open. After the correction the same 228 tests of the page passed in Chromium 156 on Linux, in Brave 157 on Windows and, as a control, in Firefox (faf8411). The full tests of that state on Linux passed once: 447 of the trial, 182 of the container, 6 of the reception.

**Not checked:** no calendar file was loaded into any program; no package was encrypted or opened with age; the reviewer has not read the code changes of 15 November (b2a57be, 41584af, faf8411); a real gateway and model; a second person using the home. No program with a window that opens age files on Windows is known to the author session.

**What this shows about the way of working:**

- The design went to the reviewer before a line of code, as decided the day before. The reviewer needed eleven minutes and thirteen points of the design changed; none of them would have been cheaper to find in code.
- The author's error came from repeating a document instead of reading the program. The contract and the program had disagreed since the day before, when the hour of a routine entered the kiosk and nobody compared the new code with the contract.
- The founder asked to be slowed down. The roadmap is the tool for that: each new idea is set against it and against the whitepapers, and the decision stays his.

**State:** the home of Suveria is a project in a local trial; the founder's trial stays on the reviewed state e23cef4. The export from the page is a design, not code. The roadmap is a draft. Nothing was sent outside; the repository is local, with a second copy inside the local network.

## PL

### Suveria: fundator prosi o roadmapę i hamulec; eksport domu zaprojektowany i przejrzany przed kodem; testy strony biegną już w trzech przeglądarkach

**Cel:** ustawić dom Suverii (lokalny program ze stroną na notatki, sprawy, rutyny, paragony i rozmowę, próbowany z atrapą zamiast modelu) z powrotem w kolejności, którą wyznaczają whitepapery, zaprojektować drogę, którą człowiek zabiera z niego swoje materiały, i rozszerzyć testy na Windows i przeglądarki z rodziny Chromium.

**Co się wydarzyło:**

- W nocy i rano 15 listopada poprawione zostały dwie drobne pozycje, które zostawił otwarte ostatni przegląd z 14 listopada (stan b2a57be). Testy przeszły dwukrotnie na dwóch komputerach agentów: 447 próby, 182 kontenera, 6 odbioru. Z 277 celowych zepsuć rozmowy testy wykryły 275, a pozostałe dwa są te same co w poprzednich przyrostach; z 48 zepsuć domu wykryły 48.
- Testy pierwszy raz pobiegły na Windows, z Firefoksem, na osobnym koncie agentów na mocniejszym komputerze fundatora. Na stanie, który próbuje fundator (e23cef4): 444 testy próby przeszły, 180 testów kontenera przeszło i 2 zostały pominięte (sprawdzają uprawnienia plików, których Windows nie ma), 5 z 6 testów odbioru przeszło. Szósty liczył nagłe zatrzymanie programu po kodzie, który istnieje tylko na Linuksie. Po poprawce tego liczenia (41584af): 447, 180 i 2 pominięte, 6.
- O 10:15 fundator napisał, że dom mógł przeskoczyć to, co powinno być najpierw, zapytał, czy dom nie jest w istocie OmniArką, opisał minimalny prywatny kontener z dodatkami, które człowiek sam doinstalowuje, i poprosił o roadmapę zgodną z whitepaperami oraz o kogoś, kto go przystopuje, gdy nowy pomysł skręca z obranej drogi. W dwóch formularzach (10:17 do 10:33) wybrał: trzy warstwy (kontener u człowieka, ekrany jako dodatki, Suveria jako usługa), rdzeń przed dodatkami, a jako następną pracę projekt eksportu bez kodu. Powstał pierwszy szkic roadmapy w siedmiu krokach; nie był jeszcze omawiany.
- O 10:52 zapytał, czy nie da się skorzystać z istniejących otwartych projektów. Trzech pomocników przejrzało je w kilka minut; sesja autorska sprawdziła piętnaście ich twierdzeń w źródłach pierwotnych, wszystkie piętnaście okazały się zgodne co do istoty, a około stu wierszy zostało niesprawdzonych i tak oznaczonych.
- Projekt eksportu powstał między 11:50 a 11:59: jeden przycisk, jeden zaszyfrowany plik w otwartym formacie age z hasłem układanym przez program, a w środku pełne archiwum w istniejącym opisanym formacie obok widoków w formatach standardowych (pliki kalendarza dla spraw i rutyn, tabele, zwykły tekst, oryginalne pliki).
- Lektura źródeł do projektu pokazała, że dzisiejszy eksport kontenera odmawia wszystkiego powyżej około 4 MB i że standard kalendarza traktuje miesiąc bez danego dnia inaczej niż rutyny domu.
- Dwie minuty po wysłaniu projektu recenzentowi sesja autorska znalazła w nim własny błąd: powtórzyła zdanie kontraktu danych (godzina, której nie ma w noc przejścia na czas letni, liczy się jako 03:00) bez sprawdzenia programu, który liczy 03:30. Poprawiła projekt i napisała o tym recenzentowi. Recenzent potwierdził różnicę uruchomieniem funkcji i polecił zostawić kontrakt, a program poprawić w osobnym przyroście.
- Recenzent (Astra) odpowiedział o 12:08 i 12:10: poparł układ i napisał, że projekt wymaga poprawek przed kodem. Wśród nich: „wszystko, bez strat” było zbyt szeroką nazwą dla archiwum, które pomija wpisy usunięte; pliki zajmują w paczce około 3,67 swojego rozmiaru, nie 2,3; istniejący niezależny czytnik nie przeczyta samego archiwum; obietnice w rodzaju „nigdy na dysku” trzeba zawęzić do tego, co robi program, i sprawdzać w trakcie jego działania. Znalazł też drugą różnicę w programie: kiosk liczy godzinę rutyny w strefie domu, nie w strefie zapisanej w rutynie. Sesja autorska sprawdziła trzy twierdzenia recenzenta u źródła i poprawiła projekt (wersja 3).
- Trzy pytania z projektu trafiły do fundatora w formularzu. Wszystkie trzy zostawił bez preferencji. Sesja autorska przyjęła polecane przez siebie odpowiedzi jako własny wybór, do zmiany na jego słowo.
- Testy strony biegły dotąd tylko w Firefoksie. Sterownik dla przeglądarek z rodziny Chromium najpierw się zawiesił; przyczyną było czekanie, aż przeglądarka zamknie połączenie, które ona zostawia otwarte. Po poprawce te same 228 testów strony przeszło w Chromium 156 na Linuksie, w Brave 157 na Windows i, dla kontroli, w Firefoksie (faf8411). Pełne testy tego stanu na Linuksie przeszły w jednym przebiegu: 447 próby, 182 kontenera, 6 odbioru.

**Czego nie sprawdzono:** żaden plik kalendarza nie został wczytany do żadnego programu; żadna paczka nie została zaszyfrowana ani otwarta programem age; recenzent nie czytał zmian kodu z 15 listopada (b2a57be, 41584af, faf8411); prawdziwa brama i model; druga osoba używająca domu. Sesja autorska nie zna programu z oknem, który na Windows otwiera pliki age.

**Co to mówi o sposobie pracy:**

- Projekt poszedł do recenzenta przed pierwszym wierszem kodu, tak jak ustalono dzień wcześniej. Recenzent potrzebował jedenastu minut i w projekcie zmieniło się trzynaście punktów; żadnego z nich nie byłoby taniej znaleźć w kodzie.
- Błąd autora wziął się z powtórzenia dokumentu zamiast przeczytania programu. Kontrakt i program różniły się od poprzedniego dnia, gdy godzina rutyny weszła do kiosku i nikt nie porównał nowego kodu z kontraktem.
- Fundator poprosił, żeby go przystopować. Służy do tego roadmapa: każdy nowy pomysł jest zestawiany z nią i z whitepaperami, a decyzja zostaje jego.

**Stan:** dom Suverii jest projektem w lokalnej próbie; próba fundatora zostaje na przejrzanym stanie e23cef4. Eksport ze strony jest projektem, nie kodem. Roadmapa jest szkicem. Nic nie zostało wysłane na zewnątrz; repozytorium jest lokalne, z drugą kopią w sieci lokalnej.
