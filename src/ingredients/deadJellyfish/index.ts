import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const deadJellyfish: IIngredient = {
    name: IngredientName.DeadJellyfish,
    image,
    fish: 1,
    monster: 1,
}

export default deadJellyfish;