import React from "react";
import { Box, Stack, Typography } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Step1 = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap=".7rem"
      >
        <Box>
          {/* <img src={Logo} alt="Logo"/> */}
          <AcUnitIcon />
        </Box>
        <Box>
          <Typography as="h1" variant="h1">
            krowd
          </Typography>
        </Box>
      </Stack>
      <Box>
        <Typography as="h2" variant="h2" textAlign="center">
          Welcome to Krowd Rewards
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Typography as="h3" variant="h3" className="m-mb-6">
          Curated Travel Experiences
        </Typography>

        <Typography as="h3" variant="h3" color="text.secondary">
          Customize to your taste
        </Typography>
      </Box>
    </>
  );
};

export default Step1;
