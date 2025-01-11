import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const twig: IIngredient = {
    name: IngredientName.Twigs,
    image,
}

export default twig;