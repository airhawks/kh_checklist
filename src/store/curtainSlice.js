import { createSlice } from "@reduxjs/toolkit";
import { RoomType, Status } from "../constants";

const curtainsOptions = {
  category: "",
  border: "",
  windowSize: {
    width: "",
    height: "",
  },
  poleSize: "",
  trackSize: "",
  mechanism: "",
  fullness: "",
  numberOfCurtains: 0, // formula 20 - 24 inch based on fullness
  fabric: {
    code: "",
    price: "",
    quantity: 0, // formula 8ft height - 3M and 10 ft 3.5 M
  },
  lining: "",
  services: {
    stitchingCost: 0,
    designerConsultationCost: 0,
    installationCost: 0,
  },
};
const romanBlindsOptions = {
  mountingLocation: "",
  windowSize: {
    width: "",
    height: "",
  },
  mechanism: "",
  chainDirection: "",
  fabric: {
    code: "",
    price: "",
    quantity: 0, // formula 8ft height - 3M and 10 ft 3.5 M
  },
  lining: "",
  services: {
    stitchingCost: 0,
    designerConsultationCost: 0,
    installationCost: 0,
  },
};

const woodenOrZebraBlindsOptions = {
  mountingLocation: "",
  windowSize: {
    width: "",
    height: "",
  },
  price: "",
  services: {
    designerConsultationCost: 0,
    installationCost: 0,
  },
};

export const initialState = {
  intakeStatus: Status.Empty,
  clientDetails: {
    name: "",
    phone: "",
    location: {
      streetAddress: "",
      city: "Gurugram",
      state: "",
      pincode: "",
    },
  },
  windows: [
    {
      roomName: "",
      curtainsOrBlinds: "",
      style: "",
      otherOptions: {},
    },
  ],
};

export const curtainSlice = createSlice({
  name: "curtain",
  initialState,
  reducers: {
    setClientDetails: (state, { payload }) => {
      const [key, value] = payload;
      state["clientDetails"][key] = value;
    },
    setBedOrBathRoomValues: (state, { payload }) => {
      const [roomType, roomName, step, key, value] = payload;
      state[roomType][roomName] =
        state[roomType][roomName] ||
        (roomType === RoomType.Bedroom
          ? initialBedroomState
          : initialBathroomState);
      state[roomType][roomName][step][key] = value;
    },
    reset: () => initialState,
    createNewRoom: (state, { payload }) => {
      const [roomType, step, key, value] = payload;
      state[roomType][step][key] = value;
    },
    changeCurtainStatus: (state, { payload }) => {
      state.intakeStatus = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setClientDetails,
  setBedOrBathRoomValues,
  reset,
  changeCurtainStatus,
} = curtainSlice.actions;

export default curtainSlice.reducer;
