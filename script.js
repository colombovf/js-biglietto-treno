//Dichiaro tutte le variabili
let numkm = prompt("Quanti km vuole percorrere?");
let numeta = prompt("Quanti anni ha?");
let tickprice = 0.21 * numkm;
//Massimo due cifre dopo la virgola
tickprice = tickprice.toFixed(2);

//
if (numeta<18) {
    let ticksconto = tickprice - (tickprice * 0.2);
    ticksconto = ticksconto.toFixed(2);
    console.log("Il prezzo totale del suo biglietto sarà: " + ticksconto + "€");
}
else if (numeta>65) {
    let ticksconto = tickprice - (tickprice * 0.4);
    ticksconto = ticksconto.toFixed(2);
    console.log("Il prezzo totale del suo biglietto sarà: " + ticksconto + "€");
}
else {
    console.log("Il prezzo totale del suo biglietto sarà: " + tickprice);
}

