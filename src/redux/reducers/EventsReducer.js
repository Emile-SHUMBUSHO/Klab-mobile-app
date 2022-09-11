const initialState = {
  loading: false,
  error: null,
  events: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH EVENTS":
      return {
        ...state,
        loading: true,
      };
    case "FETCH EVENTS SUCCESSFUL":
      return {
        ...state,
        loading: false,
        error: null,
        events: action.payload,
      };
    case "FETCH EVENTS FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "BOOK EVENT":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    case "BOOK EVENT SUCCESSFUL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "BOOK EVENT FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
