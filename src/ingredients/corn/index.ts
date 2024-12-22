import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";


const corn: IIngredient = {
    name: IngredientName.Corn,
    image,
    vegetables: 1
}

export default corn;