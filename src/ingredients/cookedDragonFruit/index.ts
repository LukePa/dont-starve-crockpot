import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedDragonFruit: IIngredient = {
    name: IngredientName.CookedDragonFruit,
    image,
    fruit: 1,
}

export default cookedDragonFruit;