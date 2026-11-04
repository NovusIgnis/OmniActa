**English** · [Polski](README.pl.md)

# OmniActa

The open records of the Novus Ignis Foundation: a raw register of events, which includes a decision log and a register of mistakes and lessons. *Acta* is Latin for records of proceedings. The repository delivers what the [foundation's principles whitepaper](https://novusignis.org/en/whitepaper-zasady-fundacji.html) promises in chapter 12 (a decision log, a register of mistakes and lessons, an append-only register) and what the [manifesto](https://novusignis.org/en/manifest.html) promises in point 8.1: we run the foundation the way we would like digital intelligence to run the affairs entrusted to it one day, openly, with reasons for decisions and owning up to mistakes.

The records are here so that anyone can see, as it happens, what goes on in the foundation: what we are working on, what dilemmas we face, what decisions we take and why, what mistakes we make and how we fix them. Entries appear in the order in which things happened. A view by topic, with the chronology of each matter, is to be shown by the [foundation's website](https://novusignis.org) and later by Omniforum (a project).

Entries are written in Polish and English. The Polish version is the original.

## Publication status

The repository started on 4 November 2026 with one entry in the register of mistakes. Earlier entries, including the archive reconstructed from files and recordings, are published in parts once the founder has reviewed and approved them. On the first day the records also held short descriptions of matters (the folder `sprawy/`). After the decision of 4 November 2026 they left the repository with a record in the chain, and their content stays in the repository history.

## Events

- An **event** (`events/<year>/<month>/<id>.md`) is one step in the foundation's work. Types: `pomysl` (idea), `decyzja` (decision), `dzialanie` (action), `proba` (trial), `wynik` (result), `blad` (mistake), `korekta` (correction), `publikacja` (publication), `rozdzielenie` (split), `polaczenie` (merge), `raport` (report). The field `rodzice` (“parents”) points to the events an event follows from.
- The field `sprawy` (“matters”) holds labels of the threads the event belongs to, as its author sees them. The website and Omniforum can build matters from them and group events in their own way. When a thread splits or merges with another, we record that as an event (`rozdzielenie`, `polaczenie`).
- A **decision** has the parts from point 12.1 of the principles whitepaper: goal, options, who it affects, execution (with its basis), review.
- A **mistake** has the parts from point 8.1 of the manifesto: what happened, effects, cause, fix, lesson, check. Its header gives the time it was detected (`wykryto`), when the repair plan was made (`plan_naprawy`) and when it was fixed (`naprawiono`), who is responsible (`odpowiada`) and when the fix will be checked (`sprawdzenie_do`). We publish a mistake as soon as it is detected, not in batches; if the fix takes time, we first publish the finding and the repair plan and add the fix later.
- Every entry has a Polish (`## PL`) and an English (`## EN`) text.

## Documents

`documents/` holds the Polish originals of the manifesto, the four whitepapers and the statute (`documents/statute/`: all versions and the register of changes), as published on [novusignis.org](https://novusignis.org). We keep their history of changes from the publication of the website on 31 October 2026. Earlier versions were sometimes other interpretations of the same assumptions rather than a record of ideas actually considered. Every version of a document has a fingerprint in the chain, so a silent change shows up in the check, and the decision to change a document is an event in the records. Translations are in the [website's repository](https://github.com/NovusIgnis/NovusIgnis.org).

## Contacts and questions

- We record every contact with someone who may receive the foundation's money (a provider, contractor, institution or person) as an event labelled with that party: meetings, conversations, offers, orders and payments. A contact that took place but did not reach the records is a mistake of the foundation: you can ask the board about it, and we publish the answer and an entry on the mistake.
- Threads with providers are published after notifying them. Private individuals are named only with their consent; without it we describe them by role, and anyone may also choose a pseudonym (see “Privacy”).
- Questions and conversation about the records, decisions and documents: [the foundation's discussions on GitHub](https://github.com/NovusIgnis/OmniVox/discussions). Report a missing entry in this repository's [issues](https://github.com/NovusIgnis/OmniActa/issues/new/choose). We answer publicly, and when a question or report changes something, we add an event.

## Dates and the publication boundary

- `data` is when the event happened according to our records (Polish time). It is a declaration. `dokladnosc` says how much it is worth: `dokladna` (exact) when the time comes from a verifiable record (a commit, a GitHub Actions run, a message header, a result file); `dzien` (day) when only the day is certain and the time only orders events (Claude's work log was sometimes off by several hours); `przyblizona` (approximate) when the day is uncertain too.
- `publikacja` is the day the entry reached the public repository. This date can be checked in the repository history; we set it on the day we push.
- **Boundary:** the publication of novusignis.org, 31 October 2026, 23:40 CET (GitHub Actions run 41249207037). Earlier entries are an **archive reconstructed later** from files and conversations: they have the field `odtworzono` (when we reconstructed them) and `dokladnosc`.

## Fingerprints, a Merkle graph and the append-only register

Every event has a SHA-256 fingerprint computed from its content (without the field `publikacja`) and from its parents' fingerprints. The whole is therefore a Merkle graph: changing an old entry changes the fingerprints of all later entries that follow from it. `chain.jsonl` is an append-only register: each line contains the fingerprint of the previous one, and any change to an entry already recorded is noted openly with a reason. Removing an entry is recorded in the chain too, with a reason, and the check detects an entry that disappeared without such a record. The same mechanism is meant to show in Omniforum how the matters built from these events evolve.

## Privacy

- People outside the foundation are described by role (for example “the provider's head of product”) or by a pseudonym of their choice; by name only with their consent.
- Threads with providers are published after notifying them (decision of 1 November 2026): the field `uprzedzic` holds an entry back until `uprzedzono` is filled in.
- `tools/acta.mjs sprawdz` looks for addresses, phone numbers, account numbers, keys and Polish PESEL numbers, and for names from a private list that we keep encrypted outside the repository.
- Entries are prepared by Claude (later by an agent) and approved by the founder; an agent will publish on its own only after a successful trial, which we will describe in the records.

## Tools

```
node tools/acta.mjs sprawdz              # fields, links, dates, privacy, chain
node tools/acta.mjs dopisz [--powod "…"] # append new and changed entries to chain.jsonl
node tools/acta.mjs wydanie [--podglad]  # release/acta.json for the website and release/acta.jsonl as a research dataset
```

License: texts CC BY 4.0, tools AGPLv3 (`LICENSE.md`).
