import type { IIngredient } from '../../models/ingredient';
import { IngredientName } from '../../models/ingredientName';
import image from './image.webp';

const cookedRedcap: IIngredient = {
    name: IngredientName.CookedRedcap,
    image,
    vegetables: 0.5,
}

export default cookedRedcap;