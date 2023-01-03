import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Summary from "./components/Summary";
import { Divider } from "@mui/material";
import useSelectedRoomDetails from "./hooks/useSelectedRoomDetails";
import { useSelector } from "react-redux";
import SummaryPageHeader from "./components/SummaryPageHeader";
import RoomSummary from "./RoomSummary";
import { RoomType } from "./constants";

export default function ProjectSummary({ onExit }) {
  const { roomNamesAndBathrooms, hasCommonBathroom } = useSelector(
    (state) => state.project.projectType
  );
  // console.log(selectedRoom, roomType, roomName);

  return (
    <Box sx={{ width: 1 }}>
      <SummaryPageHeader onExit={onExit} />
      <RoomSummary selectedRoom={RoomType.LivingRoom} />
      <RoomSummary selectedRoom={RoomType.Kitchen} />
      {roomNamesAndBathrooms.map(({ hasBathroom }, index) => (
        <Box key={index}>
          <RoomSummary
            selectedRoom={{
              index,
              roomType: RoomType.Bedroom
            }}
          />
          {hasBathroom ? (
            <RoomSummary
              selectedRoom={{ index, roomType: RoomType.Bathroom }}
            />
          ) : null}
        </Box>
      ))}
      {/*  */}
      {hasCommonBathroom ? (
        <RoomSummary selectedRoom={RoomType.CommonBathroom} />
      ) : null}
    </Box>
  );
}
