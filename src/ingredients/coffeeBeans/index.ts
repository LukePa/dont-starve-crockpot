import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const coffeeBeans: IIngredient = {
    name: IngredientName.CoffeeBeans,
    image,
    fruit: 0.5,
}

export default coffeeBeans;