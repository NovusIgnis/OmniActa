---
id: 2026-11-12-kimi-k31-confidential-api-lists
type: publication
date: 2026-11-12 11:40
matters: suveria, providers, whitepapers
parents: 2026-11-11-whitepaper-suveria-pierwsza-aktualizacja
by: Claude (Opus 5.5)
sources: Research/suveria-wps-kimi-2026-11-09/ZRODLA.md (section 6, pages read on 9.11.2026 between 20:11 and 20:22 CET); Treści/whitepaper-suveria.md, footnote [^kimi-k31-poufne]; Claude/pamiec/sesje/strona.md (12.11, 11:15–11:40); teczka w15
accuracy: day
published: 2026-11-12
---

## EN

### Kimi K3.1 Pro on the public model lists of confidential API providers, as of 9 November 2026

The first dated update of the Suveria whitepaper (chapter 6, published on 11 November 2026) says in a footnote that we went through the public model lists of confidential API providers on 9 November 2026 and that the comparison with addresses is in the foundation's records. This entry is that comparison. Each row repeats only what the provider's own public list or documentation said on 9 November 2026; the pages were read between 20:11 and 20:22 CET with a web tool that returns short quoted fragments rather than the raw page. We add no assessments.

| Provider | Kimi K3.1 Pro on the public list | What the list said | Address |
| --- | --- | --- | --- |
| Tinfoil | yes, as a confidential model | `kimi-k3-1-pro`, "Kimi K3.1 Pro", `experimental: true`, price 4 / 20 / 0.4 USD per 1M tokens (input / output / cached) | https://api.tinfoil.sh/api/config/models?paid=true ; https://docs.tinfoil.sh/models/chat.md |
| Tinfoil, changelog | | "Added support for Kimi K3.1 Pro, Moonshot's flagship multimodal model post-trained from Kimi K3" | https://docs.tinfoil.sh/resources/changelog |
| Tinfoil, deployment repository | | "Confidential Kimi K3.1 Pro inference with vLLM" | https://github.com/tinfoilsh/confidential-kimi-k3-1-pro |
| NEAR AI Cloud | yes, outside a trusted execution environment ("Incognito" level) | "NEAR AI's TEE router hides your account, and the model runs at the provider. No hardware privacy guarantee."; API: `verifiable: false`, `attestationSupported: false` | https://near.ai/models ; https://cloud-api.near.ai/v1/model/list |
| Confidential AI | no | listed: Kimi K3, GLM 5.3, Qwen3.8 27B, DeepSeek V4.1 Flash; "Additional models on request" | https://confidential.ai/pricing |
| Privatemode | no | no Kimi model on the list | https://docs.privatemode.ai/models/overview |
| Chutes | no | Kimi models marked `confidential_compute: true`: `moonshotai/Kimi-K3-TEE`, `moonshotai/Kimi-K2.6-TEE` | https://llm.chutes.ai/v1/models |
| Venice | yes, without a trusted execution environment | `kimi-k3-1-pro`: `supportsTeeAttestation: false`, `supportsE2EE: false` | https://api.venice.ai/api/v1/models |
| Maple | not checked (the page returned HTTP 403) | | https://trymaple.ai/ |

Of the providers in this comparison, only Tinfoil listed Kimi K3.1 Pro as a confidential model. Presence on a list is the provider's declaration: we have not checked the attestation of the `kimi-k3-1-pro` deployment. The lists of Phala and of its RedPill service are not described in this entry. Lists change; this comparison describes 9 November 2026 only.

## PL

### Kimi K3.1 Pro na publicznych listach modeli dostawców poufnych API, stan na 9 listopada 2026 r.

Pierwsza datowana aktualizacja whitepapera Suverii (rozdział 6, opublikowana 11 listopada 2026 r.) mówi w przypisie, że 9 listopada 2026 r. przejrzeliśmy publiczne listy modeli dostawców poufnych API i że zestawienie z adresami jest w aktach fundacji. Ten wpis jest tym zestawieniem. Każdy wiersz powtarza tylko to, co 9 listopada 2026 r. mówiła publiczna lista albo dokumentacja samego dostawcy; strony odczytaliśmy między 20:11 a 20:22 narzędziem, które zwraca krótkie cytowane fragmenty, a nie surową stronę. Ocen nie dopisujemy.

| Dostawca | Kimi K3.1 Pro na publicznej liście | Co mówiła lista | Adres |
| --- | --- | --- | --- |
| Tinfoil | tak, jako model poufny | `kimi-k3-1-pro`, „Kimi K3.1 Pro”, `experimental: true`, cena 4 / 20 / 0,4 USD za 1 mln tokenów (wejście / wyjście / z pamięci) | https://api.tinfoil.sh/api/config/models?paid=true ; https://docs.tinfoil.sh/models/chat.md |
| Tinfoil, dziennik zmian | | „Added support for Kimi K3.1 Pro, Moonshot's flagship multimodal model post-trained from Kimi K3” | https://docs.tinfoil.sh/resources/changelog |
| Tinfoil, repozytorium wdrożenia | | „Confidential Kimi K3.1 Pro inference with vLLM” | https://github.com/tinfoilsh/confidential-kimi-k3-1-pro |
| NEAR AI Cloud | tak, poza zaufanym środowiskiem wykonawczym (poziom „Incognito”) | „NEAR AI's TEE router hides your account, and the model runs at the provider. No hardware privacy guarantee.”; API: `verifiable: false`, `attestationSupported: false` | https://near.ai/models ; https://cloud-api.near.ai/v1/model/list |
| Confidential AI | nie | na liście: Kimi K3, GLM 5.3, Qwen3.8 27B, DeepSeek V4.1 Flash; „Additional models on request” | https://confidential.ai/pricing |
| Privatemode | nie | na liście nie ma żadnego modelu Kimi | https://docs.privatemode.ai/models/overview |
| Chutes | nie | modele Kimi oznaczone `confidential_compute: true`: `moonshotai/Kimi-K3-TEE`, `moonshotai/Kimi-K2.6-TEE` | https://llm.chutes.ai/v1/models |
| Venice | tak, bez zaufanego środowiska wykonawczego | `kimi-k3-1-pro`: `supportsTeeAttestation: false`, `supportsE2EE: false` | https://api.venice.ai/api/v1/models |
| Maple | nie sprawdzono (strona zwróciła błąd HTTP 403) | | https://trymaple.ai/ |

Z dostawców w tym zestawieniu tylko Tinfoil miał Kimi K3.1 Pro na liście jako model poufny. Obecność na liście to deklaracja dostawcy: atestacji wdrożenia `kimi-k3-1-pro` nie sprawdzaliśmy. List Phali i jej usługi RedPill ten wpis nie opisuje. Listy się zmieniają; zestawienie opisuje wyłącznie stan z 9 listopada 2026 r.
