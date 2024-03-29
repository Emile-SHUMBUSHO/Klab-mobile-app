const initialState = {
  loading: false,
  error: null,
  children: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "REGISTERCHILD SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "FETCHPROGRAM FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "FECTCH CHILD SUCCESSFUL":
      return {
        ...state,
        loading: false,
        error: null,
        child: action.payload,
      };
    case "FETCH CHILD FAILED":
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
