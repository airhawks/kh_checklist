import { Box } from "@mui/system";
import Question from "../input/Question";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import * as React from "react";
import { RoomType } from "../../constants";
import KitchenWorkTriangleImage from "../../../assets/kitchen/Kitchen-work-triangle.jpg";
import OpenKitchenImage from "../../../assets/kitchen/Open-Kitchen.jpg";

import { useSelector } from "react-redux";
import { KitchenLayoutsOptions } from "./kitchenConstants";
import Hint from "../input/Hint";
import { Typography } from "@mui/material";

export default function KitchenLayout({
  handleInputChange,
  onSelectionChange
}) {
  const {
    doesKnowKitchenWorkTriangle,
    kitchenLayouts,
    needOpenKitchen
  } = useSelector((state) => state.roomsDetail[RoomType.Kitchen].layout);

  return (
    <Box>
      <Question question="Do you know about Kitchen work triangle?" />
      <RadioGroupAnswer
        options={["Yes", "No", "Not Sure"]}
        value={doesKnowKitchenWorkTriangle}
        name="doesKnowKitchenWorkTriangle"
        onChange={handleInputChange}
      />
      <Hint
        title="Kitchen Work Triangle:"
        text="It is a concept used to determine efficient kitchen layouts.
        The primary tasks in a home kitchen are carried out between the cook top,
        the sink and the refrigerator. These 3 are close (but not too close) to one other,
        the kitchen will be easy and efficient to use."
        image={KitchenWorkTriangleImage}
      />
      <Question question="Select Kitchen layout:" />
      <RadioGroupAnswer
        options={KitchenLayoutsOptions}
        value={kitchenLayouts}
        name="kitchenLayouts"
        onChange={handleInputChange}
        inline={true}
      />
      <Question question="Do you need Open Kitchen?" />
      <RadioGroupAnswer
        options={["Yes", "No", "Not Sure"]}
        value={needOpenKitchen}
        name="needOpenKitchen"
        onChange={handleInputChange}
      />
      <Hint
        title="Open Kitchen:"
        image={OpenKitchenImage}
        text={
          <>
            <Typography variant="body2" component="div">
              Wall between kitchen & living room is removed. Serving platform is
              created between 2 rooms. High stool/chairs can be used from Living
              room side to create breakfast counter. Everything in your cooking
              space can be seen from living. It becomes to keep Kitchen neat and
              tidy all the time. Kitchen should have lot of storage units to
              avoid clutter.
            </Typography>
            <Typography sx={{ mt: 2 }} variant="body1" component="div">
              Key factors to note about Open Kitchen:
            </Typography>
            <Typography variant="body2" component="div">
              <ul style={{ marginTop: 8 }}>
                {[
                  "Wall between Kitchen & adjacent room broken",
                  "High stool/chair used to create breakfast counter",
                  "Lots of natural light & spaciousness",
                  "Platform acts as a breakfast counter",
                  "Reduces privacy",
                  "Might incur moving of Electrical/Plumbing"
                ].map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </Typography>
          </>
        }
      />
    </Box>
  );
}
