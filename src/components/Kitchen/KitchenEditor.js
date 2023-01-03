import { Box } from "@mui/system";
import * as React from "react";
import PageStepper from "../PageStepper";
import KitchenWorkRequired from "./KitchenWorkRequired";
import KitchenLayout from "./KitchenLayout";
import KitchenAppliances from "./KitchenAppliances";
import KitchenModularKitchen from "./KitchenModularKitchen";
import KitchenHobChimneyAndElectricals from "./KitchenHobChimneyAndElectricals";
import Summary from "../Summary";
import { RoomType } from "../../constants";
import { useSelector } from "react-redux";
import { KitchenSteps } from "../../stepsConstants";

const stepKeys = Object.keys(KitchenSteps);

function IntakeSteps({ activeStep, handleInputChange, onSelectionChange }) {
  const roomData = useSelector((state) => state.roomsDetail[RoomType.Kitchen]);
  const stepProps = {
    data: roomData[stepKeys[activeStep]],
    handleInputChange: handleInputChange(stepKeys[activeStep]),
    onSelectionChange: onSelectionChange(stepKeys[activeStep])
  };
  switch (activeStep) {
    case 0:
      return <KitchenWorkRequired {...stepProps} />;
    case 1:
      return <KitchenLayout {...stepProps} />;
    case 2:
      return <KitchenAppliances {...stepProps} />;
    case 3:
      return <KitchenModularKitchen {...stepProps} />;
    case 4:
      return <KitchenHobChimneyAndElectricals {...stepProps} />;
    case 5:
      return <Summary data={roomData} roomType={RoomType.Kitchen} />;
    default:
      return <Box>{activeStep}</Box>;
  }
}

export default function KitchenEditor({
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
      steps={Object.values(KitchenSteps)}
      onComplete={onCompleted}
      renderStep={renderStep}
    />
  );
}
