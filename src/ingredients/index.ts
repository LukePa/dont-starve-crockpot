import morsel from "./morsel";
import cookedMorsel from "./cookedMorsel";
import carrot from "./carrot";
import cookedCarrot from "./cookedCarrot";
import popcorn from "./popcorn";
import corn from "./corn";
import eggplant from "./eggplant";
import cookedEggplant from "./cookedEggplant";
import type { IIngredient } from "../models/ingredient";
import pumpkin from "./pumpkin";
import cookedPumpkin from "./cookedPumpkin";
import bluecap from "./bluecap";
import cookedBluecap from "./cookedBluecap";
import greencap from "./greencap";
import cookedGreencap from "./cookedGreencap";
import redcap from "./redcap";
import cookedRedcap from "./cookedRedcap";
import mandrake from "./mandrake";
import cookedMandrake from "./cookedMandrake";
import lichen from "./lichen";
import cactus from "./cactus";
import cookedCactus from "./cookedCactus";
import cactusFlower from "./cactusFlower";
import seaweed from "./seaweed";
import cookedSeaweed from "./cookedSeaweed";
import driedSeaweed from "./driedSeaweed";
import sweetPotato from "./sweetpotato";
import cookedSweetPotato from "./cookedSweetpotato";
import aloe from "./aloe";
import cookedAloe from "./cookedAloe";
import asparagus from "./asparagus";
import cookedAsparagus from "./cookedAsparagus";
import radish from "./radish";
import cookedRadish from "./cookedRadish";


const allIngredients: Array<IIngredient> = [
    morsel, cookedMorsel, carrot, cookedCarrot, corn, popcorn, eggplant, cookedEggplant,
    pumpkin, cookedPumpkin, bluecap, cookedBluecap, greencap, cookedGreencap, redcap,
    cookedRedcap, mandrake, cookedMandrake, lichen, cactus, cookedCactus, cactusFlower,
    seaweed, cookedSeaweed, driedSeaweed, sweetPotato, cookedSweetPotato, aloe, cookedAloe,
    asparagus, cookedAsparagus, radish, cookedRadish
]

export default allIngredients;