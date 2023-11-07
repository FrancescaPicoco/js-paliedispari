let parola = prompt("inserisci una parola");  //chiedo la parola all'utente
let result;
let wordReverse= "";                                                       //converto la parola in stringa                           
 
for (let i = parola.length-1 ; i >=0 ; i--) {
    wordReverse += parola[i];
    
}
if (parola == wordReverse) {
    risultato = "palindroma";
}   
else {
    risultato = "non palindroma";
}
