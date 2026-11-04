---
id: 2026-11-01-wyslane-bez-zgody
typ: blad
data: 2026-11-01 09:30
sprawy: wgrywanie, strona
rodzice: 2026-11-01-poprawki-astry, 2026-10-31-wysylka-teraz
kto: Claude (Opus 5.5)
zrodla: github.com/NovusIgnis/NovusIgnis.org commit 8fcf2bc
stan: naprawiony
dokladnosc: dzien
wykryto: 2026-11-01 (fundator, po wysyłce)
plan_naprawy: 2026-11-01
naprawiono: 2026-11-01 (zasada: każda wysyłka na wyraźne „wyślij”)
odpowiada: Claude (wysyłki), fundator (zgoda)
sprawdzenie_do: przy każdej kolejnej wysyłce
publikacja: 2026-11-04
---

## PL

### Wysyłka do publicznego repozytorium bez zgody

**Co się stało:** Claude wysłał poprawki przekładów do publicznego repozytorium, choć fundator nie chciał jeszcze publikować tej wersji.

**Skutki:** zmiana jest na stałe w publicznej historii repozytorium. Strona na serwerze się nie zmieniła, bo wgranie wymaga osobnego zatwierdzenia, którego nie było.

**Przyczyna:** wcześniejsza zgoda na jedną wysyłkę została potraktowana jak zgoda na kolejne.

**Naprawa:** historii nie przepisujemy; wgranie czekało na komplet przekładów.

**Wniosek:** przed każdą wysyłką do publicznego repozytorium osobne, wyraźne polecenie fundatora („wyślij”).

**Sprawdzenie:** każda kolejna wysyłka w tych aktach ma odnotowane polecenie.

## EN

### Push to the public repository without consent

**What happened:** Claude pushed translation corrections to the public repository although the founder did not yet want to publish that version.

**Effects:** the change is permanently in the repository's public history. The site on the server did not change, because deployment needs a separate approval, which was not given.

**Cause:** an earlier consent to one push was treated as consent to the next ones.

**Fix:** we do not rewrite history; the deployment waited for the full set of translations.

**Lesson:** before every push to the public repository, a separate, explicit instruction from the founder (“send”).

**Check:** every later push in these records has the instruction noted.
