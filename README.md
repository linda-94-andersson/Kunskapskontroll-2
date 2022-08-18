## Deployment
* https://linda-94-andersson.github.io/Kunskapskontroll-2/

## Skills used for this project
* HTML
* JavaScript
* RegEx

## Requirements

Ni ska bygga ett renodlat spel med konsolen i JS. Spelet som ska byggas är Hänga Gubbe eller Hangman, vilket är ett klassiskt spel där man gissar bokstäver på ett ord man inte känner till.

Uppgiften kommer att träna er i att använda Array, Object, att fatta beslut med bl. a if, att manipulera String m.m. Utöver detta så kommer det kräva en del från er vad gäller tolkandet av en kravspecifikation.

Det kommer verkligen få er att levla upp ert sätt att tänka kring problemlösning, något som kommer gynna er avsevärt när vi går vidare i kursen.

### För att uppnå Godkänt är kraven att:

* Fem ord ska finnas med i spelet. Dessa ord är “Programmering”, “Stockholm”, “Studenter”, “Javascript” och “Afterwork”. Notera att dessa ord är svenska och engelska, men använder endast ord från det engelska alfabetet.

* Varje gång programmet startar så skall ett av dessa ord slumpartat väljas, vilket sedan spelet baserar sin gång på.

* Endast en spelare spelar spelet

* Spelaren har 5 försök eller liv på sig att gissa rätt ord

* Spelaren förlorar ett liv när hen väljer en bokstav som inte finns med i det givna ordet

* Varje gång spelaren är ombedd att gissa så skall en gömd sekvens av understreck (_) visas som representerar den totala längden av ordet som skall gissas. För “Afterwork” blir detta “_ _ _ _ _ _ _ _ _”. Utöver detta så skall “Lives left: <number>” visas, som illustrerar hur många försök eller liv spelaren har kvar

* Varje gång en bokstav gissas korrekt så ska sekvensen av gömda bokstäver bytas ut till att reflektera det nu något avslöjade ordet. Om spelaren gissar “r” för “Afterwork” så blir det nu något avslöjade ordet “_ _ _ _ r _ _ r _”.

* När alla liv eller försök är förbrukade eller det korrekta ordet har gissats så avslutas hela spelet med antingen “You have lost! The correct word was <word>” eller “You have won, congratulations!”. Därefter avslutas hela programmet och en browser refresh behövs för att spela spelet igen.

* Att gissa med liten eller stor bokstav ska ej spela någon roll, utan spelet ska hantera det likvärdigt

* Ingen annan validering av inmatning behöver hanteras, utan du kan anta att spelaren alltid matar in exakt en bokstav från det engelska alfabetet, i format av stor eller liten bokstav.

* Klick på “Cancel” i prompt-rutan behöver ej hanteras

* Inget grafiskt interface byggt på HTML eller CSS ska byggas. Endast JS. Detta innebär att det som behövs är grundläggande HTML för att kunna läsa in extern JS via <script src=""></script>. Inget mer behövs.

* Koden ska skrivas i minst en extern JS-fil.

* Inga externa JS-bibliotek som jQuery, lodash eller liknande får lov att användas.

* Leverans av projektet sker via .zip i Canvas. Länk till GitHub kommer ej att tillåtas, men det uppmuntras att ni använder av det som ett verktyg under tiden nu utvecklar. Versionshantering är alltid en bra sak.

### För att uppnå Väl Godkänt är kraven (utöver ovan nämnda krav för Godkänt):

Vi ska nu bygga ut spelet lite för att hantera validering lite bättre. Att användaren matar in fel data i ett program är tyvärr någonting som programmerare ständigt behöver hantera.

* All inmatning som sker ska hanteras som en “giltig” gissning så länge gissningen består av exakt ett tecken som är en bokstav i det engelska alfabetet (detta inkluderar alltså inte siffror/symboler). En ogiltig gissning är alltså en gissning som ej består av en bokstav i det engelska alfabetet, eller en gissning som består av inga tecken eller mer än ett tecken. Om gissningen är “a”  så är den alltså giltig, men om gissningen är “ab”, “3” eller “?” så är den ogiltig. 

* Om gissningen är ogiltig så går spelet till nästa “runda” och användaren kan gissa liksom ingenting hände.

* En lista av giltiga gissningar som ej matchar ordet ska synas på skärmen allt eftersom att de matas in till programmet. Denna lista behöver ej vara unik per gissning, utan flera identiska gissningar kan listas.

* Om spelaren gissar samma bokstav som redan har gissats inkorrekt så ska detta straffa användaren. Varför hantera något som spelaren borde komma ihåg själv? ;)

* Klick på “CANCEL” i inmatningsrutan ska stänga ner programmet och “You have canceled the game” ska visas, vilket kommer avsluta programmet.