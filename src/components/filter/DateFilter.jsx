import { ListItem, ListItemIcon, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { CalendarMonth } from "@mui/icons-material";
import { PropertyContextState } from "../../context/Context";

const DateFilter = () => {
  const {
    propertyState: { date },
    propertyDispatch,
  } = PropertyContextState();

  var d1 = new Date();
  d1.setHours(0, 0, 0, 0);

  const handleChange = (newDate) => {
    propertyDispatch({
      type: "ON_DATE_CHANGE",
      payload: newDate,
    });
  };

  return (
    <Stack spacing={2.7}>
      <Typography variant="h7">Move-In Date</Typography>

      <ListItem disablePadding>
        <ListItemIcon>
          <CalendarMonth />
        </ListItemIcon>
        <DatePicker
          size="small"
          disablePast
          renderInput={(params) => <TextField size="small" {...params} fullWidth />}
          value={date}
          closeOnSelect
          onChange={(newDate) => {
            handleChange(newDate);
          }}
        />
      </ListItem>
    </Stack>
  );
};

export default DateFilter;
