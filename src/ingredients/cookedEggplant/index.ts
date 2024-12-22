import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedEggplant: IIngredient = {
    name: IngredientName.CookedEggplant,
    image,
    vegetables: 1,
}

export default cookedEggplant;