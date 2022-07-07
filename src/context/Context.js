import React, { createContext, useContext, useReducer } from "react";
import { bookmarkReducer, propertyReducer } from "./Reducers";
import { PropertyDateNew } from "../data";

export const PropertyContext = createContext();

const Context = ({ children }) => {
  const propertyList = PropertyDateNew;
  // console.log(propertyList[0].location);

  const priceList = [];
  for (let i = 1.0; i <= 10; i += 0.5) {
    priceList.push({
      value: i,
      label: i < 10 ? Number(i * 10000).toLocaleString() : "1 Lakh",
    });
  }
  const [state, dispatch] = useReducer(bookmarkReducer, {
    propertyList: propertyList,
    bookmark: [],
  });

  const [propertyState, propertyDispatch] = useReducer(propertyReducer, {
    location: null,
    date: null,
    priceList: priceList,
    minPrice: priceList[0],
    maxPrice: priceList[priceList.length - 1],
    propertyType: null,
    searchQuery: "",
  });

  return (
    <PropertyContext.Provider value={{ state, dispatch, propertyState, propertyDispatch }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default Context;

export const PropertyContextState = () => {
  return useContext(PropertyContext);
};
