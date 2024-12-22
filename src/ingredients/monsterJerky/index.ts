import type { IIngredient } from "../../models/ingredient";
import { IngredientName } from "../../models/ingredientName";
import image from "./image.webp";

const monsterJerky: IIngredient = {
    name: IngredientName.MonsterJerky,
    image,
    meat: 1,
    monster: 1,
}

export default monsterJerky;