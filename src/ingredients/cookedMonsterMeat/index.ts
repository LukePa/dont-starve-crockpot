import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const cookedMonsterMeat: IIngredient = {
    name: IngredientName.CookedMonsterMeat,
    image,
    meat: 1,
    monster: 1,
}

export default cookedMonsterMeat;