import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedEgg: IIngredient = {
    name: IngredientName.CookedEgg,
    image,
    egg: 1,
}

export default cookedEgg;