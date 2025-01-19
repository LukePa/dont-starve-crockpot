import type { IIngredient } from "../models/ingredient";
import { inedibleNames, type IngredientName } from "../models/ingredientName";

// TODO: Required ingredients should not contribute to min and max value calculations

export default abstract class Recipe {
    abstract name: string;
    abstract image: string;
    abstract priority: number;

    minmeat?: number;
    maxmeat?: number;
    minfish?: number;
    maxfish?: number;
    minegg?: number;
    maxegg?: number;
    minfruit?: number;
    maxfruit?: number;
    minvegetables?: number;
    maxvegetables?: number;
    minsweeteners?: number;
    maxsweeteners?: number;
    minmonster?: number;
    maxmonster?: number;
    mindairy?: number;
    maxdairy?: number;
    minbug?: number;
    maxbug?: number;
    requiredIngredients?: Array<Array<IngredientName>>;
    restrictedIngredients?: Array<IngredientName>;
    allowInedible: boolean = true;

    fitsIngredients(ingredientOne: IIngredient, ingredientTwo: IIngredient, ingredientThree: IIngredient, ingredientFour: IIngredient): boolean {
        if (!this.checkFitsValuesMeat(ingredientOne, ingredientTwo, ingredientThree, ingredientFour)) return false;
        if (!this.checkFitsValuesFish(ingredientOne, ingredientTwo, ingredientThree, ingredientFour)) return false;
        if (!this.checkFitsValuesEgg(ingredientOne, ingredientTwo, ingredientThree, ingredientFour)) return false;
        if (!this.checkFitsValuesFruit(ingredientOne, ingredientTwo, ingredientThree, ingredientFour)) return false;
        if (!this.checkFitsValuesVeg(ingredientOne, ingredientTwo, ingredientThree, ingredientFour)) return false;
        if (!this.checkFitsValuesSweetener(ingredientOne, ingredientTwo, ingredientThree, ingredientFour)) return false;
        if (!this.checkFitsValuesMonster(ingredientOne, ingredientTwo, ingredientThree, ingredientFour)) return false;
        if (!this.checkFitsValuesDairy(ingredientOne, ingredientTwo, ingredientThree, ingredientFour)) return false;
        if (!this.checkFitsValuesBug(ingredientOne, ingredientTwo, ingredientThree, ingredientFour)) return false;
        if (!this.checkFitsRequiredIngredients(ingredientOne, ingredientTwo, ingredientThree, ingredientFour)) return false;
        if (!this.checkFitsRestrictedIngredients(ingredientOne, ingredientTwo, ingredientThree, ingredientFour)) return false;
        return true;
    }
    
    checkFitsValuesMeat(ingredientOne: IIngredient, ingredientTwo: IIngredient, ingredientThree: IIngredient, ingredientFour: IIngredient): boolean {
        if (this.minmeat !== undefined || this.maxmeat !== undefined) {
            const summedMeat = (ingredientOne.meat ?? 0) + (ingredientTwo.meat ?? 0) + (ingredientThree.meat ?? 0) + (ingredientFour.meat ?? 0);
            if (this.minmeat !== undefined && summedMeat < this.minmeat) return false;
            if (this.maxmeat !== undefined && summedMeat > this.maxmeat) return false;
        }
        return true;
    }

    checkFitsValuesFish(ingredientOne: IIngredient, ingredientTwo: IIngredient, ingredientThree: IIngredient, ingredientFour: IIngredient): boolean {
        if (this.minfish !== undefined || this.maxfish !== undefined) {
            const summedFish = (ingredientOne.fish ?? 0) + (ingredientTwo.fish ?? 0) + (ingredientThree.fish ?? 0) + (ingredientFour.fish ?? 0);
            if (this.minfish !== undefined && summedFish < this.minfish) return false;
            if (this.maxfish !== undefined && summedFish > this.maxfish) return false;
        }
        return true;
    }

    checkFitsValuesEgg(ingredientOne: IIngredient, ingredientTwo: IIngredient, ingredientThree: IIngredient, ingredientFour: IIngredient): boolean {
        if (this.minegg !== undefined || this.maxegg !== undefined) {
            const summedegg = (ingredientOne.egg ?? 0) + (ingredientTwo.egg ?? 0) + (ingredientThree.egg ?? 0) + (ingredientFour.egg ?? 0);
            if (this.minegg !== undefined && summedegg < this.minegg) return false;
            if (this.maxegg !== undefined && summedegg > this.maxegg) return false;
        }
        return true;
    }

    checkFitsValuesFruit(ingredientOne: IIngredient, ingredientTwo: IIngredient, ingredientThree: IIngredient, ingredientFour: IIngredient): boolean {
        if (this.minfruit !== undefined || this.maxfruit !== undefined) {
            const summedfruit = (ingredientOne.fruit ?? 0) + (ingredientTwo.fruit ?? 0) + (ingredientThree.fruit ?? 0) + (ingredientFour.fruit ?? 0);
            if (this.minfruit !== undefined && summedfruit < this.minfruit) return false;
            if (this.maxfruit !== undefined && summedfruit > this.maxfruit) return false;
        }
        return true;
    }

    checkFitsValuesVeg(ingredientOne: IIngredient, ingredientTwo: IIngredient, ingredientThree: IIngredient, ingredientFour: IIngredient): boolean {
        if (this.minvegetables !== undefined || this.maxvegetables !== undefined) {
            const summedvegetables = (ingredientOne.vegetables ?? 0) + (ingredientTwo.vegetables ?? 0) + (ingredientThree.vegetables ?? 0) + (ingredientFour.vegetables ?? 0);
            if (this.minvegetables !== undefined && summedvegetables < this.minvegetables) return false;
            if (this.maxvegetables !== undefined && summedvegetables > this.maxvegetables) return false;
        }
        return true;
    }

    checkFitsValuesSweetener(ingredientOne: IIngredient, ingredientTwo: IIngredient, ingredientThree: IIngredient, ingredientFour: IIngredient): boolean {
        if (this.minsweeteners !== undefined || this.maxsweeteners !== undefined) {
            const summedsweeteners = (ingredientOne.sweeteners ?? 0) + (ingredientTwo.sweeteners ?? 0) + (ingredientThree.sweeteners ?? 0) + (ingredientFour.sweeteners ?? 0);
            if (this.minsweeteners !== undefined && summedsweeteners < this.minsweeteners) return false;
            if (this.maxsweeteners !== undefined && summedsweeteners > this.maxsweeteners) return false;
        }
        return true;
    }

    checkFitsValuesMonster(ingredientOne: IIngredient, ingredientTwo: IIngredient, ingredientThree: IIngredient, ingredientFour: IIngredient): boolean {
        if (this.minmonster !== undefined || this.maxmonster !== undefined) {
            const summedmonster = (ingredientOne.monster ?? 0) + (ingredientTwo.monster ?? 0) + (ingredientThree.monster ?? 0) + (ingredientFour.monster ?? 0);
            if (this.minmonster !== undefined && summedmonster < this.minmonster) return false;
            if (this.maxmonster !== undefined && summedmonster > this.maxmonster) return false;
        }
        return true;
    }

    checkFitsValuesDairy(ingredientOne: IIngredient, ingredientTwo: IIngredient, ingredientThree: IIngredient, ingredientFour: IIngredient): boolean {
        if (this.mindairy !== undefined || this.maxdairy !== undefined) {
            const summeddairy = (ingredientOne.dairy ?? 0) + (ingredientTwo.dairy ?? 0) + (ingredientThree.dairy ?? 0) + (ingredientFour.dairy ?? 0);
            if (this.mindairy !== undefined && summeddairy < this.mindairy) return false;
            if (this.maxdairy !== undefined && summeddairy > this.maxdairy) return false;
        }
        return true;
    }

    checkFitsValuesBug(ingredientOne: IIngredient, ingredientTwo: IIngredient, ingredientThree: IIngredient, ingredientFour: IIngredient): boolean {
        if (this.minbug !== undefined || this.maxbug !== undefined) {
            const summedbug = (ingredientOne.bug ?? 0) + (ingredientTwo.bug ?? 0) + (ingredientThree.bug ?? 0) + (ingredientFour.bug ?? 0);
            if (this.minbug !== undefined && summedbug < this.minbug) return false;
            if (this.maxbug !== undefined && summedbug > this.maxbug) return false;
        }
        return true;
    }

    checkFitsRestrictedIngredients(ingredientOne: IIngredient, ingredientTwo: IIngredient, ingredientThree: IIngredient, ingredientFour: IIngredient): boolean {
        const ingredientNames = [ingredientOne.name, ingredientTwo.name, ingredientThree.name, ingredientFour.name];

        if (this.restrictedIngredients) {
            const foundRestrictedIngredient = ingredientNames.find(ing => this.restrictedIngredients?.includes(ing));
            if (foundRestrictedIngredient) return false;
        }

        return true;
    }

    checkFitsRequiredIngredients(ingredientOne: IIngredient, ingredientTwo: IIngredient, ingredientThree: IIngredient, ingredientFour: IIngredient): boolean {
        const ingredientNames = [ingredientOne.name, ingredientTwo.name, ingredientThree.name, ingredientFour.name];

        if (this.requiredIngredients) {
            const requiredIngredientsCopy = [...this.requiredIngredients]
            ingredientNames.forEach(name => {
                const foundIndex = requiredIngredientsCopy.findIndex(allowedIngredients => allowedIngredients.includes(name));
                if (foundIndex !== -1) requiredIngredientsCopy.splice(foundIndex, 1);
            })

            return requiredIngredientsCopy.length === 0;
        } else {
            return true;
        }

    }

    checkFitsInedible(ingredientOne: IIngredient, ingredientTwo: IIngredient, ingredientThree: IIngredient, ingredientFour: IIngredient): boolean {
        if (this.allowInedible) return true;

        let ingredientNames = [ingredientOne.name, ingredientTwo.name, ingredientThree.name, ingredientFour.name];

        // Remove ingredient names from the inputted ingredients if they are required.
        if (this.requiredIngredients) {
            this.requiredIngredients.forEach(allowedIngredients => {
                const foundIndex = ingredientNames.findIndex(name => allowedIngredients.includes(name))
                if (foundIndex !== -1) ingredientNames.splice(foundIndex, 1);
            })
        }

        return !ingredientNames.find(ingName => inedibleNames.includes(ingName))
    }
}