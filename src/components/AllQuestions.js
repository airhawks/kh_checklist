import { RoomType } from "../constants";

let AllQuestions = {
  project: {
    projectType: {
      carpetArea: "Approximate (square feet) carpet area of your house",
      flatLayout: "What is your flat layout?",
      roomNamesAndBathrooms:
        "Assing names to bedrooms and select bathrooms of your 2 BHK",
      hasCommonBathroom: "Does your flat has common bathroom?"
    },
    location: {
      city: "City",
      state: "State / Province / Region",
      pincode: "ZIP / Postal Code"
    },
    newOrOld: {
      projectType: "Project Type",
      workRequired: "Select all work required"
    },
    designAndPlanning: {
      planner: "Design & Planning"
    },
    scopeOfWork: {
      roomsRequireWork: "Select Rooms which required work"
    }
  },
  roomsDetail: {
    [RoomType.Kitchen]: {
      workRequired: {
        levelOfWorkRequired: "What level of work is required in Kitchen?",
        typeOfWorkRequired: "Approximate Square Feet area of Kitchen",
        movingWork: "What is Height of Kitchen? (in feets)",
        sqftArea: "What work is required in Kitchen?",
        height: "Select all moving work required"
      },
      layout: {
        doesKnowKitchenWorkTriangle: "Do you know about Kitchen work triangle?",
        kitchenLayouts: "Select Kitchen layout:",
        needOpenKitchen: "Do you need Open Kitchen?"
      },
      appliances: {
        itemsToPurchase: "Select all Items to Purchase",
        itemsToBeKeptInKitchen:
          "Select all small appliances you will keep in your Kitchen"
      },
      modularKitchen: {
        majorPartsRequired:
          "Select all major parts of Modular Kitchen required",
        typeOfDrawersHardware: "Select type of Drawers hardware required",
        cabinets: "Choose your Cabinets",
        countertop: "Choose Countertop",
        shutterFinishType: "Choose shutter finish type"
      },
      hobChimneyAndElectricals: {
        cookingGasApplianceType: "Choose Cooking Gas appliances Type",
        factorsForCookingGasApplianceSelection:
          "Select all factors to consider while selecting cooking appliance:",
        cookingRange: "Do you know what is cooking range?",
        typeOfChimney: "Choose types of Chimney/Hoods",
        factorsForChimneySelection:
          "Select all factors to consider while selecting Chimney / Hood :",
        lightingAndElectricalsRequired: "Select all required:",
        electricalOutlets: "Select all Electrical outlets required in Kitchen"
      }
    },
    [RoomType.LivingRoom]: {
      workRequired: {
        levelOfWorkRequired: "What level of work is required in Living room?",
        typeOfWorkRequired: "What work is required in Living room?",
        sqftArea: "Approximate Square Feet area of Living Room",
        height: "What is Height of Living Room? (in feets)",
        newlyRequiredItems:
          "Select all that is newly required in your Living room"
      },
      layout: {
        hasPlannedFocalPoint:
          "Have you planned Focal Point inside your living room?",
        hasPlannedTrafficFlow:
          "Have you figured out Traffic Flow inside your living room?",
        hasPlannedCoversationArea: "Have you planned Conversation Area?",
        seatingArrangementStyles:
          "Seating Arrangment Style (Select all layouts that you like & might consider)",
        factorsForDesigningTVUnit:
          "Select all factors that one should consider in designing TV Unit"
      },
      highlighterAndFalseCeiling: {
        needWallHighlighter: "Do you need wall highlighter ?",
        highlightersLiked: "Select all Highlighters you like",
        hasFinalizedFalseCeilingDesign:
          "Have you finalised design for False Ceiling?",
        hasDecidedFalseCeilingFinishMaterial:
          "Have you decided finish material options for false ceiling?",
        heightOfRoomSlab: "What is height of your room slab?",
        typesOfCeilingLightsRequired:
          "Select all types of Ceiling lights required"
      },
      balconyAndWindows: {
        _subSections: {
          Balcony: ["thingsRequiredForBalcony"],
          "Sliding Windows": [
            "isNewWindowFrameRequired",
            "slidingWindowOption",
            "blindsOrCurtains",
            "accessoriesRequired"
          ]
        },
        thingsRequiredForBalcony: "Select things required for Balcony",
        isNewWindowFrameRequired:
          "Is new Marble/Granite window frame required?",
        slidingWindowOption: "Select Sliding Window Option",
        blindsOrCurtains: "Select Blinds or Curtains",
        accessoriesRequired: "Select all Accessories required:"
      }
    },
    [RoomType.Bedroom]: {
      workRequired: {
        levelOfWorkRequired: "What level of work is required in Bedroom?",
        typeOfWorkRequired: "What work is required in Bedroom?",
        sqftArea: "Approximate Square Feet area of Bedroom",
        height: "What is Height of Bedroom? (in feets)"
      },
      design: {
        _subSections: {
          "Design - Necessities & Wish list": ["necessities", "wishlistItems"],
          Furniture: ["newFurnitureRequired"],
          Accessories: ["newAccessoriesRequired"],
          "Electrical & Lightings": ["newElectricalItemsRequired"]
        },
        necessities: "Select all Necessities you want in your Bedroom:",
        wishlistItems: "Select Wish List items for your Bedroom",
        newFurnitureRequired:
          "Select all that is newly required in your Bedroom",
        newAccessoriesRequired:
          "Select Accesorries newly required in your bedroom",
        newElectricalItemsRequired:
          "Select all Electrical items newly required:"
      },
      bed: {
        _subSections: {
          Bed: [
            "sizeOfBed",
            "materialType",
            "headBoardIdeasLiked",
            "typeOfStorage",
            "budgetForMattress",
            "typeOfMattress",
            "thicknessOfMattress"
          ]
        },
        sizeOfBed: "Select Size of the bed required",
        materialType: "Select Material Type",
        headBoardIdeasLiked: "Select all Headboard ideas you like",
        typeOfStorage: "Select type of Storage required",
        budgetForMattress: "Select budget for Mattress",
        typeOfMattress: "Select type of mattress required",
        thicknessOfMattress: "Select thickness of mattress"
      },
      wardrobe: {
        _subSections: {
          Wardrobe: [
            "doorType",
            "walkinClosetRequired",
            "heightOfWardrobe",
            "materialType",
            "wardrobeSafeRequired",
            "requiredBoxesAndShelves",
            "selectPremiumAccessories",
            "aluminumProfileShutterRequired",
            "externalFinish",
            "internalFinish"
          ]
        },
        doorType: "Select door type",
        walkinClosetRequired: "Do you require Walk-In Wardrobe?",
        heightOfWardrobe: "Select Height of wardrobe",
        materialType:
          "Select material for customised wardrobe - Modular or Carpentry work",
        wardrobeSafeRequired: "Do you require Locker chamber inside Wardrobe?",
        requiredBoxesAndShelves:
          "Select standard boxes/shelves required inside wardrobe",
        selectPremiumAccessories: "Select Premium Wardrobe Accessories",
        aluminumProfileShutterRequired:
          "For doors - do you want Aluminum Profile shutter with backpainted glass",
        externalFinish: "Choose shutter finish type",
        internalFinish: "Do you require Internal Finish in wardrobe?"
      },
      highlighterAndFalseCeiling: {
        _subSections: {
          "Wall Highlighters": ["needWallHighlighter", "highlightersLiked"],
          "False Ceiling": [
            "hasFinalizedFalseCeilingDesign",
            "hasDecidedFalseCeilingFinishMaterial",
            "heightOfRoomSlab",
            "typesOfCeilingLightsRequired"
          ]
        },
        needWallHighlighter: "Do you need wall highlighter ?",
        highlightersLiked: "Select all Highlighters you like",
        hasFinalizedFalseCeilingDesign:
          "Have you finalised design for False Ceiling?",
        hasDecidedFalseCeilingFinishMaterial:
          "Have you decided finish material options for false ceiling?",
        heightOfRoomSlab: "What is height of your room slab?",
        typesOfCeilingLightsRequired:
          "Select all types of Ceiling lights required"
      },
      balconyAndWindows: {
        _subSections: {
          Balcony: ["thingsRequiredForBalcony"],
          "Sliding Windows": [
            "isNewWindowFrameRequired",
            "slidingWindowOption",
            "blindsOrCurtains",
            "accessoriesRequired"
          ]
        },
        thingsRequiredForBalcony: "Select things required for Balcony",
        isNewWindowFrameRequired:
          "Is new Marble/Granite window frame required?",
        slidingWindowOption: "Select Sliding Window Option",
        blindsOrCurtains: "Select Blinds or Curtains",
        accessoriesRequired: "Select all Accessories required:"
      }
    },
    [RoomType.Bathroom]: {
      workRequired: {
        levelOfWorkRequired: "What level of work is required in Bathroom?",
        typeOfWorkRequired: "What work is required in Bathroom?",
        shapeOfBathroom: "What is Shape of your bathroom?",
        sqftArea: "Approximate Square Feet area of Bathroom",
        height: "What is Height of Bathroom? (in feets)",
        newlyRequiredItems: "Select all that is newly required in your Bathroom"
      },
      showerArea: {
        showerMixedRequired: "Does your bathroom need new shower mixer?",
        wantToConsiderShowerPanel:
          "Do you want to consider 'Shower Panel' instead of shower?",
        showerEnclosureType: "Shower Enclosure type"
      },
      WCArea: {
        waterClosetOption: "Select WC (Water Closet) Option",
        flushingSystem: "Select type of flushing system"
      },
      other: {
        waterProofingRequired: "Is Water proofing required?",
        newFlooringRequired: "New Flooring required?",
        newWallTilingRequired: "New Wall Tiling required?",
        waterSavingFittings: "Do you want bathroom fittings to save water?",
        fitForElderlyUse: "Any Elderly (seniors) going to us this bathroom?",
        fitForpeopleWithDisabilitiesUse:
          "Any people with disabilities going to us this bathroom?"
      }
    }
  }
};

AllQuestions.roomsDetail[RoomType.CommonBathroom] =
  AllQuestions.roomsDetail[RoomType.Bathroom];

export default AllQuestions;
