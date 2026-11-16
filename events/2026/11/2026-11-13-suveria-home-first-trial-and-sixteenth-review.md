---
id: 2026-11-13-suveria-home-first-trial-and-sixteenth-review
type: action
date: 2026-11-13 13:57
matters: suveria, way-of-working
parents: 2026-11-13-suveria-home-fifteenth-review
by: founder, Claude (Fable 5.2), Codex (gpt-6-astra)
sources: Research/suveria-dom-2026-11-10/ (PRZYROST-16-PROSBA-DO-ASTRY.txt, PRZYROST-16-wynik.txt, PRZYROST-16-zepsucia.txt, PRZYROST-16-odtworzenie-na-c9df491.txt, PRZYROST-16-testy-po-zatwierdzeniu.txt, B-dom-c9df491-04f9396.diff, C-sumy-04f9396.txt, PRZYROST-16-PRZEGLAD-ASTRY.md, PRZED-BRAMA-lista-z-przegladow-4-13.md, proba-domu/UWAGI-Z-PROBY.md, proba-domu/KARTA-atrapa.pl.txt); Suveria, branch dom-2026-11-10, commits from c9df491 to 04f9396; conversation table, thread n-20261113-081855-888324d7, messages 20261113-134617-784227db, 20261113-135708-32ba1cec; Claude/pamiec/zdarzenia/2026-11-13/ (084907988402-programista-216c, 085542352532-programista-f4a6, 090907596730-sprzet-f5e2); Claude/pamiec/sesje/programista.md (13.11.2026)
accuracy: exact
published: 2026-11-16
---

## EN

### Suveria: the home runs for the first time outside the tests, on Windows with a mock model; the sixteenth review keeps the local trial and names what is still open

**Goal:** let the founder try the home of Suveria (a local program with a page for notes, matters, routines, receipts and conversation) for the first time, on trial materials and with a mock in place of a model, and in parallel correct the two findings of the fifteenth review and have the corrections read by a second model.

**What happened:**

- On 13 November at 08:49 the founder decided that the trial uses the reviewed state c9df491 as it is, within the limits set by the review: a new folder, trial materials only, one device, one program, one browser tab, the mock, no real gateway, no synchronisation and no import. He approved the wording of the protection card shown on the page; it says that there is no model in this trial and names the two known faults of this state.
- At about 09:08 he decided to run the trial on his own computer with Windows, because the agents' computer could not be reached from where he was. Nobody had run this code on Windows before. No agent has access to that computer, and nobody opens the container of the trial.
- Three things surfaced before the page started. The instructions installed a library in a place that the program, started in isolated mode, does not see; this was caught by reading before the founder began. The first run of the tests stopped because Windows has no database of time zones and the list of requirements did not name the package that provides one. After that, 377 tests ran without a browser: two failed, one could not run, 186 were skipped. The one that could not run calls a tool that was not installed and that the program does not use. The two that failed concern how long the page server waits for a client that does not close its connection.
- At 09:34 the page was running in mock mode with the protection card in its footer. The founder received a plan of trials; four of its steps did not match the program and were corrected from the code.
- Increment 16 (four commits from c9df491 to 04f9396, 08:35 to 13:46) corrects both findings of the fifteenth review. When an exchange is dropped, the program now says which of its turns it had stored, so the page no longer hides a stored question. The answer the program keeps for a question now follows a later save of its exchange, so a reloaded page no longer says that the question is not in the container. Tests on the final state: 388 of the trial (186 in Firefox), 182 of the container, 6 of the reception, all passed twice. Of 242 deliberate breakages the tests caught 240; the remaining two are the same as before and do not change what a person can read.
- The sixteenth review by Astra (13:57, in under eleven minutes) confirmed the 388 tests and the file sums, ran ten browser probes of its own and upheld the recommendation of a local trial with the mock, now for 04f9396. It found the reported cases of both earlier findings corrected.

**What the review left open, all of low weight and before a real gateway:**

- The program itself may not know whether a save took effect: after one kind of disk fault a record is in the file and the program still counts it as not stored. A drop then hides the question, as before. The program has to tell apart "certainly not stored" from "outcome unknown".
- If the program answered a drop without the new field, the page would treat the request as undone. A healthy pair of page and program does not do that; the reviewer called the choice not cautious. The author had listed it among decisions to assess.
- One sentence after a reload says that an exchange is stored when only its question is.
- Windows: the author's explanation of the two failed tests is probable and not confirmed, because the reviewer has only Linux. Leaving out the suspected call reproduces both failures in the same lines. The reviewer corrected one inference of the author as going further than the two failures show. Acceptance on Windows is not passed.

**Not checked:** a real gateway and model, a browser other than Firefox in the tests, two tabs, a physical loss of connection. The founder's remarks from using the home had not yet arrived when this entry was written.

**What this shows about the way of working:** a first run on a different system found within half an hour three things that 377 tests on one system could not: a missing requirement, a test that depends on a tool, and a behaviour of the server that differs between systems. The author's list of requirements named one library where two were needed. In the review, the choice that the author had written down as a decision to assess was again the one the reviewer faulted.

**State:** the home of Suveria is a project in a local trial version. One trial installation exists, on the founder's computer, with the mock and trial materials. Nothing was sent outside; the repository is local. The open items and the findings from Windows go to increment 17, which will not reach the trial without a review.

## PL

### Suveria: dom po raz pierwszy działa poza testami, na Windows z atrapą modelu; szesnasty przegląd podtrzymuje lokalną próbę i nazywa to, co zostaje otwarte

**Cel:** dać fundatorowi po raz pierwszy wypróbować dom Suverii (lokalny program ze stroną na notatki, sprawy, rutyny, paragony i rozmowę) na materiałach próbnych i z atrapą zamiast modelu, a równolegle poprawić dwie uwagi piętnastego przeglądu i dać poprawki do przeczytania drugiemu modelowi.

**Co się wydarzyło:**

- 13 listopada o 08:49 fundator zdecydował, że próba idzie na przejrzanym stanie c9df491 bez zmian, w granicach z przeglądu: nowy folder, tylko materiały próbne, jedno urządzenie, jeden program, jedna karta przeglądarki, atrapa, bez rzeczywistej bramy, synchronizacji i importu. Zatwierdził brzmienie karty ochrony pokazywanej na stronie; karta mówi, że w tej próbie nie ma modelu, i wymienia dwa znane błędy tego stanu.
- Około 09:08 zdecydował, że próba pójdzie na jego własnym komputerze z Windows, bo komputer agentów nie był osiągalny z miejsca, w którym był. Tego kodu nikt wcześniej nie uruchamiał na Windows. Żaden agent nie ma dostępu do tamtego komputera i nikt nie otwiera kontenera próby.
- Zanim strona wystartowała, wyszły trzy rzeczy. Instrukcja instalowała bibliotekę w miejscu, którego program uruchamiany w trybie izolowanym nie widzi; wychwycono to czytaniem, zanim fundator zaczął. Pierwszy przebieg testów zatrzymał się, bo Windows nie ma bazy stref czasowych, a lista wymagań nie wymieniała pakietu, który ją daje. Potem przeszło 377 testów bez przeglądarki: dwa nie przeszły, jeden nie mógł się wykonać, 186 pominięto. Ten, który nie mógł się wykonać, woła narzędzie, którego tam nie było i którego program nie używa. Dwa, które nie przeszły, dotyczą tego, jak długo serwer strony czeka na klienta, który nie zamyka połączenia.
- O 09:34 strona działała w trybie atrapy, z kartą ochrony w stopce. Fundator dostał plan prób; cztery jego kroki nie zgadzały się z programem i zostały poprawione na podstawie kodu.
- Przyrost 16 (cztery zatwierdzenia od c9df491 do 04f9396, 08:35 do 13:46) poprawia obie uwagi piętnastego przeglądu. Przy porzuceniu wymiany program mówi teraz, które jej wypowiedzi miał zapisane, więc strona nie chowa już zapisanego pytania. Odpowiedź, którą program pamięta dla pytania, nadąża teraz za późniejszym zapisem jej wymiany, więc przeładowana strona nie mówi już, że pytania nie ma w kontenerze. Testy na stanie końcowym: 388 próby (186 w Firefoksie), 182 kontenera, 6 odbioru, wszystkie przeszły dwukrotnie. Z 242 celowych zepsuć testy wykryły 240; pozostałe dwa są te same co wcześniej i nie zmieniają tego, co osoba może przeczytać.
- Szesnasty przegląd Astry (13:57, w niecałe jedenaście minut) potwierdził 388 testów i sumy plików, wykonał dziesięć własnych sond w przeglądarce i podtrzymał rekomendację lokalnej próby z atrapą, teraz dla 04f9396. Zgłoszone przypadki obu wcześniejszych uwag uznał za poprawione.

**Co przegląd zostawił otwarte, wszystko niskiej wagi i przed rzeczywistą bramą:**

- Sam program może nie wiedzieć, czy zapis się dokonał: po jednym rodzaju awarii dysku rekord jest w pliku, a program nadal liczy go jako niezapisany. Porzucenie chowa wtedy pytanie, jak przedtem. Program musi odróżniać „na pewno niezapisane” od „skutek nieznany”.
- Gdyby program odpowiedział na porzucenie bez nowego pola, strona uznałaby prośbę za niewykonaną. Zdrowa para strony i programu tego nie robi; recenzent nazwał ten wybór nieostrożnym. Autor wymienił go wśród decyzji do oceny.
- Jedno zdanie po przeładowaniu mówi, że wymiana jest zapisana, gdy zapisane jest tylko jej pytanie.
- Windows: wyjaśnienie autora dla dwóch testów, które nie przeszły, jest prawdopodobne i niepotwierdzone, bo recenzent ma tylko Linux. Pominięcie podejrzanego wywołania odtwarza obie porażki w tych samych wierszach. Jeden wniosek autora recenzent poprawił jako idący dalej, niż pokazują te dwa testy. Odbiór na Windows nie jest zaliczony.

**Nie sprawdzono:** rzeczywistej bramy i modelu, innej przeglądarki niż Firefox w testach, dwóch kart, fizycznego zerwania połączenia. Uwagi fundatora z używania domu nie dotarły jeszcze, gdy powstawał ten wpis.

**Co to mówi o sposobie pracy:** pierwsze uruchomienie na innym systemie znalazło w pół godziny trzy rzeczy, których 377 testów na jednym systemie znaleźć nie mogło: brakujące wymaganie, test zależny od narzędzia i zachowanie serwera różne między systemami. Lista wymagań autora wymieniała jedną bibliotekę tam, gdzie potrzebne były dwie. W przeglądzie recenzent znów zakwestionował ten wybór, który autor sam zapisał jako decyzję do oceny.

**Stan:** dom Suverii to projekt w lokalnej wersji próbnej. Istnieje jedna instalacja próbna, na komputerze fundatora, z atrapą i materiałami próbnymi. Niczego nie wysłano na zewnątrz; repozytorium jest lokalne. Otwarte pozycje i ustalenia z Windows idą do przyrostu 17, który nie trafi do próby bez przeglądu.
