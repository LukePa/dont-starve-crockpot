import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedTallbirdEgg: IIngredient = {
    name: IngredientName.CookedTallbirdEgg,
    image,
    egg: 4,
}

export default cookedTallbirdEgg;