import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const monsterMeat: IIngredient = {
    name: IngredientName.MonsterMeat,
    image,
    meat: 1,
    monster: 1,
}

export default monsterMeat;