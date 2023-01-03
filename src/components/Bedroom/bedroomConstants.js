import ACImage from "../../../assets/bedroom/AC.jpg";
import KingBedSizeImage from "../../../assets/bedroom/King-Bed-Size.jpg";
import AlexaImage from "../../../assets/bedroom/Alexa.jpg";
import LandlineImage from "../../../assets/bedroom/Landline.jpg";
import MemoryFoamMattressImage from "../../../assets/bedroom/Memory-foam-mattress.jpg";
import BoxStorageImage from "../../../assets/bedroom/Box-storage.jpg";
import MusicSystemImage from "../../../assets/bedroom/Music-System.jpg";
import CeilingFanImage from "../../../assets/bedroom/Ceiling-Fan.jpg";
import NoStorageImage from "../../../assets/bedroom/No-Storage.jpg";
import OrthopaedicMattressImage from "../../../assets/bedroom/Orthopaedic-mattress.jpg";
import CoirMattressImage from "../../../assets/bedroom/Coir-mattress.jpg";
import QueenBedSizeImage from "../../../assets/bedroom/Queen-Bed-Size.jpg";
import CottonMattressImage from "../../../assets/bedroom/Cotton-Mattress.jpg";
import SingleBedSizeImage from "../../../assets/bedroom/Single-Bed-Size.jpg";
import DecorativeLightImage from "../../../assets/bedroom/Decorative-Light.jpg";
import SlidingDoorWardrobeImage from "../../../assets/bedroom/Sliding-Door-Wardrobe.jpg";
import DoubleBedSizeImage from "../../../assets/bedroom/Double-Bed-Size.jpg";
import SpringMattressImage from "../../../assets/bedroom/Spring-mattress.jpg";
import DrawerStorageImage from "../../../assets/bedroom/Drawer-storage.jpg";
import ElectricalPointsImage from "../../../assets/bedroom/Electrical-Points.jpg";
import TVUnitImage from "../../../assets/bedroom/TV-Unit.jpg";
import HingerDoorWardrobeImage from "../../../assets/bedroom/Hinged-Door-Wardrobe.jpg";
import HydraulicStorageImage from "../../../assets/bedroom/Hydraulic-storage.jpg";

export const BedroomLevelOfWorkOptions = ["Partial work", "Complete redo"];

export const BedroomTypeOfWorkOptions = [
  "Breaking",
  "Civil Work",
  "New Flooring",
  "Electrical",
  "Furniture",
  "False Ceiling",
  "Painting",
  "Sliding windows"
];

export const BedroomNewFurnitureOptions = [
  "Bed",
  "Wardrobes",
  "Loft",
  "Side Table",
  "Ottoman",
  "Study Desk & Chair",
  "Dressign Table",
  "Chest of drawers / Armoire",
  "TV cabinet",
  "Loveseat, chaise lounge",
  "Bookshelves",
  "Decorative ledges",
  "Trunk, bench",
  "Writing desk and/or vanity table"
];

export const BedroomAccessoriesOptions = [
  "Curtains / Blinds",
  "Window shades",
  "Plants and plant containers",
  "Iron & Ironing board",
  "Decorative pillows",
  "Alarm clock",
  "Vases",
  "Artwork (posters, prints)",
  "Photos frames",
  "Mirrors – dresser, wall",
  "Rugs"
];

export const BedroomElectricalItemsOptions = {
  "Ceiling fans": { label: "Ceiling fans", src: CeilingFanImage },
  AC: { label: "AC", src: ACImage },
  "Electrical sockets & Switches": {
    label: "Electrical sockets & Switches",
    src: ElectricalPointsImage
  },
  Lightings: { label: "Lightings", src: DecorativeLightImage },
  "Landline - Telephone": { label: "Landline - Telephone", src: LandlineImage },
  "Television, cable box": { label: "Television, cable box", src: TVUnitImage },
  "Music system": { label: "Music system", src: MusicSystemImage },
  "Alexa / Google home": { label: "Alexa / Google home", src: AlexaImage }
};

export const BedroomBedSizeOptions = {
  "King size": { label: "King size", src: KingBedSizeImage },
  "Queen size": { label: "Queen size", src: QueenBedSizeImage },
  "Single bed": { label: "Single bed", src: SingleBedSizeImage },
  "Double bed": { label: "Double bed", src: DoubleBedSizeImage }
};

export const BedroomStorageOptions = {
  "No storage": { label: "No storage", src: NoStorageImage },
  "Hydraulic storage": {
    label: "Hydraulic storage",
    src: HydraulicStorageImage
  },
  "Box storage": { label: "Box storage", src: BoxStorageImage },
  "Drawer storage": { label: "Drawer storage", src: DrawerStorageImage }
};

export const BedroomMattressTypeOptions = {
  "Traditional Cotton": {
    label: "Traditional Cotton",
    src: CottonMattressImage
  },
  "Coir mattress": { label: "Coir mattress", src: CoirMattressImage },
  "Memory foam mattress": {
    label: "Memory foam mattress",
    src: MemoryFoamMattressImage
  },
  "Spring mattress": { label: "Spring mattress", src: SpringMattressImage },
  "Orthopaedic mattress": {
    label: "Orthopaedic mattress",
    src: OrthopaedicMattressImage
  }
};

export const BedroomWardrobeDoorTypeOptions = {
  "Hinged Door Wardrobe": {
    label: "Hinged Door Wardrobe",
    src: HingerDoorWardrobeImage
  },
  "Sliding Door Wardrobe": {
    label: "Sliding Door Wardrobe",
    src: SlidingDoorWardrobeImage
  }
};
