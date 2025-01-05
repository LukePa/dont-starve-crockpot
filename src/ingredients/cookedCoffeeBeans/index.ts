import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedCoffeeBeans: IIngredient = {
    name: IngredientName.CookedCoffeeBeans,
    image,
    fruit: 0.5,
}

export default cookedCoffeeBeans;