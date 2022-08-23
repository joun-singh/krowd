import React from "react";
import { Grid, Typography,Stack,Box } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const RewardCard = ({data}) =>{
     return (
          <>
               <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box>
                         {data.icon}
                    </Box>
                    <Box>
                         <Typography as="p" variant="subtitle1">{data.name}</Typography>
                         <Typography as="p" variant="subtitle2">{data.description}</Typography>
                    </Box>
                    <Box>
                         <KeyboardArrowRightIcon fontSize='large'/>
                    </Box>
               </Stack>
          </>
     )
}

export default RewardCard;