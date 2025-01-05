import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const tallbirdEgg: IIngredient = {
    name: IngredientName.TallbirdEgg,
    image,
    egg: 4,
}

export default tallbirdEgg;