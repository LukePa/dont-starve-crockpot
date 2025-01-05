import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const beanBugs: IIngredient = {
    name: IngredientName.BeanBugs,
    image,
    bug: 1,
}

export default beanBugs;