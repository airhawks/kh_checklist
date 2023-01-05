import "../../styles.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import * as React from "react";

export default function CheckboxAnswer({
  options = {
    test: {
      label: "value",
      checked: true,
      src: `https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e`,
    },
    test2: { label: "another value", checked: true },
  },
  onChange = () => {},
  textHint,
  name: propName,
  formLabel,
  defaultValue = [],
  inline = true,
}) {
  const keys = Object.keys(options);
  const initialValue = Array.isArray(defaultValue) ? defaultValue : [];
  const [selectedItems, setSelectedItems] = React.useState(initialValue);
  const handleChange = (event) => {
    const { checked, name } = event.target;
    const updatedSelectedItems = checked
      ? selectedItems.concat(name)
      : selectedItems.filter((x) => x !== name);
    onChange(updatedSelectedItems, propName);
    setSelectedItems(updatedSelectedItems);
  };

  return (
    <FormControl component="fieldset" variant="standard">
      {formLabel && <FormLabel component="legend">{formLabel}</FormLabel>}
      <FormGroup row={inline}>
        {keys.map((key) => {
          const isArrayOptions = Array.isArray(options);
          const name = isArrayOptions ? options[key] : key;
          const label = isArrayOptions ? options[key] : options[key].label;
          const labelPlacement = isArrayOptions ? "end" : "bottom";
          return (
            <FormControlLabel
              sx={
                isArrayOptions
                  ? {}
                  : {
                      mb: 3,
                      maxWidth: 196,
                    }
              }
              key={key}
              control={
                <Checkbox
                  checked={selectedItems.indexOf(name) > -1}
                  onChange={handleChange}
                  name={name}
                />
              }
              label={
                options[key].src ? (
                  <Card raised>
                    <CardMedia
                      sx={{
                        height: 196,
                        width: 196,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      image={options[key].src}
                      title="green iguana"
                    />
                    <CardContent
                      sx={{
                        pt: 2,
                        mb: -2,
                        maxWidth: 196,
                      }}
                    >
                      <Typography
                        variant="overline"
                        component="div"
                        align="center"
                        sx={{
                          w: 1,
                        }}
                      >
                        {label}
                      </Typography>
                    </CardContent>
                  </Card>
                ) : (
                  label
                )
              }
              labelPlacement={labelPlacement}
            />
          );
        })}
      </FormGroup>
      <FormHelperText>{textHint}</FormHelperText>
    </FormControl>
  );
}
