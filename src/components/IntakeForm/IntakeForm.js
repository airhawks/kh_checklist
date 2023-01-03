import PageStepper from "../PageStepper";
import { Box } from "@mui/system";
import PageHeader from "../PageHeader";
import * as React from "react";
import ProjectTpeStep from "./ProjectTpeStep";
import LocationStep from "./LocationStep";
import NewOrOldStep from "./NewOrOldStep";
import DesignAndPlanningStep from "./DesignAndPlanningStep";
import ScopeOfWorkStep from "./ScopeOfWorkStep";
import Summary from "../Summary";
import { useDispatch } from "react-redux";
import { setFormValues } from "../../store/projectIntakeSlice";
import { Status } from "../../constants";

function IntakeSteps({ activeStep }) {
  switch (activeStep) {
    case 0:
      return <ProjectTpeStep />;
    case 1:
      return <LocationStep />;
    case 2:
      return <NewOrOldStep />;
    case 3:
      return <DesignAndPlanningStep />;
    case 4:
      return <ScopeOfWorkStep />;
    case 5:
    // return <Summary />;
    default:
      return <Box>{activeStep}</Box>;
  }
}

export default function IntakeForm() {
  const renderStep = React.useCallback(
    ({ activeStep }) => <IntakeSteps activeStep={activeStep} />,
    []
  );
  const dispatch = useDispatch();
  const onChangeStatus = (status) => {
    dispatch(setFormValues(["status", "intakeStatus", status]));
  };
  return (
    <Box>
      <PageHeader name="Project Details" />
      <PageStepper
        steps={[
          "Project Type",
          "Location",
          "New or Old",
          "Design & Planning",
          "Scope of Work"
        ]}
        onComplete={() => onChangeStatus(Status.Completed)}
        renderStep={renderStep}
      />
    </Box>
  );
}
