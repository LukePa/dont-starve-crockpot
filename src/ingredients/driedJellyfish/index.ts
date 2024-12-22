import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const driedJellyfish: IIngredient = {
    name: IngredientName.DriedJellyfish,
    image,
    fish: 1,
    monster: 1,
}

export default driedJellyfish;