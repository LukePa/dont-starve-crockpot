import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const wobster: IIngredient = {
    name: IngredientName.Wobster,
    image,
    fish: 2,
}

export default wobster;