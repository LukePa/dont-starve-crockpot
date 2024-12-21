import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp"

const morsel: IIngredient = {
    name: IngredientName.Morsel,
    image: image,
    meat: 0.5,
};

export default morsel;