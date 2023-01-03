import { Box } from "@mui/system";
import Question from "../input/Question";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import * as React from "react";
import { DesignAndPlanningOptions } from "../../constants";

import { useSelector, useDispatch } from "react-redux";
import { setFormValues } from "../../store/projectIntakeSlice";

export default function ProjectTpeStep() {
  const { planner } = useSelector((state) => state.project.designAndPlanning);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    dispatch(setFormValues(["designAndPlanning", name, value]));
  };
  return (
    <Box>
      <Question question="Design & Planning" />
      <RadioGroupAnswer
        options={DesignAndPlanningOptions}
        inline={false}
        value={planner}
        name="planner"
        onChange={handleInputChange}
      />
    </Box>
  );
}
