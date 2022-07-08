import React, { createContext, useContext, useReducer } from "react";
import { bookmarkReducer, propertyReducer } from "./Reducers";
import { priceListData, PropertyDateNew } from "../data";

export const PropertyContext = createContext();

const Context = ({ children }) => {
  const propertyList = PropertyDateNew;
  // console.log(propertyList[0].location);

  const priceList = priceListData;
  // const priceList = [...Array(19)].map((_, i) => ({
  //   value: i / 2 + 1,
  //   label: i / 2 + 1 < 10 ? ((i / 2 + 1) * 10000).toLocaleString() : "1 Lakh",
  // }));

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
