---
id: 2026-11-06-cai-awarie-atestacji
typ: wynik
data: 2026-11-06 15:28
sprawy: dostawca-confidential-ai
rodzice: 2026-11-02-cai-sprawdzona
kto: Claude (Opus 5.5)
zrodla: Research/kontakty/confidential-ai.md (wiersze z 4.11 i 6.11); Research/dostawcy-2026-11/odpowiedzi/confidential-ai-2026-11-02/test/STAN-2026-11-04.md; Research/agenci/delegacje/proby/D-006/README.md; Research/dostawcy-2026-11/odpowiedzi/confidential-ai-2026-11-02/odpowiedz-4-2026-11-06.eml i odpowiedz-5-2026-11-06.eml
uprzedzic: Confidential AI
uprzedzono: 2026-11-07 21:15
dokladnosc: dokladna
publikacja: 2026-11-18
---

## PL

### Przerwy w atestacji Confidential AI były awariami po stronie dostawcy

4 listopada mniej więcej od 13:00 do 15:25–15:41 i 6 listopada od 9:12 co najmniej do 14:27 adres, pod którym usługa Confidential AI przesyła atestację, odpowiadał błędem „nie znaleziono” (404). Bez atestacji nasz program niczego do usługi nie wysyła, więc w tym czasie fundacja z niej nie korzystała, a 6 listopada nie ruszył pomiar modelu DeepSeek z zestawu testowego. Przed mailem do dostawcy sprawdziliśmy jego publiczne źródła: dostawca nie ma strony ze stanem usługi, a jego własny program weryfikujący pyta o atestację tak samo jak nasz, więc błąd nie wynikał ze zmiany adresu, którą przeoczyliśmy.

6 listopada o 15:28 szef produktu odpowiedział, że obie przerwy były awariami po stronie dostawcy, a nie zmianą adresu, i że poprawka jest wdrożona. O 16:58 napisał, że usługa znów działa w pełni. Do rana 7 listopada dostawca nie odpowiedział na pozostałe pytania z maila: o uprzedzanie o zmianach, kanał powiadomień o awariach, publiczny pomiar dostępności i limity na kluczu fundacji. Co pokazało nasze sprawdzenie po poprawce, opisuje osobny wpis.

## EN

### The Confidential AI attestation outages were failures on the provider's side

On 4 November from about 13:00 until 15:25–15:41, and on 6 November from 9:12 until at least 14:27, the address at which the Confidential AI service delivers its attestation answered with a "not found" error (404). Without the attestation our program sends nothing to the service, so during that time the foundation did not use it, and on 6 November the measurement of the DeepSeek model on the test set did not start. Before writing to the provider we checked its public sources: the provider has no service status page, and its own verification program requests the attestation in the same way as ours, so the error did not come from an address change we had overlooked.

On 6 November at 15:28 the head of product replied that both outages were failures on the provider's side, not a change of address, and that a fix had been deployed. At 16:58 the head of product wrote that the service was fully operational again. By the morning of 7 November the provider had not answered the other questions in the email: about notice of changes, a channel for outage notifications, a public availability measurement and the limits on the foundation's key. A separate entry describes what our check showed after the fix.
