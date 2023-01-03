import { createSlice } from "@reduxjs/toolkit";
import { RoomNamesAndBathroomsOptions, RoomType, Status } from "../constants";

const initialState = {
  projectType: {
    carpetArea: "",
    flatLayout: "",
    roomNamesAndBathrooms: [
      { hasBathroom: true, roomName: "Master bedroom" },
      { hasBathroom: false, roomName: "Children's bedroom" },
      { hasBathroom: true, roomName: "Children's bedroom 2" }
    ],
    hasCommonBathroom: "Yes"
  },
  location: {
    city: "Gurugram",
    state: "",
    pincode: ""
  },
  newOrOld: {
    projectType: "",
    workRequired: []
  },
  designAndPlanning: {
    planner: ""
  },
  scopeOfWork: {
    roomsRequireWork: []
  },
  status: {
    intakeStatus: Status.Emtpy,
    [RoomType.Kitchen]: Status.Emtpy,
    [RoomType.LivingRoom]: Status.Emtpy,
    [RoomType.CommonBathroom]: Status.Emtpy,
    roomsAndBathroomsStatus: [
      {
        [RoomType.Bedroom]: Status.Empty,
        [RoomType.Bathroom]: Status.Empty
      },
      {
        [RoomType.Bedroom]: Status.Empty,
        [RoomType.Bathroom]: Status.Empty
      },
      {
        [RoomType.Bedroom]: Status.Empty,
        [RoomType.Bathroom]: Status.Empty
      }
    ]
  }
};

export const projectIntakeSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setFormValues: (state, { payload }) => {
      const [step, key, value] = payload;
      state[step][key] = value;
    },
    reset: () => initialState,
    updateRoomAndBathrooms: (state, { payload: numberOfBedRooms }) => {
      let roomNamesAndBathrooms = state.projectType.roomNamesAndBathrooms;
      let roomsAndBathroomsStatus = state.status.roomsAndBathroomsStatus;
      let currentLength = roomNamesAndBathrooms.length;

      if (currentLength === numberOfBedRooms) {
        return;
      }
      if (currentLength < 2) {
        roomNamesAndBathrooms = [];
        roomsAndBathroomsStatus = [];
        currentLength = 0;
        state.projectType.hasCommonBathroom = null;
      }

      let updatedRoomsAndBathroomsStatus = [];
      let updatedRoomNamesAndBathrooms = [];
      if (numberOfBedRooms === 0) {
        updatedRoomNamesAndBathrooms = [];
        state.projectType.hasCommonBathroom = "Yes";
        updatedRoomsAndBathroomsStatus = [];
      } else if (numberOfBedRooms === 1) {
        updatedRoomNamesAndBathrooms = [
          {
            hasBathroom: false,
            roomName: "Bedroom"
          }
        ];
        state.projectType.hasCommonBathroom = "Yes";
        updatedRoomsAndBathroomsStatus = [
          {
            [RoomType.Bedroom]: Status.Empty,
            [RoomType.Bathroom]: Status.Empty
          }
        ];
      } else if (numberOfBedRooms > currentLength) {
        updatedRoomNamesAndBathrooms = roomNamesAndBathrooms.concat(
          RoomNamesAndBathroomsOptions.slice(currentLength, numberOfBedRooms)
        );
        updatedRoomsAndBathroomsStatus = roomsAndBathroomsStatus.concat(
          Array.from({ length: numberOfBedRooms - currentLength }, () => ({
            [RoomType.Bedroom]: Status.Empty,
            [RoomType.Bathroom]: Status.Empty
          }))
        );
      } else {
        updatedRoomNamesAndBathrooms = roomNamesAndBathrooms.slice(
          0,
          numberOfBedRooms
        );
        updatedRoomsAndBathroomsStatus = roomsAndBathroomsStatus.slice(
          0,
          numberOfBedRooms
        );
      }

      // console.log(
      //   JSON.stringify(roomNamesAndBathrooms),
      //   currentLength,
      //   numberOfBedRooms,
      //   JSON.stringify(updatedRoomNamesAndBathrooms),
      //   state.projectType.hasCommonBathroom
      // );
      state.projectType.roomNamesAndBathrooms = updatedRoomNamesAndBathrooms;
      state.status.roomsAndBathroomsStatus = updatedRoomsAndBathroomsStatus;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  setFormValues,
  reset,
  updateRoomAndBathrooms
} = projectIntakeSlice.actions;

export default projectIntakeSlice.reducer;
