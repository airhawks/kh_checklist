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
import { initialBathroomState } from "../../store/roomsDetailSlice";
import { BathroomSteps } from "../../stepsConstants";

const stepKeys = Object.keys(BathroomSteps);

function IntakeSteps({
  activeStep,
  roomName,
  handleInputChange,
  onSelectionChange
}) {
  const roomData = useSelector(
    (state) =>
      state.roomsDetail[RoomType.Bathroom][roomName] || initialBathroomState
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
      return <Summary data={roomData} roomType={RoomType.Bathroom} />;
    default:
      return <Box>{activeStep}</Box>;
  }
}

export default function BathroomEditor({
  roomName,
  onCompleted,
  handleInputChange,
  onSelectionChange
}) {
  const renderStep = React.useCallback(
    ({ activeStep }) => (
      <IntakeSteps
        activeStep={activeStep}
        roomName={roomName}
        handleInputChange={handleInputChange}
        onSelectionChange={onSelectionChange}
      />
    ),
    [roomName, handleInputChange, onSelectionChange]
  );

  return (
    <PageStepper
      testActiveStep={4}
      steps={Object.values(BathroomSteps)}
      onComplete={onCompleted}
      renderStep={renderStep}
    />
  );
}
