import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HouseIcon from "@mui/icons-material/House";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SavingsIcon from "@mui/icons-material/Savings";
import { Link, useLocation } from "react-router-dom";

const FooterMenu = () => {
  const path = useLocation().pathname;

  const getActiveLink = (link) => {
    let classes = "";
    if (path === link) {
      classes = "active-blu";
    }
    else {
      classes = "link-blk";
    }

    return classes;
  };

  return (
    <Box sx={{ zIndex: 1, backgroundColor: "#fff" }}>
      <Stack
        className="bottom-menu"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box textAlign="center">
          <Link to="/home" className={getActiveLink("/home")}>
            <HouseIcon fontSize="large" />
            <Typography as="p" variant="subtitle1">
              Home
            </Typography>
          </Link>
        </Box>
        <Box>
          <Link to="/favorites" className={getActiveLink("/favorites")}>
            <FavoriteIcon fontSize="large" />
            <Typography as="p" variant="subtitle1">
              Faviorate
            </Typography>
          </Link>
        </Box>
        <Box>
        <Link to="/find" className={getActiveLink("/find")}>
          <SearchIcon fontSize="large" />
          <Typography as="p" variant="subtitle1">
            Search
          </Typography>
          </Link>
        </Box>
        <Box>
          <LocationOnIcon fontSize="large" />
          <Typography as="p" variant="subtitle1">
            Map
          </Typography>
        </Box>
        <Box>
          <SavingsIcon fontSize="large" />
          <Typography as="p" variant="subtitle1">
            Savings
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default FooterMenu;
