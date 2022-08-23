import React from "react";
import { Card, CardContent, CardMedia, Typography,Box, Stack, IconButton } from "@mui/material";
import Hotel from "../assets/hotel.jpg";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const HotelCard = () => {
  return (
    <Card sx={{borderRadius:"15px"}}>
      <Box sx={{position:"relative"}}>
        <CardMedia
          component="img"
          sx={{borderRadius:"15px"}}
          height="150"
          image={Hotel}
          alt="hotel"
        />
        <Box className="position-absolute left-top-ali">
          <Typography as="p" variant="subtitle1" color={"blue"}>10%</Typography>
        </Box>
        <Box className="position-absolute right-top-ali">
          <Typography as="p" variant="subtitle2" color="#fff">0.5 min away</Typography>
        </Box>
        <Box className="position-absolute right-bottom-ali">
          <Stack direction="row" alignItems="center" gap="5px" className="card-action">
            <Box>
              <IconButton sx={{padding:"5px"}}>
                <FavoriteIcon fontSize="small"/>
              </IconButton>
            </Box>
            <Box>
              <IconButton sx={{padding:"5px"}}>
                <ThumbUpOffAltIcon  fontSize="small"/>
              </IconButton>
            </Box>
            <Box>
              <IconButton sx={{padding:"5px"}}>
                <ThumbDownOffAltIcon  fontSize="small"/>
              </IconButton>
            </Box>
          </Stack>
        </Box>
        <Box className="position-absolute left-bottom-ali">
          <Typography as="p" variant="body4" color="#fff">Trending</Typography>
        </Box>
      </Box>
      <CardContent>
          <Typography as="p" variant="subtitle1" color="text.blue">hotel - pasat</Typography>
          <Typography as="span" variant="body2" >Description</Typography>
          <Typography as="span" variant="body2" ><StarBorderOutlinedIcon/> 4.6(1,700)</Typography>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
