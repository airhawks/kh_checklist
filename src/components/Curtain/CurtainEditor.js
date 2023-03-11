import { Box } from "@mui/system";
import * as React from "react";
import PageStepper from "../PageStepper";
import Summary from "../Summary";
import { RoomType } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import CheckboxAnswer from "../input/CheckboxAnswer";
import ShortAnswer from "../input/ShortAnswer";
import Question from "../input/Question";
import SubSectionTitle from "../SubSectionTitle";

import {
  setWindowValues,
  setWindowOptionValues,
} from "../../store/curtainSlice";

import Hint from "../input/Hint";
import { Divider, Typography } from "@mui/material";

export const CurtainSteps = {
  curtainType: "Curtain Type",
  curtainStyle: "Curtain Style",
};

function CurtainType({ windowData, currentlyEditing }) {
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    dispatch(setWindowValues([currentlyEditing, name, value]));
  };
  const { windowName, curtainsOrBlinds, style } = windowData;
  return (
    <Box>
      <Question question="Provide window name" />
      <ShortAnswer
        label="Window Name"
        name="windowName"
        defaultValue={windowName}
        onChange={handleInputChange}
      />
      <Question question="Do you need Curtains or Blinds for this window?" />
      <RadioGroupAnswer
        options={["Curtains", "Blinds"]}
        value={curtainsOrBlinds}
        name="curtainsOrBlinds"
        onChange={handleInputChange}
        inline
      />
      {/* <Hint
        title="Sliding doors vs Hinged Doors:"
        text={
          <>
            <Typography variant="body2" component="div">
              Sliding door wardrobes don&apos;t require much space in front of
              them, as their doors slide from side to side.
            </Typography>
            <Typography variant="body2" component="div" sx={{ mt: 1 }}>
              Hinged Door has ability to fully open the doors without any
              limitation or restrictions of just opening side to side.
            </Typography>
          </>
        }
      /> */}
      <Question
        question={`Which style of ${
          curtainsOrBlinds === "Curtains" ? "Curtains" : "Blinds"
        } do you want for this window?`}
      />
      {curtainsOrBlinds === "Curtains" ? (
        <RadioGroupAnswer
          options={["Pleat", "Eyelet"]}
          value={style}
          name="style"
          onChange={handleInputChange}
          inline
        />
      ) : (
        <RadioGroupAnswer
          options={["Roman Blinds", "Wooden Blinds", "Zebra Blinds"]}
          value={style}
          name="style"
          onChange={handleInputChange}
          inline
        />
      )}
    </Box>
  );
}

function CurtainStyle({ windowData, currentlyEditing }) {
  const { curtainsOrBlinds, style } = windowData;
  const dispatch = useDispatch();

  const optionSelected =
    curtainsOrBlinds === "Curtains"
      ? "curtainsOptions"
      : style === "Roman Blinds"
      ? "romanBlindsOptions"
      : "woodenOrZebraBlindsOptions";

  const handleInputChange = ({ value, name }) => {
    dispatch(
      setWindowOptionValues([currentlyEditing, optionSelected, name, value])
    );
  };

  return curtainsOrBlinds === "Curtains" ? (
    <WindowCurtainStyle
      options={windowData.otherOptions[optionSelected]}
      handleInputChange={handleInputChange}
    />
  ) : style === "Roman Blinds" ? (
    <WindowRomanBlindStyle
      options={windowData.otherOptions[optionSelected]}
      handleInputChange={handleInputChange}
    />
  ) : (
    <WindowWoodenOrZebraBlindStyle
      handleInputChange={handleInputChange}
      options={windowData.otherOptions[optionSelected]}
    />
  );
}
function WindowCurtainStyle({ options, handleInputChange }) {
  const {
    category,
    border,
    windowSize, // : { width, height },
    poleSize,
    trackSize,
    mechanism,
    fullness,
    numberOfCurtains, // formula 20 - 24 inch based on fullness
    fabric,
    lining,
    services,
  } = options;

  const { height, width } = windowSize;
  const {
    code,
    price,
    quantity, // formula 8ft height - 3M and 10 ft 3.5 M
  } = fabric;

  const { stitchingCost, designerConsultationCost, installationCost } =
    services;

  const onChangeWindowDimension = (e) => {
    const { value, name } = e.target;
    handleInputChange({
      name: "windowSize",
      value: {
        ...windowSize,
        [name]: value,
      },
    });
  };

  const onChangeFabricValues = (e) => {
    const { value, name } = e.target;
    handleInputChange({
      name: "fabric",
      value: {
        ...fabric,
        [name]: value,
      },
    });
  };

  const onChangeServicesCost = (e) => {
    const { value, name } = e.target;
    handleInputChange({
      name: "services",
      value: {
        ...services,
        [name]: value,
      },
    });
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;
    handleInputChange({ value, name });
  };

  return (
    <Box>
      <Question question="Blackout or Shade?" />
      <RadioGroupAnswer
        options={["Blackout", "Shade"]}
        value={category}
        name="category"
        onChange={onInputChange}
        inline
      />
      <Question question="Choose Border" />
      <RadioGroupAnswer
        options={["Type-A", "Type-B", "Type-C", "Type-D", "Type-E"]}
        value={border}
        name="border"
        onChange={onInputChange}
        inline
      />
      <Question question="What is the window size in feet?" />
      <ShortAnswer
        name="height"
        label="Height in ft"
        defaultValue={height}
        onChange={onChangeWindowDimension}
        fullWidth={false}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ShortAnswer
        name="width"
        label="Width in ft"
        defaultValue={width}
        onChange={onChangeWindowDimension}
        fullWidth={false}
      />
      <Question question="What is the length of the pole?" />
      <ShortAnswer
        name="poleSize"
        label="Length of pole in ft"
        defaultValue={poleSize}
        onChange={onInputChange}
      />
      <Question question="What is the length of the track?" />
      <ShortAnswer
        name="trackSize"
        label="Length of track in ft"
        defaultValue={trackSize}
        onChange={onInputChange}
      />
      <Question question="Choose type of mechanism" />
      <RadioGroupAnswer
        options={["Motorized", "Regular"]}
        value={mechanism}
        name="mechanism"
        onChange={onInputChange}
        inline
      />
      <Question question="Curtain fullness" />
      <RadioGroupAnswer
        options={[
          "1.5 times",
          "2 times (Standard)",
          "2.5 times (Recommended by interior designers)",
        ]}
        value={fullness}
        name="fullness"
        onChange={onInputChange}
        inline
      />
      <Question question="Fabric pricing:" />
      <ShortAnswer
        name="code"
        label="Fabric Code"
        defaultValue={code}
        onChange={onChangeFabricValues}
        fullWidth={false}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ShortAnswer
        name="price"
        label="Price of fabric"
        defaultValue={price}
        onChange={onChangeWindowDimension}
        fullWidth={false}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ShortAnswer
        name="quantity"
        label="Length in meters"
        defaultValue={quantity}
        onChange={onChangeFabricValues}
        fullWidth={false}
      />
      <Question question="Do you require lining for curtains?" />
      <RadioGroupAnswer
        options={["Yes", "No"]}
        value={lining}
        name="lining"
        onChange={onInputChange}
        inline
      />
      <Question question="Cost of services:" />
      <ShortAnswer
        name="stitchingCost"
        label="Stitching Cost"
        defaultValue={stitchingCost}
        onChange={onChangeServicesCost}
        fullWidth={false}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ShortAnswer
        name="designerConsultationCost"
        label="Designer Consultation Cost"
        defaultValue={designerConsultationCost}
        onChange={onChangeServicesCost}
        fullWidth={false}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ShortAnswer
        name="installationCost"
        label="Installation Cost"
        defaultValue={installationCost}
        onChange={onChangeServicesCost}
        fullWidth={false}
      />
    </Box>
  );
}

function WindowRomanBlindStyle({ options, handleInputChange }) {
  const {
    mountingLocation,
    windowSize,
    mechanism,
    chainDirection,
    fabric,
    lining,
    services,
  } = options;

  const { height, width } = windowSize;
  const {
    code,
    price,
    quantity, // formula 8ft height - 3M and 10 ft 3.5 M
  } = fabric;

  const { stitchingCost, designerConsultationCost, installationCost } =
    services;

  const onChangeWindowDimension = (e) => {
    const { value, name } = e.target;
    handleInputChange({
      name: "windowSize",
      value: {
        ...windowSize,
        [name]: value,
      },
    });
  };

  const onChangeFabricValues = (e) => {
    const { value, name } = e.target;
    handleInputChange({
      name: "fabric",
      value: {
        ...fabric,
        [name]: value,
      },
    });
  };

  const onChangeServicesCost = (e) => {
    const { value, name } = e.target;
    handleInputChange({
      name: "services",
      value: {
        ...services,
        [name]: value,
      },
    });
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;
    handleInputChange({ value, name });
  };

  return (
    <Box>
      <Question question="Mounting location" />
      <RadioGroupAnswer
        options={["Inside Recess", "Wall", "Ceiling"]}
        value={mountingLocation}
        name="mountingLocation"
        onChange={onInputChange}
        inline
      />
      <Question question="What is the window size in feet?" />
      <ShortAnswer
        name="height"
        label="Height in ft"
        defaultValue={height}
        onChange={onChangeWindowDimension}
        fullWidth={false}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ShortAnswer
        name="width"
        label="Width in ft"
        defaultValue={width}
        onChange={onChangeWindowDimension}
        fullWidth={false}
      />
      <Question question="Choose type of mechanism" />
      <RadioGroupAnswer
        options={["Motorized", "Regular"]}
        value={mechanism}
        name="mechanism"
        onChange={onInputChange}
        inline
      />
      <Question question="Chain Direction" />
      <RadioGroupAnswer
        options={["Left", "Right"]}
        value={chainDirection}
        name="chainDirection"
        onChange={onInputChange}
        inline
      />
      <Question question="Fabric pricing:" />
      <ShortAnswer
        name="code"
        label="Fabric Code"
        defaultValue={code}
        onChange={onChangeFabricValues}
        fullWidth={false}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ShortAnswer
        name="price"
        label="Price of fabric"
        defaultValue={price}
        onChange={onChangeWindowDimension}
        fullWidth={false}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ShortAnswer
        name="quantity"
        label="Length in meters"
        defaultValue={quantity}
        onChange={onChangeFabricValues}
        fullWidth={false}
      />
      <Question question="Do you require lining for curtains?" />
      <RadioGroupAnswer
        options={["Yes", "No"]}
        value={lining}
        name="lining"
        onChange={onInputChange}
        inline
      />
      <Question question="Cost of services:" />
      <ShortAnswer
        name="stitchingCost"
        label="Stitching Cost"
        defaultValue={stitchingCost}
        onChange={onChangeServicesCost}
        fullWidth={false}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ShortAnswer
        name="designerConsultationCost"
        label="Designer Consultation Cost"
        defaultValue={designerConsultationCost}
        onChange={onChangeServicesCost}
        fullWidth={false}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ShortAnswer
        name="installationCost"
        label="Installation Cost"
        defaultValue={installationCost}
        onChange={onChangeServicesCost}
        fullWidth={false}
      />
    </Box>
  );
}
function WindowWoodenOrZebraBlindStyle({ options, handleInputChange }) {
  const { mountingLocation, windowSize, price, services } = options;

  const { height, width } = windowSize;

  const { designerConsultationCost, installationCost } = services;

  const onChangeWindowDimension = (e) => {
    const { value, name } = e.target;
    handleInputChange({
      name: "windowSize",
      value: {
        ...windowSize,
        [name]: value,
      },
    });
  };
  const onChangeServicesCost = (e) => {
    const { value, name } = e.target;
    handleInputChange({
      name: "services",
      value: {
        ...services,
        [name]: value,
      },
    });
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;
    handleInputChange({ value, name });
  };

  return (
    <Box>
      <Question question="Mounting location" />
      <RadioGroupAnswer
        options={["Inside Recess", "Wall", "Ceiling"]}
        value={mountingLocation}
        name="mountingLocation"
        onChange={onInputChange}
        inline
      />
      <Question question="What is the window size in feet?" />
      <ShortAnswer
        name="height"
        label="Height in ft"
        defaultValue={height}
        onChange={onChangeWindowDimension}
        fullWidth={false}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ShortAnswer
        name="width"
        label="Width in ft"
        defaultValue={width}
        onChange={onChangeWindowDimension}
        fullWidth={false}
      />
      <Question question="Price of blinds" />
      <ShortAnswer
        name="price"
        label="Price of blinds"
        defaultValue={price}
        onChange={onInputChange}
        fullWidth={false}
      />
      <Question question="Cost of services:" />
      <ShortAnswer
        name="designerConsultationCost"
        label="Designer Consultation Cost"
        defaultValue={designerConsultationCost}
        onChange={onChangeServicesCost}
        fullWidth={false}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ShortAnswer
        name="installationCost"
        label="Installation Cost"
        defaultValue={installationCost}
        onChange={onChangeServicesCost}
        fullWidth={false}
      />
    </Box>
  );
}

function IntakeSteps({ activeStep, windowData, currentlyEditing }) {
  switch (activeStep) {
    case 0:
      return (
        <CurtainType
          windowData={windowData}
          currentlyEditing={currentlyEditing}
        />
      );
    case 1:
      return (
        <CurtainStyle
          windowData={windowData}
          currentlyEditing={currentlyEditing}
        />
      );
    case 2:
    //   return <Summary data={roomData} roomType={RoomType.Kitchen} />;
    default:
      return <Box>{activeStep}</Box>;
  }
}

export default function CurtainEditor({
  windowData,
  onCompleted,
  currentlyEditing,
}) {
  const renderStep = React.useCallback(
    ({ activeStep }) => (
      <IntakeSteps
        windowData={windowData}
        activeStep={activeStep}
        currentlyEditing={currentlyEditing}
      />
    ),
    [currentlyEditing, windowData]
  );

  return (
    <PageStepper
      steps={Object.values(CurtainSteps)}
      onComplete={onCompleted}
      renderStep={renderStep}
    />
  );
}
