import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cactus: IIngredient = {
    name: IngredientName.Cactus,
    image,
    vegetables: 1,
}

export default cactus;