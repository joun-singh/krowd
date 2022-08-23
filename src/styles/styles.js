import { styled,TextField } from "@mui/material";


export const InputField = styled(TextField)(({ theme }) => ({
     width: "100%",
     "& .MuiInputBase-root": {
       height: "27px",
       color: theme.palette.text.secondary,
       fontSize: theme.typography.pxToRem(15),
       [theme.breakpoints.up("lg")]: {
         height: theme.typography.pxToVw(48),
         fontSize: theme.typography.pxToVw(15),
       },
     },
     "& .MuiOutlinedInput-notchedOutline": {
       height: "35px",
       borderColor: "#D9D9D9",
       [theme.breakpoints.up("lg")]: {
         height: theme.typography.pxToVw(48),
       },
     },
   }));