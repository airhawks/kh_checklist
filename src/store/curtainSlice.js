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

const initialCommonWindowOptions = {
  windowName: "New Window Name",
  status: Status.Empty,
  curtainsOrBlinds: "",
  style: "",
  otherOptions: {
    curtainsOptions,
    romanBlindsOptions,
    woodenOrZebraBlindsOptions,
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
  windows: [{ ...initialCommonWindowOptions }],
};

export const curtainSlice = createSlice({
  name: "curtain",
  initialState,
  reducers: {
    setClientDetails: (state, { payload }) => {
      const [key, value] = payload;
      state["clientDetails"][key] = value;
    },
    setWindowValues: (state, { payload }) => {
      const [index, key, value] = payload;
      state.windows[index][key] = value;
    },
    setWindowOptionValues: (state, { payload }) => {
      const [index, option, key, value] = payload;
      state.windows[index].otherOptions[option][key] = value;
    },
    reset: () => initialState,
    addWindow: (state) => {
      state.windows.push({ ...initialCommonWindowOptions });
    },
    onDeleteWindow: (state, { payload }) => {
      state.windows.splice(payload, 1);
    },
    changeCurtainStatus: (state, { payload }) => {
      state.intakeStatus = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setClientDetails,
  reset,
  changeCurtainStatus,
  addWindow,
  onDeleteWindow,
  setWindowValues,
  setWindowOptionValues,
} = curtainSlice.actions;

export default curtainSlice.reducer;
