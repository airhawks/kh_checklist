import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { RoomType, Status } from "./constants";
import Typography from "@mui/material/Typography";
import * as React from "react";
import KitchenEditor from "./components/Kitchen/KitchenEditor";
import { reset, setBedOrBathRoomValues } from "./store/roomsDetailSlice";
import LivingRoomEditor from "./components/LivingRoom/LivingRoomEditor";
import { setStandardRoomValues } from "./store/roomsDetailSlice";
import BedroomEditor from "./components/Bedroom/BedroomEditor";
import BathroomEditor from "./components/Bathroom/BathroomEditor";
import CommonBathroomEditor from "./components/Bathroom/CommonBathroomEditor";
import useSelectedRoomDetails from "./hooks/useSelectedRoomDetails";

function RoomEditorComponent({
  bedroomOrBathroomName,
  roomType,
  onCompleted,
  handleInputChange,
  onSelectionChange,
}) {
  switch (roomType) {
    case RoomType.LivingRoom:
      return (
        <LivingRoomEditor
          onCompleted={onCompleted}
          handleInputChange={handleInputChange}
          onSelectionChange={onSelectionChange}
        />
      );
    case RoomType.Kitchen:
      return (
        <KitchenEditor
          onCompleted={onCompleted}
          handleInputChange={handleInputChange}
          onSelectionChange={onSelectionChange}
        />
      );
    case RoomType.Bedroom:
      return (
        <BedroomEditor
          roomName={bedroomOrBathroomName}
          onCompleted={onCompleted}
          handleInputChange={handleInputChange}
          onSelectionChange={onSelectionChange}
        />
      );
    case RoomType.Bathroom:
      return (
        <BathroomEditor
          roomName={bedroomOrBathroomName}
          onCompleted={onCompleted}
          handleInputChange={handleInputChange}
          onSelectionChange={onSelectionChange}
        />
      );

    case RoomType.CommonBathroom:
      return (
        <CommonBathroomEditor
          onCompleted={onCompleted}
          handleInputChange={handleInputChange}
          onSelectionChange={onSelectionChange}
        />
      );
    default:
      return <Box />;
  }
}

export default function RoomEditor({
  selectedRoom,
  onExit,
  onChangeRoomStatus,
  onChangeStatus,
}) {
  const {
    userFacingRoomName,
    roomName,
    roomType,
    isBedroomOrAttachedBathroom,
  } = useSelectedRoomDetails(selectedRoom);
  const dispatch = useDispatch();

  const onCompleted = () => {
    if (isBedroomOrAttachedBathroom) {
      onChangeRoomStatus(selectedRoom.index, roomType, Status.Completed);
    } else {
      onChangeStatus(roomType, Status.Completed);
    }
    onExit();
  };
  const handleInputChange = (dataKey) => (e) => {
    const { value, name } = e.target;
    if (isBedroomOrAttachedBathroom) {
      dispatch(
        setBedOrBathRoomValues([roomType, roomName, dataKey, name, value])
      );
    } else {
      dispatch(setStandardRoomValues([roomType, dataKey, name, value]));
    }
  };
  const onSelectionChange = (dataKey) => (value, name) => {
    if (isBedroomOrAttachedBathroom) {
      dispatch(
        setBedOrBathRoomValues([roomType, roomName, dataKey, name, value])
      );
    } else {
      dispatch(setStandardRoomValues([roomType, dataKey, name, value]));
    }
  };

  return (
    <Box sx={{ width: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h5">{userFacingRoomName}</Typography>

        <>
          <Box sx={{ flex: "1 1 auto" }} />
          {process.env.NODE_ENV !== "production" ? (
            <Button onClick={() => dispatch(reset())}>Reset</Button>
          ) : null}
          <Button onClick={onExit}>Go to Dashboard</Button>
        </>
      </Box>

      <RoomEditorComponent
        roomType={roomType}
        bedroomOrBathroomName={roomName}
        onCompleted={onCompleted}
        handleInputChange={handleInputChange}
        onSelectionChange={onSelectionChange}
      />
    </Box>
  );
}
