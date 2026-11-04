---
id: 2026-11-03-repozytorium-robocze
typ: blad
data: 2026-11-03 23:30
sprawy: wgrywanie, omniacta
rodzice: 
kto: fundator, Claude (Opus 5.5)
zrodla: Claude/pamiec/00-pamiec-rdzen.md (D 03.11.2026, odłączenie); wyjaśnienie fundatora 04.11.2026
stan: naprawiony
dokladnosc: dzien
wykryto: 2026-11-03 (Claude, przy zabezpieczaniu danych przeglądu)
plan_naprawy: 2026-11-03
naprawiono: 2026-11-03 (zdalny adres usunięty za zgodą fundatora)
odpowiada: fundator (repozytoria na GitHubie i ich kopie na dysku), Claude (sprawdzanie przed wysyłką)
sprawdzenie_do: przy każdym nowym albo przemianowanym repozytorium
publikacja: 2026-11-04
---

## PL

### Po zmianie nazwy repozytorium kopia robocza wskazywała na publiczne repozytorium strony

**Co się stało:** fundator wymieniał się wcześniej ze współpracownikiem zadaniami i pierwszymi prototypami w jednym repozytorium na GitHubie. Żeby wreszcie opublikować stronę, przemianował stare repozytorium na „Old” i pod jego dawną nazwą założył czyste, publiczne repozytorium strony. Nie zmienił przy tym ustawień kopii na swoim dysku. Ta kopia, z materiałami badawczymi fundacji, nadal wysyłała pod dawny adres, czyli teraz do publicznego repozytorium strony, i miała 31 zmian, których tam nie było. Jedno polecenie wysyłki z tego folderu opublikowałoby materiały robocze, w tym napisy z nagrań z wypowiedziami osób trzecich.

**Skutki:** żadne; nic nie zostało wysłane.

**Przyczyna:** zmiana nazwy repozytorium na GitHubie bez zmiany adresu w kopii na dysku; nikt nie sprawdzał, dokąd wysyłają lokalne kopie po takich zmianach. Fundator wziął ten błąd na siebie.

**Naprawa:** za zgodą fundatora zdalny adres usunięty; materiały wrażliwe wyłączone z repozytorium; sprawdzone wszystkie lokalne repozytoria: do publicznego wysyła już tylko kopia strony, a teraz także publiczna kopia akt.

**Wniosek:** zmianę nazwy albo założenie repozytorium robimy razem ze zmianą adresu we wszystkich kopiach lokalnych i sprawdzamy, dokąd one wysyłają.

## EN

### After a repository was renamed, a working copy pointed at the website's public repository

**What happened:** the founder used to exchange tasks and early prototypes with a collaborator in one repository on GitHub. To finally publish the website, he renamed the old repository to "Old" and created a clean, public website repository under its former name. He did not change the settings of the copy on his disk at the same time. That copy, holding the foundation's research materials, still pushed to the former address, that is, now to the website's public repository, and had 31 changes that were not there. One push from that folder would have published working materials, including recording transcripts with the words of third parties.

**Effects:** none; nothing was pushed.

**Cause:** the repository was renamed on GitHub without changing the address in the copy on disk; nobody checked where local copies push after such changes. The founder took this mistake on himself.

**Fix:** with the founder's consent the remote was removed; sensitive materials were excluded from the repository; all local repositories were checked: only the website copy pushes to a public repository, and now also the public copy of the records.

**Lesson:** when we rename or create a repository, we change the address in all local copies at the same time and check where they push.
