const initialState = {
  loading: false,
  error: null,
  programs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCHPROGRAM":
      return {
        ...state,
        loading: true,
      };

    case "FETCHPROGRAM SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        programs: action.payload,
      };

    case "FETCHPROGRAM FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
