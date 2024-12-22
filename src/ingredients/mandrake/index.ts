import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const mandrake: IIngredient = {
    name: IngredientName.Mandrake,
    image, 
    vegetables: 1,
}

export default mandrake;