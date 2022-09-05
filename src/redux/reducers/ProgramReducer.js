const initialState = {
  loading: false,
  error: null,
  programs: [],
  allPrograms: [],
  joinInfo: {},
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
    case "FETCHALLPROGRAM SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        programs: action.payload,
      };
    case "FETCHALLPROGRAM FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "SUCCESSFUL JOINED":
      return {
        ...state,
        // loading: true,
        error: null,
        joinInfo: action.payload,
      };

    case "FAILED TO JOIN":
      return {
        ...state,
        // loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
