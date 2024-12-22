import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedMandrake: IIngredient = {
    name: IngredientName.CookedMandrake,
    image, 
    vegetables: 1,
}

export default cookedMandrake;