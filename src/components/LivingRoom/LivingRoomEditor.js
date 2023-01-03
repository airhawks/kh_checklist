import { Box } from "@mui/system";
import * as React from "react";
import PageStepper from "../PageStepper";
import LivingRoomWorkRequired from "./LivingRoomWorkRequired";
import LivingRoomLayout from "./LivingRoomLayout";
import LivingRoomHighlighterAndFalseCeiling from "./LivingRoomHighlighterAndFalseCeiling";
import LivingRoomBalconyAndWindows from "./LivingRoomBalconyAndWindows";
import Summary from "../Summary";
import { useSelector } from "react-redux";
import { RoomType } from "../../constants";
import { LivingRoomSteps } from "../../stepsConstants";

const stepKeys = Object.keys(LivingRoomSteps);

function IntakeSteps({ activeStep, handleInputChange, onSelectionChange }) {
  const roomData = useSelector(
    (state) => state.roomsDetail[RoomType.LivingRoom]
  );
  const stepProps = {
    data: roomData[stepKeys[activeStep]],
    handleInputChange: handleInputChange(stepKeys[activeStep]),
    onSelectionChange: onSelectionChange(stepKeys[activeStep])
  };
  switch (activeStep) {
    case 0:
      return <LivingRoomWorkRequired {...stepProps} />;
    case 1:
      return <LivingRoomLayout {...stepProps} />;
    case 2:
      return <LivingRoomHighlighterAndFalseCeiling {...stepProps} />;
    case 3:
      return <LivingRoomBalconyAndWindows {...stepProps} />;
    case 4:
      return <Summary data={roomData} roomType={RoomType.LivingRoom} />;
    default:
      return <Box>{activeStep}</Box>;
  }
}

export default function LivingRoomEditor({
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
      steps={Object.values(LivingRoomSteps)}
      onComplete={onCompleted}
      renderStep={renderStep}
    />
  );
}
