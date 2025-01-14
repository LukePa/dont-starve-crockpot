import Recipe from "../../classes/recipe";
import image from "./image.webp";

export class Pierogi extends Recipe {
    name = "Pierogi";
    priority = 5;
    image = image;

    minegg = 1;
    minmeat = 0.01;
    minvegetables = 0.01;
    allowInedible = false;
}