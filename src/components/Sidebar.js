import { Box } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      sx={{
        background: "tomato",
        flex: 1,
        display: { xs: "none", sm: "block" },
        padding: 2,
      }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
