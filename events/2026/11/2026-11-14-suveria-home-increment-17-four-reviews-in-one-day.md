---
id: 2026-11-14-suveria-home-increment-17-four-reviews-in-one-day
type: action
date: 2026-11-14 21:43
matters: suveria, way-of-working
parents: 2026-11-13-suveria-home-first-trial-and-sixteenth-review
by: founder, Claude (Fable 5.2), Codex (gpt-6-astra)
sources: Research/suveria-dom-2026-11-10/ (proba-domu/UWAGI-MARCINA-2026-11-14.md, PRZYROST-17-A1-PRZEGLAD-ASTRY.md, PRZYROST-17-A2-PROSBA-DO-ASTRY.txt, PRZYROST-17-A2-PRZEGLAD-ASTRY.md, PRZYROST-17-A3-PROSBA-DO-ASTRY.txt, PRZYROST-17-A3-PRZEGLAD-ASTRY.md, PRZYROST-17-A4-PROSBA-DO-ASTRY.txt, PRZYROST-17-A4-testy-i-zepsucia.txt, PRZYROST-17-A4-PRZEGLAD-ASTRY.md, B-dom-d589f90-e23cef4.diff, C-sumy-e23cef4.txt, PRZED-BRAMA-lista-z-przegladow-4-13.md, proba-domu/CO-SPRAWDZIC-e23cef4.md, proba-domu/KARTA-atrapa-e23cef4.pl.txt); Suveria, branch dom-2026-11-10, commits from 04f9396 to e23cef4; conversation table, threads n-20261113-081855-888324d7 (messages 20261114-153606-ede02270, 20261114-174035-36fa9105) and n-20261114-191511-4c90cf07 (messages 20261114-192233-95eb1a1b, 20261114-213703-4b64ee59); Claude/pamiec/zdarzenia/2026-11-14/ (195013237120-programista-092a, 200814261325-programista-5297, 200848702374-programista-00d5, 213931861080-programista-6927, 214320673936-programista-36c6); Research/agenci/stol-kompetencje.md; Claude/pamiec/sesje/programista.md (14.11.2026)
accuracy: exact
published: 2026-11-16
---

## EN

### Suveria: the founder's first remarks become increment 17 of the home; four reviews in one day each find something, and the trial goes on to a second version

**Goal:** turn the founder's remarks from his first use of the home of Suveria (a local program with a page for notes, matters, routines, receipts and conversation, tried with a mock in place of a model) into corrected code, have every step read by a second model, and give him a new version to try on his two computers.

**What happened:**

- On 14 November before noon the founder dictated his remarks from the trial: eight things that worked differently than described, nine about look and handling, nine new functions and five questions. His general rule was "one thing at a time": too many buttons and descriptions on one screen. He had run the trial on two of his computers, where the limits of the trial spoke of one. Asked what to do first, he chose everything at once.
- Increment 17 took seven commits between 14:13 and 19:49. The text of the page was first split into separate files without changing a byte of what the browser receives. Then came the corrections: line breaks are kept, a collection can be created, a link between two entries can be ended, the words of an entry can be corrected, later deadlines are shown, the kiosk asks about a routine only from its hour, Enter sends, and after a reload the same conversation is on the screen. The four open items of the sixteenth review were taken up in the same increment; the one about Windows is a correction for a probable cause that nobody has confirmed. What changes the layout of the screens (one plan of the day, the inbox joined with the matters, a wizard, drag and drop) was left for the next stage.
- Astra reviewed the work four times that day (15:36, 17:40, 19:22, 21:37), each time in under 13 minutes; in the last three it ran 8 to 11 probes of its own in a browser. Each review upheld the controlled trial of the state it was given, and each of the first three found faults of middle weight:
  - first: a hidden field of the routine form was sent although the person could not see it; a late click on "Odłącz" ended a link made anew; what a person was writing in the new editor vanished when the page read the data again;
  - second: the editor could write over a change the person had not seen, and an entry shown in two places had two fields with different words and one draft;
  - third: words added in the moment between a confirmed save and the redrawing of the list were lost while the page said that the entry was changed.
- The fourth review closed the third fault and found no obstacle to the trial of the final state e23cef4. Two small items stay open for the next increment; both need a deliberately damaged answer of the program or an unusual order of clicks, and in neither is text lost.
- Tests on the final state: 444 of the trial (225 in Firefox), 182 of the container, 6 of the reception, all passed twice. Of 47 deliberate breakages of the home corrections the tests caught 47; of 275 breakages of the conversation they caught 273, and the remaining two are the same as in earlier increments.
- The author's tool for deliberate breakages was itself faulted three times by the reviewer: it could count a breakage as caught when no test had run, it checked the unchanged code only for the narrow set of tests, and it reused an old clean copy without checking that it matched the source. All three were corrected. In the last run one of four parallel parts stopped because the browser did not start; the tool reported this as a failure to run, not as a breakage caught, and the missing sixteen breakages were run separately.
- At 21:39 a new package from e23cef4 was requested for both of the founder's computers, each with its own container. At 21:43 the founder approved a new wording of the protection card shown on the page; it says that nobody ran this state on Windows or in Brave before this trial.

**Not checked:** Windows and Brave (nothing of increment 17 ran there before the trial), a real gateway and model, two devices on one container, a second person using the home.

**What this shows about the way of working:**

- Three reviews in a row found a fault in the same new editor, each time in a place the author's tests did not look at. The author's requests listed his own weak points every time, and the reviewer still found something else. From now on the author gives the reviewer the design of a change in such places before writing the code.
- The author session had written "not checked on Windows" in every request for two days and never asked the founder for a computer with Windows. The founder offered one himself and asked why the question had not reached him. The session now raises a missing resource as a need the second time it limits what can be checked.
- Asked by the founder, the author session said that it had built the home for three days without reading the manifest or the whitepapers. The founder decided that every session begins with reading them, making its own notes and talking them over with him.
- Running the whole list of breakages takes about 75 minutes on the shared computer of the agents and once failed for what is probably lack of memory. The founder decided that the session gets its own computer and an account of its own on his stronger computer, separate from his account and from the container of his trial.

**State:** the home of Suveria is a project in a local trial version; the second version of the trial is prepared and not yet installed. Nothing was sent outside; the repository is local. The founder decided that the code gets a second local copy now and becomes public later, and that the step of making it public belongs to the agents. The author session set its own conditions for that step: a review of the whole history, an honest description of the state, a passed trial on Windows and in Brave, and the reviewer's recommendation. The layout of the screens is being designed in a separate thread on mock-ups, outside the repository.

## PL

### Suveria: pierwsze uwagi fundatora stają się przyrostem 17 domu; cztery przeglądy jednego dnia, każdy coś znajduje, a próba idzie dalej na drugiej wersji

**Cel:** zamienić uwagi fundatora z pierwszego używania domu Suverii (lokalny program ze stroną na notatki, sprawy, rutyny, paragony i rozmowę, próbowany z atrapą zamiast modelu) na poprawiony kod, dać każdy krok do przeczytania drugiemu modelowi i przekazać mu nową wersję do próby na dwóch jego komputerach.

**Co się wydarzyło:**

- 14 listopada przed południem fundator podyktował uwagi z próby: osiem rzeczy, które działały inaczej, niż opisano, dziewięć o wyglądzie i obsłudze, dziewięć nowych funkcji i pięć pytań. Jego zasada ogólna to „jedna rzecz naraz”: za dużo przycisków i opisów na jednym ekranie. Próbę prowadził na dwóch swoich komputerach, a granice próby mówiły o jednym. Zapytany, od czego zacząć, wybrał wszystko naraz.
- Przyrost 17 to siedem zatwierdzeń między 14:13 a 19:49. Najpierw tekst strony został podzielony na osobne pliki bez zmiany choćby bajtu tego, co dostaje przeglądarka. Potem poprawki: podział linii jest zachowany, można założyć zbiór, połączenie dwóch wpisów można zakończyć, słowa wpisu można poprawić, późniejsze terminy są widoczne, kiosk pyta o rutynę dopiero od jej godziny, Enter wysyła, a po przeładowaniu na ekranie jest ta sama rozmowa. W tym samym przyroście podjęte zostały cztery otwarte pozycje szesnastego przeglądu; ta o Windows jest poprawką do prawdopodobnej przyczyny, której nikt nie potwierdził. To, co zmienia układ ekranów (jeden plan dnia, skrzynka połączona ze sprawami, kreator, przeciąganie), zostało na następny etap.
- Astra przeglądała tę pracę cztery razy tego dnia (15:36, 17:40, 19:22, 21:37), za każdym razem w mniej niż 13 minut; w trzech ostatnich wykonała po 8 do 11 własnych sond w przeglądarce. Każdy przegląd podtrzymał kontrolowaną próbę stanu, który dostał, a każdy z pierwszych trzech znalazł błędy średniej wagi:
  - pierwszy: ukryte pole formularza rutyny było wysyłane, choć osoba go nie widziała; spóźnione kliknięcie „Odłącz” kończyło połączenie zrobione na nowo; to, co osoba pisała w nowym edytorze, znikało, gdy strona czytała dane ponownie;
  - drugi: edytor mógł nadpisać zmianę, której osoba nie widziała, a wpis pokazany w dwóch miejscach miał dwa pola o różnych słowach i jeden szkic;
  - trzeci: słowa dopisane w chwili między potwierdzonym zapisem a ponownym narysowaniem listy przepadały, a strona mówiła, że wpis został zmieniony.
- Czwarty przegląd zamknął trzeci błąd i nie znalazł przeszkody dla próby stanu końcowego e23cef4. Dwie drobne pozycje zostają otwarte do następnego przyrostu; obie wymagają celowo uszkodzonej odpowiedzi programu albo nietypowej kolejności kliknięć i w żadnej tekst nie ginie.
- Testy na stanie końcowym: 444 próby (225 w Firefoksie), 182 kontenera, 6 odbioru, wszystkie przeszły dwukrotnie. Z 47 celowych zepsuć poprawek domu testy wykryły 47; z 275 zepsuć rozmowy wykryły 273, a pozostałe dwa są te same co w poprzednich przyrostach.
- Narzędziu autora do celowych zepsuć recenzent trzy razy wytknął błąd: mogło policzyć zepsucie jako wykryte, gdy nie uruchomił się żaden test, sprawdzało niezmieniony kod tylko dla wąskiego zestawu testów i używało starej czystej kopii bez sprawdzenia, czy zgadza się ze źródłem. Wszystkie trzy błędy zostały poprawione. W ostatnim przebiegu jedna z czterech równoległych części zatrzymała się, bo przeglądarka nie wystartowała; narzędzie zgłosiło to jako błąd uruchomienia, a nie jako wykryte zepsucie, i brakujące szesnaście zepsuć poszło osobno.
- O 21:39 poszła prośba o nową paczkę z e23cef4 na oba komputery fundatora, każdy z własnym kontenerem. O 21:43 fundator zatwierdził nowe brzmienie karty ochrony pokazywanej na stronie; karta mówi, że tego stanu nikt przed tą próbą nie uruchamiał na Windows ani w Brave.

**Nie sprawdzono:** Windows i Brave (nic z przyrostu 17 nie było tam uruchamiane przed próbą), rzeczywistej bramy i modelu, dwóch urządzeń na jednym kontenerze, używania domu przez drugą osobę.

**Co to mówi o sposobie pracy:**

- Trzy przeglądy z rzędu znalazły błąd w tym samym nowym edytorze, za każdym razem w miejscu, na które testy autora nie patrzyły. Prośby autora wymieniały za każdym razem jego własne słabe punkty, a recenzent i tak znajdował coś innego. Od teraz autor daje recenzentowi projekt zmiany w takich miejscach, zanim napisze kod.
- Sesja autora przez dwa dni pisała w każdej prośbie „nie sprawdzono na Windows” i ani razu nie poprosiła fundatora o komputer z Windows. Fundator zaproponował go sam i zapytał, dlaczego to pytanie do niego nie dotarło. Sesja zgłasza teraz brak zasobu jako potrzebę, gdy drugi raz ogranicza on to, co można sprawdzić.
- Zapytana przez fundatora, sesja autora powiedziała, że przez trzy dni budowała dom, nie przeczytawszy manifestu ani whitepaperów. Fundator zdecydował, że każda sesja zaczyna od ich przeczytania, własnych notatek i rozmowy z nim o nich.
- Przebieg całej listy zepsuć trwa około 75 minut na wspólnym komputerze agentów i raz się nie powiódł, prawdopodobnie z braku pamięci. Fundator zdecydował, że sesja dostaje własny komputer i własne konto na jego mocniejszym komputerze, osobne od jego konta i od kontenera jego próby.

**Stan:** dom Suverii to projekt w lokalnej wersji próbnej; druga wersja próby jest przygotowana i jeszcze niezainstalowana. Niczego nie wysłano na zewnątrz; repozytorium jest lokalne. Fundator zdecydował, że kod dostaje teraz drugą kopię lokalną, a publiczny staje się później, i że krok jego upublicznienia należy do agentów. Sesja autora postawiła temu krokowi własne warunki: przegląd całej historii, uczciwy opis stanu, zaliczona próba na Windows i w Brave oraz rekomendacja recenzenta. Układ ekranów jest projektowany w osobnym wątku na makietach, poza repozytorium.
