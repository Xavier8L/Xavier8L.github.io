

var spelActief = false;
var actieveSpeler = 0;
var spelBord = [];
var kleurSpeler = [];
kleurSpeler[1] = "rood";
kleurSpeler[2] = "geel";

let gt = document.getElementById("game_table");
for (var rij = 0; rij <= 5; rij++) {
    var tr = document.createElement('tr');
    tr.id = 'tr' + rij;
    gt.appendChild(tr);
    for (var kolom = 0; kolom <= 6; kolom++) {
        var td = document.createElement("td");
        td.id = 'square_' + rij + '_' + kolom;
        td.className = 'board_square';
        tr.appendChild(td);
    }
}


var btnStartGame = document.querySelector('#begin_spel');
btnStartGame.addEventListener("click",beginSpel);

function beginSpel() {

    spelActief = true;
    for (var rij=0; rij<=5; rij++) {
        spelBord[rij] = [];
        for (var kolom=0; kolom<=6; kolom++) {
            spelBord[rij][kolom] = 0;


        }
    }
    tekenSpelBord();
    actieveSpeler = 1;
    kiesDeBeurt();
}


        for (var rij = 5; rij >= 0; rij--) {
            let id = document.getElementById('square_' + rij + '_' + 0);
            id.addEventListener("click", event => laatVallen(0));
        }
        for (var rij = 5; rij >= 0; rij--) {
            let id = document.getElementById('square_' + rij + '_' + 1);
            id.addEventListener("click", event => laatVallen(1));
        }
        for (var rij = 5; rij >= 0; rij--) {
            let id = document.getElementById('square_' + rij + '_' + 2);
            id.addEventListener("click", event => laatVallen(2));
        }
        for (var rij = 5; rij >= 0; rij--) {
            let id = document.getElementById('square_' + rij + '_' + 3);
            id.addEventListener("click", event => laatVallen(3));
        }
        for (var rij = 5; rij >= 0; rij--) {
            let id = document.getElementById('square_' + rij + '_' + 4);
            id.addEventListener("click", event => laatVallen(4));
        }
        for (var rij = 5; rij >= 0; rij--) {
            let id = document.getElementById('square_' + rij + '_' + 5);
            id.addEventListener("click", event => laatVallen(5));
        }
        for (var rij = 5; rij >= 0; rij--) {
            let id = document.getElementById('square_' + rij + '_' + 6);
            id.addEventListener("click", event => laatVallen(6));
        }



function tekenSpelBord() {
    controleerWinnaar();
    for (var kolom=0; kolom<=6; kolom++) {
        for (var rij=0; rij<=5; rij++) {
            document.getElementById('square_'+rij+'_'+kolom).innerHTML ="<span class='piece player"+spelBord[rij][kolom]+" '> </span>";
        }
    }
}

function controleerWinnaar() {
    //check horizontaal link naar rechts
    for (var i=1; i<=2; i++) {

        for (var kolom = 0; kolom <=3; kolom++) {
            for (var rij = 0; rij <=5; rij++) {
                if (spelBord[rij][kolom] == i) {
                    if ((spelBord[rij][kolom+1] == i) && (spelBord[rij][kolom+2] == i) && (spelBord[rij][kolom+3] == i)) {
                        stopSpel(i);
                        return true;
                    }
                }
            }
        }
    }

    //check veritcaal van boven naar beneden
    for (var i=1; i<=2; i++) {

        for (var kolom = 0; kolom <=6; kolom++) {
            for (var rij = 0; rij <=2; rij++) {

                if (spelBord[rij][kolom] == i) {
                    if ((spelBord[rij+1][kolom] == i) && (spelBord[rij+2][kolom] == i) && (spelBord[rij+3][kolom] == i)) {
                        stopSpel(i);
                        return true;
                    }
                }
            }
        }
    }

    //check diagonaal naar beneden
    for (var i=1; i<=2; i++) {
        for (var kolom = 0; kolom <=3; kolom++) {
            for (var rij = 0; rij <=2; rij++) {
                if (spelBord[rij][kolom] == i) {
                    if ((spelBord[rij+1][kolom+1] == i) && (spelBord[rij+2][kolom+2] == i) && (spelBord[rij+3][kolom+3] == i)) {
                        stopSpel(i);
                        return true;
                    }
                }
            }
        }
    }

    //check diagonaal naar boven
    for (var i=1; i<=2; i++) {
        for (var kolom = 0; kolom <=3; kolom++) {
            for (var rij = 3; rij <=5; rij++) {
                if (spelBord[rij][kolom] == i) {
                    if ((spelBord[rij-1][kolom+1] == i) && (spelBord[rij-2][kolom+2] == i) && (spelBord[rij-3][kolom+3] == i)) {
                        stopSpel(i);
                        return true;
                    }
                }
            }
        }
    }
}

/*  zorgt er voor dat het spel niet verder gaat als een speler gewonnen heeft */
let gi =document.getElementById('game_info');
function stopSpel(spelerGewonnen) {
    spelActief = false;
    gi.innerHTML = "De winnaar is: Speler " + spelerGewonnen;
}

/*  laat zien welke speler aan de beurt is */
function kiesDeBeurt() {
    if (spelActief) {
        document.getElementById('game_info').innerHTML = "Het is de beurt aan: Speler " + actieveSpeler + " <span class='player"+actieveSpeler+"'>(" + kleurSpeler[actieveSpeler] + ")</span>";
    }
}


function laatVallen (kolom) {
    if (spelActief) {
        for (var rij = 5; rij >= 0; rij--) {
            if (spelBord[rij][kolom] == 0) {
                spelBord[rij][kolom] = actieveSpeler;
                tekenSpelBord();
                if (actieveSpeler == 1) {
                    actieveSpeler = 2;
                } else {
                    actieveSpeler = 1;
                }

                kiesDeBeurt();
                return true;
            }
        }
    }
}


