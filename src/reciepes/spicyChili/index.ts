import Recipe from "../../classes/recipe";
import image from "./image.webp";

export class SpicyChili extends Recipe {
    name = "Spicy Chili";
    priority = 10;
    image = image;

    minvegetables = 1.5;
    minmeat = 1.5;
}