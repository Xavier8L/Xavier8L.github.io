export class Model
{
    constructor()
    {
        let spelActief = false;
        let actieveSpeler = 0;
        let spelBord = [];
        let kleurSpeler = [];
        kleurSpeler[1] = "rood";
        kleurSpeler[2] = "geel";


        let ds = document.getElementById("game_table");
        for (let rij = 0; rij <= 5; rij++) {
            this.tr = document.createElement("tr");
            this.tr.id = 'tr' + rij;
            ds.appendChild(tr);
            for (let kolom = 0; kolom <= 6; kolom++) {
                this.td = document.createElement("td");
                this.td.id = 'square_' + rij + '_' + kolom;
                this.td.className = 'board_square';
                tr.appendChild(td);
            }
        }

        let StartGame = document.querySelector('#begin_spel');
        StartGame.addEventListener("click",beginSpel);

        function beginSpel() {

            spelActief = true;
            for (let rij=0; rij<=5; rij++) {
                spelBord[rij] = [];
                for (let kolom=0; kolom<=6; kolom++) {
                    spelBord[rij][kolom] = 0;


                }
            }
            tekenSpelBord();
            actieveSpeler = 1;
            kiesDeBeurt();
        }
    }
}