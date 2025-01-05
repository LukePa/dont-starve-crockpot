import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedBeanBugs: IIngredient = {
    name: IngredientName.CookedBeanBugs,
    image,
    bug: 1,
}

export default cookedBeanBugs;