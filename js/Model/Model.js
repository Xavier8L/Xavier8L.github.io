export class Model
{
    constructor()
    {
        this.spelActief = false;

        this.actieveSpeler = 0;

        this.spelBord = [];

        this.kleurSpeler = [];
        this.kleurSpeler[1] = "rood";
        this.kleurSpeler[2] = "geel";

    }

    TekenBord()
    {
        let ds = document.getElementById("game_table");
        for (let rij = 0; rij <= 5; rij++) {
            this.tr = document.createElement("tr");
            this.tr.id = 'tr' + rij;
            ds.appendChild(this.tr);
            for (let kolom = 0; kolom <= 6; kolom++) {
                this.td = document.createElement("td");
                this.td.id = 'square_' + rij + '_' + kolom;
                this.td.className = 'board_square';
                this.tr.appendChild(this.td);
            }
        }
    }





}