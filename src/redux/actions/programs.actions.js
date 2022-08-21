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
        console.log("Program data");
        console.log(data[0]);
        dispatch({
          type: "FETCHPROGRAM SUCCESS",
          payload: data[0],
        });
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: "FETCHPROGRAM FAILED", payload: err.message });
    }
  };
};
