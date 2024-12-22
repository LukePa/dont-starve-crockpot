import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";


const carrot: IIngredient = {
    name: IngredientName.Carrot,
    image: image,
    vegetables: 1,
}

export default carrot;