import { Stack, Typography } from "@mui/material";

export default function SideBarItem({title, icon}) {
  const content = (
    <>
      <Stack alignItems="center" direction="row" gap={2}>
        <img src={icon} alt="" />
        <Typography variant="bmdr" sx={{ color: {red : "main"} }}>title</Typography>
      </Stack>
    </>
  );
  return content;
}
