import { HomeWork } from "@mui/icons-material";
import {
  Autocomplete,
  ListItem,
  ListItemIcon,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { PropertyContextState } from "../../context/Context";
import { propertyTypeData } from "../../data";

const data = propertyTypeData;

const PropertyTypeFilter = () => {
  const {
    propertyState: { propertyType },
    propertyDispatch,
  } = PropertyContextState();
  // console.log(propertyType);

  return (
    <Stack spacing={3}>
      <Typography variant="h7">Property Type</Typography>
      <ListItem disablePadding>
        <ListItemIcon>
          <HomeWork />
        </ListItemIcon>
        <Autocomplete
          value={propertyType}
          blurOnSelect
          size="small"
          onChange={(e, newPropertyType) => {
            propertyDispatch({
              type: "PROPERTY_TYPE_CHANGE",
              payload: newPropertyType,
            });
          }}
          options={data}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} placeholder="Select property Type" fullWidth />
          )}
        />
      </ListItem>
    </Stack>
  );
};

export default PropertyTypeFilter;
