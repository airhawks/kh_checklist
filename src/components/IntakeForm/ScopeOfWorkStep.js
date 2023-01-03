import { Box } from "@mui/system";
import Question from "../input/Question";
import CheckboxAnswer from "../input/CheckboxAnswer";
import * as React from "react";
import { ScopeOfWorkOptions } from "../../constants";

import { useSelector, useDispatch } from "react-redux";
import { setFormValues } from "../../store/projectIntakeSlice";

export default function ScopeOfWorkStep() {
  const { roomsRequireWork } = useSelector(
    (state) => state.project.scopeOfWork
  );
  const dispatch = useDispatch();
  const handleInputChange = (value, name) => {
    dispatch(setFormValues(["scopeOfWork", name, value]));
  };

  return (
    <Box>
      <Question question="Select Rooms which required work" />
      <CheckboxAnswer
        options={ScopeOfWorkOptions}
        inline={false}
        name="roomsRequireWork"
        defaultValue={roomsRequireWork}
        onChange={handleInputChange}
      />
    </Box>
  );
}
