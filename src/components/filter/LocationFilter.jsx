import { Place } from "@mui/icons-material";
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
import { locationData } from "../../data";

const data = locationData;

const LocationFilter = () => {
  const {
    propertyState: { location },
    propertyDispatch,
  } = PropertyContextState();

  return (
    <Stack spacing={2.7}>
      <Typography variant="h7">Location</Typography>
      <ListItem disablePadding>
        <ListItemIcon>
          <Place />
        </ListItemIcon>
        <Autocomplete
          value={location}
          blurOnSelect
          onChange={(e, newLocation) => {
            // setLocation(newLocation);
            // setSubmitDisabled(false);
            propertyDispatch({
              type: "ON_LOCATION_CHANGE",
              payload: newLocation,
            });
          }}
          size="small"
          options={data}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} placeholder="Select location" fullWidth />
          )}
        />
      </ListItem>
    </Stack>
  );
};

export default LocationFilter;
