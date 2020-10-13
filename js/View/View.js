import {Model} from "../Model/Model.js";

export class View
{
    constructor() {
        this.model= new Model();


        this.spelBord=this.model.spelBord;
        this.spelActief=this.model.spelActief;
        this.actieveSpeler=this.model.actieveSpeler;
        this.kleurSpeler = this.model.kleurSpeler;


        this.gi =document.getElementById('game_info');
    }

    //deze function word start de spel en ook restart spel.
    beginSpel = () => {
        this.spelActief= true;
        for (var rij=0; rij<=5; rij++) {
            this.spelBord[rij] = [];
            for (var kolom=0; kolom<=6; kolom++)
            {
                this.spelBord[rij][kolom] = 0;
            }
        }
        this.tekenKleur();
        this.actieveSpeler = 1;
        this.kiesDeBeurt();
    }


    // teken de kleur in de bord.
    tekenKleur() {
        this.controleerWinnaar();
        for (var kolom=0; kolom<=6; kolom++) {
            for (var rij=0; rij<=5; rij++) {
                document.getElementById('square_'+rij+'_'+kolom).innerHTML ="<span class='piece player"+this.spelBord[rij][kolom]+" '> </span>";
            }
        }
    }

    controleerWinnaar() {
        //check horizontaal link naar rechts.
        for (var i=1; i<=2; i++) {

            for (var kolom = 0; kolom <=3; kolom++) {
                for (var rij = 0; rij <=5; rij++) {
                    if (this.spelBord[rij][kolom] == i) {
                        if ((this.spelBord[rij][kolom+1] == i) && (this.spelBord[rij][kolom+2] == i) && (this.spelBord[rij][kolom+3] == i)) {
                            this.stopSpel(i);
                            return true;
                        }
                    }
                }
            }
        }

        //check veritcaal van boven naar beneden.
        for (var i=1; i<=2; i++) {

            for (var kolom = 0; kolom <=6; kolom++) {
                for (var rij = 0; rij <=2; rij++) {

                    if (this.spelBord[rij][kolom] == i) {
                        if ((this.spelBord[rij+1][kolom] == i) && (this.spelBord[rij+2][kolom] == i) && (this.spelBord[rij+3][kolom] == i)) {
                            this.stopSpel(i);
                            return true;
                        }
                    }
                }
            }
        }

        //check diagonaal naar beneden.
        for (var i=1; i<=2; i++) {
            for (var kolom = 0; kolom <=3; kolom++) {
                for (var rij = 0; rij <=2; rij++) {
                    if (this.spelBord[rij][kolom] == i) {
                        if ((this.spelBord[rij+1][kolom+1] == i) && (this.spelBord[rij+2][kolom+2] == i) && (this.spelBord[rij+3][kolom+3] == i)) {
                            this.stopSpel(i);
                            return true;
                        }
                    }
                }
            }
        }

        //check diagonaal naar boven.
        for (var i=1; i<=2; i++) {
            for (var kolom = 0; kolom <=3; kolom++) {
                for (var rij = 3; rij <=5; rij++) {
                    if (this.spelBord[rij][kolom] == i) {
                        if ((this.spelBord[rij-1][kolom+1] == i) && (this.spelBord[rij-2][kolom+2] == i) && (this.spelBord[rij-3][kolom+3] == i)) {
                            this.stopSpel(i);
                            return true;
                        }
                    }
                }
            }
        }
    }


    // zorgt er voor dat het spel niet verder gaat als een speler gewonnen heeft.
    stopSpel(i)
    {
        this.spelActief = false;
        this.gi.innerHTML = "De winnaar is: <span id='winner'>Speler " + i +"</span>";
    }


    //  laat zien welke speler aan de beurt is.
    kiesDeBeurt()
    {
        if (this.spelActief) {
            this.gi.innerHTML = "Het is de beurt aan: Speler " + this.actieveSpeler + " <span class='player"+this.actieveSpeler+"'>(" + this.kleurSpeler[this.actieveSpeler] + ")</span>";
        }
    }


    //Als de speler klikt, word teken kleur en de naam in de beurt veranderen.
    laatVallen (kolom) {
        // if gameklaar was, word spelActief false, dan kant speler niet meer click.
        if (this.spelActief) {
            for (var rij = 5; rij >= 0; rij--) {
                if (this.spelBord[rij][kolom] == 0) {
                    this.spelBord[rij][kolom] = this.actieveSpeler;
                    this.tekenKleur();
                    if (this.actieveSpeler == 1) {
                        this.actieveSpeler = 2;
                    } else {
                        this.actieveSpeler = 1;
                    }

                    this.kiesDeBeurt();
                    return true;
                }
            }
        }
    }


}