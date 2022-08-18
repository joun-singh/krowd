import { Box, Stack } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const StepsNavigation = ({ stepChange, step }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      className="step-mb"
    >
      <Box>
        {step > 1 ? (
          <ArrowBackIosIcon onClick={() => stepChange("prev")} sx={{cursor:"pointer"}}/>
        ) : null}
      </Box>
      <Box>
        <Box
          className={step===1 ? "step-circle filled" :"step-circle"}
          onClick={() => {
            stepChange(1);
          }}
        ></Box>
      </Box>
      <Box>
        <Box
          className={step===2 ? "step-circle filled" :"step-circle"}
          onClick={() => {
            stepChange(2);
          }}
        ></Box>
      </Box>
      <Box>
        <Box
          className={step===3 ? "step-circle filled" :"step-circle"}
          onClick={() => {
            stepChange(3);
          }}
        ></Box>
      </Box>
      <Box>
        <ArrowForwardIosIcon onClick={() => stepChange("next")} sx={{cursor:"pointer"}}/>
      </Box>
    </Stack>
  );
};

export default StepsNavigation;
