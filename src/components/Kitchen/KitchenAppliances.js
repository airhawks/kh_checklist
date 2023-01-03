import { Box } from "@mui/system";
import Question from "../input/Question";
import CheckboxAnswer from "../input/CheckboxAnswer";
import * as React from "react";
import { RoomType } from "../../constants";

import { useSelector, useDispatch } from "react-redux";
import { setStandardRoomValues } from "../../store/roomsDetailSlice";
import {
  KitchenAppliancesPurchaseOptions,
  KitchenAppliancesToKeepOptions
} from "./kitchenConstants";

export default function KitchenAppliances({
  handleInputChange,
  onSelectionChange
}) {
  const { itemsToPurchase, itemsToBeKeptInKitchen } = useSelector(
    (state) => state.roomsDetail[RoomType.Kitchen].appliances
  );

  return (
    <Box>
      <Question question="Select all Items to Purchase" />
      <CheckboxAnswer
        options={KitchenAppliancesPurchaseOptions}
        defaultValue={itemsToPurchase}
        name="itemsToPurchase"
        onChange={onSelectionChange}
      />
      <Question question="Select all small appliances you will keep in your Kitchen" />
      <CheckboxAnswer
        options={KitchenAppliancesToKeepOptions}
        defaultValue={itemsToBeKeptInKitchen}
        name="itemsToBeKeptInKitchen"
        onChange={onSelectionChange}
      />
    </Box>
  );
}
