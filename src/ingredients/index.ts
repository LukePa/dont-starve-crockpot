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
import smallJerky from "./smallJerky";
import drumstick from "./drumstick";
import cookedDrumstick from "./cookedDrumstick";
import eel from "./eel";
import cookedEel from "./cookedEel";
import fish from "./fish";
import cookedFish from "./cookedFish";
import frogLegs from "./frogLegs";
import cookedFrogLegs from "./cookedFrogLegs";
import meat from "./meat";
import cookedMeat from "./cookedMeat";
import jerky from "./jerky";
import monsterMeat from "./monsterMeat";
import cookedMonsterMeat from "./cookedMonsterMeat";
import monsterJerky from "./monsterJerky";
import deadDogfish from "./deadDogfish";
import rawFish from "./rawFish";
import fishSteak from "./fishSteak";
import neonQuattro from "./neonQuattro";
import cookedNeonQuattro from "./cookedNeonQuattro";
import pierrotFish from "./pierrotFish";
import cookedPierrotFish from "./cookedPierrotFish";
import purpleGrouper from "./purpleGrouper";
import cookedPurpleGrouper from "./cookedPurpleGrouper";
import roe from "./roe";
import cookedRoe from "./cookedRoe";
import sharkFin from "./sharkFin";
import tropicalFish from "./tropicalFish";
import fishMorsel from "./fishMorsel";
import cookedFishMorsel from "./cookedFishMorsel";
import wobster from "./wobster";
import crabbit from "./crabbit";
import jellyfish from "./jellyfish";
import deadJellyfish from "./deadJellyfish";
import cookedJellyfish from "./cookedJellyfish";
import driedJellyfish from "./driedJellyfish";
import limpets from "./limpets";
import cookedLimpets from "./cookedLimpets";
import mussel from "./mussel";
import cookedMussel from "./cookedMussel";
import egg from "./egg";
import cookedEgg from "./cookedEgg";
import tallbirdEgg from "./tallbirdEgg";
import cookedTallbirdEgg from "./cookedTallbirdEgg";
import doydoyEgg from "./doydoyEgg";
import cookedDoydoyEgg from "./cookedDoydoyEgg";
import berries from "./berries";
import cookedBerries from "./cookedBerries";
import banana from "./banana";
import cookedBanana from "./cookedBanana";
import dragonFruit from "./dragonFruit";
import cookedDragonFruit from "./cookedDragonFruit";
import durian from "./durian";
import cookedDurian from "./cookedDurian";
import pomegranate from "./pomegranate";
import cookedPomegranate from "./cookedPomegranate";
import watermelon from "./watermelon";
import cookedWatermelon from "./cookedWatermelon";
import coffeeBeans from "./coffeeBeans";
import cookedCoffeeBeans from "./cookedCoffeeBeans";
import halvedCoconut from "./halvedCoconut";
import cookedHalvedCoconut from "./cookedHalvedCoconut";
import honey from "./honey";
import honeycomb from "./honeycomb";
import butter from "./butter";
import electricMilk from "./electricMilk";
import beanBugs from "./beanBugs";
import cookedBeanBugs from "./cookedBeanBugs";
import gummySlug from "./gummySlug";
import cookedGummySlug from "./cookedGummySlug";
import butterflyWings from "./butterflyWings";
import ice from "./ice";
import moleworm from "./moleworm";
import roastedBirchnut from "./roastedBirchnut";
import nettle from "./nettle";
import foliage from "./foliage";


/*
DONE    MEATS 
DONE    FISHES
DONE    EGGS
DONE    FRUITS
DONE    VEGS                                    
DONE    SWEETNERS
DONE    MONSTER
DONE    BUGS
DONE    DAIRY
*/


const allIngredients: Array<IIngredient> = [
    carrot, cookedCarrot, corn, popcorn, eggplant, cookedEggplant,
    pumpkin, cookedPumpkin, bluecap, cookedBluecap, greencap, cookedGreencap, redcap,
    cookedRedcap, mandrake, cookedMandrake, lichen, cactus, cookedCactus, cactusFlower,
    seaweed, cookedSeaweed, driedSeaweed, sweetPotato, cookedSweetPotato, aloe, cookedAloe,
    asparagus, cookedAsparagus, radish, cookedRadish, morsel, cookedMorsel, smallJerky, 
    drumstick, cookedDrumstick, eel, cookedEel, fish, cookedFish, frogLegs, cookedFrogLegs,
    meat, cookedMeat, jerky, monsterMeat, cookedMonsterMeat, monsterJerky, deadDogfish,
    rawFish, fishSteak, neonQuattro, cookedNeonQuattro, pierrotFish, cookedPierrotFish,
    purpleGrouper, cookedPurpleGrouper, roe, cookedRoe, sharkFin, tropicalFish, fishMorsel,
    cookedFishMorsel, wobster, crabbit, jellyfish, deadJellyfish, cookedJellyfish, driedJellyfish,
    limpets, cookedLimpets, mussel, cookedMussel, egg, cookedEgg, tallbirdEgg, cookedTallbirdEgg,
    doydoyEgg, cookedDoydoyEgg, berries, cookedBerries, banana, cookedBanana, dragonFruit, cookedDragonFruit,
    durian, cookedDurian, pomegranate, cookedPomegranate, watermelon, cookedWatermelon, coffeeBeans,
    cookedCoffeeBeans, halvedCoconut, cookedHalvedCoconut, honey, honeycomb, butter, electricMilk,
    beanBugs, cookedBeanBugs, gummySlug, cookedGummySlug, butterflyWings, ice, moleworm, roastedBirchnut,
    nettle, foliage
];

export default allIngredients;