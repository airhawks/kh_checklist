import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { RoomType } from "../../constants";
import * as React from "react";
import PageStepper from "../PageStepper";
import BedroomWorkRequired from "./BedroomWorkRequired";
import BedroomDesign from "./BedroomDesign";
import BedroomBed from "./BedroomBed";
import BedroomWardrobe from "./BedroomWardrobe";
import BedoomHighlighterAndFalseCeiling from "./BedoomHighlighterAndFalseCeiling";
import BedroomBalconyAndWindows from "./BedroomBalconyAndWindows";
import Summary from "../Summary";
import { initialBedroomState } from "../../store/roomsDetailSlice";
import { BedroomSteps } from "../../stepsConstants";

const stepKeys = Object.keys(BedroomSteps);

function IntakeSteps({
  activeStep,
  roomName,
  handleInputChange,
  onSelectionChange
}) {
  const roomData = useSelector(
    (state) =>
      state.roomsDetail[RoomType.Bedroom][roomName] || initialBedroomState
  );
  const stepProps = {
    data: roomData[stepKeys[activeStep]],
    handleInputChange: handleInputChange(stepKeys[activeStep]),
    onSelectionChange: onSelectionChange(stepKeys[activeStep])
  };
  switch (activeStep) {
    case 0:
      return <BedroomWorkRequired {...stepProps} />;
    case 1:
      return <BedroomDesign {...stepProps} />;
    case 2:
      return <BedroomBed {...stepProps} />;
    case 3:
      return <BedroomWardrobe {...stepProps} />;
    case 4:
      return <BedoomHighlighterAndFalseCeiling {...stepProps} />;
    case 5:
      return <BedroomBalconyAndWindows {...stepProps} />;
    case 6:
      return <Summary data={roomData} roomType={RoomType.Bedroom} />;
    default:
      return <Box>{activeStep}</Box>;
  }
}

export default function BedroomEditor({
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
      testActiveStep={5}
      steps={Object.values(BedroomSteps)}
      onComplete={onCompleted}
      renderStep={renderStep}
    />
  );
}
