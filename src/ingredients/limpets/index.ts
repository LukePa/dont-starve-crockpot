import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const limpets: IIngredient = {
    name: IngredientName.Limpets,
    image,
    fish: 0.5,
}

export default limpets;