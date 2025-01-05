import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedHalvedCoconut: IIngredient = {
    name: IngredientName.HalvedCoconut,
    image,
    fruit: 1,
}

export default cookedHalvedCoconut;