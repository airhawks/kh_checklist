import { Box } from "@mui/system";
import Question from "../input/Question";
import CheckboxAnswer from "../input/CheckboxAnswer";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import * as React from "react";
import { RoomType } from "../../constants";

import { useSelector, useDispatch } from "react-redux";
import { setStandardRoomValues } from "../../store/roomsDetailSlice";
import {
  CabinetsOptions,
  CounterTopOptions,
  PartsOfModularKitchenOptions,
  ShutterFinishOptions
} from "./kitchenConstants";
import Hint from "../input/Hint";
import { Divider, Typography } from "@mui/material";
import KitchenPartsImage from "../../../assets/kitchen/kitchen-parts.jpg";
import InnotechDrawersImage from "../../../assets/kitchen/Innotech-Drawers.jpg";
import TandemDrawersImage from "../../../assets/kitchen/Tandem-Drawers.jpg";
import PlainBasketImage from "../../../assets/kitchen/Plain-Basket.jpg";

export default function KitchenModularKitchen({
  handleInputChange,
  onSelectionChange
}) {
  const {
    majorPartsRequired,
    typeOfDrawersHardware,
    cabinets,
    countertop,
    shutterFinishType
  } = useSelector(
    (state) => state.roomsDetail[RoomType.Kitchen].modularKitchen
  );

  return (
    <Box>
      <Typography sx={{ mt: 4 }} variant="h5" component="div">
        Modular Kitchen
      </Typography>
      <Divider sx={{ mt: 1, mb: 2 }} />
      <Question question="Select all major parts of Modular Kitchen required" />
      <CheckboxAnswer
        options={[
          "Wall Unit Cabinets",
          "Base Unit Cabinets",
          "Tall Unit Cabinets"
        ]}
        defaultValue={majorPartsRequired}
        name="majorPartsRequired"
        onChange={onSelectionChange}
      />
      <Hint
        title="Major parts of Modular Kitchen:"
        image={KitchenPartsImage}
        text={
          <>
            <Typography variant="body2" component="div">
              <b>Base cabinet:</b> rests on the floor and supports holds items
              such as countertops, cooktops, and sinks.
            </Typography>
            <Typography sx={{ mt: 2 }} variant="body2" component="div">
              <b>Wall cabinets:</b> Hang on wall. Standard heights are 12, 15,
              18, 30, 36 and 42 inches tall; depth ranges from 12 to 18 inches.
              Typically installed 18 inches above countertops, 54 inches above
              floor and 24 inches above stove.
            </Typography>

            <Typography sx={{ mt: 2 }} variant="body2" component="div">
              <b>Tall cabinets:</b> also called utility cabinets. Create huge
              storage. Impressive vertical look. Height range from 84 inches to
              96 inches.
            </Typography>
          </>
        }
      />
      <Question question="Select type of Drawers hardware required" />
      <RadioGroupAnswer
        options={[
          "SS (Steel) Baskets",
          "Tandem (Hafele)",
          "Innotech (Hettich)"
        ]}
        value={typeOfDrawersHardware}
        name="typeOfDrawersHardware"
        onChange={handleInputChange}
      />
      <Hint title="Types of Drawers system:" />
      <Hint
        image={InnotechDrawersImage}
        text={
          <Typography variant="body2" component="div">
            <b>Wall cabinets</b> Hettich brand. Box like drawer system includes
            - box side profile, hardware for sliding, connectors(screws) for
            front & rear. Weight capacity is higher. Warranty for sliding
            mechanism is good. Looks Modern works smoothly. At-least 50% more
            expensive compared to steel trolleys.
          </Typography>
        }
      />
      <Hint
        image={TandemDrawersImage}
        text={
          <Typography variant="body2" component="div">
            <b>Tandem drawers</b> Hafele Brand. Box like drawer system includes
            - box side profile, hardware for sliding, connectors(screws) for
            front & rear. Weight capacity is higher. Warranty for sliding
            mechanism is good. Looks Modern works smoothly. At-least 50% more
            expensive compared to steel trolleys.
          </Typography>
        }
      />
      <Hint
        image={PlainBasketImage}
        text={
          <Typography variant="body2" component="div">
            <b>SS(Steel) Trolleys:</b> Widely used types of baskets in Modular
            Kitchen. Steel trolleys of various size & designs in addition with
            Telescopic Channel (Hardware) create Drawers. Branded & lot of
            non-branded options available. Less expensive compared to
            Tandem/Innotech.
          </Typography>
        }
      />
      <Question question="Choose your Cabinets" />
      <CheckboxAnswer
        options={CabinetsOptions}
        defaultValue={cabinets}
        name="cabinets"
        onChange={onSelectionChange}
      />

      <Typography sx={{ mt: 8 }} variant="h5" component="div">
        Countertop
      </Typography>
      <Divider sx={{ mt: 1, mb: 2 }} />
      <Hint title="Countertop options for Indian Kitchen:" />
      <Hint
        text={
          <Typography variant="body2" component="div" sx={{ mt: 1 }}>
            <b>Granite Countertop</b> Since Granite is natural, every slab is
            unique. Best for Indian Kitchens. Easily handle lot of rough use.
            Easy to clean and maintain. It is scratch and stain proof.
          </Typography>
        }
      />
      <Hint
        text={
          <Typography variant="body2" component="div" sx={{ mt: 1 }}>
            <b>Marble Countertop</b> Like Granite, Marble is also good for rough
            use. Easy to maintain & clean. Only problem is, marble can absorb
            liquid stains from tea, turmeric etc.
          </Typography>
        }
      />
      <Hint
        text={
          <Typography variant="body2" component="div" sx={{ mt: 1 }}>
            <b>Quartz Countertop</b> It mimics the look of stone but requires
            less maintenance. All good qualities like Granite. Less expensive
            compared to high end granite. Requires caution while using hot
            vessels. If kept for longer time, can cause burn marks.
          </Typography>
        }
      />
      <Hint
        text={
          <Typography variant="body2" component="div" sx={{ mt: 1 }}>
            <b>Corian (Solid Surface)</b> Most beautiful option for countertop.
            All joints are fused to give a seamless surface. No joint lines.
            Many colours and patterns available. Polishing after few years,
            makes it look like brand new. Costly. Avoid keep hot vessels on
            surface, can cause brun marks.
          </Typography>
        }
      />
      <Hint
        text={
          <Typography variant="body2" component="div" sx={{ mt: 1 }}>
            <b>Nano white</b> Artificially manufactured slab from silica and
            other minerals. Available in three grades of quality, G3, G4 and G5.
            G5 is the best. All good qualities like Granite. Rough use. Easy to
            maintain. Does not absorb stains or any liquids. Looks like
            expensive pure white marble. Joints visible like in granite or
            marble. Make sur to use Resins during installation. If low quality
            glue used, it can discolour and turn yellowish.
          </Typography>
        }
      />
      <Hint
        text={
          <Typography variant="body2" component="div" sx={{ mt: 1 }}>
            <b>Kadappa</b> All good qualities like Granite. However bit old
            fashioned. No variety in colour. Over period of time, gets
            scratches. Polishing surface can make it look like new one.
          </Typography>
        }
      />
      <Question question="Choose Countertop" />
      <RadioGroupAnswer
        options={CounterTopOptions}
        value={countertop}
        name="countertop"
        onChange={handleInputChange}
        inline
      />
      <Typography sx={{ mt: 8 }} variant="h5" component="div">
        Shutter Finish
      </Typography>
      <Divider sx={{ mt: 1, mb: 2 }} />
      <Hint title="Shutter Finish options for Indian Kitchen:" />
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
        options={ShutterFinishOptions}
        value={shutterFinishType}
        name="shutterFinishType"
        onChange={handleInputChange}
        inline
      />
    </Box>
  );
}
