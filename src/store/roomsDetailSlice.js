import { createSlice } from "@reduxjs/toolkit";
import { RoomType } from "../constants";

export const initialBedroomState = {
  workRequired: {
    levelOfWorkRequired: "",
    typeOfWorkRequired: [],
    sqftArea: "",
    height: "",
  },
  design: {
    necessities: [],
    wishlistItems: [],
    newFurnitureRequired: [],
    newAccessoriesRequired: [],
    newElectricalItemsRequired: [],
  },
  bed: {
    sizeOfBed: "",
    materialType: "",
    headBoardIdeasLiked: [],
    typeOfStorage: "",
    budgetForMattress: "",
    typeOfMattress: "",
    thicknessOfMattress: "",
  },
  wardrobe: {
    doorType: "",
    walkinClosetRequired: "",
    heightOfWardrobe: "",
    materialType: "",
    wardrobeSafeRequired: "",
    requiredBoxesAndShelves: [],
    selectPremiumAccessories: [],
    aluminumProfileShutterRequired: "",
    externalFinish: "",
    internalFinish: "",
  },
  highlighterAndFalseCeiling: {
    needWallHighlighter: "",
    highlightersLiked: [],
    hasFinalizedFalseCeilingDesign: "",
    hasDecidedFalseCeilingFinishMaterial: "",
    heightOfRoomSlab: "",
    typesOfCeilingLightsRequired: [],
  },
  balconyAndWindows: {
    thingsRequiredForBalcony: [],
    isNewWindowFrameRequired: "",
    slidingWindowOption: "",
    blindsOrCurtains: "",
    accessoriesRequired: [],
  },
};

export const initialBathroomState = {
  workRequired: {
    levelOfWorkRequired: "",
    typeOfWorkRequired: [],
    shapeOfBathroom: "",
    sqftArea: "",
    height: "",
    newlyRequiredItems: [],
  },
  showerArea: {
    showerMixedRequired: "",
    wantToConsiderShowerPanel: "",
    showerEnclosureType: "",
  },
  WCArea: {
    waterClosetOption: "",
    flushingSystem: "",
  },
  other: {
    waterProofingRequired: "",
    newFlooringRequired: "",
    newWallTilingRequired: "",
    waterSavingFittings: "",
    fitForElderlyUse: "",
    fitForpeopleWithDisabilitiesUse: "",
  },
};

const initialState = {
  [RoomType.Kitchen]: {
    workRequired: {
      levelOfWorkRequired: "",
      typeOfWorkRequired: [],
      movingWork: [],
      sqftArea: "",
      height: "",
    },
    layout: {
      doesKnowKitchenWorkTriangle: "",
      kitchenLayouts: "",
      needOpenKitchen: "",
    },
    appliances: {
      itemsToPurchase: [],
      itemsToBeKeptInKitchen: [],
    },
    modularKitchen: {
      majorPartsRequired: [],
      typeOfDrawersHardware: "",
      cabinets: [],
      countertop: "",
      shutterFinishType: "",
    },
    hobChimneyAndElectricals: {
      cookingGasApplianceType: "",
      factorsForCookingGasApplianceSelection: [],
      cookingRange: "",
      typeOfChimney: "",
      factorsForChimneySelection: [],
      lightingAndElectricalsRequired: [],
      electricalOutlets: [],
    },
  },
  [RoomType.LivingRoom]: {
    workRequired: {
      levelOfWorkRequired: "",
      typeOfWorkRequired: [],
      sqftArea: "",
      height: "",
      newlyRequiredItems: [],
    },
    layout: {
      hasPlannedFocalPoint: "",
      hasPlannedTrafficFlow: "",
      hasPlannedCoversationArea: "",
      seatingArrangementStyles: [],
      factorsForDesigningTVUnit: [],
    },
    highlighterAndFalseCeiling: {
      needWallHighlighter: "",
      highlightersLiked: [],
      hasFinalizedFalseCeilingDesign: "",
      hasDecidedFalseCeilingFinishMaterial: "",
      heightOfRoomSlab: "",
      typesOfCeilingLightsRequired: [],
    },
    balconyAndWindows: {
      thingsRequiredForBalcony: [],
      isNewWindowFrameRequired: "",
      slidingWindowOption: "",
      blindsOrCurtains: "",
      accessoriesRequired: [],
    },
  },
  [RoomType.CommonBathroom]: initialBathroomState,
  [RoomType.Bedroom]: {
    // roomName: roomState similar to initialBedroomState
  },
  [RoomType.Bathroom]: {
    // roomName: roomState similar to initialBathroomState
  },
};

export const roomsDetailSlice = createSlice({
  name: "roomsDetail",
  initialState,
  reducers: {
    setStandardRoomValues: (state, { payload }) => {
      const [roomType, step, key, value] = payload;
      state[roomType][step][key] = value;
    },
    setBedOrBathRoomValues: (state, { payload }) => {
      const [roomType, roomName, step, key, value] = payload;
      state[roomType][roomName] =
        state[roomType][roomName] ||
        (roomType === RoomType.Bedroom
          ? initialBedroomState
          : initialBathroomState);
      state[roomType][roomName][step][key] = value;
    },
    reset: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { setStandardRoomValues, setBedOrBathRoomValues, reset } =
  roomsDetailSlice.actions;

export default roomsDetailSlice.reducer;
