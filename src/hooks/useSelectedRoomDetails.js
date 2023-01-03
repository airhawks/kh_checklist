import { useSelector } from "react-redux";
import { RoomType } from "../constants";
import {
  initialBathroomState,
  initialBedroomState
} from "../store/roomsDetailSlice";

export default function useSelectedRoomDetails(selectedRoom) {
  const isBedroomOrAttachedBathroom = typeof selectedRoom !== "string";
  const { roomNamesAndBathrooms } = useSelector(
    (state) => state.project.projectType
  );
  let roomType = selectedRoom;
  let userFacingRoomName = selectedRoom;
  let roomName = selectedRoom;

  if (isBedroomOrAttachedBathroom) {
    roomType = selectedRoom.roomType;
    const room = roomNamesAndBathrooms[selectedRoom.index];
    roomName = room.roomName;
    userFacingRoomName = `${roomType} - ${roomName}`;
  }
  const roomData = useSelector((state) => {
    if (isBedroomOrAttachedBathroom) {
      return (
        state.roomsDetail[roomType][roomName] ||
        (roomType === RoomType.Bedroom
          ? initialBedroomState
          : initialBathroomState)
      );
    } else {
      return state.roomsDetail[roomType];
    }
  });

  return {
    userFacingRoomName,
    roomName,
    roomType,
    roomData,
    isBedroomOrAttachedBathroom
  };
}
