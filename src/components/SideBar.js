import React from 'react';
import {  Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText,Stack, Typography } from "@mui/material";
import HouseIcon from '@mui/icons-material/House';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ListAltIcon from '@mui/icons-material/ListAlt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PersonIcon from '@mui/icons-material/Person';
import GavelIcon from '@mui/icons-material/Gavel';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';


const SideBar = (props) => {
     return (
          <Box sx={{width:"270px",paddingTop:"1rem",paddingRight:"1rem"}}>
               <Box textAlign="right">
                    <FormatIndentDecreaseIcon  sx={{ fontSize: 30 }} onClick={props.close}/>
               </Box>
          <nav style={{height:"100%"}}>
               <List>
                    <ListItem disableGutters>
                         <ListItemButton>
                              <ListItemIcon>
                                   <HouseIcon/>
                              </ListItemIcon>
                              <ListItemText>Home</ListItemText>
                         </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters>
                         <ListItemButton>
                              <ListItemIcon>
                                   <ListAltIcon/>
                              </ListItemIcon>
                              <ListItemText>My Transactions</ListItemText>
                         </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters>
                         <ListItemButton>
                              <ListItemIcon>
                                   <CurrencyRupeeIcon/>
                              </ListItemIcon>
                              <ListItemText>Offers</ListItemText>
                         </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters>
                         <ListItemButton>
                              <ListItemIcon>
                                   <CreditCardIcon/>
                              </ListItemIcon>
                              <ListItemText>My Cards</ListItemText>
                         </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters>
                         <ListItemButton>
                              <ListItemIcon>
                                   <PersonIcon/>
                              </ListItemIcon>
                              <ListItemText>Profile</ListItemText>
                         </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters>
                         <ListItemButton>
                              <ListItemIcon>
                                   <GavelIcon/>
                              </ListItemIcon>
                              <ListItemText>Legal</ListItemText>
                         </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters>
                         <ListItemButton>
                              <ListItemIcon>
                                   <QuestionMarkIcon/>
                              </ListItemIcon>
                              <ListItemText>Help</ListItemText>
                         </ListItemButton>
                    </ListItem>
                    
               </List>
          </nav>
          <Stack direction="row" alignItems="center" justifyContent="space-between" padding="1rem">
               <Box>
                    <Button variant='text' sx={{textDecoration:"underline"}}>Signout</Button>
               </Box>
               <Box>
                    <Typography as="p" variant='body2'>Version 2.0</Typography>
               </Box>
          </Stack>
     </Box>
     )
}

export default SideBar;