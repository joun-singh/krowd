import { Container, Grid,Box } from '@mui/material';
import React from 'react';
import AuthHeader from '../components/headers/AuthHeader';
import RewardCard from '../components/RewardCard';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ListAltIcon from '@mui/icons-material/ListAlt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PersonIcon from '@mui/icons-material/Person';
import GavelIcon from '@mui/icons-material/Gavel';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const Rewards = () => {

     const cards = [
          {
               name:"My Cards",
               icon:<CreditCardIcon fontSize='large'/>,
               link:"#",
               description:"Register your payment cards"
          },
          {
               name:"My Transactions",
               icon:<ListAltIcon fontSize='large'/>,
               link:"#",
               description:"Your savings at a glance"
          },
          {
               name:"Offers",
               icon:<CurrencyRupeeIcon fontSize='large'/>,
               link:"#",
               description:"Curated just for you"
          },
          {
               name:"Profile",
               icon:<PersonIcon fontSize='large'/>,
               link:"#",
               description:"Update your contact details"
          },
          {
               name:"Legal",
               icon:<GavelIcon fontSize='large'/>,
               link:"#",
               description:"T & C, Privacy Policy"
          },
          {
               name:"Help",
               icon:<QuestionMarkIcon fontSize='large'/>,
               link:"#",
               description:"Get your queries resolved"
          },

     ]

     return(
          <>
          <Box className='header'>

               <AuthHeader title="Krowd Rewards"/>
          </Box>
          <Container>
               <Box>
               <Grid container gap="10px" >
                    
                    {cards.map((item)=>{
                         return(
                              <Grid item xs={12} sm={6} md={4} className="reward-card p-3" key={item.name}>
                                   <RewardCard data={item} />
                              </Grid>
                         )
                    })}
               </Grid>
               </Box>
          </Container>
          </>
     )
}

export default Rewards;