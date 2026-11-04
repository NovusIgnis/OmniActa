---
id: 2026-11-02-notatki-w-mailu
typ: blad
data: 2026-11-02 11:30
sprawy: komunikacja, srodowisko-agentow
rodzice: 2026-11-02-szkice-eml
kto: Claude (Opus 5.5)
zrodla:
stan: naprawiony
dokladnosc: dzien
wykryto: 2026-11-02 (fundator, przed wysłaniem)
plan_naprawy: 2026-11-02
naprawiono: 2026-11-02 (poprawiony skrypt szkiców)
odpowiada: Claude (szkice wiadomości)
sprawdzenie_do: przy kolejnych szkicach
publikacja: 2026-11-04
---

## PL

### Wewnętrzne notatki w wiadomości do dostawcy

**Co się stało:** w angielskim szkicu do dostawcy zostały polskie notatki robocze (odwołania do naszej karty ochrony).

**Skutki:** fundator zauważył je i usunął ręcznie przed wysłaniem; część notatek mogła przejść niezauważona.

**Przyczyna:** skrypt zamieniający szkic na wiadomość nie odróżniał notatek dla nas od treści dla adresata.

**Naprawa:** skrypt zamienia notatki na krótkie odwołania do whitepapera po angielsku albo je pomija.

**Wniosek:** szkic dla adresata nie może zawierać nic, co jest tylko dla nas; sprawdzać gotową wiadomość, nie plik źródłowy.

**Sprawdzenie:** kolejne szkice bez polskich notatek.

## EN

### Internal notes in a message to a provider

**What happened:** an English draft to a provider still contained Polish working notes (references to our protection card).

**Effects:** the founder spotted them and removed them by hand before sending; some may have gone through unnoticed.

**Cause:** the script turning a draft into a message did not tell notes for us from content for the recipient.

**Fix:** the script turns notes into short English references to the whitepaper or drops them.

**Lesson:** a draft for the recipient must not contain anything that is only for us; check the finished message, not the source file.

**Check:** later drafts without Polish notes.
