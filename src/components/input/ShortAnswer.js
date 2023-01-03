import "../../styles.css";

import TextField from "@mui/material/TextField";

export default function ShortAnswer({
  label = "Answer",
  defaultValue = "",
  onChange,
  name = null,
  fullWidth = true,
  placeholder = ""
}) {
  return (
    <TextField
      sx={{
        mb: 2
      }}
      label={label}
      variant="outlined"
      name={name}
      value={defaultValue}
      fullWidth={fullWidth}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
