import { Box } from "@mui/system";
import Question from "../input/Question";
import CheckboxAnswer from "../input/CheckboxAnswer";
import * as React from "react";
import {
  BedroomAccessoriesOptions,
  BedroomElectricalItemsOptions,
  BedroomNewFurnitureOptions
} from "./bedroomConstants";
import SubSectionTitle from "../SubSectionTitle";

export default function BedroomDesign({ data, onSelectionChange }) {
  const {
    necessities,
    wishlistItems,
    newFurnitureRequired,
    newAccessoriesRequired,
    newElectricalItemsRequired
  } = data;
  return (
    <Box>
      <SubSectionTitle title="Design - Necessities & Wish list" />
      <Question question="Select all Necessities you want in your Bedroom:" />
      <CheckboxAnswer
        options={[" Sleeping", "Dressing", "Privacy", "Retreat (quiet time)"]}
        defaultValue={necessities}
        name="necessities"
        onChange={onSelectionChange}
      />

      <Question question="Select Wish List items for your Bedroom" />
      <CheckboxAnswer
        options={[
          "Reading",
          "Exercise",
          "Computer/work area",
          "Walk-in closet",
          "Sitting area"
        ]}
        defaultValue={wishlistItems}
        name="wishlistItems"
        onChange={onSelectionChange}
      />

      <SubSectionTitle title="Furniture" />

      <Question question="Select all that is newly required in your Bedroom" />
      <CheckboxAnswer
        options={BedroomNewFurnitureOptions}
        defaultValue={newFurnitureRequired}
        name="newFurnitureRequired"
        onChange={onSelectionChange}
        inline={false}
      />

      <SubSectionTitle title="Accessories" />
      <Question question="Select Accesorries newly required in your bedroom" />
      <CheckboxAnswer
        options={BedroomAccessoriesOptions}
        defaultValue={newAccessoriesRequired}
        name="newAccessoriesRequired"
        onChange={onSelectionChange}
        inline={false}
      />

      <SubSectionTitle title="Electrical & Lightings" />
      <Question question="Select all Electrical items newly required:" />
      <CheckboxAnswer
        options={BedroomElectricalItemsOptions}
        defaultValue={newElectricalItemsRequired}
        name="newElectricalItemsRequired"
        onChange={onSelectionChange}
      />
    </Box>
  );
}
