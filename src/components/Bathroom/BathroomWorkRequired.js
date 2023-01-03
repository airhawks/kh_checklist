import { Box } from "@mui/system";
import Question from "../input/Question";
import CheckboxAnswer from "../input/CheckboxAnswer";
import ShortAnswer from "../input/ShortAnswer";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import * as React from "react";
import Hint from "../input/Hint";
import {
  BathroomLevelOfWorkOptions,
  BathroomNewWorkOptions,
  BathroomTypeOfWorkOptions
} from "./bathroomConstants";
import { BathroomShapeOptions } from "./bathroomConstants";

export default function BathroomWorkRequired({
  data,
  handleInputChange,
  onSelectionChange
}) {
  const {
    levelOfWorkRequired,
    typeOfWorkRequired,
    shapeOfBathroom,
    sqftArea,
    height,
    newlyRequiredItems
  } = data;
  return (
    <Box>
      <Question question="What level of work is required in Bathroom?" />
      <RadioGroupAnswer
        options={BathroomLevelOfWorkOptions}
        value={levelOfWorkRequired}
        name="levelOfWorkRequired"
        onChange={handleInputChange}
      />

      <Question question="What work is required in Bathroom?" />
      <CheckboxAnswer
        options={BathroomTypeOfWorkOptions}
        defaultValue={typeOfWorkRequired}
        name="typeOfWorkRequired"
        onChange={onSelectionChange}
      />

      <Question question="What is Shape of your bathroom?" />
      <RadioGroupAnswer
        options={BathroomShapeOptions}
        value={shapeOfBathroom}
        name="shapeOfBathroom"
        onChange={handleInputChange}
        inline
      />

      <Question question="Approximate Square Feet area of Bathroom" />
      <ShortAnswer
        name="sqftArea"
        label=""
        defaultValue={sqftArea}
        onChange={handleInputChange}
        fullWidth={false}
        placeholder="32"
      />
      <Hint
        text="Multiplying the length by the width gives (square feet) Area of the bathroom.
          For example, if the room measures 4 feet wide by 8 feet long, Area is 32 sq. ft."
      />

      <Question question="What is Height of Bathroom? (in feets)" />
      <ShortAnswer
        name="height"
        label=""
        defaultValue={height}
        onChange={handleInputChange}
        fullWidth={false}
        placeholder="7"
      />

      <Question question="Select all that is newly required in your Bathroom" />
      <CheckboxAnswer
        options={BathroomNewWorkOptions}
        defaultValue={newlyRequiredItems}
        name="newlyRequiredItems"
        onChange={onSelectionChange}
      />
    </Box>
  );
}
