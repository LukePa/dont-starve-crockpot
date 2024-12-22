import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";


const greencap: IIngredient = {
    name: IngredientName.Greencap,
    image,
    vegetables: 0.5,
}

export default greencap;