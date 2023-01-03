import { Box } from "@mui/system";
import Question from "../input/Question";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import * as React from "react";
import {
  BlindOrCurtainOptions,
  LivingRoomAccessoriesOptions,
  LivingRoomBalconyOptions,
  SlidingWindowOptions,
} from "../LivingRoom/livingRoomConstants";
import Hint from "../input/Hint";
import { Typography } from "@mui/material";
import CheckboxAnswer from "../input/CheckboxAnswer";
import MarbleWindowFrameImage from "../assets/livingRoom/Marble-Window-Frame.jpg";
import SubSectionTitle from "../SubSectionTitle";

export default function BedroomBalconyAndWindows({
  data,
  handleInputChange,
  onSelectionChange,
}) {
  const {
    thingsRequiredForBalcony,
    isNewWindowFrameRequired,
    slidingWindowOption,
    blindsOrCurtains,
    accessoriesRequired,
  } = data;

  return (
    <Box>
      <SubSectionTitle title="Balcony" />
      <Question question="Select things required for Balcony" />
      <CheckboxAnswer
        options={LivingRoomBalconyOptions}
        defaultValue={thingsRequiredForBalcony}
        name="thingsRequiredForBalcony"
        onChange={onSelectionChange}
      />

      <SubSectionTitle title="Sliding Windows" />
      <Question question="Is new Marble/Granite window frame required?" />
      <RadioGroupAnswer
        options={["Yes", "No", "Not Sure"]}
        value={isNewWindowFrameRequired}
        name="isNewWindowFrameRequired"
        onChange={handleInputChange}
      />
      <Hint
        title="Granite or Marble Window Frame:"
        text="Granite/Marble Frame makes a strong base for installing Sliding windows on top of it.
          Marble frames are durable, cost effective, sturdy & easy to clean."
        image={MarbleWindowFrameImage}
      />

      <Question question="Select Sliding Window Option" />
      <RadioGroupAnswer
        options={SlidingWindowOptions}
        value={slidingWindowOption}
        name="slidingWindowOption"
        onChange={handleInputChange}
        inline
      />
      <Hint
        title="Which is Better: Aluminium or uPVC Sliding windows?"
        text={
          <>
            <Typography variant="body1" component="div">
              Aluminium Sliding windows
            </Typography>
            <Typography variant="body2" component="div">
              <ul style={{ marginTop: 8 }}>
                {[
                  "Not Sound proof",
                  "Work done by local sliding shop",
                  "Reasonable priced",
                  "Quick delivery & repair",
                  "Easy to repair",
                ].map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </Typography>

            <Typography sx={{ mt: 2 }} variant="body1" component="div">
              uPVC Sliding windows
            </Typography>
            <Typography variant="body2" component="div">
              <ul style={{ marginTop: 8 }}>
                {[
                  "Sound proof windows",
                  "Order to be placed with branded company",
                  "Expensive compared to Aluminum",
                  "45 days after order placed",
                  "Incase any repair, it is hassle",
                ].map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </Typography>
          </>
        }
      />

      <Question question="Select Blinds or Curtains" />
      <RadioGroupAnswer
        options={BlindOrCurtainOptions}
        value={blindsOrCurtains}
        name="blindsOrCurtains"
        onChange={handleInputChange}
        inline
      />

      <Question question="Select all Accessories required:" />
      <CheckboxAnswer
        options={LivingRoomAccessoriesOptions}
        defaultValue={accessoriesRequired}
        name="accessoriesRequired"
        onChange={onSelectionChange}
      />
    </Box>
  );
}
