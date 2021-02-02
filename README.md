--Функционалностите на апликацијата--
    -Оваа апликација е изработена со цел да помогне во работата на еден библиотекар кој може да има целосен преглед и контрола над книгите кои се содржани во една библиотека.
    -Апликацијата ги овозможува следните функции:
        -Внес на книги во библиотеката(Наслов, Автор, Жанр, Датум на издавање, Залиха)
        -Преглед на сите книги кои се внесени во базата на библиотеката
        -Преглед на книгите според жанр со цел полесна навигација
        -Променување на залихите(доколку се набават повеќе книги, или некоја книга е издадена).

--Поставки кои треба да се направат по преземањето од GitHub--
    -Поради големината на папката node_modules github не дозволува апликацијата целосно да биде прикачена
    -Во главниот директориум и во папката backend недостасува node_modules
    -Со цел апликацијата да работи по симнувањето потребно е во терминал да се повика командата:  npm i

--Начин на стартнување на апликацијата--
    -Функциите на апликацијата се поделени на два дела и тоа: Front-end и Back-end.
    -За да го стартувате Back-end, поточно да го овозможите користењето на базите на податоци, рутите и сл. потребно е со влегување преку терминал во папката "backend" да се стартува серверот на следниот начин:
        Во терминал пишувате:   cd .\backend    (влез во папката "backend")
        За да го стартувате пишувате:   nodemon server  
    -По стартнувањето на позадинскиот дел потребно е да се стартува главниот сервер, поточно сервер фајлот кој ќе ни овозможи користење на front-end и преглед на апликацијата на пребарувач.
    -Со цел да го стартувате овој дел отварате нов терминал и само внесувате:   npm start
    -Back-end фунцкиите се најдуваат на: http://localhost:5000
    -Front-end функциите се најдуваат на: http://localhost:3000

--Организација на апликацијата--

    -Компонентите кои апликацијата ги користи може да се најдат во следната патека: /src/components
    -Во components папката се сместени компонентите кои се користат на Навигационата лента и друга папка наречена "genre" во која се најдуваат компонентите за жанровите од книгите.

    -Околината во која апликацијата се поврзува со базата на податоци (MongoDB) се наоѓа: /backend/.env

    -Моделот на книга е сместен во следната патека:  /backend/models/books.model.js 

    -Рутите кои ги користи апликацијата се сместени во: /backend/routes
    -Во оваа папка се сместени два фајла. Едниот е за рутите од книгите додека другиот е посебен за рутите од жанровите.

    -Поврзувањето на рутите со апликацијата може да се виде во "App.js" кое се најдува на следната патека:   /src/App.js
    



Created By: Никола Димески ИНКИ540