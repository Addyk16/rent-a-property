import { Box, Typography } from "@mui/material";
import React from "react";
import { PropertyContextState } from "../context/Context";
import SingleProperty from "./SingleProperty";

const Properties = () => {
  const {
    state: { propertyList },
    propertyState: { location, minPrice, maxPrice, date, propertyType, searchQuery },
  } = PropertyContextState();

  const transformPropertyList = () => {
    let filteredPropertyList = propertyList;
    if (propertyType) {
      filteredPropertyList = filteredPropertyList.filter((prop) => {
        return prop.propertyType === propertyType.label;
      });
    }
    if (location) {
      filteredPropertyList = filteredPropertyList.filter((prop) => {
        return prop.location === location.label;
      });
    }
    if (date && date.toString() !== "Invalid Date") {
      filteredPropertyList = filteredPropertyList.filter((prop) => {
        return prop.available.getTime() <= date.getTime();
      });
    }
    filteredPropertyList = filteredPropertyList.filter((prop) => {
      return minPrice.value * 10000 <= prop.rent && prop.rent <= maxPrice.value * 10000;
    });
    if (searchQuery) {
      filteredPropertyList = filteredPropertyList.filter((prop) => {
        return (
          prop.title.toUpperCase().includes(searchQuery.toUpperCase()) ||
          prop.desc.toUpperCase().includes(searchQuery.toUpperCase())
        );
      });
    }
    return filteredPropertyList;
  };

  return (
    <Box flex={8} py={2}>
      <Typography fontSize={15} color="rgba(0,0,0,0.4)">
        Search Results: {transformPropertyList().length}
      </Typography>
      <Box display="flex" direction="row" flexWrap="wrap" justifyContent="space-evenly">
        {transformPropertyList().length === 0 ? (
          <Typography variant="h4" mt={10}>
            Oops No Results Found !
          </Typography>
        ) : (
          transformPropertyList().map((prop) => {
            return <SingleProperty property={prop} key={prop.key} />;
          })
        )}
      </Box>
    </Box>
  );
};

export default Properties;
