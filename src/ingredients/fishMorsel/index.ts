import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const fishMorsel: IIngredient = {
    name: IngredientName.FishMorsel,
    image,
    fish: 0.5,
}

export default fishMorsel;