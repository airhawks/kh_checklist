import { Box } from "@mui/system";
import Question from "../input/Question";
import CheckboxAnswer from "../input/CheckboxAnswer";
import * as React from "react";
import {
  BedroomBedSizeOptions,
  BedroomMattressTypeOptions,
  BedroomStorageOptions
} from "./bedroomConstants";
import SubSectionTitle from "../SubSectionTitle";
import RadioGroupAnswer from "../input/RadioGroupAnswer";

export default function BedroomBed({
  data,
  handleInputChange,
  onSelectionChange
}) {
  const {
    sizeOfBed,
    materialType,
    headBoardIdeasLiked,
    typeOfStorage,
    budgetForMattress,
    typeOfMattress,
    thicknessOfMattress
  } = data;
  return (
    <Box>
      <SubSectionTitle title="Bed" />
      <Question question="Select Size of the bed required" />
      <RadioGroupAnswer
        options={BedroomBedSizeOptions}
        value={sizeOfBed}
        name="sizeOfBed"
        onChange={handleInputChange}
        inline
      />

      <Question question="Select Material Type" />
      <RadioGroupAnswer
        options={[
          "Solid wood (long lasting)",
          "Plywood - Modular work",
          "Plywood - Carpentry work",
          "Engineered wood (Lightweight, budget friendly)",
          "Metal beds"
        ]}
        value={materialType}
        name="materialType"
        onChange={handleInputChange}
      />

      <Question question="Select all Headboard ideas you like" />
      <CheckboxAnswer
        options={[
          "Wall mounted headboard",
          "Bed mounted headboard",
          "Big Headboard",
          "Small Headboard",
          "Upholstered",
          "Traditional Wooden Carved headboard"
        ]}
        defaultValue={headBoardIdeasLiked}
        name="headBoardIdeasLiked"
        onChange={onSelectionChange}
        inline={false}
      />

      <Question question="Select type of Storage required" />
      <RadioGroupAnswer
        options={BedroomStorageOptions}
        value={typeOfStorage}
        name="typeOfStorage"
        onChange={handleInputChange}
        inline
      />

      <Question question="Select budget for Mattress" />
      <RadioGroupAnswer
        options={[
          "Economy (under Rs 10,000)",
          "Mid Range (Rs 10,000 - Rs 20,000)",
          "Premium (Rs 20,000 & above)"
        ]}
        value={budgetForMattress}
        name="budgetForMattress"
        onChange={handleInputChange}
      />
      <Question question="Select type of mattress required" />
      <RadioGroupAnswer
        options={BedroomMattressTypeOptions}
        value={typeOfMattress}
        name="typeOfMattress"
        onChange={handleInputChange}
        inline
      />
      <Question question="Select thickness of mattress" />
      <RadioGroupAnswer
        options={["4 inches", "5 inches", "6 inches", "7 inches", "8 inches"]}
        value={thicknessOfMattress}
        name="thicknessOfMattress"
        onChange={handleInputChange}
        inline
      />
    </Box>
  );
}
