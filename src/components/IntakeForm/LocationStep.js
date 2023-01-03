import { Box } from "@mui/system";
import Question from "../input/Question";
import ShortAnswer from "../input/ShortAnswer";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFormValues } from "../../store/projectIntakeSlice";

export default function LocationStep() {
  const { city, state, pincode } = useSelector(
    (state) => state.project.location
  );
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    dispatch(setFormValues(["location", name, value]));
  };

  return (
    <Box>
      <Question question="Location" />
      <ShortAnswer
        label="City"
        name="city"
        defaultValue={city}
        onChange={handleInputChange}
      />
      <ShortAnswer
        label="State / Province / Region"
        name="state"
        defaultValue={state}
        onChange={handleInputChange}
      />
      <ShortAnswer
        label="ZIP / Postal Code"
        name="pincode"
        defaultValue={pincode}
        onChange={handleInputChange}
      />
    </Box>
  );
}
