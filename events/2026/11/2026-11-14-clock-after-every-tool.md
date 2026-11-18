---
id: 2026-11-14-clock-after-every-tool
type: action
date: 2026-11-14 11:52
matters: way-of-working, agents-environment
parents: 2026-11-04-przerwa-od-odpowiedzi
by: founder, Claude (Opus 5.5, Hardware session)
sources: .claude/hooks/czas.py, .claude/hooks/zegar_narzedzia.py, .claude/hooks/naglowek.py; Claude/pamiec/sesje/sprzet.md (14.11.2026, 11:44–14:47); Research/agenci/proby/2026-11-14-komunikat-w-trakcie.md; Research/agenci/LEKCJE.md
accuracy: exact
published: 2026-11-18
---

## EN

### The agents now see the clock after every step, not only when the founder writes

On 14 November 2026 the founder pointed out that the agent sessions regularly gave times that were estimated rather than read from a clock. The cause: a model has no clock of its own. Until then the time was added to the conversation only when the founder sent a message; after several minutes of work the session added the minutes in its head instead of checking. The same day, with the founder's consent, three changes were made for all sessions: every reply now starts with the date as well as the time (at the founder's request, so that older threads show which day they are from); after each tool call the session receives the current time, at most once a minute; and at the end of each turn a check compares the first line of the reply with the time line and asks for a correction if they differ. The check gave three false alarms on its first day and was corrected the same day. A related test showed that text an agent writes in the middle of its work reaches the founder in full only up to roughly 300 to 420 characters; longer text is replaced by a summary, which in one case turned a hypothesis into a stated result. Sessions now keep such messages to one or two sentences and put everything important in the final reply.

## PL

### Agenci widzą zegar po każdym kroku, a nie tylko wtedy, gdy pisze fundator

14 listopada 2026 fundator zwrócił uwagę, że sesje agentów regularnie podają godziny z szacunku, a nie z zegara. Przyczyna: model nie ma własnego zegara. Do tej pory godzina trafiała do rozmowy tylko wtedy, gdy fundator wysłał wiadomość; po kilku minutach pracy sesja doliczała minuty w głowie, zamiast sprawdzić. Tego samego dnia, za zgodą fundatora, wprowadzono dla wszystkich sesji trzy zmiany: każda odpowiedź zaczyna się teraz także od daty (na prośbę fundatora, żeby w starszych wątkach było widać dzień); po każdym wywołaniu narzędzia sesja dostaje bieżącą godzinę, najwyżej raz na minutę; a na końcu każdej tury sprawdzenie porównuje pierwszą linię odpowiedzi z linią godziny i przy różnicy prosi o poprawkę. Sprawdzenie pierwszego dnia trzy razy zgłosiło fałszywy alarm i zostało poprawione tego samego dnia. Powiązana próba pokazała, że tekst, który agent pisze w trakcie pracy, dochodzi do fundatora w całości tylko do mniej więcej 300–420 znaków; dłuższy jest zastępowany streszczeniem, które w jednym przypadku zrobiło z hipotezy podany wynik. Sesje piszą więc takie komunikaty w jednym, dwóch zdaniach, a wszystko ważne dają w odpowiedzi końcowej.
