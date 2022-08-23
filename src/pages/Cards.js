import React from "react";
import {
  Container,
  Typography,
  Box,
  Stack,
  Button,
  Modal,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Card from "../assets/visa.png";
import AuthHeader from "../components/headers/AuthHeader";
import { Link } from "react-router-dom";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "20px",
};

const Cards = () => {
  const [open, setOpen] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const removeCard = () => {
     setIsDeleted(true)
     setOpen(false);
     setTimeout(()=>{setIsDeleted(false)},3000)
  }

  return (
    <>
      <Box className="header">
        <AuthHeader title="My Cards" />
      </Box>
      <Container>
        <Box className="vh-100">
          <Stack direction="row" alignItems="center" gap="20px">
            <Box>
              <HighlightOffIcon onClick={handleOpen} />
            </Box>
            <Box>
              <img src={Card} alt="alt" style={{ width: "120px" }} />
            </Box>
            <Box>
              <Typography as="p" variant="body2">
                xxxx5463
              </Typography>
              <Typography as="p" variant="body2">
                08/22
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ backgroundColor: "#e1e1e1" }} className="mt-4">
            <Button variant="text" sx={{ color: "#000" }} className="mw-100">
              Add new card
            </Button>
          </Box>
          {isDeleted ? (
            <Box className="mt-5">
              <Typography
                as="h2"
                variant="h2"
                fontWeight="600"
                textAlign="center"
              >
                Your card was deleted successfully
              </Typography>
            </Box>
          ) : null}

          <Box sx={{ position: "absolute", bottom: "8%", right: "5%" }}>
            <HelpOutlineIcon />
            <Link
              to="/how-works"
              style={{
                fontSize: "1.2rem",
                color: "#000",
                paddingBottom: ".25rem",
                borderBottom: "1px solid #000",
              }}
            >
              {" "}
              How it works
            </Link>
          </Box>
        </Box>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box>
              <Typography as="p" variant="h3" fontWeight="600">
                Remove Card
              </Typography>
              <Typography as="p" variant="subtitle1">
                **** **** 8987
              </Typography>
            </Box>
            <Typography as="p" variant="body2">
              Are you Sure? once you remove your card you will no longer be able
              to participate in the program
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              gap="15px"
              marginTop="1rem"
            >
              <Button variant="contained" onClick={removeCard}>Remove</Button>
              <Button variant="contained" onClick={handleClose}>
                {" "}
                Cancel
              </Button>
            </Stack>
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export default Cards;
