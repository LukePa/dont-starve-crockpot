import Recipe from "../../classes/recipe";
import image from "./image.webp";

export class BaconAndEggs extends Recipe {
    name = "Bacon and Eggs";
    priority = 10;
    image = image;

    minmeat = 1.01;
    minegg = 1.01;
    maxvegetables = 0;
}