import type Recipe from "../classes/recipe";
import { AsparagusSoup } from "./asparagusSoup";
import { BaconAndEggs } from "./baconAndEggs";
import { Bisque } from "./bisque";
import ButterMuffin from "./butterMuffin";
import { Caviar } from "./caviar";
import { Coffee } from "./coffee";
import { Dragonpie } from "./dragonpie";
import { Feijoada } from "./feijoada";
import { Fishsticks } from "./fishsticks";
import { FishTacos } from "./fishTacos";
import { FistFullOfJam } from "./fistFullOfJam";
import { FlowerSalad } from "./flowerSalad";
import { FroggleBunwich } from "./froggleBunwich";
import { FruitMedley } from "./fruitMedley";
import { Guacamole } from "./guacamole";
import { GummyCake } from "./gummyCake";
import { HardShellTacos } from "./hardShellTacos";
import { HoneyHam } from "./honeyHam";
import { HoneyNuggets } from "./honeyNuggets";
import { IceCream } from "./iceCream";
import { IcedTea } from "./icedTea";
import { Kabobs } from "./kabobs";
import { MandrakeSoup } from "./mandrakeSoup";
import Meatball from "./meatballs";
import { MeatedNettles } from "./meatedNettles";
import { MeatyStew } from "./meatyStew";
import { Melonsicle } from "./melonsicle";
import { MonsterLasagna } from "./monsterLasagna";
import { NettleRolls } from "./nettleRolls";
import { Pierogi } from "./pierogi";
import { Powdercake } from "./powdercake";
import { PumpkinCookie } from "./pumpkinCookie";
import { Ratatouille } from "./ratatouille";
import { SnakeBoneSoup } from "./snakeBoneSoup";
import { SpicyChili } from "./spicyChili";
import { SpicyVegetableStinger } from "./spicyVegetableStinger";
import { SteamedHamSandwich } from "./steamedHamSandwich";
import { StuffedEggplant } from "./stuffedEggplant";
import { Taffy } from "./taffy";
import { Tea } from "./tea";
import { TrailMix } from "./trailMix";
import { TurkeyDinner } from "./turkeyDinner";
import { Unagi } from "./unagi";
import { Waffles } from "./waffles";
import { WetGoop } from "./wetGoop";

//TODO
// Fill in all details for jelly-O-pop and below

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
    new SnakeBoneSoup(),
    new SpicyVegetableStinger(),
    new SteamedHamSandwich(),
    new Tea(),
    new AsparagusSoup(),
    new Guacamole(),
    new FlowerSalad(),
    new IceCream(),
    new Melonsicle(),
    new SpicyChili(),
    new TrailMix(),
    new Bisque(),
    new Caviar(),
    new Coffee(),
]

export default allRecipes;