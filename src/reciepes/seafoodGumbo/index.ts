import Recipe from "../../classes/recipe";
import image from "./image.webp";

export class SeafoodGumbo extends Recipe {
    name = "Seafood Gumbo";
    priority = 10;
    image = image;

    minfish = 2;
}