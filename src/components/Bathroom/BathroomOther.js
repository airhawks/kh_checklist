import { Box } from "@mui/system";
import Question from "../input/Question";
import * as React from "react";
import RadioGroupAnswer from "../input/RadioGroupAnswer";
import { Typography } from "@mui/material";
import Hint from "../input/Hint";
import FlowRestrictorImage from "../../../assets/bathroom/flow-restrictor.jpg";
import GrabBarImage from "../../../assets/bathroom/grab-bar.jpg";

export default function BathroomOther({ data, handleInputChange }) {
  const {
    waterProofingRequired,
    newFlooringRequired,
    newWallTilingRequired,
    waterSavingFittings,
    fitForElderlyUse,
    fitForpeopleWithDisabilitiesUse
  } = data;
  return (
    <Box>
      <Question question="Is Water proofing required?" />
      <Hint
        text="Waterproofing not required in a new building.
         Waterproofing is done for the bathroom floor and inner walls."
      />
      <RadioGroupAnswer
        options={["Yes", "No"]}
        value={waterProofingRequired}
        name="waterProofingRequired"
        onChange={handleInputChange}
      />

      <Question question="New Flooring required?" />
      <RadioGroupAnswer
        options={["Yes", "No"]}
        value={newFlooringRequired}
        name="newFlooringRequired"
        onChange={handleInputChange}
      />
      <Hint
        title="Anti-Skid tiles"
        text="Bathroom flooring should have Anti skid Tiles.
          These tiles keeps the friction high(reduces slippery) even when the surface is wet and soapy."
      />

      <Question question="New Wall Tiling required?" />
      <RadioGroupAnswer
        options={["Yes", "No"]}
        value={newWallTilingRequired}
        name="newWallTilingRequired"
        onChange={handleInputChange}
      />

      <Question question="Do you want bathroom fittings to save water?" />
      <RadioGroupAnswer
        options={["Yes", "Not sure"]}
        value={waterSavingFittings}
        name="waterSavingFittings"
        onChange={handleInputChange}
      />
      <Hint
        title="Flow Restrictor:"
        text={
          <Typography variant="body2" component="div">
            <ul style={{ marginTop: 4 }}>
              {[
                <Typography variant="body2" component="div">
                  <b>Flow restrictors</b> - adjusts flow of water + gives
                  voluminous flow 2) air shower - air mixed with water to make
                  water drops lighter but voluminous
                </Typography>,
                <Typography variant="body2" component="div">
                  <b>Flow restrictors</b> - adjusts flow of water + gives
                  voluminous flow 2) air shower - air mixed with water to make
                  water drops lighter but voluminous
                </Typography>
              ].map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </Typography>
        }
        image={FlowRestrictorImage}
      />

      <Question question="Any Elderly (seniors) going to us this bathroom?" />
      <RadioGroupAnswer
        options={["Yes", "No"]}
        value={fitForElderlyUse}
        name="fitForElderlyUse"
        onChange={handleInputChange}
      />
      <Hint
        title="Bathroom Safety Accessories"
        text={
          <Typography variant="body2" component="div">
            <ul style={{ marginTop: 4 }}>
              {[
                <Typography variant="body2" component="div">
                  <b>Grab Bars</b> - Required while using the toilet & taking a
                  shower.
                </Typography>,
                <Typography variant="body2" component="div">
                  <b>Folding seat</b> - While taking shower, using towel &
                  changing clothes
                </Typography>
              ].map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </Typography>
        }
        image={GrabBarImage}
      />

      <Question question="Any people with disabilities going to us this bathroom?" />
      <RadioGroupAnswer
        options={["Yes", "No"]}
        value={fitForpeopleWithDisabilitiesUse}
        name="fitForpeopleWithDisabilitiesUse"
        onChange={handleInputChange}
      />
    </Box>
  );
}
