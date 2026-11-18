---
id: 2026-11-03-limit-bez-pytania
typ: decyzja
data: 2026-11-03 18:40
sprawy: dostawca-confidential-ai, finanse-i-jawnosc
rodzice: 2026-11-02-cai-klucz
kto: fundator
zrodla: Research/dostawcy-2026-11/odpowiedzi/confidential-ai-2026-11-02/test/test_limit.py
uprzedzic: Confidential AI
uprzedzono: 2026-11-06 14:45
stan: zmieniona
dokladnosc: dzien
publikacja: 2026-11-18
---

## PL

### Limit tokenów na kluczu: przyjmujemy ryzyko

**Cel:** wiedzieć, czy limit wydatków i długości zapytań na kluczu testowym chroni przed kosztami.

**Warianty:** dopytać dostawcę albo przyjąć ryzyko.

**Kogo dotyczy:** budżet fundacji.

**Wykonanie:** nasz test przepuścił zapytania na 17 000 i 16 500 tokenów, choć prosiliśmy o limit 16 384, a miesięcznego limitu 20 USD nie da się sprawdzić bez wydania tej kwoty. Fundator zdecydował nie dopytywać: nasze skrypty same ustawiają długość odpowiedzi, a klucz jest tylko w zmiennej środowiskowej. Szkic pytania odłożony.

**Przegląd:** przy pierwszej fakturze sprawdzimy rzeczywisty koszt.

**Zmiana (6.11.2026):** fundator postanowił jednak zapytać, bo chcemy wiedzieć, które zabezpieczenia działają, zanim opiszemy je przyszłym odbiorcom usługi. Pytanie o limit miesięczny dołączyliśmy do kolejnego maila do dostawcy, a pytanie o limit na zapytanie wysłaliśmy tego samego dnia w osobnym dopisku.

## EN

### The token limit on the key: we accept the risk

**Goal:** to know whether the spending and request-length limits on the test key protect against costs.

**Options:** ask the provider again, or accept the risk.

**Who it affects:** the foundation's budget.

**Execution:** our test let through requests of 17,000 and 16,500 tokens, although we had asked for a limit of 16,384, and the monthly limit of 20 USD cannot be checked without spending that amount. The founder decided not to ask: our scripts set the answer length themselves, and the key lives only in an environment variable. The draft question was set aside.

**Review:** we will check the actual cost on the first invoice.

**Change (6 November 2026):** the founder decided to ask after all, because we want to know which safeguards work before we describe them to future users of the service. The question about the monthly limit went into our next message to the provider, and the question about the per-request limit followed the same day in a separate note.
