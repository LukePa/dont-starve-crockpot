import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedMussel: IIngredient = {
    name: IngredientName.CookedMussel,
    image,
    fish: 0.5,
}

export default cookedMussel;