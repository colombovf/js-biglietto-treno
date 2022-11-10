let numkm = prompt("Quanti km vuole percorrere?");
let numeta = prompt("Quanti anni ha?");
let tickprice = (0.21 * numkm) + "$";
let tickbam = (2 * tickprice);
let tickad = 2 * tickprice;


if (numeta<18) {
    console.log(tickbam);
}
else if (numeta>65) {
    console.log("mbare" + tickad);
}
else {
    console.log("Il prezzo totale del suo biglietto sarà: " + tickprice);
}

