import "./styles.css";
import IntakeForm from "./components/IntakeForm/IntakeForm";

import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { setFormValues } from "./store/projectIntakeSlice";
import { Status } from "./constants";
import EditIcon from "@mui/icons-material/Edit";
import RoomsManager from "./RoomsManager";
import ResetButton from "./components/ResetButton";
import * as React from "react";
import ProjectSummary from "./ProjectSummary";
import CurtainIntake from "./components/Curtain/CurtainIntake";
import { changeCurtainStatus } from "./store/curtainSlice";
import { getAuth, signOut } from "firebase/auth";

const logout = () => {
  const auth = getAuth();
  signOut(auth);
};

export default function App() {
  const [showSummary, setShowSummary] = React.useState(false);
  const { intakeStatus } = useSelector((state) => state.project.status);
  const curtainStatus = useSelector((state) => state.curtain.intakeStatus);
  const dispatch = useDispatch();
  const onChangeStatus = (status) => {
    dispatch(setFormValues(["status", "intakeStatus", status]));
  };
  const onChangeCurtainStatus = (status) => {
    dispatch(changeCurtainStatus(status));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 760,
        px: 4,
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: 1,
        }}
      >
        {intakeStatus === Status.Empty && curtainStatus === Status.Empty ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: 1,
              mb: 2,
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => onChangeStatus(Status.Started)}
              startIcon={<EditIcon />}
            >
              Start Project Intake
            </Button>
            {process.env.NODE_ENV !== "production" ? (
              <Button
                variant="outlined"
                onClick={() => onChangeCurtainStatus(Status.Started)}
                startIcon={<EditIcon />}
              >
                Start Curtain Intake
              </Button>
            ) : null}
            <Button variant="outlined" onClick={logout}>
              Logout
            </Button>
          </Box>
        ) : null}

        {intakeStatus === Status.Started ? (
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                width: 1,
                mb: 2,
              }}
            >
              <ResetButton />
            </Box>
            <IntakeForm />
          </Box>
        ) : null}

        {intakeStatus === Status.Completed ? (
          <>
            {showSummary ? null : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  width: 1,
                  mb: 2,
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => onChangeStatus(Status.Started)}
                  startIcon={<EditIcon />}
                >
                  Project Details
                </Button>
                <ResetButton />
                <Button onClick={() => setShowSummary(true)}>Summary</Button>
              </Box>
            )}
            <hr />
            {showSummary ? (
              <ProjectSummary onExit={() => setShowSummary(false)} />
            ) : (
              <RoomsManager />
            )}
          </>
        ) : null}

        {/* Curtain editor */}
        {process.env.NODE_ENV !== "production" ? (
          <>
            {curtainStatus === Status.Started ? (
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    width: 1,
                    mb: 2,
                  }}
                >
                  <ResetButton />
                </Box>
                <CurtainIntake
                  onComplete={() => onChangeCurtainStatus(Status.Completed)}
                />
              </Box>
            ) : null}
            {curtainStatus === Status.Completed ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    width: 1,
                    mb: 2,
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => onChangeCurtainStatus(Status.Started)}
                    startIcon={<EditIcon />}
                  >
                    Edit Details
                  </Button>
                  <ResetButton />
                  <Button onClick={() => setShowSummary(true)}>Summary</Button>
                </Box>
                <hr />

                {showSummary ? "Summary" : "Dashboard"}
              </>
            ) : null}
          </>
        ) : null}
      </Box>
    </Box>
  );
}
