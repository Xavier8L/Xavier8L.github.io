import {Model} from "../Model/Model";
import {View} from "../View/View";

export class Controller
{
    constructor() {
        this.model = new Model();
        this.view = new View();
    }
}
