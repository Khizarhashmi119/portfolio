const initState = [];

const alertsReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ALERT":
      return [...state, payload];
    case "DELETE_ALERT":
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};

export default alertsReducer;
