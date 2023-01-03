import "./styles.css";
import IntakeForm from "./components/IntakeForm/IntakeForm";

import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { setFormValues } from "./store/projectIntakeSlice";
import { Status } from "./constants";
import EditIcon from "@mui/icons-material/Edit";
import RoomsManager from "./RoomsManager";
import useIsAllSummaryVisible from "./hooks/useIsAllSummaryVisible";
import ResetButton from "./components/ResetButton";
import * as React from "react";
import ProjectSummary from "./ProjectSummary";

export default function App() {
  const [showSummary, setShowSummary] = React.useState(false);
  const { intakeStatus } = useSelector((state) => state.project.status);
  const dispatch = useDispatch();
  const onChangeStatus = (status) => {
    dispatch(setFormValues(["status", "intakeStatus", status]));
  };
  const isAllSummaryVisible = useIsAllSummaryVisible();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 760,
        px: 4
        // width: "100vw"
        // justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: 1
        }}
      >
        {intakeStatus === Status.Started ? (
          <IntakeForm />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: 1,
              mb: 2
            }}
          >
            <Button
              variant="outlined"
              onClick={() => onChangeStatus(Status.Started)}
              startIcon={<EditIcon />}
            >
              {intakeStatus === Status.Completed
                ? "Project Details"
                : "Start Project Intake"}
            </Button>
            <ResetButton />

            {isAllSummaryVisible ? (
              <Button onClick={() => setShowSummary(true)}>Summary</Button>
            ) : null}
          </Box>
        )}
        <hr />
        {intakeStatus === Status.Completed ? (
          showSummary ? (
            <ProjectSummary onExit={() => setShowSummary(false)} />
          ) : (
            <RoomsManager />
          )
        ) : null}
      </Box>
    </Box>
  );
}
