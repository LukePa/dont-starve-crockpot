import Recipe from '../../classes/recipe';
import { IngredientName } from '../../models/ingredientName';
import image from './image.webp';


export class Fishsticks extends Recipe {
    name = 'Fishsticks';
    priority = 10;
    image = image;

    minfish = 0.01;
    allowInedible = false;
    requiredIngredients = [[IngredientName.Twigs]];
}