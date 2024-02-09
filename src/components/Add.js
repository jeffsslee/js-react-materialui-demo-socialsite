import AddIcon from "@mui/icons-material/Add";
import {
  EmojiEmotions,
  Image,
  VideoCameraBack,
  PersonAdd,
  DateRange,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50% - 25px)", sm: "30px" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          bgcolor={"background.default"}
          color={"text.primary"}
          borderRadius={5}
          p={3}
        >
          <Typography
            variant="h6"
            component="h2"
            color={"grey"}
            textAlign={"center"}
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="/user-png-64.png" sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default Add;
