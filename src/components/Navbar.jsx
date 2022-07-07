import { AppBar, Box, Button, InputBase, styled, Toolbar, Typography } from "@mui/material";
import { HomeWork } from "@mui/icons-material";
import React from "react";
import { PropertyContextState } from "../context/Context";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "60%",
  [theme.breakpoints.up("sm")]: { width: "40%" },
}));

const Buttons = styled(Box)(({ theme }) => ({
  // backgroundColor: "white",
  display: "none",
  [theme.breakpoints.up(620)]: { display: "block" },
}));

const Navbar = () => {
  const { propertyDispatch } = PropertyContextState();
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Rent a Property
        </Typography>
        <HomeWork sx={{ display: { xs: "block", sm: "none" } }} />

        <Search>
          <InputBase
            sx={{ width: "100%" }}
            placeholder="search..."
            onChange={(e) => {
              propertyDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </Search>
        <Buttons>
          <Button sx={{ marginRight: { xs: 1, md: 2 } }} variant="contained">
            Login
          </Button>
          <Button variant="contained">Sign up</Button>
        </Buttons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
