---
id: 2026-11-09-przeglad-krzyzowy-kontenera
typ: dzialanie
data: 2026-11-09 18:37
sprawy: suveria, sposob-pracy
rodzice: 2026-10-30-whitepaper-suverii-koncowy
kto: fundator, Claude (Fable 5.1), Codex (gpt-6-astra)
zrodla: Suveria/kontener/przeglad/claude.md; Suveria/kontener/przeglad/codex-po-claude.md; Suveria/kontener/DZIENNIK.md; Research/suveria-przeglad-claude-2026-11-09/
dokladnosc: dokladna
publikacja: 2026-11-11
---

## PL

### Kontener Suverii po wzajemnym przeglądzie dwóch modeli

Kontener to część Suverii, która szyfruje dane osoby na jej urządzeniach i synchronizuje je między nimi. To prototyp w repozytorium, które nie jest jeszcze publiczne. Napisał go Codex, a wersja z 7 listopada czekała na drugi przegląd. 9 listopada przejrzał ją Claude. Znalazł między innymi dwie usterki wysokiej wagi, które zwykłe użycie może wywołać bez niczyjej złej woli: zgubienie zsynchronizowanego wpisu i trwałą blokadę synchronizacji. Poprawił je.

Te poprawki przeczytał z kolei Codex (16:36–16:52). Zgłosił dziewięć uwag, w tym dwie wysokiej wagi w poprawkach Claude'a i jedną w kodzie z 7 listopada, i odradził scalenie. Claude odtworzył wszystkie dziewięć, zanim cokolwiek zmienił, a potem je poprawił. Druga runda Codexa znalazła dwa kolejne błędy; poprawił je sam i dodał 23 testy. O 18:37, po decyzji fundatora, kontener trafił do głównej gałęzi. Przechodzi 166 testów, a niezależny czytnik eksportu 21 z 21.

Ważniejsza od liczb jest metoda: kod, którego ma używać człowiek, przed użyciem czyta drugi model, a każda runda poprawek wraca do czytania. Tu każda runda znalazła błędy, których poprzednia nie zauważyła. Bramę do modeli i stronę próbną przeglądamy tą samą drogą; ich poprawki nie są jeszcze w głównej gałęzi. To nie jest audyt bezpieczeństwa: kod czytały dwa modele, ludzie jeszcze nie.

## EN

### The Suveria container after a mutual review by two models

The container is the part of Suveria that encrypts a person's data on their devices and synchronises it between them. It is a prototype in a repository that is not public yet. Codex wrote it, and the version of 7 November was waiting for a second review. On 9 November Claude reviewed it. Among other things, it found two high-severity defects that ordinary use can trigger without anyone's ill will: losing a synchronised entry and permanently blocking synchronisation. It fixed them.

Codex in turn read those fixes (16:36–16:52). It raised nine findings, including two of high severity in Claude's fixes and one in the code of 7 November, and advised against merging. Claude reproduced all nine before changing anything, and then fixed them. A second round by Codex found two more bugs; it fixed them itself and added 23 tests. At 18:37, after the founder's decision, the container went into the main branch. It passes 166 tests, and the independent export reader passes 21 out of 21.

The method matters more than the numbers: code that a person is going to use is read by a second model before use, and every round of fixes goes back for reading. Here every round found bugs that the previous one had missed. We are reviewing the gateway to the models and the trial page the same way; their fixes are not in the main branch yet. This is not a security audit: two models have read the code, people have not yet.
