---
id: 2026-11-15-suveria-home-export-written-read-three-times-and-joined-to-the-trial
type: action
date: 2026-11-15 17:46
matters: suveria, way-of-working
parents: 2026-11-15-suveria-home-roadmap-export-design-and-three-browsers
by: founder, Claude (Fable 5.2), Codex (gpt-6-astra)
sources: Research/suveria-dom-2026-11-10/ (EKSPORT-projekt-2026-11-15.md point 11, EKSPORT-PRZEGLAD-ASTRY-3.md, PRZEGLAD-19a-ASTRY.md, PRZEGLAD-19a-ASTRY-2a.md, PRZEGLAD-19a-ASTRY-2b.md, PRZEGLAD-19a-ASTRY-3.md, EKSPORT-PROSBA-DO-ASTRY-3.txt to -6.txt, PRZED-BRAMA-lista-z-przegladow-4-13.md section N, naiwny-czytelnik/przyrost-19/WYNIK.md, proba-domu/KARTA-atrapa-7a7bce3.pl.txt, proba-domu/CO-SPRAWDZIC-7a7bce3.md, narzedzia-przyrost-19/zepsucia19.py, narzedzia-przyrost-19/surowe/*.txt); Suveria, branch dom-2026-11-10, commits 776534d, 7a7bce3, 657cdd5; conversation table, messages 20261115-141511-ddcf391f, 20261115-160628-4d8e7a68, 20261115-162010-dff9eef4, 20261115-162033-de27c8e5, 20261115-163243-81d21782; events of the Programmer session of 2026-11-15
accuracy: exact
published: 2026-11-16
---

## EN

### Suveria: the export of the home is written, read three times by the reviewer and joined to the founder's trial on one computer

**Goal:** give a person of the home of Suveria (a local program with a page for notes, matters, routines, receipts and conversation, tried with a mock in place of a model) a way to take everything the home keeps out of it as one encrypted file that programs the foundation did not write can open.

**What happened:**

- Between 13:49 and 13:50 the founder chose in a form: the draft of the roadmap becomes the working plan; the container with the person and the add-ons on it get their place in the whitepaper of Suveria, in a wording still to be shown to him; the code of the export may start, with a review before any trial.
- Before the first line of the export the author session measured the one library with ready builds for the chosen file format (age). It sets the cost of the passphrase by timing the machine: on both computers measured it wrote 19 or 20, by chance on the same machine, which is 512 MiB or 1 GiB of memory at every opening, and one of the three reading programs refuses files from 21 on. With these numbers the reviewer (Astra) recommended writing the format in the program itself, at one fixed cost of 18, the one the age program writes, and reviewing that code as cryptographic code. It found no error in the prototype.
- The export was written between about 14:00 and 15:49 (state 776534d). A person presses one button on the page. The program makes one copy of everything the home keeps, closes it with a passphrase of 25 signs that it makes itself, shows the passphrase once, asks for it to be typed back whole, and only then gives the file to the browser. The copy waits in the memory of the program for at most ten minutes. Inside are the complete archive in the described format, the notes and conversations as plain text, receipts and done routines as tables, the original files, a list of what was left out and why, and a description in Polish and English. Calendar files are not there yet.
- The file written by the program equals the published test vector of the format byte for byte, and three programs the foundation did not write (age, rage, typage) opened it in the tests.
- The system calls of the running program were traced on Linux: 26 file writes before the export (the container), none during the two windows of the export. The same content gave the same package, before it is encrypted, on three machines.
- Writing the export showed a limit nobody had written down: the whole state of a device is one object of at most 4 MiB, and a home accepted about 560 KiB of content and then refused. The trial home holds about half a megabyte. The page does not say how much room is left. This stays open before a wider pilot.
- The author session found a second error of its own in the design: it had written that the home keeps photographs of receipts. The home keeps only the text read from them.
- On Windows one write in the tests was once refused by the system ("Access is denied"). Eight repetitions passed and the cause is not known. It is written on the list of open items and on the card of the trial.
- A small model that knows nothing about the project read six situations of the new screen. Wordings changed in all six after it: among others, the button that starts the copy is now called "Make a copy" ("Zrób kopię"), and a sentence says that nothing in the home changes or disappears. The model did not read the corrected wordings a second time.
- The reviewer read the code three times, at 16:06, 16:20 and 16:32. The first reading asked for three corrections: a cell of a table could be taken for a formula when it began with spaces; a late answer of the program could bring the download button back after the person had given the copy up; the ten minutes ended only at the next request. The second reading accepted these and found three new things in the corrected code. The third closed them and recommended joining the export to the founder's controlled trial within the same limits as before: a new folder, trial materials only, one program, one tab, the mock.
- The reviewer checked a real download in Firefox on Linux and wrote the change of the independent reader that lets it read the opened archive. The author session applied that change as it came and does not change the reader itself, so that the reader stays independent of the author of the export.
- The full tests of the reviewed state (7a7bce3) passed between 16:28 and 16:37 on two computers of the agents. Linux: 519 of the trial with none skipped, 182 of the container, 27 of the reader, 6 of the reception, 11 of the export in Chromium. Windows: 519 of the trial with 4 skipped (two of the three reading programs are not installed there), 180 of the container and 2 skipped, 6 of the reception, 11 of the export in Brave, 27 of the reader.
- Of 126 deliberate breakages of the export the tests caught 124. One of the two left was a gap of the list: the test that guards it lies in a file the list did not run. The other was a gap of a test: after the program is closed, a new copy began to be built for nothing, though it ended in the same refusal. The test was completed (657cdd5, the test only) and both are caught now.
- While clearing up after an interrupted run the author session stopped processes by a pattern of their names, against its own rule to stop them only by number. Only its own test processes on the workshop computer were hit.
- Between 16:41 and 16:56 the founder chose in a form: the trial moves to the new state on one of his two computers and stays on the earlier state (e23cef4) on the other; he approved the card that says what this state protects and what it does not; the age program is to be installed together with the package. The hardware session prepares the package.

**Not checked:** the saving of the downloaded file by a browser on Windows; the opening of the package on Windows with the age program; any program with a window for opening age files; tables in programs other than LibreOffice Calc; a real gateway and model; a second person using the home. Nobody but the founder has used the home. Agents have no access to his trial computers and do not open the trial containers.

**What this shows about the way of working:**

- The measurement came before the choice. A library that sets the cost by chance would have produced files that open on one computer and are refused on another, and the first to find out would have been a person with a copy they could not open.
- Each reading of the reviewer found something in what the reading before had caused to be changed. A correction is new code and is read again.
- After three readings the list of deliberate breakages still found a test that did not guard what it was written to guard.

**State:** the home of Suveria is a project in a local trial. The export works in the tests of the agents and goes to the founder's trial with the mock; it has not been used by a person yet. Nothing was sent outside; the repository is local, with a second copy inside the local network.

## PL

### Suveria: eksport domu napisany, trzy razy przeczytany przez recenzenta i dołączony do próby fundatora na jednym komputerze

**Cel:** dać osobie w domu Suverii (lokalny program ze stroną na notatki, sprawy, rutyny, paragony i rozmowę, próbowany z atrapą zamiast modelu) drogę, którą zabiera wszystko, co dom przechowuje, jako jeden zaszyfrowany plik, który otwierają programy nienapisane przez fundację.

**Co się wydarzyło:**

- Między 13:49 a 13:50 fundator wybrał w formularzu: szkic roadmapy staje się planem roboczym; kontener u człowieka i dodatki na nim dostają miejsce w whitepaperze Suverii, w brzmieniu, które dopiero zostanie mu pokazane; kod eksportu może ruszyć, z przeglądem przed jakąkolwiek próbą.
- Przed pierwszym wierszem eksportu sesja autorska zmierzyła jedyną bibliotekę z gotowymi wydaniami dla wybranego formatu pliku (age). Ustawia ona koszt hasła, mierząc czas na danej maszynie: na obu zmierzonych komputerach zapisała 19 albo 20, losowo na tej samej maszynie, co oznacza 512 MiB albo 1 GiB pamięci przy każdym otwarciu, a jeden z trzech programów czytających odmawia plików od 21 wzwyż. Z tymi liczbami recenzent (Astra) polecił zapisać format w samym programie, z jednym stałym kosztem 18, takim, jaki zapisuje program age, i przejrzeć ten kod jako kod kryptograficzny. W prototypie nie znalazł błędu.
- Eksport powstał między około 14:00 a 15:49 (stan 776534d). Człowiek naciska na stronie jeden przycisk. Program robi jedną kopię wszystkiego, co dom przechowuje, zamyka ją hasłem z 25 znaków, które sam układa, pokazuje hasło raz, prosi o przepisanie go w całości i dopiero wtedy oddaje plik przeglądarce. Kopia czeka w pamięci programu najwyżej dziesięć minut. W środku są: pełne archiwum w opisanym formacie, notatki i rozmowy jako zwykły tekst, paragony i wykonane rutyny jako tabele, oryginalne pliki, lista tego, co zostało pominięte i dlaczego, oraz opis po polsku i angielsku. Plików kalendarza jeszcze nie ma.
- Plik zapisany przez program zgadza się co do bajta z opublikowanym wektorem testowym formatu, a w testach otworzyły go trzy programy nienapisane przez fundację (age, rage, typage).
- Wywołania systemowe działającego programu zostały prześledzone na Linuksie: 26 zapisów do plików przed eksportem (kontener), żadnego w obu oknach eksportu. Ta sama treść dała na trzech maszynach ten sam pakiet przed zaszyfrowaniem.
- Pisanie eksportu pokazało granicę, której nikt wcześniej nie zapisał: cały stan urządzenia to jeden obiekt najwyżej 4 MiB, a dom przyjął około 560 KiB treści i odmówił dalszego zapisu. Dom próbny mieści około pół megabajta. Strona nie mówi, ile miejsca zostało. To zostaje otwarte przed szerszym pilotażem.
- Sesja autorska znalazła w projekcie drugi własny błąd: napisała, że dom przechowuje zdjęcia paragonów. Dom przechowuje tylko odczytany z nich tekst.
- Na Windows jeden zapis w testach dostał raz odmowę systemu („Access is denied”). Osiem powtórek przeszło, a przyczyna nie jest znana. Jest to zapisane na liście otwartych pozycji i na karcie próby.
- Mały model, który nic nie wie o projekcie, przeczytał sześć sytuacji z nowego ekranu. Po jego lekturze zmieniły się brzmienia we wszystkich sześciu: między innymi przycisk, który zaczyna kopię, nazywa się teraz „Zrób kopię”, a osobne zdanie mówi, że w domu nic się przy tym nie zmienia i nic z niego nie znika. Poprawionych brzmień model nie czytał drugi raz.
- Recenzent czytał kod trzy razy: o 16:06, 16:20 i 16:32. Pierwsze czytanie wymagało trzech poprawek: komórka tabeli zaczynająca się od spacji mogła zostać wzięta za formułę; spóźniona odpowiedź programu mogła przywrócić przycisk pobrania po tym, jak człowiek zrezygnował z kopii; dziesięć minut kończyło się dopiero przy następnym żądaniu. Drugie czytanie przyjęło te poprawki i znalazło trzy nowe rzeczy w poprawionym kodzie. Trzecie je zamknęło i poleciło dołączyć eksport do kontrolowanej próby fundatora w tych samych granicach co dotąd: nowy folder, tylko materiały próbne, jeden program, jedna karta, atrapa.
- Recenzent sprawdził prawdziwe pobranie w Firefoksie na Linuksie i napisał zmianę niezależnego czytnika, dzięki której czyta on otwarte archiwum. Sesja autorska nałożyła tę zmianę bez poprawek i sama czytnika nie zmienia, żeby pozostał niezależny od autora eksportu.
- Pełne testy przejrzanego stanu (7a7bce3) przeszły między 16:28 a 16:37 na dwóch komputerach agentów. Linux: 519 testów próby bez pominięć, 182 kontenera, 27 czytnika, 6 odbioru, 11 testów eksportu w Chromium. Windows: 519 testów próby, w tym 4 pominięte (dwa z trzech programów czytających nie są tam zainstalowane), 180 kontenera i 2 pominięte, 6 odbioru, 11 testów eksportu w Brave, 27 czytnika.
- Ze 126 celowych zepsuć eksportu testy wykryły 124. Jedno z dwóch pozostałych było luką listy: test, który tego pilnuje, leży w pliku, którego lista nie uruchamiała. Drugie było luką testu: po zamknięciu programu nowa kopia zaczynała się niepotrzebnie budować, choć kończyła się tą samą odmową. Test został uzupełniony (657cdd5, sam test) i oba zepsucia są teraz wykrywane.
- Przy sprzątaniu po przerwanym przebiegu sesja autorska zatrzymała procesy po wzorcu nazwy, wbrew własnej zasadzie, że zatrzymuje je tylko po numerze. Trafione zostały wyłącznie jej własne procesy testów na komputerze pracowni.
- Między 16:41 a 16:56 fundator wybrał w formularzu: próba przechodzi na nowy stan na jednym z jego dwóch komputerów, a na drugim zostaje na stanie wcześniejszym (e23cef4); zatwierdził kartę, która mówi, co ten stan chroni, a czego nie; program age ma zostać zainstalowany razem z paczką. Paczkę przygotowuje sesja sprzętowa.

**Czego nie sprawdzono:** zapisania pobranego pliku przez przeglądarkę na Windows; otwarcia pakietu na Windows programem age; żadnego programu z oknem do otwierania plików age; tabel w programach innych niż LibreOffice Calc; prawdziwej bramy i modelu; drugiej osoby używającej domu. Domu nie używał nikt poza fundatorem. Agenci nie mają dostępu do jego komputerów próbnych i nie otwierają próbnych kontenerów.

**Co to mówi o sposobie pracy:**

- Pomiar był przed wyborem. Biblioteka, która ustawia koszt losowo, dałaby pliki, które na jednym komputerze się otwierają, a na innym dostają odmowę, i pierwszy dowiedziałby się o tym człowiek z kopią, której nie może otworzyć.
- Każde czytanie recenzenta znalazło coś w tym, co zostało zmienione po poprzednim czytaniu. Poprawka jest nowym kodem i czyta się ją jeszcze raz.
- Po trzech czytaniach lista celowych zepsuć nadal znalazła test, który nie pilnował tego, do czego został napisany.

**Stan:** dom Suverii jest projektem w lokalnej próbie. Eksport działa w testach agentów i idzie do próby fundatora z atrapą; człowiek jeszcze go nie używał. Nic nie zostało wysłane na zewnątrz; repozytorium jest lokalne, z drugą kopią w sieci lokalnej.
