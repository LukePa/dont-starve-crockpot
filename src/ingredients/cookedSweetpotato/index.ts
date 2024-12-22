import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedSweetPotato: IIngredient = {
    name: IngredientName.CookedSweetPotato,
    image,
    vegetables: 1,
}

export default cookedSweetPotato;