import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cactusFlower: IIngredient = {
    name: IngredientName.CactusFlower,
    image,
    vegetables: 0.5,
}

export default cactusFlower;