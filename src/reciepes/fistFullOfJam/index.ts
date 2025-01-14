import Recipe from "../../classes/recipe";
import image from "./image.webp";


export class FistFullOfJam extends Recipe {
    name = "Fist Full of Jam";
    priority = 0;
    image = image;
    maxmeat = 0;
    maxvegetables = 0;
    minfruit = 0.5;
    allowInedible = false;
}