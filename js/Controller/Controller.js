import {Model} from "../Model/Model.js";
import {View} from "../View/View.js";

export class Controller
{
    constructor() {
        this.model = new Model();
        this.view = new View();



        this.model.TekenBord();

        const StartGame = document.querySelector('#begin_spel');
        StartGame.addEventListener("click",this.view.beginSpel);


        this.Click();

    }



    Click()
    {
        for (var rij = 5; rij >= 0; rij--) {
            let id = document.getElementById('square_' + rij + '_' + 0);
            id.addEventListener("click", event => this.view.laatVallen(0));
        }
        for (var rij = 5; rij >= 0; rij--) {
            let id = document.getElementById('square_' + rij + '_' + 1);
            id.addEventListener("click", event => this.view.laatVallen(1));
        }
        for (var rij = 5; rij >= 0; rij--) {
            let id = document.getElementById('square_' + rij + '_' + 2);
            id.addEventListener("click", event => this.view.laatVallen(2));
        }
        for (var rij = 5; rij >= 0; rij--) {
            let id = document.getElementById('square_' + rij + '_' + 3);
            id.addEventListener("click", event => this.view.laatVallen(3));
        }
        for (var rij = 5; rij >= 0; rij--) {
            let id = document.getElementById('square_' + rij + '_' + 4);
            id.addEventListener("click", event => this.view.laatVallen(4));
        }
        for (var rij = 5; rij >= 0; rij--) {
            let id = document.getElementById('square_' + rij + '_' + 5);
            id.addEventListener("click", event => this.view.laatVallen(5));
        }
        for (var rij = 5; rij >= 0; rij--) {
            let id = document.getElementById('square_' + rij + '_' + 6);
            id.addEventListener("click", event => this.view.laatVallen(6));
        }
    }


}
