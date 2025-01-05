import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const banana: IIngredient = {
    name: IngredientName.Banana,
    image,
    fruit: 1,
}

export default banana;