import { Box } from "@mui/system";
import Question from "../input/Question";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import ShortAnswer from "../input/ShortAnswer";
import Checkbox from "@mui/material/Checkbox";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  FlatLayoutOptions,
  RoomNamesAndBathroomsOptions
} from "../../constants";

import { useSelector, useDispatch } from "react-redux";
import {
  setFormValues,
  updateRoomAndBathrooms
} from "../../store/projectIntakeSlice";

export default function ProjectTpeStep() {
  const {
    roomNamesAndBathrooms,
    hasCommonBathroom,
    carpetArea,
    flatLayout
  } = useSelector((state) => state.project.projectType);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    dispatch(setFormValues(["projectType", name, value]));
  };
  const handleRoomNamesChange = (e) => {
    const { value, name: key } = e.target;
    const newValue = roomNamesAndBathrooms.slice();
    newValue[key] = {
      ...newValue[key],
      roomName: value
    };
    dispatch(setFormValues(["projectType", "roomNamesAndBathrooms", newValue]));
  };
  const handleBathroomsChange = (e) => {
    const { checked, name: key } = e.target;
    const newValue = roomNamesAndBathrooms.slice();
    newValue[key] = {
      ...newValue[key],
      hasBathroom: checked
    };
    dispatch(setFormValues(["projectType", "roomNamesAndBathrooms", newValue]));
  };
  const numberOfBedRooms = Math.max(FlatLayoutOptions.indexOf(flatLayout), 0);

  React.useEffect(() => {
    dispatch(updateRoomAndBathrooms(numberOfBedRooms));
  }, [numberOfBedRooms, dispatch]);

  return (
    <Box>
      <Question question="Approximate (square feet) carpet area of your house" />
      <ShortAnswer
        name="carpetArea"
        label="Carpet Area in sqft"
        defaultValue={carpetArea}
        onChange={handleInputChange}
      />
      <Question question="What is your flat layout?" />
      <RadioGroupAnswer
        options={FlatLayoutOptions}
        value={flatLayout}
        name="flatLayout"
        onChange={handleInputChange}
      />
      {numberOfBedRooms > 1 ? (
        <>
          <Question
            question={`Assing names to bedrooms and select bathrooms of your ${flatLayout}`}
          />
          {roomNamesAndBathrooms.map(({ roomName, hasBathroom }, key) => (
            <Box key={key}>
              <ShortAnswer
                fullWidth={false}
                name={String(key)}
                label="Room Name"
                defaultValue={roomName}
                onChange={handleRoomNamesChange}
              />
              <FormGroup
                sx={{
                  display: "inline",
                  ml: 2
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      name={String(key)}
                      checked={hasBathroom}
                      onChange={handleBathroomsChange}
                    />
                  }
                  label="Attached Bathroom"
                  onChange={() => {}}
                />
              </FormGroup>
            </Box>
          ))}
          <Question question="Does your flat has common bathroom?" />
          <RadioGroupAnswer
            options={["Yes", "No"]}
            value={hasCommonBathroom}
            name="hasCommonBathroom"
            onChange={handleInputChange}
          />
        </>
      ) : null}
    </Box>
  );
}
