export const bookmarkReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BOOKMARK":
      return { ...state, bookmark: [...state.bookmark, { ...action.payload }] };
    case "REMOVE_FROM_BOOKMARK":
      return {
        ...state,
        bookmark: state.bookmark.filter((b) => b.key !== action.payload.key),
      };

    default:
      return state;
  }
};

export const propertyReducer = (state, action) => {
  switch (action.type) {
    case "ON_LOCATION_CHANGE":
      return { ...state, location: action.payload };
    case "ON_DATE_CHANGE":
      return { ...state, date: action.payload };
    case "MIN_PRICE_CHANGE":
      return { ...state, minPrice: action.payload };
    case "MAX_PRICE_CHANGE":
      return { ...state, maxPrice: action.payload };
    case "PROPERTY_TYPE_CHANGE":
      return { ...state, propertyType: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return {
        ...state,
        location: null,
        date: null,
        minPrice: { value: 1, label: "10,000" },
        maxPrice: { value: 10, label: "1 Lakh" },
        propertyType: null,
      };
    default:
      return state;
  }
};
