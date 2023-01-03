import BreakingImage from "../../../assets/Breaking.jpg";
import CivilImage from "../../../assets/Civil.jpg";
import ElectricalImage from "../../../assets/Electrical.jpg";
import FalseCeilingImage from "../../../assets/False-Ceiling.jpg";
import FurnitureImage from "../../../assets/Furniture.jpg";
import GrillFabricationImage from "../../../assets/Grill-Fabrication.jpg";
import ModularKitchenImage from "../../../assets/Modular-Kitchen.jpg";
import PaintingImage from "../../../assets/Painting.jpg";
import PlumbingImage from "../../../assets/Plumbing.jpg";
import uPVCSlidingWindowImage from "../../../assets/uPVC-Sliding-Windows.jpg";

export const RoomType = {
  LivingRoom: "Living Room",
  Kitchen: "Kitchen",
  Bedroom: "Bedroom",
  Bathroom: "Bathroom",
  CommonBathroom: "Common Bathroom"
};

export const FlatLayoutOptions = [
  "1 Room Kitchen",
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "4 BHK"
];

export const RoomNamesAndBathroomsOptions = [
  { hasBathroom: true, roomName: "Master bedroom" },
  { hasBathroom: true, roomName: "Kids bedroom 1" },
  { hasBathroom: true, roomName: "Guest bedroom" },
  { hasBathroom: true, roomName: "Parents (elderly) bedroom" }
];

export const NewOrOldProjectType = ["Is it new flat ?", "or Renovation"];

export const WorkRequiredOptions = {
  Breaking: { label: "Breaking", src: BreakingImage },
  "Civil work": {
    label: "Civil work",
    src: CivilImage
  },
  Electrical: {
    label: "Electrical",
    src: ElectricalImage
  },
  Plumbing: { label: "Plumbing", src: PlumbingImage },
  "False Ceiling": {
    label: "False Ceiling",
    src: FalseCeilingImage
  },
  "Sliding Window": {
    label: "Sliding Window",
    src: uPVCSlidingWindowImage
  },
  Painting: { label: "Painting", src: PaintingImage },
  "Modular Kitchen": {
    label: "Modular Kitchen",
    src: ModularKitchenImage
  },
  "Furniture work": {
    label: "Furniture work",
    src: FurnitureImage
  },
  "Grill & Fabrication work": {
    label: "Grill & Fabrication work",
    src: GrillFabricationImage
  }
};

export const DesignAndPlanningOptions = [
  "Interior Designer will do planning",
  "Self Planning",
  "Contractor will do planning",
  "Not Sure"
];

export const ScopeOfWorkOptions = [
  "Kitchen",
  "Living Room",
  "Bathroom",
  "Toilet",
  "Bedroom"
];

export const Status = {
  Empty: "Empty",
  Started: "Started",
  Completed: "Completed"
};
