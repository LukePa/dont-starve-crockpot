import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";


const cookedCarrot: IIngredient = {
    name: IngredientName.CookedCarrot,
    image: image,
    vegetables: 1,
}

export default cookedCarrot;
