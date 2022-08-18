import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MoneyIcon from "@mui/icons-material/Money";

const Step3 = () => {
  return (
    <>
      <Stack justifyContent="center" alignItems="center" gap="2.5rem" textAlign="center">
        <Box>
          <Box>
            <CreditCardIcon sx={{ fontSize: "3.5rem" }} />
            <Typography as="h3" variant="h3">
              1. Register your card
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <ShoppingBasketIcon sx={{ fontSize: "3.5rem" }} />
            <Typography as="h3" variant="h3">
              2. Spend at our recommended outlets
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <MoneyIcon sx={{ fontSize: "3.5rem" }} />
            <Typography as="h3" variant="h3">
              3. Get cashback in your account
            </Typography>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Step3;
