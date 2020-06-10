const filters = (state = "ALL", action) => {
  const { type, filter } = action;
  switch (type) {
    default:
      return state;
    case "SET_FILTER": // only action is what filter is set to -- All by default
      return filter;
  }
};

export default filters;
