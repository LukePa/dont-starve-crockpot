import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const jellyfish: IIngredient = {
    name: IngredientName.Jellyfish,
    image,
    fish: 1,
    monster: 1,
}

export default jellyfish;