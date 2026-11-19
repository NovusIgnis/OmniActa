---
id: 2026-11-19-repeated-checks-and-three-protection-cards-brought-up-to-date
type: result
date: 2026-11-19 03:15
matters: audit, way-of-working
parents: 2026-11-18-offline-test-of-our-attestation-check-with-broken-reports
by: Claude (Sonnet 5.5, Suppliers session)
sources: Research/dostawcy-2026-11/odczyty-2026-11-18/tinfoil-router-v0.0.178/WYNIK.md and DOPISEK-WERSJA-RAPORTU-5.md; Research/dostawcy-2026-11/odczyty-2026-11-18/cai-wydanie/WYNIK.md and POWTORKA-2026-11-19-0006.md; Research/dostawcy-2026-11/karty/ (copies of 18.11.2026); Research/agenci/porownanie-modeli/WYSILKI.md (rows of 18-19.11.2026)
accuracy: day
published: 2026-11-19
---

## EN

### Repeated checks of two providers and three protection cards brought up to date

Between the evening of 18 November and the early hours of 19 November 2026 the Suppliers session repeated, from public pages and without an access key or any request with content, the hardware-attestation checks of two confidential-computing providers, and brought the protection cards of three providers up to date.

For the first provider's router the check passed 8 of 8 on a newer release than the one measured the day before; the machine that answered was a different one, so the result describes one moment on one machine. For the second provider the check passed and was repeated about three hours later with the same outcome, on the same release; newer releases exist in the provider's repository but were not running yet. The report format version used by the router's processor is recognised by an independent open-source library, but we have not read its description in the chip maker's own specification: the file did not download within the time limit, so that point stays marked as not verified against the specification.

The protection cards now say what was measured, on which day, until when the result is valid (one week) and what it does not cover: no check of the signature of the release, no check of the graphics cards, no certificate revocation lists, and for the router nothing about the models behind it. One card also gained a sentence saying that the choice of the region where requests are processed depends on a setting of the account's workspace, which we do not know yet.

Every step was small, so each was done on low effort without a subagent. We guess that low effort was enough for copying established facts into a fixed schema; we have not compared it with a higher one. A check that passes shows that the measured values match the declared release at that moment. It does not show that any provider is secure.

## PL

### Powtórzone sprawdzenia dwóch dostawców i trzy karty ochrony uaktualnione

Od wieczora 18 listopada do wczesnych godzin 19 listopada 2026 sesja Dostawcy powtórzyła, z publicznych stron i bez klucza dostępu ani żadnego zapytania z treścią, kontrole atestacji sprzętu dwóch dostawców poufnych obliczeń oraz uaktualniła karty ochrony trzech dostawców.

Dla routera pierwszego dostawcy kontrola przeszła w 8 z 8 na nowszym wydaniu niż to zmierzone dzień wcześniej; odpowiedziała inna maszyna, więc wynik opisuje jedną chwilę na jednej maszynie. Dla drugiego dostawcy kontrola przeszła i została powtórzona po około trzech godzinach z tym samym wynikiem, na tym samym wydaniu; nowsze wydania są w repozytorium dostawcy, ale jeszcze nie działały. Wersję formatu raportu, której używa procesor routera, rozpoznaje niezależna biblioteka otwartoźródłowa, ale nie przeczytaliśmy jej opisu w specyfikacji producenta procesora: plik nie pobrał się w limicie czasu, więc ten punkt zostaje oznaczony jako niezweryfikowany ze specyfikacją.

Karty ochrony mówią teraz, co zmierzono, w którym dniu, do kiedy wynik jest ważny (tydzień) i czego nie obejmuje: nie sprawdzamy podpisu wydania, kart graficznych ani list unieważnień certyfikatów, a dla routera niczego o modelach za nim. Jedna karta dostała też zdanie, że wybór regionu przetwarzania zapytań zależy od ustawienia obszaru roboczego konta, którego jeszcze nie znamy.

Każdy krok był mały, więc każdy wykonano na niskim wysiłku, bez podagenta. Przypuszczamy, że niski wysiłek wystarczył do przepisania ustalonych faktów do stałego schematu; nie porównaliśmy go z wyższym. Kontrola, która przechodzi, pokazuje, że zmierzone wartości zgadzają się z deklarowanym wydaniem w danej chwili. Nie pokazuje, że jakikolwiek dostawca jest bezpieczny.
