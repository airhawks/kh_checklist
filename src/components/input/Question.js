import "../../styles.css";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function Question({ question, subtitle }) {
  return (
    <Box sx={{ mt: 4, mb: 2 }}>
      <Typography variant="h6" component="div">
        {question}
      </Typography>
      <Typography variant="subtitle2" component="div">
        {subtitle}
      </Typography>
    </Box>
  );
}
