import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { RoomType, Status } from "./constants";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

const roomSubtitle = {
  [RoomType.LivingRoom]: "Expand & refresh your Living room",
  [RoomType.Kitchen]: "Interior design ideas for your Kitchen",
  [RoomType.Bedroom]: "Modern bedroom design ideas & layout",
  [RoomType.Bathroom]: "Looking for bathroom design ideas?"
};

function RoomStatus({
  roomName,
  roomType = RoomType.Kitchen,
  status,
  onClickEdit,
  onClickViewSummary
}) {
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h6" component="div">
        {roomName}
      </Typography>
      <Typography sx={{ mb: 2 }} variant="subtitle2" component="div">
        {roomSubtitle[roomType]}
      </Typography>
      {status === Status.Empty ? (
        <Button onClick={onClickEdit}>Start Planning</Button>
      ) : (
        <>
          <Button onClick={onClickEdit}>
            {status === Status.Started ? "Continue Editing" : "Edit Plan"}
          </Button>
          <Button onClick={onClickViewSummary}>View Summary</Button>
        </>
      )}
    </Box>
  );
}

export default function RoomsOverview({
  onChangeStatus,
  onChangeRoomStatus,
  onClickViewSummary
}) {
  const {
    [RoomType.Kitchen]: kitchenStatus,
    [RoomType.LivingRoom]: livingRoomStatus,
    roomsAndBathroomsStatus,
    [RoomType.CommonBathroom]: commonBathroomStatus
  } = useSelector((state) => state.project.status);

  const { roomNamesAndBathrooms, hasCommonBathroom } = useSelector(
    (state) => state.project.projectType
  );

  return (
    <Box sx={{ width: 1, flex: 1 }}>
      <RoomStatus
        roomName={RoomType.LivingRoom}
        roomType={RoomType.LivingRoom}
        status={livingRoomStatus}
        onClickEdit={() => onChangeStatus(RoomType.LivingRoom, Status.Started)}
        onClickViewSummary={() => onClickViewSummary(RoomType.LivingRoom)}
      />
      <Divider />
      <RoomStatus
        roomName={RoomType.Kitchen}
        roomType={RoomType.Kitchen}
        status={kitchenStatus}
        onClickEdit={() => onChangeStatus(RoomType.Kitchen, Status.Started)}
        onClickViewSummary={() => onClickViewSummary(RoomType.Kitchen)}
      />
      <Divider />
      {roomsAndBathroomsStatus.map(
        (
          {
            [RoomType.Bedroom]: roomStatus,
            [RoomType.Bathroom]: bathroomStatus
          },
          index
        ) => (
          <Box key={index}>
            <RoomStatus
              key={index}
              roomName={`Bedroom - ${roomNamesAndBathrooms[index].roomName}`}
              roomType={RoomType.Bedroom}
              status={roomStatus}
              onClickEdit={() =>
                onChangeRoomStatus(index, RoomType.Bedroom, Status.Started)
              }
              onClickViewSummary={() =>
                onClickViewSummary({ index, roomType: RoomType.Bedroom })
              }
            />
            {roomNamesAndBathrooms[index].hasBathroom ? (
              <Box sx={{ ml: 4 }}>
                <RoomStatus
                  key={index}
                  roomName="Bathroom"
                  roomType={RoomType.Bathroom}
                  status={bathroomStatus}
                  onClickEdit={() =>
                    onChangeRoomStatus(index, RoomType.Bathroom, Status.Started)
                  }
                  onClickViewSummary={() =>
                    onClickViewSummary({ index, roomType: RoomType.Bathroom })
                  }
                />
              </Box>
            ) : null}
            <Divider />
          </Box>
        )
      )}
      {hasCommonBathroom === "Yes" ? (
        <RoomStatus
          roomName={
            roomsAndBathroomsStatus.length > 1 ? `Common Bathroom` : `Bathroom`
          }
          roomType={RoomType.Bathroom}
          status={commonBathroomStatus}
          onClickEdit={() =>
            onChangeStatus(RoomType.CommonBathroom, Status.Started)
          }
          onClickViewSummary={() => onClickViewSummary(RoomType.CommonBathroom)}
        />
      ) : null}
    </Box>
  );
}
