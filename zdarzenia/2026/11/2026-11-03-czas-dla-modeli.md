---
id: 2026-11-03-czas-dla-modeli
typ: blad
data: 2026-11-03 23:59
sprawy: sposob-pracy, srodowisko-agentow
rodzice:
kto: fundator, Claude (Opus 5.5)
zrodla: Treści/whitepaper-materialy-i-benchmark.md:218; Claude/pamiec/00-pamiec-rdzen.md:326, :327; .claude/hooks/czas.py; Research/agenci/czas_agenta.py; AGENTS.md (Czas); Research/obietnice/OBIETNICE.md
stan: naprawiony
dokladnosc: dzien
wykryto: 2026-11-03 23:55 (Claude, w rozmowie z fundatorem)
plan_naprawy: 2026-11-03 23:59
naprawiono: 2026-11-04 00:06
odpowiada: Claude (wdrożenie), fundator (zatwierdzenie)
sprawdzenie_do: 2026-11-11
publikacja: 2026-11-04
---

## PL

### Modele nie wiedziały, ile minęło czasu

**Co się stało:** fundator zakładał, że Claude przy każdej wiadomości dostaje od dostawcy aktualną godzinę i informację, ile czasu minęło. Tak nie było: Claude Code podaje datę raz, na początku sesji, bez godziny i bez przerw między wiadomościami, a w długiej sesji ta data się starzeje. Inne modele, z którymi pracujemy, też nie dostawały takiej informacji. Claude wyjaśnił to fundatorowi 3.11 wieczorem.

**Skutki:** model nie wiedział, jak długa była przerwa, więc nie mógł sam zaproponować podsumowania po przerwie ani sprawdzić, co się w tym czasie zmieniło. Whitepaper materiałów i benchmarku (§14) opisuje przekazywanie modelowi informacji o upływie czasu jako praktykę, której w codziennej pracy nie mieliśmy.

**Przyczyna:** nikt tego nie sprawdził. Zasada trafiła do whitepapera 30.10, a jej wykonanie zostało przy założeniu, że informację dostarcza dostawca modelu.

**Naprawa:** zasadę, którą obiecaliśmy, wprowadzamy do powszechnej praktyki w pracy z cyfrową inteligencją i ustawiamy tak, żeby działała domyślnie wszędzie. Zaczynamy od minimum: każdy model dostaje aktualną godzinę i informację, ile minęło od poprzedniej wymiany. Od 3.11 robi to hak w Claude Code, a od 4.11 wspólne narzędzie, z którego korzystają też inne środowiska pracy z modelami i agenci fundacji; dla rozmów w aplikacjach jest gotowe polecenie do instrukcji. W projekcie Suverii ta informacja ma być stałą częścią polecenia systemowego w miejscu rozmowy z modelem.

**Wniosek:** jeśli coś opisujemy w dokumentach jako praktykę, musimy to sprawdzić i mieć na to dowód. Potrzebujemy drogi, na której każda obietnica jest sprawdzana. Dlatego 4.11 zaczęliśmy spisywać obietnice z manifestu i whitepaperów, żeby śledzić ich stan. Na stronie przygotujemy przejrzysty widok tej listy, a jej zmiany będą też w OmniActa.

**Sprawdzenie:** przy pierwszej przerwie ponad godzinę Claude sam proponuje podsumowanie; inne środowiska i agenci podają godzinę z narzędzia; lista obietnic jest opublikowana na stronie.

## EN

### The models did not know how much time had passed

**What happened:** the founder assumed that with every message Claude receives the current time and the time elapsed from its provider. It did not: Claude Code gives the date once, at the start of a session, with no time of day and no gaps between messages, and in a long session that date goes stale. The other models we work with did not receive such information either. Claude explained this to the founder on the evening of 3 November.

**Effects:** the model did not know how long a break had lasted, so it could not offer a summary after a break on its own or check what had changed in the meantime. The materials and benchmark whitepaper (§14) describes giving a model information about the passage of time as a practice we did not have in daily work.

**Cause:** nobody checked. The principle went into the whitepaper on 30 October, and carrying it out rested on the assumption that the model provider supplies this information.

**Fix:** we are bringing the principle we promised into general practice in our work with digital intelligence and setting it up so that it works by default everywhere. We start from the minimum: every model receives the current time and how long it has been since the previous exchange. Since 3 November a hook in Claude Code does this, and since 4 November a shared tool that other environments for working with models and the foundation's agents also use; for conversations in apps there is a ready instruction to paste. In the Suveria design this information is to be a fixed part of the system instruction wherever a person talks with a model.

**Lesson:** if our documents describe something as practice, we must check it and have evidence for it. We need a path on which every promise is checked. That is why on 4 November we began listing the promises from the manifesto and the whitepapers, to track their state. We will prepare a clear view of this list on our website, and its changes will also appear in OmniActa.

**Check:** at the first break of more than an hour Claude offers a summary on its own; other environments and agents report the time from the tool; the list of promises is published on the website.
