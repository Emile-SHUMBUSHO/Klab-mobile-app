const initialState = {
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action) {
    case "PANDING PAYMENT":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "PAYMENT SUCCESSFUL":
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "PAYMENT FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
