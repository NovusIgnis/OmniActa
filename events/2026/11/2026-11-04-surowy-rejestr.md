---
id: 2026-11-04-surowy-rejestr
typ: decyzja
data: 2026-11-04 12:49
sprawy: omniacta, strona, omniforum
rodzice: 2026-11-04-akta-publiczne, 2026-11-04-publikacja-partiami
kto: fundator (decyzja), Claude (Opus 5.5)
zrodla: README.pl.md, README.md, narzedzia/acta.mjs
stan: obowiazuje
dokladnosc: dzien
publikacja: 2026-11-04
---

## PL

### OmniActa jako surowy rejestr zdarzeń

**Cel:** oddzielić zapis od opowieści. Akta mówią, co się wydarzyło, a zdarzenia w wątki i sprawy, z chronologią i opowieścią o ideach, których dotyczą, układamy tam, gdzie ludzie je czytają.

**Warianty:** akta z opisami spraw, które opowiadają ich historię (tak było rano 4 listopada); surowy rejestr zdarzeń w aktach, a wątki, sprawy i opowieść na stronie fundacji, później w Omniforum. Wybrany: drugi. Historia prezentacji będzie w repozytorium strony, więc zmiany w opowieści też da się prześledzić.

**Kogo dotyczy:** czytelników akt i strony oraz osoby, które w Omniforum będą układać sprawy po swojemu.

**Wykonanie:** nowych opisów spraw w aktach nie publikujemy. Dwanaście opublikowanych wychodzi z repozytorium z zapisem usunięcia w łańcuchu, a ich treść zostaje w historii repozytorium. W każdym zdarzeniu zostaje pole `sprawy` jako etykieta wątku i pole `rodzice`, na którym stoi łańcuch odcisków. Kontrola akt wykrywa teraz także wpis, który zniknął z repozytorium bez zapisu w łańcuchu.

## EN

### OmniActa as a raw register of events

**Goal:** to separate the record from the story. The records say what happened, and arranging the events into threads and matters, with a chronology and an account of the ideas they concern, happens where people read them.

**Options:** records with descriptions of matters that tell their history (as it was on the morning of 4 November); a raw register of events in the records, with threads, matters and the story on the foundation's website and later in Omniforum. Chosen: the second. The history of the presentation will be in the website's repository, so changes to the story can be traced too.

**Who it affects:** readers of the records and of the website, and the people who will arrange matters in their own way in Omniforum.

**Execution:** we no longer publish descriptions of matters in the records. The twelve published ones leave the repository with a record of their removal in the chain, and their content stays in the repository history. Every event keeps the field `sprawy` as a thread label and the field `rodzice`, on which the chain of fingerprints rests. The check of the records now also detects an entry that disappeared from the repository without a record in the chain.
