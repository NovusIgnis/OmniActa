---
id: 2026-11-10-cai-rtmr3-potwierdzony
typ: wynik
data: 2026-11-10 20:39
sprawy: dostawca-confidential-ai
rodzice: 2026-11-06-cai-rtmr3
kto: Claude (Opus 5.5)
zrodla: Research/dostawcy-2026-11/odpowiedzi/confidential-ai-2026-11-02/weryfikacja-v0.16.9-2026-11-09/WYNIK.md; Research/dostawcy-2026-11/odpowiedzi/confidential-ai-2026-11-02/weryfikacja-klucz-operatora-2026-11-10/WYNIK.md; Research/kontakty/confidential-ai.md (wiersze z 9.11, 15:01–22:24, i z 10.11, 20:37–20:39)
uprzedzic: Confidential AI
uprzedzono: 2026-11-19 08:30
dokladnosc: dokladna
publikacja: 2026-11-21
---

## PL

### Pomiar RTMR3 serwera Confidential AI potwierdzony kluczem operatora

Od 6 listopada pomiar RTMR3 serwera Confidential AI nie zgadzał się z żadną opublikowaną wartością, więc program fundacji nie wysyłał do usługi zapytań. 9 listopada sprawdziliśmy nowsze wydanie dostawcy, v0.16.9. Podpis wydania był poprawny. Obraz serwera i lista dozwolonych programów zgadzały się z wydaniem, a Intel podawał aktualny poziom łatek. RTMR3 i skrótu trasy nie było jednak z czym porównać. O 15:21 fundator poprosił dostawcę o potwierdzenie obu wartości i o publiczny klucz operatora.

Szef produktu dostawcy odpowiedział tego samego dnia o 22:22, a o 22:24 przysłał klucz. 10 listopada między 20:37 a 20:39 sprawdziliśmy go własnym programem. Odcisk klucza zgadzał się z podanym. Z klucza wynika dokładnie ta wartość RTMR3, którą serwer pokazuje od 6 listopada. Tym kluczem jest podpisany manifest tras, a skrót manifestu równa się skrótowi trasy w atestacji. Nie musimy więc wierzyć mailowi: klucz wiąże z serwerem pomiar podpisany przez Intela. RTMR3 i trasę uznajemy za potwierdzone. Dostawca wyjaśnił też, że pomiar RTMR0 zależy od konfiguracji maszyny i nie będzie częścią wydania.

Czego to nie znaczy: według dostawcy klucz operatora pokazuje, kto może zmienić wdrożenie, ale nie chroni danych przed samym operatorem. Taką ochronę dają pomiary obrazu i lista programów z wydania. Dostawca nie publikuje jeszcze oczekiwanych wartości dwóch pól raportu (atrybutów maszyny TDATTRIBUTES i XFAM). Fundator zdecydował, że do czasu osobnej oceny tą drogą idą tylko zadania bez danych osobowych.

## EN

### The RTMR3 measurement of the Confidential AI server confirmed with the operator key

Since 6 November the RTMR3 measurement of the Confidential AI server had matched no published value, so the foundation's program sent no requests to the service. On 9 November we checked the provider's newer release, v0.16.9. The release signature was valid. The server image and the list of allowed programs matched the release, and Intel reported an up-to-date patch level. There was, however, nothing to compare RTMR3 and the route digest with. At 15:21 the founder asked the provider to confirm both values and to publish the operator's public key.

The provider's head of product replied the same day at 22:22 and sent the key at 22:24. On 10 November between 20:37 and 20:39 we checked it with our own program. The key's fingerprint matched the one given. The key yields exactly the RTMR3 value the server has shown since 6 November. The route manifest is signed with this key, and the manifest's digest equals the route digest in the attestation. So we do not have to trust the email: the key ties the Intel-signed measurement to the server. We consider RTMR3 and the route confirmed. The provider also explained that the RTMR0 measurement depends on the machine configuration and will not be part of the release.

What this does not mean: according to the provider, the operator key shows who can change the deployment, but does not protect data from the operator itself. That protection comes from the image measurements and the list of programs in the release. The provider does not yet publish expected values for two fields of the report (the machine attributes TDATTRIBUTES and XFAM). The founder decided that until a separate assessment only tasks without personal data go this way.
