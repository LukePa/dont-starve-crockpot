import type Recipe from "../classes/recipe";
import { BaconAndEggs } from "./baconAndEggs";
import ButterMuffin from "./butterMuffin";
import { Dragonpie } from "./dragonpie";
import { Fishsticks } from "./fishsticks";
import { FishTacos } from "./fishTacos";
import { FistFullOfJam } from "./fistFullOfJam";
import { FroggleBunwich } from "./froggleBunwich";
import { FruitMedley } from "./fruitMedley";
import { HoneyHam } from "./honeyHam";
import { HoneyNuggets } from "./honeyNuggets";
import { Kabobs } from "./kabobs";
import { MandrakeSoup } from "./mandrakeSoup";
import Meatball from "./meatballs";
import { MeatyStew } from "./meatyStew";
import { MonsterLasagna } from "./monsterLasagna";
import { Pierogi } from "./pierogi";
import { Powdercake } from "./powdercake";
import { PumpkinCookie } from "./pumpkinCookie";
import { Ratatouille } from "./ratatouille";
import { StuffedEggplant } from "./stuffedEggplant";
import { Taffy } from "./taffy";
import { TurkeyDinner } from "./turkeyDinner";

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
]

export default allRecipes;