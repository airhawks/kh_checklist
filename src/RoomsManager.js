import * as React from "react";

import RoomsOverview from "./RoomsOverview";
import RoomEditor from "./RoomEditor";
import { useSelector, useDispatch } from "react-redux";
import { setFormValues } from "./store/projectIntakeSlice";
import RoomSummary from "./RoomSummary";
import SummaryPageHeader from "./components/SummaryPageHeader";
import { Box } from "@mui/material";

export default function RoomsManager() {
  const [currentlyEditing, setCurrentlyEditing] = React.useState(false);
  const [summaryShown, setShowSummary] = React.useState(false);

  const { roomsAndBathroomsStatus } = useSelector(
    (state) => state.project.status
  );

  const dispatch = useDispatch();
  const onChangeStatus = (room, status) => {
    setCurrentlyEditing(room);
    dispatch(setFormValues(["status", room, status]));
  };

  const onChangeRoomStatus = (index, room, status) => {
    const updatedRoomsAndBathroomsStatus = [
      ...roomsAndBathroomsStatus.slice(0, index),
      {
        ...roomsAndBathroomsStatus[index],
        [room]: status
      },
      ...roomsAndBathroomsStatus.slice(index + 1)
    ];
    setCurrentlyEditing({ index, roomType: room });
    dispatch(
      setFormValues([
        "status",
        "roomsAndBathroomsStatus",
        updatedRoomsAndBathroomsStatus
      ])
    );
  };

  return currentlyEditing ? (
    <RoomEditor
      selectedRoom={currentlyEditing}
      onExit={() => setCurrentlyEditing(false)}
      onChangeRoomStatus={onChangeRoomStatus}
      onChangeStatus={onChangeStatus}
    />
  ) : summaryShown ? (
    <Box sx={{ width: 1 }}>
      <SummaryPageHeader onExit={() => setShowSummary(false)} />
      <RoomSummary selectedRoom={summaryShown} />
    </Box>
  ) : (
    <RoomsOverview
      onChangeRoomStatus={onChangeRoomStatus}
      onChangeStatus={onChangeStatus}
      onClickViewSummary={setShowSummary}
    />
  );
}
