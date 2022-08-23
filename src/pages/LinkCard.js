import React from "react";
import {
  Button,
  Container,
  Stack,
  Typography,
  Box,
  FormControl,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Card from "../assets/card.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const LinkCard = () => {
  const [success, setSuccess] = React.useState(true);
  const [personName, setPersonName] = React.useState([]);
  const [isCardValid, setIsCardValid] = React.useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  function formatString(event) {
    var inputChar = String.fromCharCode(event.keyCode);
    var code = event.keyCode;
    var allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }

    event.target.value = event.target.value
      .replace(
        /^([1-9]\/|[2-9])$/g,
        "0$1/" // 3 > 03/
      )
      .replace(
        /^(0[1-9]|1[0-2])$/g,
        "$1/" // 11 > 11/
      )
      .replace(
        /^([0-1])([3-9])$/g,
        "0$1/$2" // 13 > 01/3
      )
      .replace(
        /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
        "$1/$2" // 141 > 01/41
      )
      .replace(
        /^([0]+)\/|[0]+$/g,
        "0" // 0/ > 0 and 00 > 0
      )
      .replace(
        /[^\d\/]|^[\/]*$/g,
        "" // To allow only digits and `/`
      )
      .replace(
        /\/\//g,
        "/" // Prevent entering more than 1 `/`
      );
  }

  function ValidateCreditCardNumber(cc) {
    var ccNum = cc;
    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    var amexpRegEx = /^(?:3[47][0-9]{13})$/;
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

    if (visaRegEx.test(ccNum)) {
      setIsCardValid(true);
    } else if (mastercardRegEx.test(ccNum)) {
      setIsCardValid(true);
    } else if (amexpRegEx.test(ccNum)) {
      setIsCardValid(true);
    } else if (discovRegEx.test(ccNum)) {
      setIsCardValid(true);
    }
  }

  return (
    <Container>
      {!success ? (
        <>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="py-4"
          >
            <Button variant="text" sx={{ color: "text.secondary" }}>
              Cancel
            </Button>
            <Typography as="p" variant="body2">
              Link your card
            </Typography>
            <Button variant="text" sx={{ color: "text.secondary" }}>
              Connect
            </Button>
          </Stack>
          <Box>
            <img src={Card} alt="card" style={{ width: "100%" }} />
          </Box>
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              name="card"
              type="text"
              variant="outlined"
              placeholder="Card number"
              endAdornment={
                <InputAdornment position="end">
                  <Box textAlign="right" sx={{ width: "120px" }}>
                    <img src={Card} style={{ width: "50%" }} />
                  </Box>
                </InputAdornment>
              }
            />
          </FormControl>
          <Stack
            direction="row"
            alignItems="center"
            gap="12px"
            className="mt-3"
          >
            <Box>
              <FormControl fullWidth>
                <TextField
                  maxLength="5"
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  onKeyUp={(e) => formatString(e)}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl
                variant="standard"
                sx={{ minWidth: "220px" }}
                fullWidth
              >
                <Select
                  displayEmpty
                  input={<OutlinedInput />}
                  value={personName}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return (
                        <span style={{ color: "rgb(167,167,167)" }}>
                          Country of issue
                        </span>
                      );
                    }

                    return selected.join(", ");
                  }}
                >
                  <MenuItem>India</MenuItem>
                  <MenuItem>USA</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
          <Stack direction="row" className="pb-4">
            <Box>
              <Checkbox name="tc" />
            </Box>
            <Box>
              <Typography as="p" variant="subtitle2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
            </Box>
          </Stack>
        </>
      ) :( <>
      <Box sx={{position:"absolute",top:"50%",left:"50%",transform: "translate(-50%,-50%)",textAlign:"center",width:"100%"}}>
        <Typography as="h2" variant="h2" fontWeight={600}>
        Your card was registered successfully 
        </Typography>
        <Button variant="contained" sx={{fontSize:"1.5rem",marginTop:"2rem",padding:".3em 3em"}}>ok</Button>
      </Box>
      </>)}
    </Container>
  );
};

export default LinkCard;
