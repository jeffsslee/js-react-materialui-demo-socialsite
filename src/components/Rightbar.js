import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      sx={{
        background: "yellowgreen",
        flex: 2,
        display: { xs: "none", sm: "block" },
        padding: 2,
      }}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
