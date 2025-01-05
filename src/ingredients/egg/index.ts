import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const egg: IIngredient = {
    name: IngredientName.Egg,
    image,
    egg: 1,
}

export default egg;