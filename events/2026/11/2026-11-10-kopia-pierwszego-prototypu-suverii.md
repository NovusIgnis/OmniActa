---
id: 2026-11-10-kopia-pierwszego-prototypu-suverii
typ: dzialanie
data: 2026-11-10 20:56
sprawy: suveria, komputer-agentow
rodzice: 2026-11-10-stol-mikroagenci-suveria-proba
kto: fundator, Claude (Opus 5.5, sesja Sprzęt)
zrodla: Claude/pamiec/sesje/sprzet.md (10.11.2026, 20:34–20:56); Research/infrastruktura/suveria-proba/suveria-zachowaj.sh, suveria-kopia-gpu.sh; Research/infrastruktura/procedury/przebiegi/2026-11-10-kopia-kontenera-suverii.md
stan: obowiazuje
dokladnosc: dokladna
publikacja: 2026-11-11
---

## PL

### Kopia kontenera pierwszego prototypu Suverii

Wieczorem 10 listopada 2026 fundator poprosił, żeby kontener Suverii próbnej, z którym prowadził pierwsze rozmowy, został zachowany i stał się częścią historii fundacji. Tego samego wieczoru powstały dwie kopie. Pierwsza leży na komputerze agentów, jest dostępna tylko dla administratora i zablokowana przed zmianą i usunięciem. Druga leży poza tym komputerem, w jednym pliku zaszyfrowanym hasłem, które zna tylko fundator. Obie zachowują stan sprzed pierwszej zmiany kodu próby. Kopie robią skrypty, które tylko przenoszą pliki i liczą sumy kontrolne: agenci fundacji nie otwierają kontenera i nie czytają rozmów. Za pierwszym razem skrypt zatrzymał się na blokowaniu dowiązania symbolicznego, za drugim wpisane dwa razy hasło się różniło; po poprawce trzeci przebieg się udał.

## EN

### A copy of the container of the first Suveria prototype

On the evening of 10 November 2026 the founder asked that the container of the trial Suveria, in which he held his first conversations, be kept and become part of the foundation's history. Two copies were made that same evening. The first is on the agents' computer, accessible only to the administrator and locked against changes and deletion. The second is outside that computer, in a single file encrypted with a password known only to the founder. Both keep the state from before the first change to the trial's code. The copies are made by scripts that only move files and compute checksums: the foundation's agents do not open the container and do not read the conversations. On the first run the script stopped while locking a symbolic link, on the second the password typed twice did not match; after a fix the third run succeeded.
