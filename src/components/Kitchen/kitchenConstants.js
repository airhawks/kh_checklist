import SingleSideKitchenImage from "../assets/kitchen/Single-Side-Kitchen.jpg";
import ParallelKitchenImage from "../assets/kitchen/Parallel-Kitchen.jpg";
import LShapedKitchenImage from "../assets/kitchen/L-Shape-Kitchen.jpg";
import UShapedKitchenImage from "../assets/kitchen/U-Shape-Kitchen.jpg";
import IslandKitchenImage from "../assets/kitchen/Island-Kitchen.jpg";
import BuiltInHobImage from "../assets/kitchen/Built-in-Hob.jpg";
import ChimneyHoodImage from "../assets/kitchen/Chimney-Hood.jpg";
import ClayWaterPotImage from "../assets/kitchen/Clay-Water-Pot.jpg";
import CooktopStandaloneImage from "../assets/kitchen/Cooktop-Standalone.jpg";
import DishwasherImage from "../assets/kitchen/Dishwasher.jpg";
import FaucetImage from "../assets/kitchen/Faucet.jpg";
import MicroOvenImage from "../assets/kitchen/Micro-Oven.jpg";
import OvenImage from "../assets/kitchen/Oven.jpg";
import MixyImage from "../assets/kitchen/Mixy.jpg";
import SinkImage from "../assets/kitchen/Sink.jpg";
import WaterPurifierImage from "../assets/kitchen/Water-Purifier.jpg";
import RefrigeratorImage from "../assets/kitchen/Refrigerator.jpg";

import MagicCornerImage from "../assets/kitchen/Magic-Corner.jpg";
import DustbinDetergentPulloutImage from "../assets/kitchen/Dustbin-Detergent-Corner.jpg";
import BottlePulloutImage from "../assets/kitchen/Bottle-Pullout.jpg";
import TallUnitPulloutImage from "../assets/kitchen/Tall-Unit.jpg";
import CutleryOrganiserImage from "../assets/kitchen/Cutlery-Organiser.jpg";
import PlateBasketImage from "../assets/kitchen/Plate-Basket.jpg";
import TopLiftStorageImage from "../assets/kitchen/Top-Lift-Storage.jpg";
import SaucerBasketImage from "../assets/kitchen/Saucer-Basket.jpg";
import PlainBasketImage from "../assets/kitchen/Plain-Basket.jpg";
import GrainBasketImage from "../assets/kitchen/Grain-Basket.jpg";

import GraniteImage from "../assets/kitchen/Granite.jpg";
import MarbleImage from "../assets/kitchen/Marble.jpg";
import QuartzImage from "../assets/kitchen/Quartz.jpg";
import CorianImage from "../assets/kitchen/Corian-Solid-Surface.jpg";
import NanoWhiteImage from "../assets/kitchen/Nano-White.jpg";
import CuddapahImage from "../assets/kitchen/Cuddapah.jpg";

import LaminateFinishImage from "../assets/kitchen/Laminate-Finish.jpg";
import UVShuttersImage from "../assets/kitchen/UV-Shutter.jpg";
import AcrylicShuttersImage from "../assets/kitchen/Acrylic-Shutter.jpg";
import PUShuttersImage from "../assets/kitchen/Pu-Shutters.jpg";
import VeneersShuttersImage from "../assets/kitchen/Veneer-Shutter.jpg";
import LacqueredGlassImage from "../assets/kitchen/Lacquered-Glass.jpg";
import BuiltInHobsImage from "../assets/kitchen/Built-in-Hobs.jpg";
import FreestandingCooktopsImage from "../assets/kitchen/Freestanding-Cooktops.jpg";
import DuctingModelImage from "../assets/kitchen/ducting-1.jpg";
import DuctlessModelImage from "../assets/kitchen/ductless-1.png";
import RecessedLEDLightImage from "../assets/kitchen/LED-Light.jpg";
import CeilingFanImage from "../assets/kitchen/Ceiling-Fan.jpg";
import DecorativeLightImage from "../assets/kitchen/Decorative-Light.jpg";
import TaskLightImage from "../assets/kitchen/Task-Light-Under-Cabinet.jpg";

// import Image from "../assets/kitchen/";

export const KitchenLevelOfWorkOptions = ["Partial work", "Complete redo"];

export const KitchenTypeOfWorkOptions = [
  "Breaking",
  "Civil Work",
  "Plumbing",
  "New Flooring",
  "New Platform",
  "Modular Kitchen",
  "Electrical",
  "Furniture",
  "False Ceiling",
  "Painting",
  "Sliding windows",
];

export const MovingWorkOptions = [
  "Moving Plumbing",
  "Moving Electrical",
  "Moving Stove",
  "Moving/Adding Sink",
  "Moving Refrigerator",
  "Adding/Moving Gas line",
];

export const KitchenLayoutsOptions = {
  "Single side Kitchen": {
    label: "Single side Kitchen",
    src: SingleSideKitchenImage,
  },
  "Parallel Kitchen": { label: "Parallel Kitchen", src: ParallelKitchenImage },
  "L-Shaped Kitchen": { label: "L-Shaped Kitchen", src: LShapedKitchenImage },
  "U-Shaped Kitchen": { label: "U-Shaped Kitchen", src: UShapedKitchenImage },
  "Island Kitchen": { label: "Island Kitchen", src: IslandKitchenImage },
};

export const KitchenAppliancesPurchaseOptions = {
  "Built-in Hob": {
    label: "Built-in Hob",
    src: BuiltInHobImage,
  },
  "Cooktop Standalone": {
    label: "Cooktop Standalone",
    src: CooktopStandaloneImage,
  },
  "Chimney Hood": {
    label: "Chimney Hood",
    src: ChimneyHoodImage,
  },
  Dishwasher: {
    label: "Dishwasher",
    src: DishwasherImage,
  },
  Refrigerator: {
    label: "Refrigerator",
    src: RefrigeratorImage,
  },
  Sink: {
    label: "Sink",
    src: SinkImage,
  },
  Faucet: {
    label: "Faucet",
    src: FaucetImage,
  },
  "Micro. Oven": {
    label: "Micro. Oven",
    src: MicroOvenImage,
  },
  Oven: {
    label: "Oven",
    src: OvenImage,
  },
  Mixy: {
    label: "Mixy",
    src: MixyImage,
  },
  "Clay Water Pot": {
    label: "Clay Water Pot",
    src: ClayWaterPotImage,
  },
  "Water Purifier": {
    label: "Water Purifier",
    src: WaterPurifierImage,
  },
};

export const KitchenAppliancesToKeepOptions = [
  "Food Processors",
  "Mixer Grinders / Juicers",
  "Blenders / Choppers",
  "Hand Mixers",
  "Coffee Makers",
  "Kettles & Tea Makers",
  "Toasters",
  "Sandwich Makers",
  "Oven Toaster Grillers",
  "Rice / Steam Cooker",
  "Dosa Maker",
  "Egg Boilers",
];

export const CabinetsOptions = {
  "Magic Corner": { label: "Magic Corner", src: MagicCornerImage },
  "Dustbin Detergent Pullout": {
    label: "Dustbin Detergent Pullout",
    src: DustbinDetergentPulloutImage,
  },
  "Bottle Pullout": { label: "Bottle Pullout", src: BottlePulloutImage },
  "Tall Unit Pullout": {
    label: "Tall Unit Pullout",
    src: TallUnitPulloutImage,
  },
  "Cutlery Organiser": {
    label: "Cutlery Organiser",
    src: CutleryOrganiserImage,
  },
  "Plate Basket": { label: "Plate Basket", src: PlateBasketImage },
  "Top Lift Storage": { label: "Top Lift Storage", src: TopLiftStorageImage },
  "Saucer Basket": { label: "Saucer Basket", src: SaucerBasketImage },
  "Plain Basket": { label: "Plain Basket", src: PlainBasketImage },
  "Grain Basket": { label: "Grain Basket", src: GrainBasketImage },
};

export const CounterTopOptions = {
  Granite: { label: "Granite", src: GraniteImage },
  Marble: { label: "Marble", src: MarbleImage },
  Quartz: { label: "Quartz", src: QuartzImage },
  "Corian (Solid Surface)": {
    label: "Corian (Solid Surface)",
    src: CorianImage,
  },
  "Nano white": { label: "Nano white", src: NanoWhiteImage },
  Kadappa: { label: "Kadappa", src: CuddapahImage },
};

export const ShutterFinishOptions = {
  "Laminate Finish": { label: "Laminate Finish", src: LaminateFinishImage },
  "UV shutters": { label: "UV shutters", src: UVShuttersImage },
  "Acrylic Shutters": { label: "Acrylic Shutters", src: AcrylicShuttersImage },
  "PU Shutters ": { label: "PU Shutters ", src: PUShuttersImage },
  "Veneers Shutters": { label: "Veneers Shutters", src: VeneersShuttersImage },
  "Lacquered glass (Back painted)": {
    label: "Lacquered glass (Back painted)",
    src: LacqueredGlassImage,
  },
};

export const CookingGasApplianceTypeOptions = {
  "Built in Hobs": {
    label: "Built in Hobs",
    src: BuiltInHobsImage,
  },
  "Freestanding Cooktops": {
    label: "Freestanding Cooktops",
    src: FreestandingCooktopsImage,
  },
};

export const CookingGasApplianceSelectionOptions = [
  " Number of Burners (5, 4, 3, 2)",
  "Stainless steel body",
  "Cast iron rings designed for Indian cooking",
  "Brass Burners",
  "Toughened glass working top",
  "Built-in, hence Slab cutting required",
  "Auto Ignition battery operated",
  "Auto Ignition , required electric socket",
  "Product with Warranty",
];

export const ChimneyTypeOptions = {
  "Ducting model": {
    label: "Ducting model",
    src: DuctingModelImage,
  },
  "Ductless model": { label: "Ductless model", src: DuctlessModelImage },
};

export const FactorsForChimneyOptions = [
  "ducted (throws air outside)",
  "ductless(filters & reuses air)",
  "Noise level",
  "Budget",
  "Wall Mounted or Ceiling Mounted Chimneys",
  "Suction power (ranges from 800 m³/hr ... 1500 m³/hr)",
  "Width of chimney (ranges from 30 cm ... 90 cm )",
  "Colour & looks",
  "Filter type ( baffle, mesh, carbon)",
  "Auto clean option",
  "Lamp ( eg: LED 2 × 1.5 watt)",
  "Ease of maintenance & company service",
  "Warranty (2 years? or more or Lifetime?)",
];

export const LightingAndElectricalsOptions = {
  "Recessed LED light": {
    label: "Recessed LED light",
    src: RecessedLEDLightImage,
  },
  "Ceiling fan": { label: "Ceiling fan", src: CeilingFanImage },
  "Decorative Light": { label: "Decorative Light", src: DecorativeLightImage },
  "Task, under-cabinet light": {
    label: "Task, under-cabinet light",
    src: TaskLightImage,
  },
};

export const ElectricalOutletOptions = [
  "Mixer grinder (5 amps)",
  "Small Appliances (5 amps)",
  "Hob (5 amps)",
  "Chimney (5amps)",
  "Microwave / Oven (15 amps)",
  "Water Purifier (6 amps)",
  "Refrigerator (5 amps)",
  "Dishwasher (15 amps)",
  "Toaster (15 amps)",
];
