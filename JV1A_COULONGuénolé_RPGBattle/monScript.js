
// Personnages
// Personnages

Pouario = document.getElementById("Pouario")
Foshi = document.getElementById("Foshi")
Kitch = document.getElementById("Kitch")
Puigi = document.getElementById("Puigi")

//Monstres
//Monstres

BobOmb = document.getElementById("BobOmb")
Goomba = document.getElementById("Goomba")
Morsay = document.getElementById("Morsay")
PvMorsay = document.getElementById("PvMorsay");

//Actions
//Actions

Defense = document.getElementById("Defense")
Attaque = document.getElementById("Attaque")
AttaqueSpe = document.getElementById("AttaqueSpe")







        Pouario.onclick = function() {
            console.log("Tour de Pouario")
        }
        Foshi.onclick = function() {
            console.log("Tour de Foshi")
        }
        Kitch.onclick = function() {
            console.log("Tour de Kitch")
        }
        Puigi.onclick = function() {
            console.log("Tour de Puigi")
        }


Attaque.onclick = function() {
    console.log("Attaque")
}
Defense.onclick = function() {
    console.log("Defense")
}
AttaqueSpe.onclick = function() {
    console.log("AttaqueSpe")
}


        BobOmb.onclick = function() {
            console.log("BobOmb")
        }
        Goomba.onclick = function() {
            console.log("Goomba")
        }
        Morsay.onclick = function() {
            console.log("Morsay")
        }



















Attaque.onclick = function() {
    PvMorsay.innerHTML = parseInt(PvMorsay.innerHTML)-10;
    afficheAction.innerHTML = "Vous avez fait 10 dmg";
}




