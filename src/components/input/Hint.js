import { Box, Typography } from "@mui/material";

export const HintImagePosition = {
  left: "left",
  right: "right"
};
export default function Hint({ title, text, image, imagePosition = "right" }) {
  return (
    <>
      {title ? (
        <Typography sx={{ my: 1 }} variant="subtitle1" component="div">
          {title}
        </Typography>
      ) : null}
      <Box sx={{ display: "flex" }}>
        {imagePosition === HintImagePosition.left && image ? (
          <Box sx={{ ml: 4 }}>
            <img
              src={image}
              style={{
                width: 216,
                height: 216,
                objectFit: "contain",
                objectPosition: "top"
              }}
              alt="depiction"
            />
          </Box>
        ) : null}
        <Typography
          variant="body2"
          sx={image ? { width: 400 } : {}}
          component="div"
        >
          {text}
        </Typography>
        {imagePosition === HintImagePosition.right && image ? (
          <Box sx={{ ml: 4 }}>
            <img
              src={image}
              style={{
                width: 216,
                height: 216,
                objectFit: "contain",
                objectPosition: "top"
              }}
              alt="depiction"
            />
          </Box>
        ) : null}
      </Box>
    </>
  );
}
