"use strict";

let fizetendo = 0;
let rendeles = document.getElementById("rendeles");

function elkuld(){
    let fajta = document.forms["urlap"]["fajta"].value;
    let size = document.forms["urlap"]["size"].value;
    let kiirFajta = "";
    switch (fajta) {
        case "mar":
            kiirFajta = "Margaréta";
            break;
        case "haw":
            kiirFajta = "Hawai";
            break;
        case "magy":
            kiirFajta = "Magyaros";
            break;        
    }
    let kiirMeret = "";
    switch (meret) {
        case "kicsi":
            kiirMeret = "Kicsi";
            break;
        case "kozepes":
            kiirMeret = "Közepes";
            break;
        case "nagy":
            kiirMeret = "Nagy";
            break;        
    }
    let szoveg = `<p>Az ön rendelése: 1 darab ${kiirMeret} ${kiirFajta} pizza.</p>`;
    szoveg += `<p>Fizetendő összeg: ${fizetendo}Ft</p>`;
    rendeles.innerHTML = szoveg;
}
