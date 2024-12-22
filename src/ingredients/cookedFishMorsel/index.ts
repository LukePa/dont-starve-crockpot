import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedFishMorsel: IIngredient = {
    name: IngredientName.CookedFishMorsel,
    image,
    fish: 0.5,
}

export default cookedFishMorsel;