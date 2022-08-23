import React, { useState } from "react";
import {
  Stack,
  Typography,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HouseIcon from "@mui/icons-material/House";
import SideBar from "../SideBar";

const AuthHeader = (props) => {
  const [sideBar, setSideBar] = useState(false);

  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSideBar(!sideBar);
  };

  return (
    <Container>
      <Stack direction="row" gap="3rem"  className="my-4">
        <Box>
          <MenuIcon onClick={toggleDrawer} />
        </Box>
        {props.title ? (
          <Box>
            <Typography as="h2" variant="h2" sx={{ fontWeight: 600 }}>
              {props.title}
            </Typography>
          </Box>
        ) : null}

        <Box>{props.children ? props.children : null}</Box>
      </Stack>
      <Drawer anchor="left" open={sideBar} onClose={toggleDrawer}>
        <SideBar close={toggleDrawer} />
      </Drawer>
    </Container>
  );
};

export default AuthHeader;
