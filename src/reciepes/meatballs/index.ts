import { inedibleNames } from "../../models/ingredientName";
import image from "./image.webp";
import Reciepe from "../../classes/recipe";

export default class Meatballs extends Reciepe {
    name = "Mealballs";
    priority = -1;
    image = image;
    minmeat = 0.1;
    restrictedIngredients = inedibleNames;

    constructor() {
        super();
    }
}
