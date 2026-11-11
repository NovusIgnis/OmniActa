---
id: 2026-11-11-suveria-dom-poprawki-po-szostym-przegladzie
typ: dzialanie
data: 2026-11-11 16:49
sprawy: suveria, sposob-pracy
rodzice: 2026-11-11-suveria-decyzje-i-przeglady-domu
kto: fundator, Claude (Fable 5.2)
zrodla: Research/suveria-dom-2026-11-10/ (PRZYROST-6-PRZEGLAD-ASTRY.md, PRZYROST-7-PROSBA-DO-ASTRY.txt, B-dom-5eecb9a-c713f55.diff, C-sumy-c713f55.txt); Suveria, gałąź dom-2026-11-10, commity od ede91a1 do c713f55; Stół, wiadomość 20261111-164859-6f5792c8 (nitka n-20261111-164859-6f5792c8); teczka zatwierdzeń, decyzja i27 (11.11.2026, 15:20)
dokladnosc: dokladna
publikacja: 2026-11-11
---

## PL

### Suveria: poprawki domu po szóstym przeglądzie i trzecia nitka narady

Po szóstym przeglądzie kodu domu Suverii, czyli budowanych od 10 listopada ekranów do codziennych spraw, rutyn, notatek i paragonów, Claude przygotował 11 listopada poprawki do wszystkich pięciu uwag recenzenta i do trzech jego odpowiedzi na pytania. Powstało dziewięć zatwierdzeń w lokalnym repozytorium (gałąź dom-2026-11-10, stan c713f55). Zmieniają osiem plików programu próbnego domu: kod, testy i opis. Kod kontenera i prób odbiorowych został bez zmian. Każdą uwagę najpierw odtworzono na stanie sprzed poprawki, tak żeby test nie przechodził, zanim poprawka sprawi, że przejdzie. Praca trwała od 11:35 do 16:42, z przerwą od 11:43 do 15:12, kiedy wyczerpał się limit użycia modelu.

Dwie najpoważniejsze uwagi dotyczyły tego samego: zapisana odpowiedź modelu i świadectwo wykonania rutyny nie pamiętały, z jakiej treści powstały. Teraz odpowiedź zapisana w kontenerze wskazuje swoje źródła (notatki i wcześniejsze wypowiedzi), a świadectwo wskazuje rutynę. Gdy źródło zostanie później oznaczone jako prywatne albo zniknie, program odmawia wysłania do modelu tego, co od niego pochodzi. Pierwszy wariant poprawki, w którym każda odpowiedź wskazywała wprost wszystkie wcześniejsze źródła, został odrzucony po pomiarze: przy 32 notatkach plik stanu miał po 40 wymianach 5,6 MB, a 52. wymiana kończyła się błędem rozmiaru (limit 8 MiB). W przyjętym wariancie odpowiedź wskazuje tylko to, czego nie wskazuje już jej wcześniejsze źródło, a resztę program odczytuje po łańcuchu źródeł; 63 wymiany dają wtedy 1,4 MB, tyle samo co przed poprawką. Trzy pozostałe uwagi dotyczyły poleceń ponawianych po utracie odpowiedzi: program rozróżnia teraz więcej przypadków i odmawia z osobnym komunikatem, zamiast potwierdzać coś, co już nie obowiązuje.

Testy na stanie c713f55: 199 w programie próbnym domu, w tym 33 w przeglądarce Firefox, 182 w kontenerze i 6 prób odbiorowych. Wszystkie zaliczone; przed oddaniem do przeglądu zostały uruchomione drugi raz, w osobnym przebiegu. Dodatkowo 18 razy celowo zepsuto poprawki, każdą osobno, żeby sprawdzić, czy testy to zauważą. Siedemnaście zepsuć testy wykryły od razu. Jednego nie: strona mogła błędnie uznać polecenie za zakończone po jednej z nowych odmów i żaden test tego nie widział. Dlatego doszło dziewiąte zatwierdzenie, z testem, który to zepsucie wykrywa.

Czego poprawki nie robią, według opisu oddanego recenzentowi. Odpowiedzi i świadectw zapisanych wcześniej nie uzupełniają o źródła. Rozmowa prowadzona bez zapisu nie zostawia źródeł. Usunięcie wypowiedzi albo notatki użytej w zapisanej rozmowie zatrzymuje dalsze pytania w tej rozmowie; nowa rozmowa działa. Identyfikatory poleceń żyją w pamięci strony i nie przetrwają jej przeładowania. Trwałego dziennika poleceń, który recenzent uznał za potrzebny przed synchronizacją między urządzeniami, nadal nie ma.

Narada o domu toczy się przez Stół, czyli lokalną wymianę wiadomości między modelami, w której jedna nitka ma limit ośmiu wiadomości. Druga nitka doszła do limitu na szóstym przeglądzie. Fundator potwierdził 11 listopada o 15:20, że jego zgoda z 10 listopada na dowolną liczbę wymian w tej naradzie obejmuje kolejne nitki. O 16:48 prośba o siódmy przegląd (Codex, gpt-6-astra, najwyższy dostępny wysiłek) poszła w trzeciej nitce, z różnicą kodu, sumami kontrolnymi, listą tego, co sprawdzono, i listą tego, czego nie sprawdzono.

Stan: projekt w toku. Tych dziewięciu zmian nie czytał jeszcze drugi model. Dom nie był uruchamiany z prawdziwą bramą ani z modelem; wszystko sprawdzono na sztucznych danych i na atrapie bramy. O zakresie pierwszej próby domu fundator jeszcze nie rozstrzygnął. Kontenera fundatora z Suverii próbnej nikt przy tej pracy nie otwierał. Czego to nie znaczy: że uwagi szóstego przeglądu są zamknięte. To oceni recenzent.

## EN

### Suveria: fixes to the home after the sixth review, and a third thread of the consultation

After the sixth review of the code of the Suveria home, the screens for everyday matters, routines, notes and receipts that have been under construction since 10 November, Claude prepared on 11 November fixes for all five of the reviewer's findings and for three of his answers to questions. The result is nine commits in the local repository (branch dom-2026-11-10, state c713f55). They change eight files of the home trial program: code, tests and description. The code of the container and of the acceptance trials was left unchanged. Each finding was first reproduced on the state before its fix, so that the test failed before the fix made it pass. The work ran from 11:35 to 16:42, with a break from 11:43 to 15:12, when the model usage limit ran out.

The two most serious findings concerned the same thing: a stored model answer and the certificate that a routine was done did not remember which content they came from. Now an answer stored in the container points to its sources (notes and earlier turns), and a certificate points to its routine. When a source is later marked private or disappears, the program refuses to send to the model anything derived from it. The first variant of the fix, in which every answer pointed directly to all earlier sources, was rejected after measurement: with 32 notes the state file was 5.6 MB after 40 exchanges, and the 52nd exchange ended in a size error (the limit is 8 MiB). In the variant adopted, an answer points only to what its earlier source does not already point to, and the program reads the rest along the chain of sources; 63 exchanges then give 1.4 MB, the same as before the fix. The three remaining findings concerned commands repeated after a lost reply: the program now distinguishes more cases and refuses with a separate message instead of confirming something that no longer holds.

Tests on state c713f55: 199 in the home trial program, 33 of them in the Firefox browser, 182 in the container and 6 acceptance trials. All pass; before the hand-over for review they were run a second time, in a separate run. In addition the fixes were deliberately broken 18 times, each one separately, to check whether the tests would notice. The tests caught seventeen of the breakages at once. One they did not: the page could wrongly treat a command as finished after one of the new refusals, and no test saw it. That is why a ninth commit was added, with a test that catches this breakage.

What the fixes do not do, according to the description handed to the reviewer. They do not add sources to answers and certificates stored earlier. A conversation held without saving leaves no sources. Deleting a turn or a note used in a saved conversation stops further questions in that conversation; a new conversation works. Command identifiers live in the page's memory and do not survive a reload. The durable command journal, which the reviewer considered necessary before synchronisation between devices, is still missing.

The consultation about the home runs through the Table, a local exchange of messages between models in which one thread is limited to eight messages. The second thread reached the limit at the sixth review. On 11 November at 15:20 the founder confirmed that his consent of 10 November to any number of exchanges in this consultation covers further threads. At 16:48 the request for a seventh review (Codex, gpt-6-astra, highest available effort) went out in a third thread, with the code difference, checksums, a list of what was checked and a list of what was not.

Status: a project in progress. These nine changes have not yet been read by a second model. The home has not been run with the real gateway or with a model; everything was checked on artificial data and against a mock gateway. The founder has not yet decided the scope of the first trial of the home. Nobody opened the founder's container from the trial Suveria during this work. What this does not mean: that the findings of the sixth review are closed. That is for the reviewer to judge.
