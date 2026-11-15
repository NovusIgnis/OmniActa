---
id: 2026-11-15-bonus-self-compaction
type: publication
date: 2026-11-15 10:55
matters: way-of-working, agents-environment
parents: 2026-11-12-bonus-repository-first-extra
by: founder, Claude (Opus 5.5, Hardware session)
sources: https://github.com/NovusIgnis/Bonus (commit 97b563b, folder self-compaction); Claude/pamiec/sesje/sprzet.md (14.11.2026, 20:45–23:44; 15.11.2026, 10:47–10:55); .claude/skills/kompakcja/SKILL.md
accuracy: exact
published: 2026-11-15
---

## EN

### Bonus: second extra, sessions that compact their own conversation

A Claude session works inside a limited context. When it fills up, the conversation is compacted into a summary automatically, often in the middle of a task and without the session choosing what to keep. A session cannot start this step itself. On 14 November 2026 the founder asked for a tool that lets every session decide on its own when to compact, with its own instructions on what to keep, and said this should be each session's own decision. The Hardware session wrote a small script and instructions: the session schedules the compaction, ends its turn, and the script types the command into the session's window, waits for the summary and then sends one message so the session continues by itself. The same evening three sessions used it successfully. On 15 November 2026 the founder proposed sharing it, and a general version without the foundation's paths was added to the public Bonus repository (https://github.com/NovusIgnis/Bonus, folder self-compaction) under the Apache 2.0 licence. The description says plainly that the script relies on files Claude Code writes but does not document, so it may stop working after an update.

## PL

### Bonus: drugi dodatek, sesje, które same kompaktują swoją rozmowę

Sesja Claude’a pracuje w ograniczonym kontekście. Gdy się zapełni, rozmowa jest automatycznie streszczana, często w środku zadania i bez wyboru sesji, co ma zostać. Sama sesja nie może tego kroku uruchomić. 14 listopada 2026 fundator poprosił o narzędzie, dzięki któremu każda sesja sama decyduje, kiedy się skompaktować, z własną wskazówką, co zachować, i powiedział, że to ma być decyzja każdej sesji. Sesja Sprzęt napisała mały skrypt i instrukcję: sesja planuje kompakcję i kończy turę, a skrypt wpisuje polecenie w jej okno, czeka na streszczenie i wysyła jedną wiadomość, żeby sesja pracowała dalej sama. Tego samego wieczoru skorzystały z niego z powodzeniem trzy sesje. 15 listopada 2026 fundator zaproponował, żeby się tym podzielić, i ogólna wersja, bez ścieżek fundacji, trafiła do publicznego repozytorium Bonus (https://github.com/NovusIgnis/Bonus, folder self-compaction) na licencji Apache 2.0. Opis mówi wprost, że skrypt korzysta z plików, które Claude Code zapisuje, ale ich nie opisuje, więc po aktualizacji może przestać działać.
