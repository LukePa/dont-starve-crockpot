import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const driedSeaweed: IIngredient = {
    name: IngredientName.DriedSeaweed,
    image,
    vegetables: 1,
}

export default driedSeaweed;