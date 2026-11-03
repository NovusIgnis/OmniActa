[English](README.md) · **Polski**

# OmniActa

Jawne akta Fundacji Novus Ignis: dziennik decyzji, rejestr błędów i wniosków oraz historia spraw, którymi się zajmujemy. *Acta* po łacinie to zapisy czynności. Repozytorium wykonuje to, co obiecuje [whitepaper zasad fundacji](https://novusignis.org/pl/whitepaper-zasady-fundacji.html) w rozdziale 12 (dziennik decyzji, rejestr błędów i wniosków, rejestr tylko do dopisywania) i [manifest](https://novusignis.org/pl/manifest.html) w punkcie 8.1: fundację prowadzimy tak, jak chcielibyśmy, żeby cyfrowa inteligencja prowadziła kiedyś powierzone jej sprawy, jawnie, z uzasadnieniem decyzji i z przyznawaniem się do błędów.

## Stan publikacji

Repozytorium zaczynamy 4 listopada 2026 r. od jednego wpisu w rejestrze błędów i od opisów trzech spraw, do których on należy. Wcześniejsze wpisy, w tym archiwum odtworzone z plików i nagrań, publikujemy partiami, gdy fundator je przejrzy i zatwierdzi.

## Sprawy i zdarzenia

- **Sprawa** (`sprawy/<id>.md`) to wątek pracy, np. „Przekłady na 18 języków” albo „Mapa ochrony Suverii”. Sprawa może się **rozdzielić** na kilka (pole `z` nowej sprawy wskazuje, z której wyrosła) i kilka spraw może się **połączyć** w jedną (nowa sprawa ma w `z` wszystkie, z których powstała).
- **Zdarzenie** (`zdarzenia/<rok>/<miesiąc>/<id>.md`) to jeden krok w jednej albo kilku sprawach. Rodzaje: `pomysl`, `decyzja`, `dzialanie`, `proba`, `wynik`, `blad`, `korekta`, `publikacja`, `rozdzielenie`, `polaczenie`, `raport`. Pole `rodzice` wskazuje zdarzenia, z których to zdarzenie wynika; tak widać, jak sprawy ewoluowały.
- **Decyzja** ma części z punktu 12.1 whitepapera zasad: cel, warianty, kogo dotyczy, wykonanie (z podstawą), przegląd.
- **Błąd** ma części z punktu 8.1 manifestu: co się stało, skutki, przyczyna, naprawa, wniosek, sprawdzenie. W nagłówku podaje czas wykrycia (`wykryto`), planu naprawy (`plan_naprawy`) i naprawy (`naprawiono`), osobę odpowiedzialną (`odpowiada`) i termin sprawdzenia (`sprawdzenie_do`). Błąd publikujemy od razu po wykryciu, a nie zbiorczo; jeśli naprawa potrwa, najpierw publikujemy znalezisko i plan naprawy, a naprawę dopisujemy później.
- Każdy wpis ma treść po polsku (`## PL`) i po angielsku (`## EN`).

## Daty i granica publikacji

- `data` to chwila zdarzenia według naszych zapisów (czas polski). To deklaracja. `dokladnosc` mówi, ile jest warta: `dokladna`, gdy godzina pochodzi ze sprawdzalnego zapisu (commit, przebieg GitHub Actions, nagłówek wiadomości, plik wyniku); `dzien`, gdy pewny jest tylko dzień, a godzina służy wyłącznie do kolejności (dziennik pracy Claude'a bywał szacowany nawet o kilka godzin); `przyblizona`, gdy niepewny jest też dzień.
- `publikacja` to dzień, w którym wpis trafił do publicznego repozytorium. Tę datę da się sprawdzić w historii repozytorium; ustawiamy ją w dniu wysyłki.
- **Granica:** publikacja strony novusignis.org, 31.10.2026, 23:40 (przebieg GitHub Actions 41249207037). Wpisy wcześniejsze to **archiwum odtworzone później** z plików i rozmów: mają pole `odtworzono` (kiedy je odtworzyliśmy) i `dokladnosc` (`dokladna`, `dzien` albo `przyblizona`).

## Odciski, drzewo Merkla i rejestr tylko do dopisywania

Każde zdarzenie ma odcisk SHA-256 liczony z jego treści (bez pola `publikacja`) i z odcisków rodziców. Całość jest więc grafem Merkla: zmiana dawnego wpisu zmienia odciski wszystkich późniejszych, które z niego wynikają. `lancuch.jsonl` to rejestr tylko do dopisywania: każdy wiersz zawiera odcisk poprzedniego, a zmiana zapisanego już wpisu jest jawnie odnotowana z powodem. Ten sam mechanizm ma pokazywać w Omniforum ewolucję spraw.

## Prywatność

- O osobach spoza fundacji piszemy rolami (np. „szef produktu dostawcy”), nie nazwiskami, chyba że ktoś się zgodzi.
- Wątki z dostawcami publikujemy po ich uprzedzeniu (decyzja z 1.11.2026): pole `uprzedzic` zatrzymuje wpis do czasu wpisania `uprzedzono`.
- `narzedzia/acta.mjs sprawdz` szuka adresów, telefonów, numerów kont, kluczy i numerów PESEL oraz nazwisk z prywatnej listy, którą trzymamy zaszyfrowaną poza repozytorium.
- Wpisy przygotowuje Claude (później agent), zatwierdza fundator; agent będzie publikował sam dopiero po udanej próbie, którą opiszemy w aktach.

## Narzędzia

```
node narzedzia/acta.mjs sprawdz              # pola, odnośniki, daty, prywatność, łańcuch
node narzedzia/acta.mjs dopisz [--powod "…"] # nowe i zmienione wpisy do lancuch.jsonl
node narzedzia/acta.mjs wydanie [--podglad]  # wydanie/acta.json dla strony i wydanie/acta.jsonl jako zbiór do badań
```

Licencja: teksty CC BY 4.0, narzędzia AGPLv3 (`LICENSE.md`).
