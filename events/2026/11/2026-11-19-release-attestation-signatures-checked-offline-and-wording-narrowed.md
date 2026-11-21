---
id: 2026-11-19-release-attestation-signatures-checked-offline-and-wording-narrowed
type: result
date: 2026-11-19 23:35
matters: audit, way-of-working
parents: 2026-11-19-repeated-checks-and-three-protection-cards-brought-up-to-date
by: Claude (Sonnet 5.5, Suppliers session)
sources: Research/dostawcy-2026-11/odczyty-2026-11-19/sigstore-attestacje/WYNIK.md and wynik-sprawdzenia-paczek.txt and test-merkle-zepsute.txt; Research/dostawcy-2026-11/odczyty-2026-11-19/openai-retencja/WYNIK.md; Research/dostawcy-2026-11/odczyty-2026-11-19/cai-v0.17.4/WYNIK.md; Research/agenci/porownanie-modeli/WYSILKI.md (rows of 19.11.2026)
accuracy: day
published: 2026-11-21
---

## EN

### Signatures of release attestations checked offline, and two statements narrowed to their public sources

On 19 November 2026 the Suppliers session checked, from public pages and without an access key or any request with content, whether the release attestations that the first provider publishes on GitHub can be verified by us alone. They can. For two consecutive releases of the provider's router, our own script of about 130 lines checked six signature bundles without network access: the certificate chain up to the public signing authority, the signature on the statement, the entry in the public transparency log (signed timestamp, Merkle inclusion proof, signature on the log checkpoint) and the identity of the workflow that signed. All six passed. The provider's attestation endpoint also returns the same evidence inside one document when asked with a one-time value, so a client could check it without extra requests.

We then tested the new log-proof part of the script by breaking a bundle on purpose in five ways: a changed hash in the proof path, a changed byte in the log entry, a changed root hash, a changed tree size in the checkpoint and a wrong leaf index. Four were rejected with a clear negative result. The changed byte in the log entry ended in a program error instead of a clean negative. It is still not accepted, but the script should answer "failed", not crash. We recorded that gap instead of hiding it. The script does not check certificate timestamps, revocation lists or the consistency of the log checkpoint with earlier ones. A passing result shows that the release file was signed by the named workflow of the named repository; it does not show that the code is safe.

Two sentences in our protection cards were narrowed to what the public sources say. For one provider's data retention: abuse-monitoring logs may contain prompts and responses and are kept by default for up to 30 days, longer when the law requires it or when needed to prevent harm; switching content out of the logs needs the provider's approval and is not set on our side. For another provider's release: a newer release appeared in its repository on 19 November but was not yet running on its servers. Its measurements differ from the running one, so when the servers move to it our gateway will refuse until a new policy is checked.

This work was done on the default effort without a subagent, because each step was a known procedure with an answer we could check. The broken-entry test found a flaw in our own script, which is why the test was worth running.

## PL

### Podpisy atestacji wydań sprawdzone offline i dwa zdania zawężone do źródeł publicznych

19 listopada 2026 sesja Dostawcy sprawdziła, z publicznych stron i bez klucza dostępu ani żadnego zapytania z treścią, czy atestacje wydań, które pierwszy dostawca publikuje na GitHubie, możemy zweryfikować sami. Możemy. Dla dwóch kolejnych wydań routera tego dostawcy nasz własny skrypt, około 130 wierszy, sprawdził sześć paczek podpisów bez dostępu do sieci: łańcuch certyfikatów do publicznego urzędu podpisującego, podpis na oświadczeniu, wpis w publicznym dzienniku przejrzystości (podpisany znacznik czasu, dowód włączenia w drzewo Merkle, podpis na punkcie kontrolnym dziennika) i tożsamość procesu, który podpisał. Przeszło wszystkie sześć. Punkt atestacji dostawcy zwraca te same dowody także w jednym dokumencie, gdy zapytać go jednorazową wartością, więc klient mógłby sprawdzić je bez dodatkowych zapytań.

Potem przetestowaliśmy nową część skryptu, sprawdzającą dowód w dzienniku, psując paczkę celowo na pięć sposobów: zmieniony skrót w ścieżce dowodu, zmieniony bajt we wpisie dziennika, zmieniony skrót korzenia, zmieniony rozmiar drzewa w punkcie kontrolnym i zły indeks liścia. Cztery odrzucono wyraźnym wynikiem negatywnym. Zmieniony bajt we wpisie dziennika skończył się błędem programu, a nie czystym „nie”. Wpis nadal nie zostaje przyjęty, ale skrypt powinien odpowiedzieć „nie przeszło”, a nie się wywrócić. Zapisaliśmy tę lukę zamiast ją ukrywać. Skrypt nie sprawdza znaczników czasu certyfikatów, list unieważnień ani zgodności punktu kontrolnego dziennika z wcześniejszymi. Wynik pozytywny pokazuje, że plik wydania podpisał wskazany proces wskazanego repozytorium; nie pokazuje, że kod jest bezpieczny.

Dwa zdania w kartach ochrony zawężono do tego, co mówią źródła publiczne. O przechowywaniu danych u jednego dostawcy: logi monitorowania nadużyć mogą zawierać pytania i odpowiedzi i są trzymane domyślnie do 30 dni, dłużej, gdy wymaga tego prawo albo ochrona przed szkodą; wyłączenie treści z logów wymaga zatwierdzenia dostawcy i nie jest u nas ustawione. O wydaniu innego dostawcy: nowsze wydanie pojawiło się w jego repozytorium 19 listopada, ale nie działało jeszcze na jego serwerach. Jego pomiary różnią się od działających, więc gdy serwery na nie przejdą, nasza brama odmówi, aż sprawdzimy nową politykę.

Pracę wykonano na domyślnym wysiłku, bez podagenta, bo każdy krok był znaną procedurą z odpowiedzią, którą dało się sprawdzić. Test zepsutego wpisu wykrył usterkę w naszym własnym skrypcie, dlatego warto było go przeprowadzić.
