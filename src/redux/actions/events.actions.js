import AsyncStorage from "@react-native-async-storage/async-storage";
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

export const bookEvent = (data) => async (dispatch) => {
  let token = await AsyncStorage.getItem("token");
  axios({
    method: "POST",
    url: `${BASE_URL}/events/event/register`,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `bearer ${token}`,
    },
  })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: "BOOK EVENT SUCCESSFUL", payload: res.data });
    })
    .catch((err) => {
      console.error(err.response);
      dispatch({
        type: "BOOK EVENT FAILED",
        payload: err.response.data.message,
      });
    });
};
