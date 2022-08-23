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
} from "@mui/material";
import { Link } from "react-router-dom";
import FooterMenu from "../components/FooterMenu";
import AuthHeader from "../components/headers/AuthHeader";
import SearchIcon from "@mui/icons-material/Search";
import HotelCard from "../components/HotelCard";
import Slider from "../components/Slider";
import { SwiperSlide } from "swiper/react";
import {InputField} from "../styles/styles"


const Home = () => {

  const [rec,setRec] = React.useState(new Array(4).fill("empty"))

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
      <Paper
        className="bg-blue"
        elevation={0}
        sx={{backgroundImage: "linear-gradient(#4a8affe6, #00d0ff)"}}
      >
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            paddingTop={4}
            marginBottom={1}
          >
            <Typography as="h2" variant="h4" color="#fff">
              Recommended for you
            </Typography>
            <Link to="/" style={{color:"#fff",textDecoration:"underline"}}>View All</Link>
          </Stack>
          <Slider>
          {rec.map((item,index)=>{
            return(
              <SwiperSlide key={index}><HotelCard data={item}/></SwiperSlide>
            )
          })}
          </Slider>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            paddingTop={4}
            marginBottom={1}
          >
            <Typography as="h2" variant="h4" color="#fff">
              Family friendly
            </Typography>
            <Link to="/" style={{color:"#fff",textDecoration:"underline"}}>View All</Link>
          </Stack>
          <Slider>
          {rec.map((item,index)=>{
            return(
              <SwiperSlide key={index}><HotelCard data={item}/></SwiperSlide>
            )
          })}
          </Slider>
        </Container>
      </Paper>
      <FooterMenu />
    </>
  );
};

export default Home;
