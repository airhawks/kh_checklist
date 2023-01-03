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
  LivingRoomLevelOfWorkOptions,
  LivingRoomTypeOfWorkOptions,
  MovingWorkOptions,
  NewlyRequiredItemsOptions
} from "./livingRoomConstants";
import Hint from "../input/Hint";

export default function LivingRoomWorkRequired({
  handleInputChange,
  onSelectionChange
}) {
  const {
    levelOfWorkRequired,
    typeOfWorkRequired,
    sqftArea,
    height,
    newlyRequiredItems
  } = useSelector(
    (state) => state.roomsDetail[RoomType.LivingRoom].workRequired
  );
  return (
    <Box>
      <Question question="What level of work is required in Living room?" />
      <RadioGroupAnswer
        options={LivingRoomLevelOfWorkOptions}
        value={levelOfWorkRequired}
        name="levelOfWorkRequired"
        onChange={handleInputChange}
      />

      <Question question="What work is required in Living room?" />
      <CheckboxAnswer
        options={LivingRoomTypeOfWorkOptions}
        defaultValue={typeOfWorkRequired}
        name="typeOfWorkRequired"
        onChange={onSelectionChange}
      />
      <Question question="Approximate Square Feet area of Living Room" />
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
      <Question question="What is Height of Living Room? (in feets)" />
      <ShortAnswer
        name="height"
        label=""
        defaultValue={height}
        onChange={handleInputChange}
        fullWidth={false}
        placeholder="10"
      />
      <Question question="Select all that is newly required in your Living room" />
      <CheckboxAnswer
        options={NewlyRequiredItemsOptions}
        defaultValue={newlyRequiredItems}
        name="newlyRequiredItems"
        onChange={onSelectionChange}
      />
    </Box>
  );
}
