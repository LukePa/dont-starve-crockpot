import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const honeycomb: IIngredient = {
    name: IngredientName.Honeycomb,
    image,
    sweeteners: 1,
}

export default honeycomb;