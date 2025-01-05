import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const watermelon: IIngredient = {
    name: IngredientName.Watermelon,
    image,
    fruit: 1,
}

export default watermelon;