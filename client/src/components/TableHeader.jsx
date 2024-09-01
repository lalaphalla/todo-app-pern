import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

export default function TableHeader() {
  const content = (
    <>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Stack
            direction="column"
            sx={{
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h6">Recent Transaction</Typography>
            <Typography>Found(4) Items</Typography>
          </Stack>
          <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Transaction</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="Transaction"
                label="Transaction"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
    </>
  );
  return content;
}
