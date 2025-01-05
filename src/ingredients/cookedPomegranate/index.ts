import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedPomegranate: IIngredient = {
    name: IngredientName.CookedPomegranate,
    image,
    fruit: 1,
}

export default cookedPomegranate;