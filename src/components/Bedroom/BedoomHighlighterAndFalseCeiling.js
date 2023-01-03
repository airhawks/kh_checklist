import { Box } from "@mui/system";
import Question from "../input/Question";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import * as React from "react";
import { CeilingLightOptions } from "../LivingRoom/livingRoomConstants";
import Hint from "../input/Hint";
import { Typography } from "@mui/material";
import CheckboxAnswer from "../input/CheckboxAnswer";

import HighlighterBedroomImage from "../../../assets/bedroom/Highlighter-Bedroom.jpg";
import FalseCeilingDesignImage from "../../../assets/bedroom/false-ceiling-design.jpg";
import FalseCeilingMaterialImage from "../../../assets/bedroom/false-ceiling-material.jpg";
import SlabFalseCeilingImage from "../../../assets/bedroom/slab-false-ceiling.jpg";
import SubSectionTitle from "../SubSectionTitle";

export default function BedoomHighlighterAndFalseCeiling({
  data,
  handleInputChange,
  onSelectionChange
}) {
  const {
    needWallHighlighter,
    highlightersLiked,
    hasFinalizedFalseCeilingDesign,
    hasDecidedFalseCeilingFinishMaterial,
    heightOfRoomSlab,
    typesOfCeilingLightsRequired
  } = data;

  return (
    <Box>
      <SubSectionTitle title="Wall Highlighters" />
      <Question question="Do you need wall highlighter ?" />
      <RadioGroupAnswer
        options={["Yes", "No", "Not Sure"]}
        value={needWallHighlighter}
        name="needWallHighlighter"
        onChange={handleInputChange}
      />
      <Hint
        title="Wall Highlighter:"
        text={
          <Typography variant="body2" component="div">
            Highlighters are used on walls to bring in the mood and create an
            ambiance. Wall behind Bed can be highligted. The highlighted wall is
            going to be different from other 3 or 2 walls or the room.
          </Typography>
        }
        image={HighlighterBedroomImage}
      />

      <Question question="Select all Highlighters you like" />
      <CheckboxAnswer
        options={[
          "Texture Paint",
          "Wooden Panel",
          "Tiles / Dado",
          "Wallpaper",
          "Wall Decals",
          "Lights"
        ]}
        defaultValue={highlightersLiked}
        name="highlightersLiked"
        onChange={onSelectionChange}
      />

      <SubSectionTitle title="False Ceiling" />
      <Question question="Have you finalised design for False Ceiling?" />
      <RadioGroupAnswer
        options={["Yes", "No", "Not Sure"]}
        value={hasFinalizedFalseCeilingDesign}
        name="hasFinalizedFalseCeilingDesign"
        onChange={handleInputChange}
      />
      <Hint
        title="False Ceiling design:"
        text={
          <Typography variant="body2" component="div">
            Apart from look & feel. Seating area, position of Fans, position of
            Air condition, lighting arrangements , size of the room - all these
            matter in deciding design of false ceiling.
          </Typography>
        }
        image={FalseCeilingDesignImage}
      />

      <Question question="Have you decided finish material options for false ceiling?" />
      <RadioGroupAnswer
        options={["Yes", "No", "Not Sure"]}
        value={hasDecidedFalseCeilingFinishMaterial}
        name="hasDecidedFalseCeilingFinishMaterial"
        onChange={handleInputChange}
      />
      <Hint
        title="Material for False Ceiling:"
        text={
          <Typography variant="body2" component="div">
            <b>Gypsum board & POP (plaster of paris)</b> - These two most
            commonly used and value for money options. We strongly recommend
            Gypsum board over traditional POP material. Many old school false
            ceiling contractors will suggest POP, but Gypsum is way to go.
          </Typography>
        }
        image={FalseCeilingMaterialImage}
      />

      <Question question="What is height of your room slab?" />
      <RadioGroupAnswer
        options={["Below 9 feet", "More than 9 feet"]}
        value={heightOfRoomSlab}
        name="heightOfRoomSlab"
        onChange={handleInputChange}
      />
      <Hint
        title="Slab Height:"
        text={
          <Typography variant="body2" component="div">
            A minimum of 9 feet of height shall be maintained from floor to
            ceiling, to avoid a feeling of claustrophobia. This also helps
            maintain room atmosphere light and airy. Any false ceiling design
            will require minimum of 8-10 inches of height to manage lighting &
            Electrical wiring.
          </Typography>
        }
        image={SlabFalseCeilingImage}
      />

      <Question question="Select all types of Ceiling lights required" />
      <CheckboxAnswer
        options={CeilingLightOptions}
        defaultValue={typesOfCeilingLightsRequired}
        name="typesOfCeilingLightsRequired"
        onChange={onSelectionChange}
      />
    </Box>
  );
}
