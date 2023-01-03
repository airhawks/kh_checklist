import { Box } from "@mui/system";
import Question from "../input/Question";
import CheckboxAnswer from "../input/CheckboxAnswer";
import * as React from "react";
import { BedroomWardrobeDoorTypeOptions } from "./bedroomConstants";
import SubSectionTitle from "../SubSectionTitle";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import { Divider, Typography } from "@mui/material";
import Hint from "../input/Hint";
import WalkInWardrobeImage from "../../../assets/bedroom/Walk-in-Wardrobe.jpg";
import WardrobeWithLoftImage from "../../../assets/bedroom/Wardrobe-with-Loft.jpg";
import SafeWardrobeImage from "../../../assets/bedroom/safe-wardrobe.jpg";
import AluminumProfileShutterImage from "../../../assets/bedroom/Aluminum-Profile-Shutter.jpg";
import InternalFinishImage from "../../../assets/bedroom/Internal-Finish.jpg";

export default function BedroomWardrobe({
  data,
  handleInputChange,
  onSelectionChange
}) {
  const {
    doorType,
    walkinClosetRequired,
    heightOfWardrobe,
    materialType,
    wardrobeSafeRequired,
    requiredBoxesAndShelves,
    selectPremiumAccessories,
    aluminumProfileShutterRequired,
    externalFinish,
    internalFinish
  } = data;
  return (
    <Box>
      <SubSectionTitle title="Wardrobe" />
      <Question question="Select door type" />
      <RadioGroupAnswer
        options={BedroomWardrobeDoorTypeOptions}
        value={doorType}
        name="doorType"
        onChange={handleInputChange}
        inline
      />
      <Hint
        title="Sliding doors vs Hinged Doors:"
        text={
          <>
            <Typography variant="body2" component="div">
              Sliding door wardrobes don't require much space in front of them,
              as their doors slide from side to side.
            </Typography>
            <Typography variant="body2" component="div" sx={{ mt: 1 }}>
              Hinged Door has ability to fully open the doors without any
              limitation or restrictions of just opening side to side.
            </Typography>
          </>
        }
      />

      <Question question="Do you require Walk-In Wardrobe?" />
      <RadioGroupAnswer
        options={["Yes", "No"]}
        value={walkinClosetRequired}
        name="walkinClosetRequired"
        onChange={handleInputChange}
      />
      <Hint
        text="Walk-in closet/wardrobe allows you to have storage units
         on all three walls with even a sitting area in the middle.
         Small walk-ins can be built in as low as 25 sq."
        image={WalkInWardrobeImage}
      />

      <Question question="Select Height of wardrobe" />
      <RadioGroupAnswer
        options={[
          "7 feet Wardrobe with upper empty space",
          "7 feet Wardrobe with Loft",
          "Wardrobe height till ceiling"
        ]}
        value={heightOfWardrobe}
        name="heightOfWardrobe"
        onChange={handleInputChange}
      />
      <Hint
        title="WARDROBE WITH LOFT:"
        text={
          <>
            <Typography variant="body2" component="div">
              A loft offers ample storage space for lesser-used home materials
              such as soft furnishing items. It utilizes extra space above the
              wardrobe's main frame and efficiently takes care of every storage
              need.
            </Typography>
            <Typography variant="body2" component="div" sx={{ mt: 1 }}>
              The highlighted wall is going to be different from other 3 or 2
              walls or the room.
            </Typography>
          </>
        }
        image={WardrobeWithLoftImage}
      />

      <Question question="Select material for customised wardrobe - Modular or Carpentry work" />
      <Hint text="M = Modular C = Carpentry work" />
      <RadioGroupAnswer
        options={[
          "Marine Plywood ( M & C)",
          "MR (moisture resistant) Plywood (M & C)",
          "Commercial Plywood (M & C)",
          "MDF or Pre-laminated particle board (only in M)"
        ]}
        value={materialType}
        name="materialType"
        onChange={handleInputChange}
      />

      <Question question="Do you require Locker chamber inside Wardrobe?" />
      <RadioGroupAnswer
        options={["Yes", "No"]}
        value={wardrobeSafeRequired}
        name="wardrobeSafeRequired"
        onChange={handleInputChange}
      />
      <Hint
        title="Wardrobe Safe:"
        text="Closet safe provide security for important papers, jewelry, and
            more. Heavy-duty, hardened steel construction. Also available with
            numeric Keypad with Digital Display. The safe is operated by a 4-6
            digit password."
        image={SafeWardrobeImage}
      />

      <Question question="Select standard boxes/shelves required inside wardrobe" />
      <CheckboxAnswer
        options={[
          "Box Shelf with Doors",
          "Box Shelf unit",
          "Box Drawer",
          "Box File Drawer",
          "Hanging Rod (hanging clothes)",
          "Clothes rails Deep drawer for bulky clothing",
          "Shallow drawer for t-shirts, shorts, pyjamas and lingerie",
          "Drawers to store makeup and skincare",
          "Shallow drawers for jewellery",
          "Fixed shelves",
          "Pull-out shelves"
        ]}
        defaultValue={requiredBoxesAndShelves}
        name="requiredBoxesAndShelves"
        onChange={onSelectionChange}
        inline={false}
      />
      <Question question="Select Premium Wardrobe Accessories" />
      <CheckboxAnswer
        options={[
          "Wall mounted headboard",
          "Bed mounted headboard",
          "Big Headboard",
          "Small Headboard",
          "Upholstered",
          "Traditional Wooden Carved headboard"
        ]}
        defaultValue={selectPremiumAccessories}
        name="selectPremiumAccessories"
        onChange={onSelectionChange}
        inline={false}
      />

      <Question question="For doors - do you want Aluminum Profile shutter with backpainted glass" />
      <RadioGroupAnswer
        options={["Yes", "No"]}
        value={aluminumProfileShutterRequired}
        name="aluminumProfileShutterRequired"
        onChange={handleInputChange}
      />
      <Hint
        title="Aluminum Profile shutter with backpainted glass:"
        text="Gives modern industrial look.
         Reflective glass surfaces adds spaciousness & light in room.
         Easy to clean."
        image={AluminumProfileShutterImage}
      />

      <Typography sx={{ mt: 8 }} variant="h5" component="div">
        Shutter Finish
      </Typography>
      <Divider sx={{ mt: 1, mb: 2 }} />
      <Hint title="Shutter Finish options for Bedroom Wardrobes:" />
      <Hint
        text={
          <Typography variant="body2" component="div" sx={{ mt: 1 }}>
            <b>Laminate Finish</b> Most affordable as compared to other
            finishes. 1mm thick mica sheet used. Various colours and finishes
            available. Laminate is machine pressed on shutter. Matt & Gloss
            finish. Scratch resistance and handle rough usage. Easy to clean.
          </Typography>
        }
      />
      <Hint
        text={
          <Typography variant="body2" component="div" sx={{ mt: 1 }}>
            <b>UV shutters</b> Shutters painted & then UV coat applied to get
            glossy finish. Looks superior to gloss laminate finish. But thin
            paint layer can get damaged.
          </Typography>
        }
      />
      <Hint
        text={
          <Typography variant="body2" component="div" sx={{ mt: 1 }}>
            <b>Acrylic Shutters</b> 1mm sheets pasted on shutters. High
            reflection like mirror. Quality acrylic panel are scratch & stain
            resistance. Better compared to UV boards. Expensive compared to
            other finishes. Limited colours options.
          </Typography>
        }
      />
      <Hint
        text={
          <Typography variant="body2" component="div" sx={{ mt: 1 }}>
            <b>PU Shutters</b> Polyurethane Paint, is very durable. Very clean
            and neat look because paint is applied directly on the shutter -
            there is no pasting. PU finish is slight more costly than Acrylic or
            Laminate finish because of the raw material and labour application
            costs.
          </Typography>
        }
      />
      <Hint
        text={
          <Typography variant="body2" component="div" sx={{ mt: 1 }}>
            <b>Veneers Shutters</b> Veneer is natural wood skins hence every
            sheet is Unique. Rich and elegant look. Sheet applied on shutter &
            polish is done. Expensive compared to other finishes.
          </Typography>
        }
      />
      <Hint
        text={
          <Typography variant="body2" component="div" sx={{ mt: 1 }}>
            <b>Lacquered glass (Back painted)</b> A layer of colour coating on
            one of its surfaces( Hence also called back-painted). Opaque lacquer
            coasting is baked and cured in the oven. Very durable & modern look.
          </Typography>
        }
      />
      <Question question="Choose shutter finish type" />
      <RadioGroupAnswer
        options={[
          "Laminate Finish",
          "UV shutters",
          "Acrylic Shutters",
          "PU Shutters ",
          "Veneers Shutters",
          "Lacquered glass (Back painted)"
        ]}
        value={externalFinish}
        name="externalFinish"
        onChange={handleInputChange}
      />
      <Question question="Do you require Internal Finish in wardrobe?" />
      <RadioGroupAnswer
        options={["Yes", "No", "Not sure"]}
        value={internalFinish}
        name="internalFinish"
        onChange={handleInputChange}
        inline
      />
      <Hint
        title="Internal Finish:"
        text="Usually low cost white laminate is applied to Inner surface of wardrobe.
          It makes wardrobe look good. Maintenance becomes easy.
          You can use cloth to wipe the surfaces."
        image={InternalFinishImage}
      />
    </Box>
  );
}
