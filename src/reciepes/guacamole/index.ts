import Recipe from "../../classes/recipe";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

export class Guacamole extends Recipe { 
    name = "Guacamole";
    priority = 10;
    image = image;
    
    requiredIngredients = [[IngredientName.Cactus], [IngredientName.Moleworm]]
    maxfruit = 0;
}