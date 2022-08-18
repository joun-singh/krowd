import React from "react";
import {
  Stack,
  Typography,
  Box,
  FormControl,
  TextField,
  Container,
  Checkbox,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AuthButtons from "../components/welcome/AuthButtons";
import "../styles/welcome.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container>
      <Stack direction="row" alignItems="center" gap="1rem" marginTop="1rem">
        <Box>
          <Link to="/" style={{textDecoration:"none",color:"#000"}}>
          <KeyboardArrowLeftIcon
            sx={{ fontSize: "3.5rem", cursor: "pointer" }}
          /></Link>
        </Box>
        <Box>
          <Typography as="h1" variant="h1">
            Create Account
          </Typography>
        </Box>
      </Stack>
      <form>
        <FormControl fullWidth className="signup-formcontrol">
          <Typography as="p" variant="subtitle1" className="mb-1">
            Email
          </Typography>
          <TextField type="email" placeholder="Email" />
        </FormControl>
        <FormControl fullWidth className="signup-formcontrol">
          <Typography as="p" variant="subtitle1" className="mb-1">
            Cell Phone Number
          </Typography>
          <TextField type="email" placeholder="XXX-XXX-XXXX" className="mb-1" />
          <Typography as="p" sx={{ fontSize: "13px", color: "text.secondary" }}>
            By creating a Chip-In account, I consent to receiving automated
            recurring text message through an automated telephone dailing
            system, STOP to cancel Help for help. Msg & Data rates may apply.
            View our Privary policy and Terms of Use
          </Typography>
        </FormControl>
        <FormControl fullWidth className="signup-formcontrol">
          <Typography
            as="p"
            variant="subtitle1"
            placeholder="password"
            className="mb-1"
          >
            Password
          </Typography>
          <TextField type="password" className="mb-1" />
          <Typography as="p" sx={{ fontSize: "13px", color: "text.secondary" }}>
            Password MUST be a minimum of 8 characters;at least 1 uppercase
            character and 1 number
          </Typography>
        </FormControl>
        <FormControl fullWidth className="signup-formcontrol">
          <Typography as="p" variant="subtitle1" placeholder="password">
            Confirm Password
          </Typography>
          <TextField type="password" className="mb-1" />
          <Typography as="p" sx={{ fontSize: "13px", color: "text.secondary" }}>
            Password MUST be a minimum of 8 characters;at least 1 uppercase
            character and 1 number
          </Typography>
        </FormControl>
        <FormControl fullWidth className="signup-formcontrol">
          <Stack direction="row" alignItems={"center"}>
            <Box>
              <Checkbox />
            </Box>
            <Box>
              <label>
                By checking this box you acknowledge and accept the Terms of
                Service and Privacy Policy
              </label>
            </Box>
          </Stack>
        </FormControl>
        <AuthButtons />
      </form>
    </Container>
  );
};

export default Signup;
