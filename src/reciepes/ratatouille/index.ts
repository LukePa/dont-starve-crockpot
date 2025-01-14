import Recipe from "../../classes/recipe";
import image from "./image.webp";

export class Ratatouille extends Recipe {
    name = "Ratatouille";
    priority = 0;
    image = image;

    minvegetables = 0.5;
    maxmeat = 0;
    allowInedible = false;
}