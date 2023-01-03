import { Box } from "@mui/system";
import Question from "../input/Question";
import CheckboxAnswer from "../input/CheckboxAnswer";
import ShortAnswer from "../input/ShortAnswer";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import * as React from "react";
import { RoomType } from "../../constants";

import { useSelector, useDispatch } from "react-redux";
import { setStandardRoomValues } from "../../store/roomsDetailSlice";
import {
  KitchenLevelOfWorkOptions,
  KitchenTypeOfWorkOptions,
  MovingWorkOptions
} from "./kitchenConstants";
import Hint from "../input/Hint";

export default function KitchenWorkRequired({
  handleInputChange,
  onSelectionChange
}) {
  const {
    levelOfWorkRequired,
    typeOfWorkRequired,
    sqftArea,
    height,
    movingWork
  } = useSelector((state) => state.roomsDetail[RoomType.Kitchen].workRequired);
  return (
    <Box>
      <Question question="What level of work is required in Kitchen?" />
      <RadioGroupAnswer
        options={KitchenLevelOfWorkOptions}
        value={levelOfWorkRequired}
        name="levelOfWorkRequired"
        onChange={handleInputChange}
      />
      <Question question="Approximate Square Feet area of Kitchen" />
      <ShortAnswer
        name="sqftArea"
        label=""
        defaultValue={sqftArea}
        onChange={handleInputChange}
        fullWidth={false}
        placeholder="120"
      />
      <Hint
        text="Multiplying the length by the width gives (square feet) Area of the bathroom.
          For example, if the room measures 10 feet wide by 12 feet long, Area is 120 sq. ft."
      />
      <Question question="What is Height of Kitchen? (in feets)" />
      <ShortAnswer
        name="height"
        label=""
        defaultValue={height}
        onChange={handleInputChange}
        fullWidth={false}
        placeholder="10"
      />
      <Question question="What work is required in Kitchen?" />
      <CheckboxAnswer
        options={KitchenTypeOfWorkOptions}
        defaultValue={typeOfWorkRequired}
        name="typeOfWorkRequired"
        onChange={onSelectionChange}
      />
      <Question question="Select all moving work required" />
      <CheckboxAnswer
        options={MovingWorkOptions}
        defaultValue={movingWork}
        name="movingWork"
        onChange={onSelectionChange}
      />
    </Box>
  );
}
