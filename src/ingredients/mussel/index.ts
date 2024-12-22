import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const mussel: IIngredient = {
    name: IngredientName.Mussel,
    image,
    fish: 0.5,
}

export default mussel;