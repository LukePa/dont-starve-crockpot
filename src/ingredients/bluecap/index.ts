import type { IIngredient } from "../../models/ingredient"
import { IngredientName } from "../../models/ingredientName"
import image from "./image.webp"

const bluecap: IIngredient = {
    name: IngredientName.Bluecap,
    image,
    vegetables: 0.5,
}

export default bluecap;