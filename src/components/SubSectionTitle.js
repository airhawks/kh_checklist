import * as React from "react";
import { Divider, Typography } from "@mui/material";

export default function SubSectionTitle({ title }) {
  return (
    <>
      <Typography sx={{ mt: 4 }} variant="h5" component="div">
        {title}
      </Typography>
      <Divider sx={{ mt: 1, mb: 2 }} />
    </>
  );
}
