import React from "react";
import {
  Container,
  Box,
  Stack,
  TextField,
  Typography,
  InputAdornment,
Select,
MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  FormControl,
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

const Search = () => {
  const [sort, setSort] = React.useState("trending");
  const [distance, setDistance] = React.useState("auto");
  const [advanceSearch, setAdvanceSearch] = React.useState({
     price:"",
     cuisines:"",
     location:"",
     amenties:"",

  });

  const handleAdvanceChange = (event,name) => {
    let val = event.target.value;

    setAdvanceSearch({...advanceSearch,[name]:val})
  };

  const handleSortChange = (event, sort) => {
    setSort(sort);
  };
  const handleDistanceChange = (event, dist) => {
    setDistance(dist);
  };
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
        <Box>
          <Typography
            as="h4"
            variant="h4"
            fontWeight={600}
            color="text.blue"
            className="mb-2"
          >
            Sort by
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={sort}
            exclusive
            onChange={handleSortChange}
            aria-label="sort"
            fullWidth
          >
            <ToggleButton value="trending">Trending</ToggleButton>
            <ToggleButton value="offer">% Offer</ToggleButton>
            <ToggleButton value="distance">Distance</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box className="mt-4">
        <Typography
            as="h4"
            variant="h4"
            fontWeight={600}
            color="text.blue"
            className="mb-2"
          >
            Distance
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={distance}
            exclusive
            onChange={handleDistanceChange}
            aria-label="distance"
            fullWidth
          >
            <ToggleButton value="auto">Auto</ToggleButton>
            <ToggleButton value="0.5">0.5</ToggleButton>
            <ToggleButton value="1">1</ToggleButton>
            <ToggleButton value="5">5</ToggleButton>
            <ToggleButton value="10">10</ToggleButton>
            <ToggleButton value="20">20</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box className="mt-4">
        <Typography
            as="h4"
            variant="h4"
            fontWeight={600}
            color="text.blue"
            className="mb-2"
          >
           Advance Search
          </Typography>
          <FormControl variant="standard" fullWidth>
          <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={advanceSearch.price}
          onChange={handleAdvanceChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
          </FormControl>
        </Box>
        
      </Container>
      <FooterMenu />
    </>
  );
};

export default Search;
