//Ex1 Non dynamique avec le numero de la div qu'on veut
let derDivPremElem = document.getElementsByTagName('div')[2].firstElementChild;
console.log(derDivPremElem);

//Version dynamique prend d'office la dernière div avec le .lengh-1
let long = document.getElementsByTagName('div').length-1;
let exo1 = document.getElementsByTagName('div')[long].firstElementChild

//Ex2
let derDivDerElem = document.getElementsByTagName('div')[2].lastElementChild;
console.log(derDivDerElem);

//Ex3 fonctionne pas
let ex3 = document.getElementsByTagName('div')[2].firstElementChild.nextElementSibling.firstElementChild;
console.log(ex3);

//Ex4
let ex4 = document.getElementsByTagName('div')[2].lastElementChild.firstElementChild;
console.log(ex4);

//Ex5
let parI = document.getElementsByTagName('i')[0].parentElement
console.log(parI);

//Ex6
parB = document.getElementsByTagName('b')[0].parentElement
console.log(parB);

//Ex7
let ex7 = document.getElementsByTagName('div')[2].firstElementChild.nextElementSibling
console.log(ex7);