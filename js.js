/* Kysytään käyttäjältä kilometrit ja verrattavat ajonopeudet kokonaislukuina */
var kilsat = parseInt(prompt("Kerro ajettava etäisyys", "Syötä kilometrit (kokonaislukuna)"));
var vauhti1 = parseInt(prompt("Syötä ensimmäinen verrattava ajonopeus", "km/h (kokonaislukuna)"));
var vauhti2 = parseInt(prompt("Syötä toinen verrattava ajonopeus", "km/h (kokonaislukuna)"));


/* tarkistetaan käyttäjän syötteiden oikeellisuus, ja jatketaan vain, jos jokaisen syötteen pystyy tulkitsemaan Integer -muotoisena*/
if (Number.isInteger(parseInt(kilsat)) && Number.isInteger(parseInt(vauhti1)) && Number.isInteger(parseInt(vauhti2))) {

  if (kilsat.toString().length > 6 || vauhti1.toString().length > 6 || vauhti2.toString().length > 6) {
    alert("Koitit syöttää turhan pitkiä lukuja, yritätkö ryökäle kaataa selaimen?\nPäivitä sivu aloittaaksesi alusta!");  
  } else {

    /* Alustetaan eri muuttujat eri autotyypeille bensankulutuslaskentaa varten*/
    var auto1KulutusAjetullaMatkalla1kmhVauhtia = 3*(kilsat/100);
    var auto2KulutusAjetullaMatkalla1kmhVauhtia = 3.5*(kilsat/100);
    var auto3KulutusAjetullaMatkalla1kmhVauhtia = 4*(kilsat/100);
    var auto1KulutusAjetullaMatkalla1kmhVauhtia2 = 3*(kilsat/100);
    var auto2KulutusAjetullaMatkalla1kmhVauhtia2 = 3.5*(kilsat/100);
    var auto3KulutusAjetullaMatkalla1kmhVauhtia2 = 4*(kilsat/100);

    /*Lasketaan juuri luotuja muuttujia hyväkiskäyttäen bensankulutus ilmoitetulle kilometrimäärälle ensimmäistä verrattavaa ajonopeutta käyttäen*/
    var laskuri = 0;
    while (laskuri < vauhti1) {
      auto1KulutusAjetullaMatkalla1kmhVauhtia = auto1KulutusAjetullaMatkalla1kmhVauhtia * 1.009;
      auto2KulutusAjetullaMatkalla1kmhVauhtia = auto2KulutusAjetullaMatkalla1kmhVauhtia * 1.009;
      auto3KulutusAjetullaMatkalla1kmhVauhtia = auto3KulutusAjetullaMatkalla1kmhVauhtia * 1.009
      laskuri ++;
    }

    /*Lasketaan juuri luotuja muuttujia hyväkiskäyttäen bensankulutus ilmoitetulle kilometrimäärälle toista verrattavaa ajonopeutta käyttäen*/
    laskuri = 0;
    while (laskuri < vauhti2) {
      auto1KulutusAjetullaMatkalla1kmhVauhtia2 = auto1KulutusAjetullaMatkalla1kmhVauhtia2 * 1.009;
      auto2KulutusAjetullaMatkalla1kmhVauhtia2 = auto2KulutusAjetullaMatkalla1kmhVauhtia2 * 1.009;
      auto3KulutusAjetullaMatkalla1kmhVauhtia2 = auto3KulutusAjetullaMatkalla1kmhVauhtia2 * 1.009;
      laskuri ++;
    }

    /*Korjataan liukuluvut kahden desimaalin tarkkuuteen*/
    auto1KulutusAjetullaMatkalla1kmhVauhtia = Math.floor((auto1KulutusAjetullaMatkalla1kmhVauhtia*100))/100;
    auto2KulutusAjetullaMatkalla1kmhVauhtia = Math.floor((auto2KulutusAjetullaMatkalla1kmhVauhtia*100))/100;
    auto3KulutusAjetullaMatkalla1kmhVauhtia = Math.floor((auto3KulutusAjetullaMatkalla1kmhVauhtia*100))/100;
    auto1KulutusAjetullaMatkalla1kmhVauhtia2 = Math.floor((auto1KulutusAjetullaMatkalla1kmhVauhtia2*100))/100;
    auto2KulutusAjetullaMatkalla1kmhVauhtia2 = Math.floor((auto2KulutusAjetullaMatkalla1kmhVauhtia2*100))/100;
    auto3KulutusAjetullaMatkalla1kmhVauhtia2 = Math.floor((auto3KulutusAjetullaMatkalla1kmhVauhtia2*100))/100;

    /*Päivitetään taulujen keskimmäiseen otsikkoon ilmoitettu kilometrimäärä*/
    document.getElementById("km").innerHTML = "("+kilsat+" km)";
    document.getElementById("km2").innerHTML = "("+kilsat+" km)";
    document.getElementById("km3").innerHTML = "("+kilsat+" km)";

    /*Päivitetään taulujen ensimmäiseen sarakkeeseen ensimmäinen verrattava nopeus*/
    document.getElementById("nopeus").innerHTML = vauhti1 +" km/h";
    document.getElementById("2nopeus").innerHTML = vauhti1+" km/h";
    document.getElementById("3nopeus").innerHTML = vauhti1+" km/h";
    /*Päivitetään taulujen ensimmäiseen sarakkeeseen toinen verrattava nopeus*/
    document.getElementById("nopeus2").innerHTML = vauhti2+" km/h";
    document.getElementById("2nopeus2").innerHTML = vauhti2+" km/h";
    document.getElementById("3nopeus2").innerHTML = vauhti2+" km/h";

    /*Lasketaan tauluihin matkohin menevä aika eri nopeuksilla, ja muokataan ne muotoon X h Y min*/
    document.getElementById("auto1Aika1").innerHTML = Math.floor(Math.floor((1/vauhti1)*kilsat*100)/100) +"h " + Math.round((Math.floor((1/vauhti1)*kilsat*100)/100*60) % 60) +"min";
    document.getElementById("auto1Aika2").innerHTML = Math.floor(Math.floor((1/vauhti2)*kilsat*100)/100) +"h " + Math.round((Math.floor((1/vauhti2)*kilsat*100)/100*60) % 60) +"min";
    document.getElementById("auto2Aika1").innerHTML = Math.floor(Math.floor((1/vauhti1)*kilsat*100)/100) +"h " + Math.round((Math.floor((1/vauhti1)*kilsat*100)/100*60) % 60) +"min";
    document.getElementById("auto2Aika2").innerHTML = Math.floor(Math.floor((1/vauhti2)*kilsat*100)/100) +"h " + Math.round((Math.floor((1/vauhti2)*kilsat*100)/100*60) % 60) +"min";
    document.getElementById("auto3Aika1").innerHTML = Math.floor(Math.floor((1/vauhti1)*kilsat*100)/100) +"h " + Math.round((Math.floor((1/vauhti1)*kilsat*100)/100*60) % 60) +"min";
    document.getElementById("auto3Aika2").innerHTML = Math.floor(Math.floor((1/vauhti2)*kilsat*100)/100) +"h " + Math.round((Math.floor((1/vauhti2)*kilsat*100)/100*60) % 60) +"min";

    /*tarkistetaan syötteiden järkevyys, ja kehoiteteaan tarvittaessa menemään junalla*/
    if (auto1KulutusAjetullaMatkalla1kmhVauhtia > 99999) {
      document.getElementById("auto1BensanTarve1").innerHTML = "Mene junalla!";
      document.getElementById("auto2BensanTarve1").innerHTML = "Mene junalla!";
      document.getElementById("auto3BensanTarve1").innerHTML = "Mene junalla!";
    } else {
      document.getElementById("auto1BensanTarve1").innerHTML = auto1KulutusAjetullaMatkalla1kmhVauhtia + " l";
      document.getElementById("auto2BensanTarve1").innerHTML = auto2KulutusAjetullaMatkalla1kmhVauhtia+ " l";
      document.getElementById("auto3BensanTarve1").innerHTML = auto3KulutusAjetullaMatkalla1kmhVauhtia+ " l";
    }
    /*tarkistetaan syötteiden järkevyys, ja kehoiteteaan tarvittaessa menemään junalla*/
    if (auto1KulutusAjetullaMatkalla1kmhVauhtia2 > 99999) {
      document.getElementById("auto1BensanTarve2").innerHTML = "Mene junalla!";
      document.getElementById("auto2BensanTarve2").innerHTML = "Mene junalla!";
      document.getElementById("auto3BensanTarve2").innerHTML = "Mene junalla!";
    } else {
      document.getElementById("auto1BensanTarve2").innerHTML = auto1KulutusAjetullaMatkalla1kmhVauhtia2+ " l";
      document.getElementById("auto2BensanTarve2").innerHTML = auto2KulutusAjetullaMatkalla1kmhVauhtia2+ " l";
      document.getElementById("auto3BensanTarve2").innerHTML = auto3KulutusAjetullaMatkalla1kmhVauhtia2+ " l";
}


}
} else {
  alert("Syötit virheellisiä lukuja, päivitä sivu aloittaaksesi alusta!");
}
