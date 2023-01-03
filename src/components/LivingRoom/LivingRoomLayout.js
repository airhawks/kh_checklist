import { Box } from "@mui/system";
import Question from "../input/Question";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import * as React from "react";
import { RoomType } from "../../constants";

import { useSelector, useDispatch } from "react-redux";
import { setStandardRoomValues } from "../../store/roomsDetailSlice";
import {
  SeatingArrangementLayoutOptions,
  TVUnitLayoutFactorOptions
} from "./livingRoomConstants";
import Hint from "../input/Hint";
import { Divider, Typography } from "@mui/material";
import CheckboxAnswer from "../input/CheckboxAnswer";
import LivingRoomFocalPointImage from "../../../assets/livingRoom/living-room-focal-point.jpg";
import LivingRoomTrafficFlowImage from "../../../assets/livingRoom/living-room-traffic-flow.jpg";
import ConversationAreaImage from "../../../assets/livingRoom/conversation-area.jpg";

export default function LivingRoomLayout({
  handleInputChange,
  onSelectionChange
}) {
  const {
    hasPlannedFocalPoint,
    hasPlannedTrafficFlow,
    hasPlannedCoversationArea,
    seatingArrangementStyles,
    factorsForDesigningTVUnit
  } = useSelector((state) => state.roomsDetail[RoomType.LivingRoom].layout);

  return (
    <Box>
      <Typography sx={{ mt: 4 }} variant="h5" component="div">
        Layout Planning
      </Typography>
      <Divider sx={{ mt: 1, mb: 2 }} />
      <Hint
        text={
          <>
            <Typography variant="body2" component="div">
              While Planning Layout of Living room, three important design
              concepts that you have to keep in mind:
            </Typography>
            <Typography variant="body2" component="div">
              <ul style={{ marginTop: 8 }}>
                {[
                  "Focal Point (also known as Eye magnet)",
                  "Traffic Flow",
                  "Conversation Area"
                ].map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </Typography>
          </>
        }
      />
      <Question question="Have you planned Focal Point inside your living room?" />
      <RadioGroupAnswer
        options={["Yes", "No", "Not Sure"]}
        value={hasPlannedFocalPoint}
        name="hasPlannedFocalPoint"
        onChange={handleInputChange}
      />
      <Hint title="Focal Point:" />
      <Hint
        image={LivingRoomFocalPointImage}
        text={
          <Typography variant="body2" component="div">
            Focal point is in your living is point that immediately draws the
            eyes/attention. For example : wall art, a window, or a TV. Create a
            focal point if your living room is lacking one, but don’t try to
            compete with existing features! Then, arrange your furniture in a
            U-shape around the focal point to draw attention to it.
          </Typography>
        }
      />
      <Question question="Have you figured out Traffic Flow inside your living room?" />
      <RadioGroupAnswer
        options={["Yes", "No", "Not Sure"]}
        value={hasPlannedTrafficFlow}
        name="hasPlannedTrafficFlow"
        onChange={handleInputChange}
      />
      <Hint title="Traffic Flow:" />
      <Hint
        image={LivingRoomTrafficFlowImage}
        text={
          <Typography variant="body2" component="div">
            Think about how people will move around the room. If possible, avoid
            creating walkways in front of the focal point in the space.
            Additionally, leave at least three feet of space in high-traffic
            areas, so that people do not bump into furniture.
          </Typography>
        }
      />
      <Question
        question="Have you planned Conversation Area?
"
      />
      <RadioGroupAnswer
        options={["Yes", "No", "Not Sure"]}
        value={hasPlannedCoversationArea}
        name="hasPlannedCoversationArea"
        onChange={handleInputChange}
      />
      <Hint title="Conversation Area:" />
      <Hint
        image={ConversationAreaImage}
        text={
          <Typography variant="body2" component="div">
            The way you position your furniture will determine how people will
            interact with each other and use your living room space. Place
            chairs in groups of two, at minimum, or set an accent chair next to
            a sofa or sectional for an inviting and friendly seating area. You
            want it to be easy for your guests to have conversations with each
            other or watch a movie together.
          </Typography>
        }
      />
      <Typography sx={{ mt: 4 }} variant="h5" component="div">
        Seating Arrangement Layout
      </Typography>
      <Divider sx={{ mt: 1, mb: 2 }} />
      <Question question="Seating Arrangment Style (Select all layouts that you like & might consider)" />
      <CheckboxAnswer
        options={SeatingArrangementLayoutOptions}
        defaultValue={seatingArrangementStyles}
        name="seatingArrangementStyles"
        onChange={onSelectionChange}
      />
      <Typography sx={{ mt: 4 }} variant="h5" component="div">
        TV Unit Layout Options
      </Typography>
      <Divider sx={{ mt: 1, mb: 2 }} />
      <Question question="Select all factors that one should consider in designing TV Unit" />
      <CheckboxAnswer
        options={TVUnitLayoutFactorOptions}
        defaultValue={factorsForDesigningTVUnit}
        name="factorsForDesigningTVUnit"
        onChange={onSelectionChange}
      />
    </Box>
  );
}
