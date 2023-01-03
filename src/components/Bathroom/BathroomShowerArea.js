import { Box } from "@mui/system";
import Question from "../input/Question";
import * as React from "react";
import { BathroomShowerEnclosureOptions } from "./bathroomConstants";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import { Typography } from "@mui/material";
import Hint from "../input/Hint";
import ShowerPanelImage from "../assets/bathroom/shower-panel.jpg";
import MixerImage from "../assets/bathroom/mixer.jpg";

export default function BathroomShowerArea({ data, handleInputChange }) {
  const {
    showerMixedRequired,
    wantToConsiderShowerPanel,
    showerEnclosureType,
  } = data;
  return (
    <Box>
      <Question question="Does your bathroom need new shower mixer?" />
      <RadioGroupAnswer
        options={["Yes", "No", "Maybe"]}
        value={showerMixedRequired}
        name="showerMixedRequired"
        onChange={handleInputChange}
        inline
      />
      <Hint
        title="Shower mixer:"
        text="The shower mixer is the device that mixes the hot and cold water together.
          It also often controls the specific water pressure."
        image={MixerImage}
      />

      <Question question="Do you want to consider 'Shower Panel' instead of shower?" />
      <RadioGroupAnswer
        options={["Yes", "No", "Maybe"]}
        value={wantToConsiderShowerPanel}
        name="wantToConsiderShowerPanel"
        onChange={handleInputChange}
      />
      <Hint
        title="Shower Panel:"
        text="Shower panels are big shower heads with panel. Panel is usually several feet tall and
          at least a foot wide. It has multiple shower heads and body sprayers built into the surface or
          extending from the top or sides. Shower panels contain an entire shower 
          system worth of fixtures in a single piece that mounts directly to your shower wall."
        image={ShowerPanelImage}
      />

      <Question question="Shower Enclosure type" />
      <Hint text="Glass Partition doors can be sliding or hinged door" />
      <RadioGroupAnswer
        options={BathroomShowerEnclosureOptions}
        value={showerEnclosureType}
        name="showerEnclosureType"
        onChange={handleInputChange}
        inline
      />
      <Hint
        title="How can Glass partition inside bathroom help?"
        text={
          <Typography variant="body2" component="div">
            <ul style={{ marginTop: 0 }}>
              {[
                "It separates Dry & Wet area - Less cleaning",
                "It keeps shower area separate - Looks modern",
                "Saves space - door can be sliding or hinged",
              ].map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </Typography>
        }
      />
    </Box>
  );
}
