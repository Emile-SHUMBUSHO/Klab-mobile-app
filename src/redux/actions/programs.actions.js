import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../../config";

export const fetchChildProgram = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCHPROGRAM" });
    let token = await AsyncStorage.getItem("token");
    try {
      await axios({
        method: "GET",
        url: `${BASE_URL}/futurecoders/programInformation`,
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      }).then((responseData) => {
        const { data } = responseData;
        dispatch({
          type: "FETCHPROGRAM SUCCESS",
          payload: data.data,
        });
      });
    } catch (err) {
      dispatch({ type: "FETCHPROGRAM FAILED", payload: err.message });
    }
  };
};

export const fetchAllProgram = () => {
  return async (dispatch) => {
    try {
      await axios({
        method: "GET",
        url: `${BASE_URL}/programs/programInformation`,
      }).then((responseData) => {
        const { data } = responseData;
        console.log("All programs data");
        console.log(data.data);
        dispatch({
          type: "FETCHALLPROGRAM SUCCESS",
          payload: data.data,
        });
      });
    } catch (err) {
      dispatch({ type: "FETCHALLPROGRAM FAILED", payload: err.message });
    }
  };
};
