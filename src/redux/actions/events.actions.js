import axios from "axios";
import { BASE_URL } from "../../config";

export const fetchEvents = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH EVENTS" });
    try {
      await axios({
        method: "GET",
        url: `${BASE_URL}/events/UpcomingEvents`,
      }).then((response) => {
        const { data } = response;
        console.log("Events data");
        console.log(data);
        dispatch({
          type: "FETCH EVENTS SUCCESSFUL",
          payload: data.data,
        });
      });
    } catch (err) {
      dispatch({ type: "FETCH EVENTS FAILED", payload: err.message });
    }
  };
};

export const bookEvent = (names, email) => {
  return async (dispatch) => {
    dispatch({ type: "BOOK EVENT" });
    try {
      await axios({
        method: "POST",
        url: `${BASE_URL}/events/UpcomingEvents`,
        data: {
          names,
          email,
        },
      }).then((response) => {
        const { data } = response;
        console.log("booing event data");
        console.log(data);
        dispatch({
          type: "BOOK EVENT SUCCESSFUL",
          payload: data.data,
        });
      });
    } catch (err) {
      dispatch({ type: "BOOK EVENT FAILED", payload: err.message });
    }
  };
};
