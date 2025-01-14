import Recipe from "../../classes/recipe";
import image from "./image.webp";

export class MonsterLasagna extends Recipe {
    name = "Monster Lasagna";
    priority = 10;
    image = image;
    minmonster = 2;
    allowInedible = false;
}