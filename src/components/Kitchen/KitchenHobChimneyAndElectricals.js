import { Box } from "@mui/system";
import Question from "../input/Question";
import CheckboxAnswer from "../input/CheckboxAnswer";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import * as React from "react";
import { RoomType } from "../../constants";

import { useSelector, useDispatch } from "react-redux";
import { setStandardRoomValues } from "../../store/roomsDetailSlice";
import {
  ChimneyTypeOptions,
  CookingGasApplianceSelectionOptions,
  CookingGasApplianceTypeOptions,
  ElectricalOutletOptions,
  FactorsForChimneyOptions,
  KitchenLevelOfWorkOptions,
  LightingAndElectricalsOptions,
  MovingWorkOptions,
} from "./kitchenConstants";
import Hint, { HintImagePosition } from "../input/Hint";
import { Divider, Typography } from "@mui/material";
import CookingRangeImage from "../assets/kitchen/Cooking-Range.jpg";

export default function KitchenHobChimneyAndElectricals({
  handleInputChange,
  onSelectionChange,
}) {
  const {
    cookingGasApplianceType,
    factorsForCookingGasApplianceSelection,
    cookingRange,
    typeOfChimney,
    factorsForChimneySelection,
    lightingAndElectricalsRequired,
    electricalOutlets,
  } = useSelector(
    (state) => state.roomsDetail[RoomType.Kitchen].hobChimneyAndElectricals
  );

  return (
    <Box>
      <Typography sx={{ mt: 4 }} variant="h5" component="div">
        Hob & Chimney Types
      </Typography>
      <Divider sx={{ mt: 1, mb: 2 }} />
      <Question question="Choose Cooking Gas appliances Type" />
      <RadioGroupAnswer
        options={CookingGasApplianceTypeOptions}
        value={cookingGasApplianceType}
        name="cookingGasApplianceType"
        onChange={handleInputChange}
        inline
      />
      <Question question="Select all factors to consider while selecting cooking appliance:" />
      <CheckboxAnswer
        options={CookingGasApplianceSelectionOptions}
        defaultValue={factorsForCookingGasApplianceSelection}
        name="factorsForCookingGasApplianceSelection"
        onChange={onSelectionChange}
      />
      <Question question="Do you know what is cooking range?" />
      <RadioGroupAnswer
        options={["Yes", "No", "Not Sure"]}
        value={cookingRange}
        name="cookingRange"
        onChange={handleInputChange}
      />
      <Hint
        text={
          <Typography sx={{ width: 220 }}>
            Multipurpose functionality with its grill, oven, cooktop combination
            in one appliance.
          </Typography>
        }
        title="Cooking range:"
        image={CookingRangeImage}
        imagePosition={HintImagePosition.right}
      />
      <Question question="Choose types of Chimney/Hoods" />
      <RadioGroupAnswer
        options={ChimneyTypeOptions}
        value={typeOfChimney}
        name="typeOfChimney"
        onChange={handleInputChange}
        inline
      />
      <Question question="Select all factors to consider while selecting Chimney / Hood :" />
      <CheckboxAnswer
        options={FactorsForChimneyOptions}
        defaultValue={factorsForChimneySelection}
        name="factorsForChimneySelection"
        onChange={onSelectionChange}
      />

      <Typography sx={{ mt: 8 }} variant="h5" component="div">
        Lighting & Electricals
      </Typography>
      <Divider sx={{ mt: 1, mb: 2 }} />
      <Question question="Select all required:" />
      <CheckboxAnswer
        options={LightingAndElectricalsOptions}
        defaultValue={lightingAndElectricalsRequired}
        name="lightingAndElectricalsRequired"
        onChange={onSelectionChange}
      />
      <Question question="Select all Electrical outlets required in Kitchen" />
      <CheckboxAnswer
        options={ElectricalOutletOptions}
        defaultValue={electricalOutlets}
        name="electricalOutlets"
        onChange={onSelectionChange}
      />
    </Box>
  );
}
