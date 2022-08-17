import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AuthButtons from '../components/welcome/AuthButtons';
import StepsNavigation from '../components/welcome/StepsNavigation';


const Welcome = () => {
     return (
          <Container>
               <Stack>
               <Stack direction="row" justifyContent="center" alignItems="center" gap=".7rem">
                    <Box>
                         {/* <img src={Logo} alt="Logo"/> */}
                         <AcUnitIcon/>
                    </Box>
                    <Box>
                         <Typography as="h1" variant='h1'>krowd</Typography>
                    </Box>
               </Stack>
               <Box>
                    <Typography as="p" variant='subtitle1'>Welcome to Krowd Rewards</Typography>
               </Box>
               <Box sx={{textAlign:'right'}}>
                    <Typography as="p" variant='subtitle1'>Curated Travel Experiences</Typography>
               </Box>
               <Box sx={{textAlign:'right'}}>
                    <Typography as="p" variant='subtitle1'>Customize to your taste</Typography>
               </Box>
               <StepsNavigation/>
               <AuthButtons/>
               </Stack>
          </Container>
     )
}

export default Welcome;