import PageStepper from "../PageStepper";
import { Box } from "@mui/system";
import PageHeader from "../PageHeader";
import Button from "@mui/material/Button";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Question from "../input/Question";
import ShortAnswer from "../input/ShortAnswer";
import { setClientDetails } from "../../store/curtainSlice";
import { AllSteps } from "../../stepsConstants";
import { Status } from "../../constants";

export default function CurtainIntake({ onComplete }) {
  const dispatch = useDispatch();

  const { name, phone, location } = useSelector(
    (state) => state.curtain.clientDetails
  );
  const { streetAddress, city, state, pincode } = location;

  const handleClientDetailsChange = (e) => {
    const { value, name } = e.target;
    dispatch(setClientDetails([name, value]));
  };

  const handleLocationInputChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      setClientDetails([
        "location",
        {
          ...location,
          [name]: value,
        },
      ])
    );
  };

  return (
    <Box>
      <PageHeader name="Client Details" />
      <Question question="Name of client" />
      <ShortAnswer
        name="name"
        label="Full Name"
        defaultValue={name}
        onChange={handleClientDetailsChange}
      />
      <Question question="Contact Number" />
      <ShortAnswer
        name="phone"
        label="Phone Number"
        defaultValue={phone}
        onChange={handleClientDetailsChange}
      />

      <Question question="Location" />
      <ShortAnswer
        label="Street address"
        name="streetAddress"
        defaultValue={streetAddress}
        onChange={handleLocationInputChange}
      />
      <ShortAnswer
        label="City"
        name="city"
        defaultValue={city}
        onChange={handleLocationInputChange}
      />
      <ShortAnswer
        label="State / Province / Region"
        name="state"
        defaultValue={state}
        onChange={handleLocationInputChange}
      />
      <ShortAnswer
        label="ZIP / Postal Code"
        name="pincode"
        defaultValue={pincode}
        onChange={handleLocationInputChange}
      />
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        {/* <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
          Exit
        </Button> */}
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={onComplete}>Done</Button>
      </Box>
    </Box>
  );
}
