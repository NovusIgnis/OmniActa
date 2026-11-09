---
id: 2026-11-08-bramka-poczty
typ: decyzja
data: 2026-11-08 12:25
sprawy: srodowisko-agentow, komunikacja, komputer-agentow
rodzice: 2026-11-02-szkice-eml, 2026-11-07-praca-agentow-na-laptopie
kto: fundator
zrodla: Claude/pamiec/sesje/poczta.md (8.11.2026, 10:32–19:11, i 9.11.2026 od 08:13); Research/infrastruktura/BRAMKA-POCZTY-ZLECENIE-2026-11-08.md; Research/infrastruktura/BRAMKA-POCZTY-PROJEKT-2026-11-08.md; Research/infrastruktura/bramka-poczty/; Research/agenci/delegacje/oceny/D-020-bramka-szkice-i-odczyt-poczty.md; Research/infrastruktura/POCZTA-WYBOR-2026-11.md; Research/kontakty/migadu.md; Research/kontakty/odpowiedzi/migadu-2026-11-09.eml; Research/kontakty/odpowiedzi/migadu-2026-11-09-2.eml
uprzedzic: Migadu
uprzedzono: 2026-11-09 13:59
stan: obowiazuje
dokladnosc: dokladna
publikacja: 2026-11-09
---

## PL

### Poczta fundacji: szkice same w skrzynce i kierunek przeprowadzki

**Cel:** żeby fundator nie musiał pobierać plików z wiadomościami ani mówić agentom, że coś wysłał albo że ktoś odpisał, a hasło do skrzynki nadal było poza zasięgiem modeli cyfrowej inteligencji. Druga sprawa: gdzie trzymać pocztę fundacji, gdy adresów i domen będzie więcej.

**Warianty:** (1) jak dotąd: agent zapisuje szkic jako plik, fundator go pobiera, otwiera i wysyła, a odpowiedzi przekazuje do rozmowy; (2) osobny program, bramka, bez modelu cyfrowej inteligencji, z własnym hasłem do skrzynki. Wybrany: drugi. Przy poczcie: (A) rozbudowa u obecnego dostawcy, Infomaniak, który liczy opłatę za każdą skrzynkę albo za każdego użytkownika z pakietem pięciu adresów; (B) Migadu, szwajcarska firma z jedną opłatą za konto i z hasłami, którym można odebrać prawo wysyłki. Wybrany kierunek B, pod trzema warunkami: dostawca potwierdzi na piśmie, gdzie są dane i kto ma do nich dostęp; da się ustawić własne reguły filtrowania poczty; próba na domenie suveria.org się powiedzie.

**Kogo dotyczy:** fundatora, sesje Claude'a i osoby, z którymi fundacja koresponduje. Bramka kopiuje dla agentów tylko korespondencję z adresami z listy kontaktów, a listę zmienia wyłącznie fundator.

**Wykonanie:** 8 listopada rano próbna wiadomość z adresu fundacji przeszła u odbiorcy kontrole DKIM, SPF i DMARC. O 12:25 fundator zatwierdził projekt bramki, a od 18:46 bramka działa na komputerze agentów jako osobny użytkownik systemu. Hasło jest zaszyfrowane kluczem tego komputera; konto, na którym pracują sesje Claude'a, nie może go odczytać ani zmienić programu. Bramka nie ma kodu do wysyłania poczty, a zapora pozwala jej łączyć się tylko z serwerem skrzynki. W skrzynce może tylko czytać i dokładać szkice; każde inne polecenie przerywa jej pracę. Szkic zapisany przez agenta jest w folderze Szkice po kilku sekundach. Fundator czyta go w programie pocztowym albo w telefonie i sam klika „Wyślij”. Szkic do adresu spoza listy bramka odrzuca. Pierwszy przebieg skopiował korespondencję z kontaktami od 1 listopada: kopię ma każda z 14 odpowiedzi dostawców, które fundator wcześniej przekazywał ręcznie.

**Odpowiedzi Migadu (9 listopada):** dane skrzynek, kopie zapasowe i dzienniki serwerów są tylko w Europejskim Obszarze Gospodarczym, w centrach danych we Francji, w Holandii i w Niemczech. Podwykonawcą jest OVH, operator centrów danych, a poza nim tylko firmy obsługujące płatności. Treść skrzynek jest zaszyfrowana na dyskach, a połączenia z serwerami są zawsze szyfrowane. Kopie zapasowe Migadu trzyma w praktyce do 14 dni, a umowa dopuszcza do 30. Można wgrać własne reguły filtrowania (Sieve), a hasło z wyłączoną wysyłką nie może wysyłać poczty. Dostępu tylko do odczytu Migadu nie oferuje, więc tego, że bramka niczego w skrzynce nie zmienia, nadal pilnuje sama bramka. Do pierwszej odpowiedzi Migadu dołączyło umowę powierzenia przetwarzania danych (wersja 1.2 z 1 września 2026), a uzupełnienia przysłało tego samego dnia, po naszych pytaniach. Bramka zapisała pierwszą odpowiedź sekundę po jej nadejściu. Według nich dwa pierwsze warunki są spełnione. Tego samego dnia fundator porównał jeszcze pakiet kSuite Business Infomaniaka, który przy stałej cenie jest droższy już od drugiej skrzynki, i potwierdził kierunek B. Trzeci warunek to próba na suveria.org, najwcześniej od 16 listopada.

**Przegląd:** po 30 wykonaniach, w tym 5 szkicach, porównamy zmierzoną skuteczność bramki z przewidywaną (92%). Jeszcze do sprawdzenia: czy kopia wysłanej wiadomości sama wraca do agentów. Po restarcie komputera 9 listopada bramka wstała sama. Przeprowadzka poczty dopiero po próbie i po osobnej decyzji fundatora.

## EN

### The foundation's mail: drafts appear in the mailbox by themselves, and the direction of the move

**Goal:** so that the founder no longer has to download message files or tell the agents that he sent something or that someone replied, while the mailbox password stays out of reach of the digital intelligence models. A second question: where to keep the foundation's mail when there are more addresses and domains.

**Options:** (1) as before: the agent saves a draft as a file, the founder downloads, opens and sends it, and passes replies on to the conversation; (2) a separate program, a gateway, with no digital intelligence model and with its own mailbox password. Chosen: the second. For the mail itself: (A) expanding with the current provider, Infomaniak, which charges for each mailbox or for each user with a bundle of five addresses; (B) Migadu, a Swiss company with one fee per account and with passwords that can have the right to send taken away. Chosen: direction B, under three conditions: the provider confirms in writing where the data is and who has access to it; our own mail filtering rules can be set up; a trial on the suveria.org domain succeeds.

**Who it concerns:** the founder, Claude's sessions and the people the foundation corresponds with. The gateway copies for the agents only correspondence with addresses on the contact list, and only the founder changes that list.

**Execution:** on the morning of 8 November a test message from the foundation's address passed the DKIM, SPF and DMARC checks at the recipient. At 12:25 the founder approved the gateway design, and since 18:46 the gateway has been running on the agents' computer as a separate system user. The password is encrypted with that computer's key; the account Claude's sessions work under cannot read it or change the program. The gateway has no code for sending mail, and the firewall lets it connect only to the mailbox server. In the mailbox it can only read and add drafts; any other command stops it. A draft saved by an agent is in the Drafts folder within a few seconds. The founder reads it in his mail program or on his phone and clicks "Send" himself. The gateway rejects a draft to an address that is not on the list. The first run copied the correspondence with contacts since 1 November: each of the 14 replies from providers that the founder had earlier passed on by hand has a copy.

**Migadu's replies (9 November):** mailbox data, backups and server logs are kept only in the European Economic Area, in data centres in France, the Netherlands and Germany. OVH, the data-centre operator, is a subprocessor; apart from it, only payment providers are. Mailbox content is encrypted at rest, and connections to the servers are always encrypted. In practice Migadu keeps backups for up to 14 days, and the agreement allows up to 30. Our own filtering rules (Sieve) can be uploaded, and a password with sending disabled cannot send mail. Migadu does not offer read-only access, so the gateway itself still makes sure it changes nothing in the mailbox. With its first reply Migadu attached its data processing agreement (version 1.2 of 1 September 2026), and it sent additions the same day in answer to our questions. The gateway saved the first reply one second after it arrived. According to them, the first two conditions are met. The same day the founder also compared Infomaniak's kSuite Business package, which at the regular price costs more from the second mailbox onwards, and confirmed direction B. The third condition is the trial on suveria.org, from 16 November at the earliest.

**Review:** after 30 runs, including 5 drafts, we will compare the gateway's measured effectiveness with the predicted one (92%). Still to be checked: whether a copy of a sent message comes back to the agents by itself. After the computer restarted on 9 November, the gateway started again by itself. The mail moves only after the trial and a separate decision by the founder.
