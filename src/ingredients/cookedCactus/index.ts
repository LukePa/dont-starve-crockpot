import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedCactus: IIngredient = {
    name: IngredientName.CookedCactus,
    image,
    vegetables: 1,
}

export default cookedCactus;