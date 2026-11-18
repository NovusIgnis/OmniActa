---
id: 2026-11-18-offline-test-of-our-attestation-check-with-broken-reports
type: result
date: 2026-11-18 14:05
matters: audit, way-of-working
parents: 2026-11-02-tinfoil-sprawdzony
by: Claude (Sonnet 5.5, Suppliers session)
sources: Research/dostawcy-2026-11/skrypty-do-publikacji/test_zapisane_raporty.py; Research/dostawcy-2026-11/skrypty-do-publikacji/NOTATKA.md (note of 18.11.2026); Research/agenci/porownanie-modeli/WYSILKI.md (row of 18.11.2026)
accuracy: day
published: 2026-11-18
---

## EN

### An offline test of our own attestation check, with deliberately broken reports

On 18 November 2026 the Suppliers session added an offline test to the copy, prepared for publication, of our script that checks the hardware attestation of a confidential-computing router. The test reads a report stored on 17 November and runs 14 checks. It sends nothing to the provider.

Besides the checks that should pass (the measurement equals the one in the release file, and the key of our connection is bound to the report), the test feeds the script reports that were broken on purpose: one changed byte in the measurement, the debug bit of the policy switched on, and a non-zero privilege level. Each of them must be rejected, and in the run all 14 checks gave the expected result. This matters because a check that can only answer "yes" proves little.

The limits are clear. The test copies the byte positions from the script instead of calling it. It does not verify the chip maker's signature or the certificate chain. It covers one of our three scripts, because we have no stored raw reports for the other two, so those remain untested. The script is not published yet, and publication waits for the founder's decision. A passing test shows that the checks react to these changes; it does not show that any provider is secure.

The test was written by a subagent on medium effort (Sonnet 5.5) and then re-run by the session before it was counted as done. The cost, about 71,550 tokens, is in the effort log. We guess that low effort would have been enough, but we have not tried it.

## PL

### Test offline naszej kontroli atestacji, ze specjalnie zepsutymi raportami

18 listopada 2026 sesja Dostawcy dodała test offline do kopii przygotowanej do publikacji naszego skryptu, który sprawdza atestację sprzętu routera poufnych obliczeń. Test czyta raport zapisany 17 listopada i wykonuje 14 kontroli. Niczego nie wysyła do dostawcy.

Poza kontrolami, które mają wypaść pozytywnie (pomiar równy pomiarowi z pliku wydania, klucz naszego połączenia związany z raportem), test podaje skryptowi raporty zepsute celowo: jeden zmieniony bajt pomiaru, włączony bit debugowania w polityce i niezerowy poziom uprawnień. Każdy z nich ma zostać odrzucony i w przebiegu wszystkie 14 kontroli dało oczekiwany wynik. To ważne, bo kontrola, która umie odpowiedzieć tylko „tak”, niewiele dowodzi.

Granice są jasne. Test kopiuje położenia bajtów ze skryptu zamiast go wywoływać. Nie sprawdza podpisu producenta procesora ani łańcucha certyfikatów. Obejmuje jeden z naszych trzech skryptów, bo dla pozostałych dwóch nie mamy zapisanych surowych raportów, więc zostają nieprzetestowane. Skryptu jeszcze nie opublikowaliśmy, a publikacja czeka na decyzję fundatora. Przejście testu pokazuje, że kontrole reagują na te zmiany, a nie że jakikolwiek dostawca jest bezpieczny.

Test napisał podagent na średnim wysiłku (Sonnet 5.5), a sesja uruchomiła go jeszcze raz, zanim uznała pracę za zrobioną. Koszt, około 71 550 tokenów, jest w dzienniku wysiłków. Przypuszczamy, że wystarczyłby niski wysiłek, ale nie sprawdziliśmy tego.
