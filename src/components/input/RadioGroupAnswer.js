import "../../styles.css";
import { Box } from "@mui/system";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Radio from "@mui/material/Radio";
import { CardMedia, Typography } from "@mui/material";

export default function RadioGroupAnswer({
  options = {
    test: {
      label: "value",
      src: `https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e`,
    },
    test2: { label: "another value" },
  },
  onChange,
  name,
  textHint,
  value,
  formlabel,
  inline = false,
}) {
  const keys = Object.keys(options);
  return (
    <FormControl
      // sx={{ m: 3 }}
      component="fieldset"
      variant="standard"
    >
      {formlabel && <FormLabel component="legend">{formlabel}</FormLabel>}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={value}
        name={name}
        onChange={onChange}
        row={inline}
      >
        {keys.map((key) => {
          const isArrayOptions = Array.isArray(options);
          const formValue = isArrayOptions ? options[key] : key;
          const label = isArrayOptions ? options[key] : options[key].label;
          const labelPlacement = isArrayOptions ? "end" : "bottom";
          return (
            <FormControlLabel
              value={formValue}
              sx={
                isArrayOptions
                  ? {}
                  : {
                      mb: 3,
                      maxWidth: 196,
                    }
              }
              key={key}
              control={<Radio />}
              label={
                options[key].src ? (
                  <Card raised={true}>
                    <CardMedia
                      sx={{
                        height: 196,
                        width: 196,
                      }}
                      image={options[key].src}
                      title="green iguana"
                    />
                    <CardContent
                      sx={{
                        pt: 2,
                        mb: -2,
                      }}
                    >
                      <Typography
                        variant="overline"
                        component="div"
                        align="center"
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
      </RadioGroup>
      <FormHelperText>{textHint}</FormHelperText>
    </FormControl>
  );
}
