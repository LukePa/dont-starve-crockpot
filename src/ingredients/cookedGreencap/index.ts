import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";


const cookedGreencap: IIngredient = {
    name: IngredientName.CookedGreencap,
    image,
    vegetables: 0.5,
}

export default cookedGreencap;