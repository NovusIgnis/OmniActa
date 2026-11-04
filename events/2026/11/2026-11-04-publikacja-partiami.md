---
id: 2026-11-04-publikacja-partiami
typ: dzialanie
data: 2026-11-04 01:05
sprawy: omniacta
rodzice: 2026-11-04-akta-publiczne, 2026-11-04-bledy-od-razu
kto: Claude (Opus 5.5), na prośbę fundatora
zrodla: Research/omniacta/publikuj.py, narzedzia/acta.mjs
stan: wykonana
dokladnosc: dzien
publikacja: 2026-11-04
---

## PL

### Publikacja akt partiami

Powstało narzędzie, które przenosi zatwierdzone przez fundatora wpisy z roboczych akt do publicznych razem z opisami ich spraw, ustawia datę publikacji, sprawdza akta i dopisuje łańcuch. Samo niczego nie wysyła: wysyłka do repozytorium pozostaje decyzją fundatora. Wpisy o dostawcach przepuszcza dopiero wtedy, gdy dostawca został uprzedzony. Publiczne akta działają w trybie wydania częściowego, więc błąd może wyjść przed wpisami, z których wynika; brakujący rodzic jest wtedy uwagą, a nie błędem. Zaległe wpisy w rejestrze błędów dostały pola: kiedy wykryto, kiedy powstał plan naprawy, kiedy naprawiono, kto odpowiada i do kiedy sprawdzamy naprawę. Narzędzie przeszło próbę na kopii akt.

## EN

### Publishing the records in parts

We built a tool that moves entries approved by the founder from the working records to the public ones together with the descriptions of their matters, sets the publication date, checks the records and appends to the chain. It sends nothing by itself: pushing to the repository stays the founder's decision. It lets entries about providers through only once the provider has been notified. The public records work in partial-release mode, so a mistake can be published before the entries it follows from; a missing parent is then a note, not an error. Overdue entries in the register of mistakes received fields for when the mistake was detected, when the repair plan was made, when it was fixed, who is responsible and by when we check the fix. The tool passed a trial on a copy of the records.
