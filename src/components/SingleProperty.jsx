import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import { Box, Checkbox, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { PropertyContextState } from "../context/Context";
import { propertyFilterData } from "../data";

const filterList = propertyFilterData;
const SingleProperty = ({ property }) => {
  const {
    state: { bookmark },
    dispatch,
  } = PropertyContextState();

  return (
    <Stack
      sx={{
        my: 2,
        mx: 1,
        p: 1,
        boxShadow: 1,
        transition: "0.2s",
        border: 2,
        borderColor: "rgba(100,100,100,0.1)",
        maxWidth: { sm: "80%", md: "60%", lg: "40%" },
        minWidth: { xs: "90%", md: "450px", lg: "450px" },
        // flexWrap: "wrap",
        "&:hover": {
          boxShadow: 6,
          cursor: "pointer",
        },
      }}
      spacing={2}
      justifyContent="space-between"
      borderRadius={3}>
      <Box
        component="img"
        src={property.image}
        alt="property1"
        sx={{
          borderRadius: 2,
          width: "100%",
          height: { xs: "52%", md: "60%" },
          // display: { xs: "none", sm: "block" },
        }}
      />
      <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="space-between" px={1}>
        <Box alignSelf="center">
          <Typography
            variant="h6"
            color="#00adb5"
            component="span"
            noWrap
            fontWeight={500}
            mr={2}>
            {property.title}
          </Typography>
          <Typography variant="body2" noWrap fontWeight={200}>
            {property.desc}
          </Typography>
        </Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          onClick={(e) => {
            bookmark.some((p) => p.key === property.key)
              ? dispatch({
                  type: "REMOVE_FROM_BOOKMARK",
                  payload: property,
                })
              : dispatch({
                  type: "ADD_TO_BOOKMARK",
                  payload: property,
                });
          }}
        />
      </Stack>
      <Stack
        p={2}
        bgcolor="rgb(240,240,240)"
        borderRadius={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        maxWidth="100%">
        {filterList.map((el) => {
          return (
            <React.Fragment key={el.key}>
              <el.icon sx={{ display: { xs: "none", sm: "inline" } }} />
              <Box>
                <Typography noWrap fontSize={{ xs: 10, sm: 12 }} color="rgba(10,10,10,0.7)">
                  {el.label}
                </Typography>
                <Typography noWrap fontSize={{ xs: 10, sm: 12 }}>
                  {el.label === "PROPERTY"
                    ? property.propertyType
                    : el.label === "LOCATION"
                    ? property.location
                    : el.label === "AVAILABLE"
                    ? property.available.toLocaleDateString()
                    : property.rent}
                </Typography>
              </Box>
              {el.label !== "RENT" && <Divider orientation="vertical" flexItem />}
            </React.Fragment>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default SingleProperty;
