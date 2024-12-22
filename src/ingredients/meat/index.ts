import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const meat: IIngredient = {
    name: IngredientName.Meat,
    image,
    meat: 1,
}

export default meat;