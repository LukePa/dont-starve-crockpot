import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const dragonFruit: IIngredient = {
    name: IngredientName.DragonFruit,
    image,
    fruit: 1,
}

export default dragonFruit;