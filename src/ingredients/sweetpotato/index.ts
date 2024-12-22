import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const sweetPotato: IIngredient = {
    name: IngredientName.SweetPotato,
    image,
    vegetables: 1,
}

export default sweetPotato;