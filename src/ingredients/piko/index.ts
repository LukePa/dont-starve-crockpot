import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const piko: IIngredient = {
    name: IngredientName.Piko,
    image,
}

export default piko;