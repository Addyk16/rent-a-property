import { Box, Button, Divider, List, ListItem, styled } from "@mui/material";
import React from "react";
import LocationFilter from "./filter/LocationFilter";
import DateFilter from "./filter/DateFilter";
import PriceFilter from "./filter/PriceFilter";
import PropertyTypeFilter from "./filter/PropertyTypeFilter";
import { PropertyContextState } from "../context/Context";

const MarginDivider = styled(Divider)({
  marginTop: 15,
  marginBottom: 12,
});

const Sidebar = () => {
  const { propertyDispatch } = PropertyContextState();

  return (
    <Box
      flex={2}
      p={2}
      display={{ xs: "none", sm: "none", md: "block" }}
      sx={{ minWidth: "290px" }}>
      <Box position="fixed" sx={{ maxWidth: "270px" }}>
        <List>
          <LocationFilter />
          <MarginDivider />
          <DateFilter />
          <MarginDivider />
          <PriceFilter />
          <MarginDivider />
          <PropertyTypeFilter />
          <ListItem sx={{ mt: 5, justifyContent: "center" }} disablePadding>
            <Button
              variant="contained"
              onClick={(e) => {
                propertyDispatch({
                  type: "CLEAR_FILTERS",
                });
              }}>
              Clear Filters
            </Button>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
