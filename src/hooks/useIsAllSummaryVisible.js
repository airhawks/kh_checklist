import { useSelector } from "react-redux";
import { RoomType, Status } from "../constants";

export default function useIsAllSummaryVisible() {
  const {
    [RoomType.Kitchen]: kitchenStatus,
    [RoomType.LivingRoom]: livingRoomStatus,
    roomsAndBathroomsStatus,
    [RoomType.CommonBathroom]: commonBathroomStatus,
  } = useSelector((state) => state.project.status);
  const { roomNamesAndBathrooms, hasCommonBathroom } = useSelector(
    (state) => state.project.projectType
  );

  if (
    kitchenStatus === Status.Completed &&
    livingRoomStatus === Status.Completed &&
    (hasCommonBathroom ? commonBathroomStatus === Status.Completed : true) &&
    roomsAndBathroomsStatus.every(
      (
        { [RoomType.Bedroom]: roomStatus, [RoomType.Bathroom]: bathroomStatus },
        index
      ) =>
        roomStatus === Status.Completed &&
        (roomNamesAndBathrooms[index].hasBathroom
          ? bathroomStatus === Status.Completed
          : true)
    )
  ) {
    return true;
  }
  return false;
}
