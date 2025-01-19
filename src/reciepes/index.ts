import type Recipe from "../classes/recipe";
import { BaconAndEggs } from "./baconAndEggs";
import ButterMuffin from "./butterMuffin";
import { Dragonpie } from "./dragonpie";
import { Feijoada } from "./feijoada";
import { Fishsticks } from "./fishsticks";
import { FishTacos } from "./fishTacos";
import { FistFullOfJam } from "./fistFullOfJam";
import { FroggleBunwich } from "./froggleBunwich";
import { FruitMedley } from "./fruitMedley";
import { GummyCake } from "./gummyCake";
import { HardShellTacos } from "./hardShellTacos";
import { HoneyHam } from "./honeyHam";
import { HoneyNuggets } from "./honeyNuggets";
import { IcedTea } from "./icedTea";
import { Kabobs } from "./kabobs";
import { MandrakeSoup } from "./mandrakeSoup";
import Meatball from "./meatballs";
import { MeatedNettles } from "./meatedNettles";
import { MeatyStew } from "./meatyStew";
import { MonsterLasagna } from "./monsterLasagna";
import { NettleRolls } from "./nettleRolls";
import { Pierogi } from "./pierogi";
import { Powdercake } from "./powdercake";
import { PumpkinCookie } from "./pumpkinCookie";
import { Ratatouille } from "./ratatouille";
import { StuffedEggplant } from "./stuffedEggplant";
import { Taffy } from "./taffy";
import { TurkeyDinner } from "./turkeyDinner";
import { Unagi } from "./unagi";
import { Waffles } from "./waffles";
import { WetGoop } from "./wetGoop";

//  TODO
// Add images for all recipes below Turkey Dinner
// Add image for Piko ingredient

const allRecipes: Recipe[] = [
    new BaconAndEggs(),
    new ButterMuffin(),
    new Dragonpie(),
    new FishTacos(),
    new Fishsticks(),
    new FistFullOfJam(),
    new FroggleBunwich(), 
    new FruitMedley(),
    new HoneyHam(),
    new HoneyNuggets(),
    new Kabobs(),
    new MandrakeSoup(),
    new Meatball(),
    new MeatyStew(),
    new MonsterLasagna(),
    new Pierogi(),
    new Powdercake(),
    new PumpkinCookie(),
    new Ratatouille(),
    new StuffedEggplant(),
    new Taffy(),
    new TurkeyDinner(),
    new Unagi(),
    new Waffles(),
    new WetGoop(),
    new Feijoada(),
    new GummyCake(),
    new HardShellTacos(),
    new IcedTea(),
    new MeatedNettles(),
    new NettleRolls(),
]

export default allRecipes;