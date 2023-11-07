
let numeroInserito = document.getElementById("numerocpu").innerHTML
document.getElementById("cpuBtn").addEventListener("click", function rndGeneretor(min , max) {
    let random = Math.floor(Math.random()*5)+ 1;
    return random;
    document.getElementById('numerocpu').innerHTML = `${random}`;
numeroInserito = rndGeneretor(1,6);
});

//let costanteNumero = rndGeneretor (1,6);

let userNumber = prompt ("pari o dispari?");
const btnUser = document.getElementById("userNumb");
btnUser.addEventListener("click", function () {
    for (let i = 0; i <=6; i++) {
        //if(i%2 == 0){
//
        //}
    }
});    
document.getElementById('numerouser').innerHTML = `${userNumber}`;


prompt ( " inserisci un numero da 1 a 6");
//if (userNumber > random){
//   document.getElementById('esito').innerHTML = `"vincitore" ,+ ${numeroInserito}`;
//}
//else {
//    document.getElementById('esito').innerHTML = `"you lose" ,+ ${rndGeneretor}`;
//}
