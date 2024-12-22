import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const asparagus: IIngredient = {
    name: IngredientName.Asparagus,
    image,
    vegetables: 1,
}

export default asparagus;