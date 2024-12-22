import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const eggplant: IIngredient = {
    name: IngredientName.Eggplant,
    image,
    vegetables: 1,
}

export default eggplant;