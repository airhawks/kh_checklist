import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { RoomType } from "../../constants";
import * as React from "react";
import PageStepper from "../PageStepper";
import BathroomWorkRequired from "./BathroomWorkRequired";
import BathroomShowerArea from "./BathroomShowerArea";
import BathroomWCArea from "./BathroomWCArea";
import BathroomOther from "./BathroomOther";
import Summary from "../Summary";

const stepKeys = ["workRequired", "showerArea", "WCArea", "other"];

function IntakeSteps({ activeStep, handleInputChange, onSelectionChange }) {
  const roomData = useSelector(
    (state) => state.roomsDetail[RoomType.CommonBathroom]
  );
  const stepProps = {
    data: roomData[stepKeys[activeStep]],
    handleInputChange: handleInputChange(stepKeys[activeStep]),
    onSelectionChange: onSelectionChange(stepKeys[activeStep])
  };
  switch (activeStep) {
    case 0:
      return <BathroomWorkRequired {...stepProps} />;
    case 1:
      return <BathroomShowerArea {...stepProps} />;
    case 2:
      return <BathroomWCArea {...stepProps} />;
    case 3:
      return <BathroomOther {...stepProps} />;
    case 4:
      return <Summary data={roomData} roomType={RoomType.CommonBathroom} />;
    default:
      return <Box>{activeStep}</Box>;
  }
}

export default function CommonBathroomEditor({
  onCompleted,
  handleInputChange,
  onSelectionChange
}) {
  const renderStep = React.useCallback(
    ({ activeStep }) => (
      <IntakeSteps
        activeStep={activeStep}
        handleInputChange={handleInputChange}
        onSelectionChange={onSelectionChange}
      />
    ),
    [handleInputChange, onSelectionChange]
  );

  return (
    <PageStepper
      testActiveStep={3}
      steps={["Work Required", "Shower Area", "WC Area", "Other"]}
      onComplete={onCompleted}
      renderStep={renderStep}
    />
  );
}
