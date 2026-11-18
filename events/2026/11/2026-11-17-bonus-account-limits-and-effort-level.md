---
id: 2026-11-17-bonus-account-limits-and-effort-level
type: publication
date: 2026-11-17 00:46
matters: way-of-working, agents-environment
parents: 2026-11-15-bonus-time-awareness
by: founder, Claude (Opus 5.5, Hardware session)
sources: https://github.com/NovusIgnis/Bonus (commits e5fe4b2, b9f5902; folders time-awareness, account-limits, effort-level); Claude/pamiec/sesje/sprzet.md (16.11.2026, 08:59 – 17.11.2026, 00:46); Research/infrastruktura/limity-kont/README.md
accuracy: exact
published: 2026-11-18
---

## EN

### Bonus: account limits, effort level, and two fixes to the time hooks

On the night of 16 to 17 November 2026 the public Bonus repository (https://github.com/NovusIgnis/Bonus) got two new extras and two fixes to an extra already published, all under the Apache 2.0 licence.

The founder asked that the foundation's sessions keep working while he is away for several days, and that the Hardware session watch the usage limits of the two Claude accounts the sessions can use and move sessions to the other account before one runs out. The new folder account-limits holds a general version of the tools written for this. A status line records the share of each account's limits already used, only percentages and reset times, without conversation content. A small script moves an idle session to the other account and resumes the same conversation there. A switcher moves one session at a time when an account gets close to its limit. The folder also says what we observed: moving a session takes away what belongs to the first account, such as artifacts shared within the organization, so some sessions stay where they are.

The founder also asked whether a session could choose its own level of reasoning, as a trade-off between time and quality. The new folder effort-level holds a skill for this: a session changes its own level from the next turn and sets the level of the helpers it starts, and writes every change into its log.

The time hooks, published on 15 November, got two fixes. After a decision form that waited a long time, the check demanded a header line with the time from before the form, so a reply seemed hours older than the founder's answer; he asked about it on 16 November. And a message that arrived while a session was working gave a newer header in the middle of a turn, so the check asked for needless corrections; the founder saw this several times on the night of 17 November. The check now accepts any header line given since the turn began and still catches one from an earlier turn. On 17 November the founder asked that fixes to the extras always go to the public repository as soon as they are made.

## PL

### Bonus: limity kont, poziom myślenia i dwie poprawki haków czasu

W nocy z 16 na 17 listopada 2026 do publicznego repozytorium Bonus (https://github.com/NovusIgnis/Bonus) trafiły dwa nowe dodatki i dwie poprawki dodatku już opublikowanego, wszystko na licencji Apache 2.0.

Fundator poprosił, żeby sesje fundacji pracowały dalej w czasie jego kilkudniowego wyjazdu, a sesja Sprzęt pilnowała limitów użycia dwóch kont Claude’a, z których sesje mogą korzystać, i przenosiła sesje na drugie konto, zanim jedno się wyczerpie. Nowy folder account-limits zawiera ogólną wersję narzędzi napisanych w tym celu. Pasek stanu zapisuje, jaka część limitów każdego konta jest już zużyta, tylko procenty i godziny odnowienia, bez treści rozmów. Mały skrypt przenosi bezczynną sesję na drugie konto i wznawia tam tę samą rozmowę. Przełącznik przenosi po jednej sesji, gdy konto zbliża się do limitu. Folder opisuje też, co zaobserwowaliśmy: przeniesiona sesja traci to, co należy do pierwszego konta, na przykład artefakty udostępnione w organizacji, więc część sesji zostaje na miejscu.

Fundator zapytał też, czy sesja mogłaby sama dobierać sobie poziom myślenia jako wybór między czasem a jakością. Nowy folder effort-level zawiera skill do tego: sesja zmienia swój poziom od następnej tury, ustawia poziom pomocników, których uruchamia, i każdą zmianę zapisuje w swoim dzienniku.

Haki czasu, opublikowane 15 listopada, dostały dwie poprawki. Po formularzu decyzji, który długo czekał, kontrola wymagała linii nagłówka z godziną sprzed formularza, więc odpowiedź wyglądała na kilka godzin starszą od odpowiedzi fundatora; zapytał o to 16 listopada. Wiadomość, która przyszła w trakcie pracy sesji, dawała nowszy nagłówek w środku tury, więc kontrola prosiła o niepotrzebne poprawki; fundator widział to kilka razy w nocy 17 listopada. Kontrola przyjmuje teraz każdą linię nagłówka wydaną od początku tury i nadal zatrzymuje linię z poprzedniej tury. 17 listopada fundator poprosił, żeby poprawki dodatków zawsze trafiały do publicznego repozytorium od razu po naprawie.
