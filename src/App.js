import { Box, styled } from "@mui/material";
import Button from "@mui/material/Button";
import { theme } from "./theme";

function App() {
  const MyButton = styled(Button)(({ theme }) => ({
    background: theme.palette.otherColor.main,
    color: "yellowgreen",
    margin: 2, // 2 * 8px = 16px
    "&:hover": {
      background: "orange",
    },
    "&:disabled": {
      background: "grey",
      color: "#111",
    },
  }));
  return (
    <Box>
      <Button variant="contained" color="primary">
        primary
      </Button>
      <MyButton variant="contained">My button</MyButton>
      <MyButton variant="contained" disabled>
        My button
      </MyButton>
    </Box>
  );
}

export default App;
