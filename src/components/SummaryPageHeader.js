import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Divider } from "@mui/material";

export default function SummaryPageHeader({ onExit }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mb: 1
        }}
      >
        <Typography variant="h5">Summary</Typography>
        <Box sx={{ flex: "1 1 auto" }} />

        <Button onClick={onExit}>Go to Dashboard</Button>
      </Box>
      <Divider
        sx={{
          mb: 4
        }}
      />
    </>
  );
}
