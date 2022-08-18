import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../../config";
import { useSelector, useDispatch } from "react-redux";
export const fetchChildProgram = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCHPROGRAM" });
    try {
      const token = useSelector((state) => state.Auth.authToken);

      const response = await axios({
        method: "GET",
        url: `${BASE_URL}/futurecoders/programInformation`,
        headers: { Authorization: `bearer${token}` },
      });
      await AsyncStorage.setItem("program", response);
      console.log(response);
      dispatch({
        type: "FETCHPROGRAM SUCCESS",
        payload: response,
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: "FETCHPROGRAM FAILED", payload: err.message });
    }
  };
};
