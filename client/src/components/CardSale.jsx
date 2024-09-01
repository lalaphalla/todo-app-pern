import { Box } from "@mui/material";

export default function CardSale() {
  const content = (
    <Box
      sx={{
        width: 460,
        height: 215,
        borderRadius: 1,
        bgcolor: "grey.100",
        "&:hover": {
          bgcolor: "primary.dark",
        },
        boxShadow: 1,
      }}
    ></Box>
  );
  return content;
}
