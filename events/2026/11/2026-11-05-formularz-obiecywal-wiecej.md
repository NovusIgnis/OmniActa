---
id: 2026-11-05-formularz-obiecywal-wiecej
typ: blad
data: 2026-11-05 19:08
sprawy: omniforum, strona
rodzice: 2026-11-04-formularz-omnivox-dziala
kto: Claude (Opus 5.5), Codex (przegląd), fundator (wstrzymanie i zatwierdzenie tekstów)
zrodla: Research/codex-2026-11-05/omnivox-bezpieczenstwo/RAPORT.md; Claude/pamiec/00-pamiec-rdzen.md (05.11.2026, 20:00–21:14, i 06.11.2026 rano); repozytorium strony, commity 36a229c i 82b997b; repozytorium OmniVox, commit 8c2e85a
stan: naprawiony
dokladnosc: dzien
publikacja: 2026-11-06
wykryto: 2026-11-05 19:08 (Codex, w zleconym przeglądzie bezpieczeństwa)
plan_naprawy: 2026-11-06
naprawiono: 2026-11-06 08:30 (poprawki i nowe teksty na serwerze; formularz czeka na odwieszenie aplikacji)
odpowiada: Claude (kod i teksty formularza)
sprawdzenie_do: przy każdej zmianie formularza
---

## PL

### Formularz OmniVox obiecywał więcej, niż umiał

**Co się stało:** na prośbę Claude'a Codex przejrzał bezpieczeństwo formularza OmniVox, który Claude napisał 4 listopada. Znalazł dwanaście słabych miejsc, w tym pięć poważnych. Filtr danych osobowych dało się obejść, na przykład wpisując numer w adresie internetowym albo nietypowymi znakami. Dopisek, że wpisu nie sprawdzaliśmy, stał pod treścią, więc treść mogła go ukryć, a podpis „Fundacja Novus Ignis” formularz przyjmował bez zastrzeżeń. Strona „Twoje dane” obiecywała, że formularz odrzuci każdy wpis z adresem e-mail, numerem telefonu, PESEL albo numerem rachunku, choć filtr działa według wzorów. Claude potwierdził jedenaście uwag testami Codexa albo w kodzie; jednej nie dało się sprawdzić w Windows.

**Skutki:** żadne znane. Do wstrzymania formularz opublikował jeden wpis: testowy wpis Claude'a z 4 listopada.

**Przyczyna:** Claude sprawdzał formularz tylko własnymi przykładami, a niezależny przegląd przyszedł dzień po starcie. Teksty na stronie opisywały, co filtr miał robić, a nie to, co umie.

**Naprawa:** 5 listopada około 20:30 fundator wstrzymał aplikację formularza na GitHubie. Tego samego wieczoru Claude poprawił kod: filtr sprawdza tekst w kilku postaciach i zna więcej wzorów, dopisek o braku sprawdzenia stoi przed treścią, podpisu z nazwą fundacji albo jej projektu formularz nie przyjmuje, a każda próba liczy się do limitu. Przechodzą 92 sprawdzenia Claude'a, a testy Codexa nie odtwarzają już żadnej z jedenastu uwag do kodu. 6 listopada fundator zatwierdził nowe teksty: filtr działa według wzorów i nie wyłapie wszystkiego, a podpisu nie sprawdzamy. Poprawki i nowe teksty są na serwerze od 6 listopada, 8:30; formularz wróci, gdy fundator odwiesi aplikację.

**Wniosek:** tekst o ochronie danych opisuje to, co narzędzie naprawdę sprawdza. Niezależny przegląd ma największy sens przed startem, nie po nim.

## EN

### The OmniVox form promised more than it could do

**What happened:** at Claude's request, Codex reviewed the security of the OmniVox form, which Claude wrote on 4 November. It found twelve weak points, five of them serious. The personal data filter could be bypassed, for example by putting a number inside a web address or writing it in unusual characters. The note saying that we had not checked the entry stood below the text, so the text could hide it, and the form accepted the signature "Fundacja Novus Ignis" without reservation. The "Your data" page promised that the form would reject every entry with an email address, a phone number, a PESEL number or a bank account number, although the filter works by patterns. Claude confirmed eleven of the points with Codex's tests or in the code; one could not be checked on Windows.

**Effects:** none known. Until it was suspended, the form published one entry: Claude's test entry of 4 November.

**Cause:** Claude checked the form only with its own examples, and the independent review came a day after the start. The texts on the website described what the filter was meant to do, not what it can do.

**Fix:** on 5 November at about 20:30 the founder suspended the form's app on GitHub. The same evening Claude fixed the code: the filter checks the text in several forms and knows more patterns, the note about the missing check stands before the text, the form does not accept a signature with the name of the foundation or one of its projects, and every attempt counts towards the limit. Claude's 92 checks pass, and Codex's tests no longer reproduce any of the eleven points about the code. On 6 November the founder approved new texts: the filter works by patterns and will not catch everything, and we do not verify the signature. The fixes and the new texts have been on the server since 6 November, 8:30; the form will return once the founder unsuspends the app.

**Lesson:** a text about data protection describes what the tool actually checks. An independent review makes the most sense before the start, not after it.
