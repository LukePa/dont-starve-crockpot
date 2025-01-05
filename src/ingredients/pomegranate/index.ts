import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const pomegranate: IIngredient = {
    name: IngredientName.Pomegranate,
    image,
    fruit: 1,
}

export default pomegranate;