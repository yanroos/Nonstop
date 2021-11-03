// var name = prompt("Kerro nimesi");
// console.log(name);

// tekstien yhdistely
var titteli = "Mister";
var nimi = "Yan Roos";
var lause = "tervehdys " + titteli + " " + nimi + "!";
console.log(lause);

// tekstin katkaisu
var teksti1 = "Iron man";
var teksti2 = teksti1.slice(0,  4);
console.log(teksti2);

// tekstin muuttaminen suureksi/pieniksi.
var teksti3 = "yan";
var teksti4 = teksti3.toUpperCase();
console.log(teksti4);

var teksti5 = "YaN"
console.log(teksti5.toLowerCase());

// tekstin pituus
console.log(teksti3.length);

alert("kysyn seuraavaksi 4 adjektiivia:");
var text1 = prompt("anna ensimmäinen adjektiivi");
var text2 = prompt("anna toinen adjektiivi");
var text3 = prompt("anna kolmas adjektiivi");
var text4 = prompt("anna neljäs adjektiivi");

var tarina = text1 + " ja " + text2 + " koodarin vasen silmä oli " + text3 + ", kun hän etsi bugia koodista. Päivän fiilis oli " + text4 + ".";
console.log(tarina);
document.write(tarina);
