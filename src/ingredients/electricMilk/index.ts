import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const electricMilk: IIngredient = {
    name: IngredientName.ElectricMilk,
    image,
    dairy: 1
}

export default electricMilk;