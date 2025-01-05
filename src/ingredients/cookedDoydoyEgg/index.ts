import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedDoydoyEgg: IIngredient = {
    name: IngredientName.CookedDoydoyEgg,
    image,
    egg: 1,
}

export default cookedDoydoyEgg;