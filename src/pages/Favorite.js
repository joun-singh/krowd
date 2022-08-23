import React from "react";
import {
  Container,
  Box,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  styled,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import FooterMenu from "../components/FooterMenu";
import AuthHeader from "../components/headers/AuthHeader";
import Hotel from "../assets/hotel.jpg";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import SearchIcon from "@mui/icons-material/Search";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { InputField } from "../styles/styles";

const Favorite = () => {
  return (
    <>
      <AuthHeader>
        <InputField
          placeholder="Search"
          id="standard-start-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </AuthHeader>
      <Container>
        <Box className="vh-100" sx={{overflow:"auto",paddingBottom:"6rem"}}>
          <Box sx={{ position: "relative" }}>
            <img src={Hotel} alt="hotel img" className="fav-img" />
            <Box className="position-absolute hot-details p-2">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItem="center"
              >
                <Box>
                  <Typography as="p" variant="subtitle1" color="#fff">
                    Hotel Zuma
                  </Typography>
                  <Typography
                    as="p"
                    variant="body2"
                    className="mt-1"
                    color="#fff"
                  >
                    Description <StarBorderOutlinedIcon /> 4.6(1200)
                  </Typography>
                </Box>
                <Box>
                  <Typography as="p" variant="body2" color="#fff">
                    0.5 min away
                  </Typography>
                </Box>
              </Stack>
            </Box>
            <Box className="hotel-name-center">
              <Typography as="h2" variant="h2" color="#fff">
                Zuma
              </Typography>
            </Box>
            <Box className="position-absolute left-bottom-ali">
              <Typography as="p" variant="body4" color="#fff">
                Trending
              </Typography>
            </Box>
            <Box className="position-absolute right-bottom-ali">
              <Stack
                direction="row"
                alignItems="center"
                gap="5px"
                className="card-action"
              >
                <Box>
                  <IconButton sx={{ padding: "5px" }}>
                    <FavoriteIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton sx={{ padding: "5px" }}>
                    <ThumbUpOffAltIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton sx={{ padding: "5px" }}>
                    <ThumbDownOffAltIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Stack>
            </Box>
          </Box>
          <Box textAlign="center" className="mt-3">
            <Typography as="h2" variant="43" fontWeight={600} color="text.blue">
              About Zuma
            </Typography>
            <Typography as="p" color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </Box>
          <Box textAlign="center" className="my-3">
            <Typography as="h2" variant="h4" fontWeight={600} color="text.blue">
              Offer Details
            </Typography>
            <Typography as="p" color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </Box>
          <Box textAlign="center" className="mt-4">
            <Button variant="contained" sx={{fontSize:"1.5rem",padding:".3em 2em"}}>Get Direction</Button>
          </Box>
        </Box>
      </Container>
      <FooterMenu />
    </>
  );
};

export default Favorite;
