import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp"

const cookedMorsel: IIngredient = {
    name: IngredientName.CookedMorsel,
    image: image,
    meat: 0.5,
};

export default cookedMorsel;