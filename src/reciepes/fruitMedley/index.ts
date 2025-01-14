import Recipe from "../../classes/recipe";
import image from "./image.webp";

export class FruitMedley extends Recipe { 
    name = "Fruit Medley";
    priority = 0;
    image = image;
    minfruit = 3;
    maxmeat = 0;
    maxvegetables = 0;
}