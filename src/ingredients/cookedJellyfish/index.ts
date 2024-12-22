import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedJellyfish: IIngredient = {
    name: IngredientName.CookedJellyfish,
    image,
    fish: 1,
    monster: 1,
}

export default cookedJellyfish;