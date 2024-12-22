import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";


const popcorn: IIngredient = {
    name: IngredientName.Popcorn,
    image,
    vegetables: 1
}

export default popcorn;