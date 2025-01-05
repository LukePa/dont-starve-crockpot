import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const doydoyEgg: IIngredient = {
    name: IngredientName.DoydoyEgg,
    image,
    egg: 1,
}

export default doydoyEgg;