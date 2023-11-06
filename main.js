/*let parola = prompt("inserisci una parola");  //chiedo la parola all'utente

let wordArray= [];                           
wordArray.push(parola);                            //converto la parola in stringa
console.log(wordArray)                           
//const contrario = wordArray.push.reverse()  ;          //inverto la parola
    //console.log(contrario); 
 
    for (let i = parola.length-1 ; i < parola.length-1; i--) {
        const element = parola[i];
        
    }*/
const btn = document.getElementById("cpuNumb");
    element.addEventListener("click", function() {
      document.getElementById("demo").innerHTML = "Hello World";
    });
function rndGeneretor(min, max) {
    return Math.floor(Math.random()*(5-1 +1))+min;    
}
let min
document.getElementById('numeroMostrato').innerHTML = rndGeneretor(1,6);
let numeroInserito = prompt ( " inserisci un numero da 1 a 6");
if (numeroInserito > result){
   document.getElementById('esito').innerHTML = `"vincitore" ,+ ${numeroInserito}`;
}
else {
    document.getElementById('esito').innerHTML = `"you lose" ,+ ${rndGeneretor}`;
}
