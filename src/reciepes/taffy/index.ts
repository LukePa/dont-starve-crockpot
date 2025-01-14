import Recipe from "../../classes/recipe";
import image from "./image.webp";

export class Taffy extends Recipe {
    name = "Taffy";
    priority = 10;
    image = image;

    minsweeteners = 3;
    maxmeat = 0;
}