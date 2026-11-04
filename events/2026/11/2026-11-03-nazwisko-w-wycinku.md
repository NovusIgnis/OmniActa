---
id: 2026-11-03-nazwisko-w-wycinku
typ: blad
data: 2026-11-03 20:30
sprawy: omniacta, srodowisko-agentow
rodzice:
kto: Claude (Opus 5.5), fundator
zrodla: Research/omniacta/przeglad/README.md; Claude/pamiec/00-pamiec-rdzen.md (D 03.11.2026, notariusz na liście prywatnej)
stan: naprawiony
dokladnosc: dzien
wykryto: 2026-11-03 wieczorem (Claude, przy czytaniu wyników modelu)
plan_naprawy: 2026-11-03 wieczorem
naprawiono: 2026-11-04 00:45 (lista zaszyfrowana poza repozytoriami)
odpowiada: Claude (narzędzie przeglądu), fundator (zatwierdzenie)
sprawdzenie_do: przy następnym przeglądzie akt
publikacja: 2026-11-04
---

## PL

### Nazwisko osoby spoza fundacji w danych wysłanych do zewnętrznego modelu

**Co się stało:** przy przeglądzie akt 3.11 narzędzie wysyłało modelowi DeepSeek u dostawcy poufnych obliczeń wycinki z plików roboczych fundacji. Nazwiska osób spoza fundacji zastępowało według prywatnej listy, na której zabrakło notariusza z aktu założycielskiego, więc jego imię i nazwisko trafiło w jednym wycinku do modelu. Z tym dostawcą nie mamy umowy powierzenia danych.

**Skutki:** jedno imię i nazwisko z dokumentów rejestrowych fundacji przetworzył zewnętrzny dostawca. Połączenie było sprawdzone atestacją, a dostawca deklaruje, że nie przechowuje treści zapytań. Nazwisko pojawiło się też w uzasadnieniu modelu w prywatnym narzędziu przeglądu.

**Przyczyna:** ochrona opierała się tylko na liście nazwisk, która była niepełna; przed wysłaniem nie było drugiej, niezależnej kontroli.

**Naprawa:** za zgodą fundatora nazwisko jest na liście, uzasadnienia modeli w narzędziu przeglądu przechodzą tę samą zamianę, a sama lista jest zaszyfrowana i leży poza repozytoriami.

**Wniosek:** przed wysłaniem tekstu do zewnętrznego modelu potrzebna jest druga kontrola niezależna od listy, na przykład lokalny model wykrywający dane osobowe, a dostawcy bez umowy powierzenia wysyłamy tylko to, co konieczne.

**Sprawdzenie:** przy następnym przeglądzie wycinki przed wysłaniem przechodzą lokalną kontrolę danych osobowych.

## EN

### The name of a person outside the foundation in data sent to an external model

**What happened:** during the review of the records on 3 November, the tool sent excerpts from the foundation's working files to the DeepSeek model at a confidential computing provider. It replaced the names of people outside the foundation using a private list, which lacked the notary from the founding deed, so his name reached the model in one excerpt. We have no data processing agreement with this provider.

**Effects:** one name from the foundation's registration documents was processed by an external provider. The connection was verified by attestation, and the provider states that it does not retain request content. The name also appeared in the model's reasoning in the private review tool.

**Cause:** protection relied only on a list of names, which was incomplete; there was no second, independent check before sending.

**Fix:** with the founder's consent the name is on the list, the models' reasoning in the review tool goes through the same replacement, and the list itself is encrypted and kept outside the repositories.

**Lesson:** before text goes to an external model we need a second check independent of the list, for example a local model that detects personal data, and we send a provider without a data processing agreement only what is necessary.

**Check:** at the next review, excerpts pass a local personal-data check before they are sent.
