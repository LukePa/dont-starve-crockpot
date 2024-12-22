import type { IIngredient } from "../../models/ingredient"
import { IngredientName } from "../../models/ingredientName"
import image from "./image.webp"

const cookedBluecap: IIngredient = {
    name: IngredientName.CookedBluecap,
    image,
    vegetables: 0.5,
}

export default cookedBluecap;