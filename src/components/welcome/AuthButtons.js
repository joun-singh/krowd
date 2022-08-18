import { Button, Stack } from "@mui/material";
import React from "react";

const AuthButtons = ({click}) => {



     return(
          <Stack direction="row" justifyContent="space-around" alignItems="center" >
               <Button variant="contained" className="auth-btn" onClick={()=>click()}>SignUp</Button>
               <Button variant="outlined" className="auth-btn">SignIn</Button>
          </Stack>
     )
}

export default AuthButtons