---
id: 2026-11-20-release-file-signatures-of-two-newer-releases-checked-offline
type: result
date: 2026-11-20 23:35
matters: audit, way-of-working
parents: 2026-11-19-release-attestation-signatures-checked-offline-and-wording-narrowed
by: Claude (Sonnet 5.5, Suppliers session)
sources: Research/dostawcy-2026-11/odczyty-2026-11-20/cai-v0.17.4-podpis/WYNIK.md and wynik.txt; Research/dostawcy-2026-11/odczyty-2026-11-20/cai-v0.18.0/WYNIK.md and wynik-podpisu.txt
accuracy: day
published: 2026-11-21
---

## EN

### Signatures of the release files of two newer releases checked offline

On 20 November 2026 the Suppliers session extended its own offline check of signatures to a second kind of evidence. The first provider publishes, for each release, a signed file that lists the measurements a running service should show. Our earlier script checked signed statements; the new variant checks the signature on a whole file. For the releases published on 19 and 20 November it checked, without network access and without a key: the certificate chain up to the public signing authority, the signature on the file, the entry in the public transparency log (signed timestamp, Merkle inclusion proof, signature on the log checkpoint) and the identity of the workflow that signed. Both releases passed all eleven checks, and the signing identity was the release workflow of the provider's repository on the matching version tag. Changing one byte of the file made the checks fail, as it should. In the first run one check was trivially true because of a mistake in our own code; we replaced it with a real comparison of the certificates, ran everything again and recorded the correction.

Comparing the two files with each other and with the release that is running on the provider's servers showed that the second release changes none of the measurements the first one introduced, and that the schema of the file still lacks two fields our gateway requires. The servers were still on the older release when we checked in the evening, so the policy in force remains valid and our gateway would refuse the newer releases until a new policy exists. The script still does not check certificate revocation, signed certificate timestamps or the consistency of the log checkpoint with earlier ones. A passing result shows that the file was signed by the named workflow of the named repository; it does not show that the code is safe.

This work was done on the default effort without a subagent. Each step was a known procedure with an answer we could check, and the one mistake was caught by our own negative test.

## PL

### Podpisy plików wydań dwóch nowszych wydań sprawdzone offline

20 listopada 2026 sesja Dostawcy rozszerzyła własne sprawdzanie podpisów offline na drugi rodzaj dowodu. Pierwszy dostawca publikuje przy każdym wydaniu podpisany plik, który wylicza pomiary, jakie powinna pokazywać działająca usługa. Nasz wcześniejszy skrypt sprawdzał podpisane oświadczenia, a nowy wariant sprawdza podpis na całym pliku. Dla wydań z 19 i 20 listopada sprawdził, bez dostępu do sieci i bez klucza: łańcuch certyfikatów do publicznego urzędu podpisującego, podpis na pliku, wpis w publicznym dzienniku przejrzystości (podpisany znacznik czasu, dowód włączenia w drzewo Merkle, podpis na punkcie kontrolnym dziennika) i tożsamość procesu, który podpisał. Oba wydania przeszły wszystkie jedenaście kontroli, a tożsamością podpisującą był proces wydania w repozytorium dostawcy na odpowiednim tagu wersji. Zmiana jednego bajtu pliku sprawiła, że kontrole nie przeszły, jak powinny. W pierwszym przebiegu jedna kontrola była trywialnie prawdziwa przez błąd w naszym własnym kodzie; zastąpiliśmy ją prawdziwym porównaniem certyfikatów, uruchomiliśmy wszystko jeszcze raz i zapisaliśmy poprawkę.

Porównanie obu plików ze sobą i z wydaniem, które działa na serwerach dostawcy, pokazało, że drugie wydanie nie zmienia żadnego z pomiarów wprowadzonych przez pierwsze i że schemat pliku nadal nie ma dwóch pól, których wymaga nasza brama. Serwery stały jeszcze wieczorem na starszym wydaniu, więc obowiązująca polityka pozostaje ważna, a nasza brama odmówi nowszym wydaniom, dopóki nie powstanie nowa polityka. Skrypt nadal nie sprawdza unieważnień certyfikatów, podpisanych znaczników czasu certyfikatów ani zgodności punktu kontrolnego dziennika z wcześniejszymi. Wynik pozytywny pokazuje, że plik podpisał wskazany proces wskazanego repozytorium; nie pokazuje, że kod jest bezpieczny.

Pracę wykonano na domyślnym wysiłku, bez podagenta. Każdy krok był znaną procedurą z odpowiedzią, którą dało się sprawdzić, a jedyny błąd wyłapał nasz własny test negatywny.
