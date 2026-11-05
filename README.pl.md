[English](README.md) · **Polski**

# OmniActa

Jawne akta Fundacji Novus Ignis: surowy rejestr zdarzeń, a w nim dziennik decyzji oraz rejestr błędów i wniosków. *Acta* po łacinie to zapisy czynności. Repozytorium wykonuje to, co obiecuje [whitepaper zasad fundacji](https://novusignis.org/pl/whitepaper-zasady-fundacji.html) w rozdziale 12 (dziennik decyzji, rejestr błędów i wniosków, rejestr tylko do dopisywania) i [manifest](https://novusignis.org/pl/manifest.html) w punkcie 8.1: fundację prowadzimy tak, jak chcielibyśmy, żeby cyfrowa inteligencja prowadziła kiedyś powierzone jej sprawy, jawnie, z uzasadnieniem decyzji i z przyznawaniem się do błędów.

Akta są po to, żeby każdy mógł na bieżąco zobaczyć, co dzieje się w fundacji: nad czym pracujemy, przed jakimi dylematami stajemy, jakie decyzje podejmujemy i dlaczego, jakie popełniamy błędy i jak je naprawiamy. Wpisy pojawiają się w kolejności zdarzeń. Przegląd według tematów, z chronologią każdej sprawy, ma pokazywać [strona fundacji](https://novusignis.org), a później Omniforum (projekt).

## Stan publikacji

Repozytorium zaczęliśmy 4 listopada 2026 r. od jednego wpisu w rejestrze błędów. Wcześniejsze wpisy, w tym archiwum odtworzone z plików i nagrań, publikujemy partiami, gdy fundator je przejrzy i zatwierdzi. Pierwszego dnia akta miały też krótkie opisy spraw (folder `sprawy/`). Po decyzji z 4.11.2026 wyszły z repozytorium z zapisem w łańcuchu, a ich treść zostaje w historii repozytorium.

## Zdarzenia

- **Zdarzenie** (`events/<rok>/<miesiąc>/<id>.md`) to jeden krok pracy fundacji. Rodzaje: `pomysl`, `decyzja`, `dzialanie`, `proba`, `wynik`, `blad`, `korekta`, `publikacja`, `rozdzielenie`, `polaczenie`, `raport`. Pole `rodzice` wskazuje zdarzenia, z których to zdarzenie wynika.
- Pole `sprawy` to etykiety wątków, do których zdarzenie należy według autora wpisu. Strona i Omniforum mogą z nich układać sprawy i grupować zdarzenia po swojemu. To, że wątek się rozdzielił albo połączył z innym, zapisujemy jako zdarzenie (`rozdzielenie`, `polaczenie`).
- Etykieta `kamien-milowy` oznacza zdarzenia, które fundator uznaje za ważny krok fundacji. Strona ma pokazywać je jako oś najważniejszych chwil, razem z tym, co do nich doprowadziło (projekt).
- **Decyzja** ma części z punktu 12.1 whitepapera zasad: cel, warianty, kogo dotyczy, wykonanie (z podstawą), przegląd.
- **Błąd** ma części z punktu 8.1 manifestu: co się stało, skutki, przyczyna, naprawa, wniosek, sprawdzenie. W nagłówku podaje czas wykrycia (`wykryto`), planu naprawy (`plan_naprawy`) i naprawy (`naprawiono`), osobę odpowiedzialną (`odpowiada`) i termin sprawdzenia (`sprawdzenie_do`). Błąd publikujemy od razu po wykryciu, a nie zbiorczo; jeśli naprawa potrwa, najpierw publikujemy znalezisko i plan naprawy, a naprawę dopisujemy później.
- Każdy wpis ma treść po polsku (`## PL`) i po angielsku (`## EN`).

## Dokumenty

W `documents/` są polskie oryginały manifestu, czterech whitepaperów i statutu (`documents/statute/`: wszystkie wersje i rejestr zmian), w brzmieniu opublikowanym na [novusignis.org](https://novusignis.org). Historię zmian prowadzimy od publikacji strony 31 października 2026 r. Wcześniejsze wersje bywały innymi interpretacjami tych samych założeń, a nie zapisem rozważanych idei. Każda wersja dokumentu ma odcisk w łańcuchu, więc jej cicha zmiana wychodzi przy kontroli, a decyzja o zmianie jest zdarzeniem w aktach. Przekłady są w [repozytorium strony](https://github.com/NovusIgnis/NovusIgnis.org).

## Kontakty i pytania

- Każdy kontakt z kimś, kto może otrzymać pieniądze fundacji (dostawca, wykonawca, instytucja, osoba), zapisujemy jako zdarzenie z etykietą tego podmiotu: spotkania, rozmowy, oferty, zamówienia i płatności. Kontakt, który się odbył, a nie trafił do akt, jest błędem fundacji: można zapytać o niego zarząd, a odpowiedź i wpis o błędzie publikujemy.
- Wątki z dostawcami publikujemy po ich uprzedzeniu. Osoby prywatne podajemy z nazwiska tylko za ich zgodą; bez niej opisujemy je rolą, a każdy może też wybrać pseudonim (rozdział „Prywatność”).
- Pytania i rozmowy o akta, decyzje i dokumenty: [dyskusje fundacji na GitHubie](https://github.com/NovusIgnis/OmniVox/discussions). Brak wpisu zgłoś w [zgłoszeniach](https://github.com/NovusIgnis/OmniActa/issues/new/choose) tego repozytorium. Odpowiadamy publicznie, a gdy pytanie albo zgłoszenie coś zmienia, dopisujemy zdarzenie.

## Daty i granica publikacji

- `data` to chwila zdarzenia według naszych zapisów (czas polski). To deklaracja. `dokladnosc` mówi, ile jest warta: `dokladna`, gdy godzina pochodzi ze sprawdzalnego zapisu (commit, przebieg GitHub Actions, nagłówek wiadomości, plik wyniku); `dzien`, gdy pewny jest tylko dzień, a godzina służy wyłącznie do kolejności (dziennik pracy Claude'a bywał szacowany nawet o kilka godzin); `przyblizona`, gdy niepewny jest też dzień.
- `publikacja` to dzień, w którym wpis trafił do publicznego repozytorium. Tę datę da się sprawdzić w historii repozytorium; ustawiamy ją w dniu wysyłki.
- **Granica:** publikacja strony novusignis.org, 31.10.2026, 23:40 (przebieg GitHub Actions 41249207037). Wpisy wcześniejsze to **archiwum odtworzone później** z plików i rozmów: mają pole `odtworzono` (kiedy je odtworzyliśmy) i `dokladnosc` (`dokladna`, `dzien` albo `przyblizona`).

## Odciski, drzewo Merkla i rejestr tylko do dopisywania

Każde zdarzenie ma odcisk SHA-256 liczony z jego treści (bez pola `publikacja`) i z odcisków rodziców. Całość jest więc grafem Merkla: zmiana dawnego wpisu zmienia odciski wszystkich późniejszych, które z niego wynikają. `chain.jsonl` to rejestr tylko do dopisywania: każdy wiersz zawiera odcisk poprzedniego, a zmiana zapisanego już wpisu jest jawnie odnotowana z powodem. Usunięcie wpisu też trafia do łańcucha, z powodem, a kontrola wykrywa wpis, który zniknął bez takiego zapisu. Ten sam mechanizm ma pokazywać w Omniforum, jak ewoluują sprawy ułożone z tych zdarzeń.

## Prywatność

- O osobach spoza fundacji piszemy rolami (np. „szef produktu dostawcy”) albo pod wybranym przez nie pseudonimem; nazwiskami tylko za ich zgodą.
- Wątki z dostawcami publikujemy po ich uprzedzeniu (decyzja z 1.11.2026): pole `uprzedzic` zatrzymuje wpis do czasu wpisania `uprzedzono`.
- `tools/acta.mjs sprawdz` szuka adresów, telefonów, numerów kont, kluczy i numerów PESEL oraz nazwisk z prywatnej listy, którą trzymamy zaszyfrowaną poza repozytorium.
- Wpisy przygotowuje Claude (później agent), zatwierdza fundator; agent będzie publikował sam dopiero po udanej próbie, którą opiszemy w aktach.

## Narzędzia

```
node tools/acta.mjs sprawdz              # pola, odnośniki, daty, prywatność, łańcuch
node tools/acta.mjs dopisz [--powod "…"] # nowe i zmienione wpisy do chain.jsonl
node tools/acta.mjs wydanie [--podglad]  # release/acta.json dla strony i release/acta.jsonl jako zbiór do badań
```

Licencja: teksty CC BY 4.0, narzędzia AGPLv3 (`LICENSE.md`).
