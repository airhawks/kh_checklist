import { Box } from "@mui/system";
import Question from "../input/Question";
import * as React from "react";
import {
  BathroomCommodesOptions,
  BathroomFlushingSystemOptions
} from "./bathroomConstants";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import { Typography } from "@mui/material";
import Hint from "../input/Hint";

export default function BathroomWCArea({ data, handleInputChange }) {
  const { waterClosetOption, flushingSystem } = data;
  return (
    <Box>
      <Question question="Select WC (Water Closet) Option" />
      <Hint text="Types of Commodes" />
      <RadioGroupAnswer
        options={BathroomCommodesOptions}
        value={waterClosetOption}
        name="waterClosetOption"
        onChange={handleInputChange}
        inline
      />

      <Hint
        title="Floor mounted can be - One piece or Coupled closet."
        text="If the toilet and tank were fused without any joints,
          then the toilet is known as a one-piece toilet or also known as single piece toilet.
          If the toilet and tank are separate and joined using fittings,
          then it is known as a two-piece toilet or also called as coupled toilet."
      />
      <Hint
        title="Which is Better: Wall-Mounted or Floor-Mounted WC (Commode)?"
        text={
          <>
            <Typography variant="body1" component="div">
              Wall-Mounted
            </Typography>
            <Typography sx={{ mt: 1 }} variant="body2" component="div">
              A wall-mounted WC comprises mainly four parts, namely a wall tank,
              a flush actuator (the device that controls flow), a toilet bowl
              and a seat.
              <ul style={{ marginTop: 4 }}>
                {[
                  "takes less space",
                  "easy to clean",
                  "requires thick strong wall to install",
                  "many cases extra wall is made behind commode so that it can hold the concealed flushing cistern."
                ].map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </Typography>

            <Typography variant="body1" component="div">
              Floor-Mounted
            </Typography>
            <Typography variant="body2" component="div">
              <ul style={{ marginTop: 4 }}>
                {["takes more space", "not easy to clean"].map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </Typography>
          </>
        }
      />

      <Question question="Select type of flushing system" />
      <RadioGroupAnswer
        options={BathroomFlushingSystemOptions}
        value={flushingSystem}
        name="flushingSystem"
        onChange={handleInputChange}
        inline
      />
    </Box>
  );
}
