import { Button, Container, Typography, Box,Stack } from "@mui/material";
import React from "react";
import AuthHeader from "../components/headers/AuthHeader";

const HowCardWork = () => {
  return (
    <>
      <Box className="header">
        <AuthHeader title="My Cards" />
      </Box>
      <Container>
        <Stack sx={{height:"85vh"}}>
          <Box>
            <Typography as="h2" variant="h2" fontWeight={600}>
              How it works
            </Typography>
            <Typography as="p" variant="subtitle2" color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.</Typography><Typography> It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", margin: "auto",gap:"3rem" }}>
            <Button
              variant="contained"
              sx={{ fontSize: "1.5rem", padding: ".3em 3.4em" }}
            >
              Link Card
            </Button>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default HowCardWork;
