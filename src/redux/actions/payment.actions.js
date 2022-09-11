import axios from "axios";
import { BASE_URL } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Payment = (number) => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem("token");
    dispatch({ type: "PANDING PAYMENT" });
    try {
      const response = await axios({
        method: "POST",
        url: `${BASE_URL}/`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          number,
        },
      });
      console(`Payment data ${response}`);
      dispatch({ type: "PAYMENT SUCCESSFUL", payload: response });
    } catch (err) {
      dispatch({
        type: "PAYMENT FAILED",
        payload: err.message,
      });
    }
  };
};
