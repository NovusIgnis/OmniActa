---
id: 2026-11-13-suveria-home-fifteenth-review
type: action
date: 2026-11-13 08:30
matters: suveria, way-of-working
parents: 2026-11-12-suveria-home-fourteenth-review, 2026-11-12-suveria-programmer-session-takes-over-code
by: Claude (Fable 5.2), Codex (gpt-6-astra); published by kronikarz (Claude, automat) under the rule of 12 November 2026
sources: Research/suveria-dom-2026-11-10/ (PRZYROST-15-PROSBA-DO-ASTRY.txt, PRZYROST-15-wynik.txt, PRZYROST-15-zepsucia.txt, PRZYROST-15-zepsucia-przebieg-1.txt, PRZYROST-15-odtworzenie-na-655f7cb.txt, PRZYROST-15-testy-po-zatwierdzeniu.txt, B-dom-655f7cb-c9df491.diff, C-sumy-c9df491.txt, PRZYROST-15-PRZEGLAD-ASTRY.md, PRZED-BRAMA-lista-z-przegladow-4-13.md); Suveria, branch dom-2026-11-10, commits from 655f7cb to c9df491; conversation table, thread n-20261113-081855-888324d7, messages 20261113-081855-888324d7, 20261113-083042-527970bb; Claude/pamiec/sesje/programista.md (12 and 13.11.2026)
accuracy: exact
published: 2026-11-16
---

## EN

### Suveria: fifteenth review of the home, local trial still allowed, two findings of low weight, and a fault found in the tests themselves

**Goal:** close the four findings of the fourteenth review in the trial version of the home of Suveria (a local program with a page, tested with a mock gateway) and have the changes read by a second model before the trial. On 12 November at 23:08 the founder decided that the trial of the home comes after increment 15.

**What happened:**

- Increment 15 (ten commits from 655f7cb to c9df491, written between 12.11.2026, 22:37 and 13.11.2026, 04:19; evidence finished at 08:12) is the first one written by the separate programmer session. The written number of a question now stays with the browser tab until the answer is on the screen from a read of the container. An answer recovered after a reload belongs to its own question and has its own field. The page remembers which of its requests may have been carried out, not which button was pressed last. What stays in the field under the conversation is told apart by its exchange and its place in it, so nothing stands there twice. The page says when the browser refuses the storage of the tab and then does not send a question to a real gateway. Every question sent to the program must carry its number and the name of the run.
- Tests on the final state: 377 of the trial (180 in Firefox), 182 of the container, 6 of the reception, all passed twice. Of 34 new and changed tests, 25 do not pass on the previous state; of the nine that pass, seven check limits and two guard against faults that the previous code could not have. Of 229 deliberate breakages the tests caught 225 in the first run and 227 on the final state after two tests were added. The remaining two do not change what a person can read on the page; one of them changes the order of entries in a field.
- The fifteenth review by Astra (08:30, in under twelve minutes) confirmed the file sums and the 377 tests, ran five probes of its own and upheld the recommendation of a local trial on c9df491 within the same limits: a new folder, trial materials, one device, one program, one browser tab, the mock gateway, no real gateway, no synchronisation and no import. It found that the concrete reproductions of the two findings of medium weight from the previous review no longer work.

**A fault in the tests themselves:** in the night two runs of earlier states of the code each had one failing test, a different one each time. The cause was in the tests. All browser tests share one tab, each test starts its page on a port given by the system, and what a tab keeps belongs to an address together with its port. When the system gave a test the port of an earlier test, the number of a question left there held the conversation of the new test before it asked anything. Running all browser tests on one fixed port showed it: before the correction the tests failed from the fourth on, after it all 180 passed. The weakness had been in the tests since increment 14 and nobody had noticed it. The reviewer accepted the correction and called one thing a hypothesis: that eight further stray failures in the first run of breakages had the same cause. The programmer session had not checked them one by one.

**What the review found in the new code:**

- Low weight, before a real gateway: after one sequence (a save that stored only the question, a lost confirmation, then a confirmed drop) the page removes from view a question that is stored and goes out with the next question. One variant of it was introduced by a correction that the programmer session added in this increment on its own initiative and had listed among decisions to assess.
- Low weight, before a real gateway: after a first save that stored nothing, a later save that stored everything and reads that failed, the page loaded again says that the question is not in the container, although it is. The programmer session had listed this branch as one without a test.

**Not checked:** a real gateway and model, a browser other than Firefox, two tabs, an installation, a physical loss of connection.

**What this shows about the way of working:** the second model again found two faults with probes of its own that 377 tests and 227 of 229 deliberate breakages had not shown. Both were in places the author had named in the account: one as a decision to assess, one as a branch without a test. Writing down what was not tested pointed the reviewer to the right places. The tests can be wrong as well: a fault in them lived unnoticed through one whole increment and one review.

**State:** the home of Suveria is a project in a local trial version. Nothing was installed and nothing was sent outside; the repository is local. The two findings go to increment 16. A trial installation of the reviewed state needs the founder's consent to its scope.

## PL

### Suveria: piętnasty przegląd domu, lokalna próba nadal dopuszczona, dwie uwagi niskiej wagi i błąd znaleziony w samych testach

**Cel:** zamknąć cztery uwagi z czternastego przeglądu w próbnej wersji domu Suverii (lokalny program ze stroną, testowany z atrapą bramy) i dać zmiany do przeczytania drugiemu modelowi przed próbą. 12 listopada o 23:08 fundator zdecydował, że próba domu będzie po przyroście 15.

**Co się wydarzyło:**

- Przyrost 15 (dziesięć zatwierdzeń od 655f7cb do c9df491, napisanych między 12.11.2026, 22:37 a 13.11.2026, 04:19; dowody skończone o 08:12) jest pierwszym napisanym przez osobną sesję programisty. Zapisany numer pytania zostaje teraz przy karcie przeglądarki, dopóki odpowiedzi nie pokaże na ekranie odczyt kontenera. Odpowiedź odzyskana po przeładowaniu należy do swojego pytania i ma własne pole. Strona pamięta, które z jej próśb mogły zostać wykonane, a nie który przycisk naciśnięto ostatnio. To, co zostaje w polu pod rozmową, jest rozpoznawane po wymianie i miejscu w niej, więc nic nie stoi tam dwa razy. Strona mówi, gdy przeglądarka odmawia pamięci karty, i nie wysyła wtedy pytania do rzeczywistej bramy. Każde pytanie wysyłane do programu musi nieść numer i nazwę uruchomienia.
- Testy na stanie końcowym: 377 próby (180 w Firefoksie), 182 kontenera, 6 odbioru, wszystkie przeszły dwukrotnie. Z 34 nowych i zmienionych testów 25 nie przechodzi na stanie poprzednim; z dziewięciu, które przechodzą, siedem sprawdza granice, a dwa pilnują błędów, których poprzedni kod nie mógł mieć. Z 229 celowych zepsuć testy wykryły 225 w pierwszym przebiegu i 227 na stanie końcowym po dopisaniu dwóch testów. Pozostałe dwa nie zmieniają tego, co osoba może przeczytać na stronie; jedno z nich zmienia kolejność wpisów w polu.
- Piętnasty przegląd Astry (08:30, w niecałe dwanaście minut) potwierdził sumy plików i 377 testów, wykonał pięć własnych sond i podtrzymał rekomendację lokalnej próby na c9df491 w tych samych granicach: nowy folder, materiały próbne, jedno urządzenie, jeden program, jedna karta przeglądarki, atrapa bramy, bez rzeczywistej bramy, synchronizacji i importu. Stwierdził, że konkretne odtworzenia dwóch uwag średniej wagi z poprzedniego przeglądu już nie działają.

**Błąd w samych testach:** w nocy dwa przebiegi wcześniejszych stanów kodu miały po jednym teście, który nie przeszedł, za każdym razem innym. Przyczyna była w testach. Wszystkie testy w przeglądarce używają jednej karty, każdy test stawia swoją stronę na porcie przydzielonym przez system, a to, co karta pamięta, należy do adresu razem z portem. Gdy system dał testowi port wcześniejszego testu, zostawiony tam numer pytania wstrzymywał rozmowę nowego testu, zanim ten o cokolwiek zapytał. Pokazało to uruchomienie wszystkich testów w przeglądarce na jednym stałym porcie: przed poprawką testy nie przechodziły od czwartego, po niej przeszło wszystkie 180. Ta słabość była w testach od przyrostu 14 i nikt jej nie zauważył. Recenzent przyjął poprawkę, a jedno nazwał hipotezą: że osiem dalszych przypadkowych niepowodzeń w pierwszym przebiegu zepsuć miało tę samą przyczynę. Sesja programisty nie sprawdziła ich pojedynczo.

**Co przegląd znalazł w nowym kodzie:**

- Niska waga, przed rzeczywistą bramą: po jednej kolejności zdarzeń (zapis, który zapisał samo pytanie, utracone potwierdzenie, potem potwierdzone porzucenie) strona zdejmuje z widoku pytanie, które jest zapisane i idzie z następnym pytaniem. Jeden wariant wprowadziła poprawka, którą sesja programisty dodała w tym przyroście z własnej inicjatywy i wymieniła wśród decyzji do oceny.
- Niska waga, przed rzeczywistą bramą: po pierwszym zapisie, który nie zapisał niczego, późniejszym zapisie, który zapisał wszystko, i odczytach, które się nie udały, przeładowana strona mówi, że pytania nie ma w kontenerze, choć jest. Sesja programisty wymieniła tę gałąź jako pozostawioną bez testu.

**Nie sprawdzono:** rzeczywistej bramy i modelu, innej przeglądarki niż Firefox, dwóch kart, instalacji, fizycznego zerwania połączenia.

**Co to mówi o sposobie pracy:** drugi model znowu znalazł własnymi sondami dwa błędy, których nie pokazało 377 testów ani 227 z 229 celowych zepsuć. Oba były w miejscach, które autor nazwał w rozliczeniu: jedno jako decyzję do oceny, drugie jako gałąź bez testu. Spisanie tego, czego nie sprawdzono, wskazało recenzentowi właściwe miejsca. Mylić się mogą także testy: błąd w nich przetrwał niezauważony cały jeden przyrost i jeden przegląd.

**Stan:** dom Suverii to projekt w lokalnej wersji próbnej. Niczego nie zainstalowano i niczego nie wysłano na zewnątrz; repozytorium jest lokalne. Dwie uwagi idą do przyrostu 16. Instalacja próbna przejrzanego stanu wymaga zgody fundatora na jej zakres.
