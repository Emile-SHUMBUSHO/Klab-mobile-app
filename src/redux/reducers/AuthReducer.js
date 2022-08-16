const initialState = {
  loading: false,
  error: null,
  authToken: "",
  userInfo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        loading: true,
      };

    case "REGISTER SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
      };

    case "REGISTER FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "LOGIN":
      return {
        ...state, //copy all previous states
        authToken: action.payload,
      };
    case "USERINFO":
      return {
        ...state, //copy all previous states
        userInfo: action.payload,
      };
    case "LOGOUT":
      return {
        authToken: null,
      };
    default:
      return state;
  }
};
