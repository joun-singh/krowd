import {
  Container,
  TextField,
  Typography,
  Box,
  Button,
  Stack,
  FormControl,
} from "@mui/material";
import React from "react";

const OtpCode = () => {
  return (
    <Container>
      <Stack className="vh-100 p-3" sx={{ position: "relative",paddingTop:"5rem",gap:"25rem" }}>
        <Box>
          <Typography as="p" variant="body3" color="text.secondary">
            You will receive an authorization code for your new account via text
            message to the cell phone number you entered in Step 1
          </Typography>
          <Typography as="p" variant="subtitle1" className="my-3">
            Activation Code
          </Typography>
          <FormControl fullWidth>

          <TextField type="number" name="activationCode" placeholder="XXXX" />
          </FormControl>
        </Box>
        <Box sx={{ margin:"auto",textAlign: "center" }}>
          <Button variant="contained" className="reg-comp">
            Complete Registration
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default OtpCode;
