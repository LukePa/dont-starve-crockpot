import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const honey: IIngredient = {
    name: IngredientName.Honey,
    image,
    sweeteners: 1,
}

export default honey;