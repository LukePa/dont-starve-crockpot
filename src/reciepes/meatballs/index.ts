import type { IReciepe } from "../../models/recipe";
import { inedibleNames } from "../../models/ingredientName";
import image from "./image.webp";

const meatballs: IReciepe = {
    name: "Mealballs",
    priority: -1,
    image: image,
    minmeat: 0.1,
    restrictedIngredients: inedibleNames
}

export default meatballs;