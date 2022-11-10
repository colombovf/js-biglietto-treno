//Dichiaro tutte le variabili
let numero_km = prompt("Quanti km vuole percorrere?");
let numero_eta = prompt("Quanti anni ha?");
let ticket_price = 0.21 * numero_km;
//Massimo due cifre dopo la virgola
ticket_price = ticket_price.toFixed(2);

//
if (numero_eta<18) {
    let ticket_sconto = ticket_price - (ticket_price * 0.2);
    ticket_sconto = ticket_sconto.toFixed(2);
    console.log("Il prezzo totale del suo biglietto sarà: " + ticket_sconto + "€");
}
else if (numero_eta>65) {
    let ticket_sconto = ticket_price - (ticket_price * 0.4);
    ticket_sconto = ticket_sconto.toFixed(2);
    console.log("Il prezzo totale del suo biglietto sarà: " + ticket_sconto + "€");
}
else {
    console.log("Il prezzo totale del suo biglietto sarà: " + ticket_price);
}

