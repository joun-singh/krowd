import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import VideocamIcon from '@mui/icons-material/Videocam';
import FlightIcon from '@mui/icons-material/Flight';

const Step2 = () => {
  return (
     <>
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      gap="1rem"
      marginTop="4rem"
    >
      <Box>
        <Box sx={{ textAlign: "center" }}><RestaurantIcon sx={{fontSize:"5rem"}}/></Box>
        <Box>
          <Typography
            as="h3"
            variant="h3"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            Food
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ textAlign: "center" }}><VideocamIcon sx={{fontSize:"5rem"}}/></Box>
        <Box>
          <Typography
            as="h3"
            variant="h3"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            Entertainment
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ textAlign: "center" }}><FlightIcon sx={{fontSize:"5rem"}}/></Box>
        <Box>
          <Typography
            as="h3"
            variant="h3"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            Travel
          </Typography>
        </Box>
      </Box>
    </Stack>
    <Box sx={{textAlign:"right",marginTop:"-3rem",marginBottom:"6rem"}}>
     <Typography as="h4" variant="h4" color="text.secondary">and much more...</Typography>
    </Box>
    </>
  );
};

export default Step2;
