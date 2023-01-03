import * as React from "react";
import Summary from "./components/Summary";
import useSelectedRoomDetails from "./hooks/useSelectedRoomDetails";

export default function RoomSummary({ selectedRoom, onExit }) {
  const { userFacingRoomName, roomType, roomData } = useSelectedRoomDetails(
    selectedRoom
  );

  return (
    <Summary title={userFacingRoomName} data={roomData} roomType={roomType} />
  );
}
