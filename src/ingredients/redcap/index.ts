import type { IIngredient } from '../../models/ingredient';
import { IngredientName } from '../../models/ingredientName';
import image from './image.webp';

const redcap: IIngredient = {
    name: IngredientName.Redcap,
    image,
    vegetables: 0.5,
}

export default redcap;