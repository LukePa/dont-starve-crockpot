import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const crabbit: IIngredient = {
    name: IngredientName.Crabbit,
    image,
    fish: 0.5,
}

export default crabbit;