**English** · [Polski](README.pl.md)

# OmniActa

The open records of the Novus Ignis Foundation: a decision log, a register of mistakes and lessons, and the history of the matters we work on. *Acta* is Latin for records of proceedings. The repository delivers what the [foundation's principles whitepaper](https://novusignis.org/en/whitepaper-zasady-fundacji.html) promises in chapter 12 (a decision log, a register of mistakes and lessons, an append-only register) and what the [manifesto](https://novusignis.org/en/manifest.html) promises in point 8.1: we run the foundation the way we would like digital intelligence to run the affairs entrusted to it one day, openly, with reasons for decisions and owning up to mistakes.

Entries are written in Polish and English. The Polish version is the original.

## Publication status

The repository starts on 4 November 2026 with one entry in the register of mistakes and the descriptions of the three matters it belongs to. Earlier entries, including the archive reconstructed from files and recordings, are published in parts once the founder has reviewed and approved them.

## Matters and events

- A **matter** (`sprawy/<id>.md`) is a thread of work, for example “Translations into 18 languages” or “The Suveria protection map”. A matter can **split** into several (the field `z`, “from”, of a new matter points to the one it grew out of), and several matters can **merge** into one (the new matter lists all of them in `z`).
- An **event** (`zdarzenia/<year>/<month>/<id>.md`) is one step in one or more matters. Types: `pomysl` (idea), `decyzja` (decision), `dzialanie` (action), `proba` (trial), `wynik` (result), `blad` (mistake), `korekta` (correction), `publikacja` (publication), `rozdzielenie` (split), `polaczenie` (merge), `raport` (report). The field `rodzice` (“parents”) points to the events an event follows from, which shows how matters evolved.
- A **decision** has the parts from point 12.1 of the principles whitepaper: goal, options, who it affects, execution (with its basis), review.
- A **mistake** has the parts from point 8.1 of the manifesto: what happened, effects, cause, fix, lesson, check. Its header gives the time it was detected (`wykryto`), when the repair plan was made (`plan_naprawy`) and when it was fixed (`naprawiono`), who is responsible (`odpowiada`) and when the fix will be checked (`sprawdzenie_do`). We publish a mistake as soon as it is detected, not in batches; if the fix takes time, we first publish the finding and the repair plan and add the fix later.
- Every entry has a Polish (`## PL`) and an English (`## EN`) text.

## Dates and the publication boundary

- `data` is when the event happened according to our records (Polish time). It is a declaration. `dokladnosc` says how much it is worth: `dokladna` (exact) when the time comes from a verifiable record (a commit, a GitHub Actions run, a message header, a result file); `dzien` (day) when only the day is certain and the time only orders events (Claude's work log was sometimes off by several hours); `przyblizona` (approximate) when the day is uncertain too.
- `publikacja` is the day the entry reached the public repository. This date can be checked in the repository history; we set it on the day we push.
- **Boundary:** the publication of novusignis.org, 31 October 2026, 23:40 CET (GitHub Actions run 41249207037). Earlier entries are an **archive reconstructed later** from files and conversations: they have the field `odtworzono` (when we reconstructed them) and `dokladnosc`.

## Fingerprints, a Merkle graph and the append-only register

Every event has a SHA-256 fingerprint computed from its content (without the field `publikacja`) and from its parents' fingerprints. The whole is therefore a Merkle graph: changing an old entry changes the fingerprints of all later entries that follow from it. `lancuch.jsonl` is an append-only register: each line contains the fingerprint of the previous one, and any change to an entry already recorded is noted openly with a reason. The same mechanism is meant to show how matters evolve in Omniforum.

## Privacy

- People outside the foundation are named by role (for example “the provider's head of product”), not by name, unless they agree.
- Threads with providers are published after notifying them (decision of 1 November 2026): the field `uprzedzic` holds an entry back until `uprzedzono` is filled in.
- `narzedzia/acta.mjs sprawdz` looks for addresses, phone numbers, account numbers, keys and Polish PESEL numbers, and for names from a private list that we keep encrypted outside the repository.
- Entries are prepared by Claude (later by an agent) and approved by the founder; an agent will publish on its own only after a successful trial, which we will describe in the records.

## Tools

```
node narzedzia/acta.mjs sprawdz              # fields, links, dates, privacy, chain
node narzedzia/acta.mjs dopisz [--powod "…"] # append new and changed entries to lancuch.jsonl
node narzedzia/acta.mjs wydanie [--podglad]  # wydanie/acta.json for the website and wydanie/acta.jsonl as a research dataset
```

License: texts CC BY 4.0, tools AGPLv3 (`LICENSE.md`).
