import { RoomType } from "./constants";

export const BathroomSteps = {
  workRequired: "Work Required",
  showerArea: "Shower Area",
  WCArea: "WC Area",
  other: "Other",
};

export const BedroomSteps = {
  workRequired: "Work Required",
  design: "Design",
  bed: "Bed",
  wardrobe: "Wardrobe",
  highlighterAndFalseCeiling: "Highlighter & False Ceiling",
  balconyAndWindows: "Balcony & Windows",
};

export const LivingRoomSteps = {
  workRequired: "Work Required",
  layout: "Design - Layout",
  highlighterAndFalseCeiling: "Highlighter & False Ceiling",
  balconyAndWindows: "Balcony & Windows",
};

export const KitchenSteps = {
  workRequired: "Work Required",
  layout: "Layout",
  appliances: "Appliances",
  modularKitchen: "Modular Kitchen",
  hobChimneyAndElectricals: "Hob, Chimney & Electricals",
};

export const ProjectIntakeSteps = {
  projectType: "Project Type",
  location: "Location",
  newOrOld: "New or Old",
  designAndPlanning: "Design & Planning",
  scopeOfWork: "Scope of Work",
};

export const AllSteps = {
  [RoomType.Bathroom]: BathroomSteps,
  [RoomType.CommonBathroom]: BathroomSteps,
  [RoomType.LivingRoom]: LivingRoomSteps,
  [RoomType.Kitchen]: KitchenSteps,
  [RoomType.Bedroom]: BedroomSteps,
  projectIntake: ProjectIntakeSteps,
};
