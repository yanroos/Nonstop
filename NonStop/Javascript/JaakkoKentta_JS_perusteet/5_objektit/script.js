var oppilas = {
  etunimi: "Yan",
  sukunimi: "Roos",
  ika: 32,
  luokka: "1B",
  keskiArvo: 6.8
};
//console.log(oppilas);

//console.log(oppilas.etunimi);
oppilas.sukupuoli = "taisteluhelikopteri";
console.log(oppilas);

oppilas.etunimi = "Seppo",
oppilas.sukunimi = "Taalasmaa",
oppilas.sukupuoli = "Mies",
oppilas.ika = 65,
oppilas.luokka = "2B",
oppilas.keskiArvo = 7.5,
console.log(oppilas);

oppilas.etunimi = "Ismo",
oppilas.sukunimi = "Taalasmaa",
oppilas.sukupuoli = "Mies",
oppilas.ika = 42,
oppilas.luokka = "1A",
oppilas.keskiArvo = 5.5,
console.log(oppilas);

oppilas.etunimi = "Ulla",
oppilas.sukunimi = "Taalarimaa",
oppilas.sukupuoli = "Nainen",
oppilas.ika = 64,
oppilas.luokka = "1C",
oppilas.keskiArvo = 7.3,
console.log(oppilas);

console.log(oppilas["ika"]);
//oppilas["kesaloma on ihanaa"] = "asdasd" käytä mielummin aina pistettä

console.log(oppilas.etunimi.length);

var pelaaja = {
  nimi: "Yan Roos",
  ika: 32,
  sukupuoli: "Mies",
  peli: "Apex",
  pelikonsoli: "PC",
};
console.log(pelaaja.peli);
console.log(pelaaja.pelikonsoli);

var koira = {
  Nimi: "Grand duchess Von Helstein",
  kutsumanimi: "Heli",
  vari: "Ruskea",
  rotu: "Parson Russel",
  sijoitus: 3,
};
console.log(koira.vari);
