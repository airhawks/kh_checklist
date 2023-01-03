import { Box } from "@mui/system";
import Question from "../input/Question";
import CheckboxAnswer from "../input/CheckboxAnswer";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import * as React from "react";
import { NewOrOldProjectType, WorkRequiredOptions } from "../../constants";

import { useSelector, useDispatch } from "react-redux";
import { setFormValues } from "../../store/projectIntakeSlice";

export default function NewOrOldStep() {
  const { projectType, workRequired } = useSelector(
    (state) => state.project.newOrOld
  );
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    dispatch(setFormValues(["newOrOld", name, value]));
  };
  const onSelectionChange = (value, name) => {
    dispatch(setFormValues(["newOrOld", name, value]));
  };
  return (
    <Box>
      <Question question="Project Type" />
      <RadioGroupAnswer
        options={NewOrOldProjectType}
        value={projectType}
        name="projectType"
        onChange={handleInputChange}
      />
      <Question question="Select all work required" />
      <CheckboxAnswer
        options={WorkRequiredOptions}
        defaultValue={workRequired}
        name="workRequired"
        onChange={onSelectionChange}
      />
    </Box>
  );
}
