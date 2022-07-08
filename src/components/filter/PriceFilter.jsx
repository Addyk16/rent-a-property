import { CurrencyRupee, KeyboardArrowDown } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Slider } from "@mui/material";
import React, { useState } from "react";
import { PropertyContextState } from "../../context/Context";

const PriceFilter = () => {
  const {
    propertyState: { minPrice, maxPrice, priceList },
    propertyDispatch,
  } = PropertyContextState();
  // console.log(priceList);
  const [sliderOpen, setSliderOpen] = useState(false);
  // console.log(minPrice);

  const valueText = (value) => {
    const newValue = priceList.filter((el) => {
      return el.value === value;
    });
    return newValue[0];
  };

  const handleChange = (e, price) => {
    // console.log(price);
    propertyDispatch({
      type: "MIN_PRICE_CHANGE",
      payload: valueText(price[0]),
    });
    propertyDispatch({
      type: "MAX_PRICE_CHANGE",
      payload: valueText(price[1]),
    });
  };
  return (
    <React.Fragment>
      <ListItem disablePadding>
        <ListItemButton
          alignItems="flex-start"
          onClick={() => setSliderOpen(!sliderOpen)}
          sx={{
            pl: 0,
            py: 1,
            borderRadius: 4,
            "&:hover, &:focus": { "& svg": { opacity: sliderOpen ? 1 : 1 }, bgcolor: "white" },
          }}>
          <ListItemIcon sx={{ mr: -2 }}>
            <CurrencyRupee />
          </ListItemIcon>
          <ListItemText
            primary="Price"
            secondary={
              <span>
                &#8377;{minPrice.label} &nbsp; - &nbsp; &#8377;{maxPrice.label}
              </span>
            }
            primaryTypographyProps={{
              color: "rgb(10,10,10)",
              fontSize: 15,
              fontWeight: 500,
            }}
            secondaryTypographyProps={{
              fontSize: 17,
              color: "rgba(0,0,0,0.8)",
            }}
            sx={{ my: 0 }}
          />
          <KeyboardArrowDown
            sx={{
              mr: -1,
              opacity: 0,
              transform: sliderOpen ? "rotate(-180deg)" : "rotate(0)",
              transition: "0.2s",
            }}
          />
        </ListItemButton>
      </ListItem>
      {sliderOpen && (
        <ListItem>
          <Slider
            size="small"
            value={[minPrice.value, maxPrice.value]}
            onChange={handleChange}
            marks
            step={0.5}
            min={1}
            max={10}
            sx={{ color: "rgb(100,100,100)" }}
          />
        </ListItem>
      )}
    </React.Fragment>
  );
};

export default PriceFilter;
