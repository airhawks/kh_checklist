import "../styles.css";
import { Box } from "@mui/system";

export default function PageHeader({ name, description }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mb: 2
      }}
    >
      <Box sx={{ typography: "h5" }}>{name}</Box>
      <Box sx={{ typography: "subtitle1" }}>{description}</Box>
      <hr />
    </Box>
  );
}
