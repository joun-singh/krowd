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
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  const route = useNavigate()

  const initialErrorState = {
    email: "",
    password: "",
    repeatPassword: "",
    phoneNumber: "",
    accept:false
  };

  const [value,setValue] = React.useState({
    email:"",
    phoneNumber:"",
    password:"",
    confirmPassword:""
  })

  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const [error, setError] = React.useState(initialErrorState);

  // user Form validating function;
  const validate = (obj) => {
    let errors = error;
    let valid = true;
    //(values.email.length === 0 || !emailRegex.test(values.email))

    if(obj.email.length===0){
      error.email="Email is required";
    }
    else if(!emailRegex.test(obj.email)){
      error.email = "Invalid Error"
    }

    if(obj.phoneNumber.length===0){
      error.phoneNumber = "Phone Number is required";
    }

    if (obj.password.length === 0) {
      errors.password = "Password is required";
    } else if (obj.password.length < 8) {
      errors.password = "Password must be at least 8 characters long!";
    } else if (!/[A-Z]/.test(obj.password)) {
      errors.password = "Password must contain 1 Uppercase letter";
    } else if (!/[a-z]/.test(obj.password)) {
      errors.password = "Password must contain 1 lowercase letter";
    } else if (!/[0-9]/.test(obj.password)) {
      errors.password = "Password must contain 1 number";
    }
    // else if (!/[\W]/.test(obj.password)) {
    //   errors.password = "Password must contain 1 special character";
    // }

    if (obj.confirmPassword.length === 0) {
      errors.repeatPassword = "Confirm Password is required";
    } else if (obj.password !== obj.confirmPassword) {
      errors.repeatPassword = "Password not matched";
    }

    setError({ ...error, ...errors });
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  const register = () => {
    if(!validate(value)){
      return
    }

    route("/activation")

  };

  const handleChange = (name) =>(e) => {
    console.log(name)
    let val = e.target.value;
    if(name==="accept"){
      val = e.target.isChecked
    }


    setValue({...value,[name]:val})
  }

  return (
    <Container>
      <Stack direction="row" alignItems="center" gap="1rem" marginTop="1rem">
        <Box>
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            <KeyboardArrowLeftIcon
              sx={{ fontSize: "3rem", cursor: "pointer" }}
            />
          </Link>
        </Box>
        <Box>
          <Typography as="h1" variant="h1">
            Create Account
          </Typography>
        </Box>
      </Stack>
      <Box>
        {console.log("ERROR",error)}
        <FormControl fullWidth className="signup-formcontrol">
          <Typography as="p" variant="subtitle1" className="mb-1">
            Email
          </Typography>
          <TextField type="email" name="email" placeholder="Email" error={error.email ? true:false} value={value.email} onChange={handleChange('email')}/>
         
        </FormControl>
        <FormControl fullWidth className="signup-formcontrol">
          <Typography as="p" variant="subtitle1" className="mb-1">
            Cell Phone Number
          </Typography>
          <TextField type="text" name="phoneNumber" error={error.phoneNumber ? true:false} placeholder="XXX-XXX-XXXX" className="mb-1" value={value.phoneNumber} onChange={handleChange('phoneNumber')} />
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
          <TextField type="password" name="password" error={error.password ? true:false} className="mb-1" value={value.password} onChange={handleChange('password')}/>
          <Typography as="p" sx={{ fontSize: "13px", color: "text.secondary" }}>
            Password MUST be a minimum of 8 characters;at least 1 uppercase
            character and 1 number
          </Typography>
        </FormControl>
        <FormControl fullWidth className="signup-formcontrol">
          <Typography as="p" variant="subtitle1" placeholder="password">
            Confirm Password
          </Typography>
          <TextField type="text" name="confirmPassword" error={error.repeatPassword ? true:false} className="mb-1" value={value.confirmPassword} onChange={handleChange('confirmPassword')}/>
          {/* <Typography as="p" sx={{ fontSize: "13px", color: "text.secondary" }}>
            Password MUST be a minimum of 8 characters;at least 1 uppercase
            character and 1 number
          </Typography> */}
        </FormControl>
        <FormControl fullWidth className="signup-formcontrol mb-5">
          <Stack direction="row" alignItems={"start"}>
            <Box>
              <Checkbox name="accept" checked={value.accept} onChange={handleChange('accept')}/>
            </Box>
            <Box>
              <label>
                By checking this box you acknowledge and accept the Terms of
                Service and Privacy Policy
              </label>
            </Box>
          </Stack>
        </FormControl>
        <AuthButtons click={register}/>
      </Box>
    </Container>
  );
};

export default Signup;
