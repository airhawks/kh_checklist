import { Box } from "@mui/system";
import Question from "../input/Question";
import CheckboxAnswer from "../input/CheckboxAnswer";
import ShortAnswer from "../input/ShortAnswer";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import * as React from "react";
import Hint from "../input/Hint";
import {
  BedroomLevelOfWorkOptions,
  BedroomTypeOfWorkOptions
} from "./bedroomConstants";

export default function BedroomWorkRequired({
  data,
  handleInputChange,
  onSelectionChange
}) {
  const { levelOfWorkRequired, typeOfWorkRequired, sqftArea, height } = data;
  return (
    <Box>
      <Question question="What level of work is required in Bedroom?" />
      <RadioGroupAnswer
        options={BedroomLevelOfWorkOptions}
        value={levelOfWorkRequired}
        name="levelOfWorkRequired"
        onChange={handleInputChange}
      />

      <Question question="What work is required in Bedroom?" />
      <CheckboxAnswer
        options={BedroomTypeOfWorkOptions}
        defaultValue={typeOfWorkRequired}
        name="typeOfWorkRequired"
        onChange={onSelectionChange}
      />

      <Question question="Approximate Square Feet area of Bedroom" />
      <ShortAnswer
        name="sqftArea"
        label=""
        defaultValue={sqftArea}
        onChange={handleInputChange}
        fullWidth={false}
        placeholder="140"
      />
      <Hint
        text="Multiplying the length by the width gives (square feet) Area of the bathroom. 
          For example, if the room measures 10 feet wide by 14 feet long, Area is 140 sq. ft."
      />

      <Question question="What is Height of Bedroom? (in feets)" />
      <ShortAnswer
        name="height"
        label=""
        defaultValue={height}
        onChange={handleInputChange}
        fullWidth={false}
        placeholder="10"
      />
    </Box>
  );
}
