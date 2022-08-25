import axios from "axios";
import { BASE_URL } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const register = (
  firstName,
  lastName,
  gender,
  age,
  educationLevel,
  schoolName,
  email,
  id
) => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem("token");
    console.log("token to be authorized");
    console.log(token);
    try {
      const response = await axios({
        method: "POST",
        url: `${BASE_URL}/futureCodersregister`,
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
        data: {
          firstName,
          lastName,
          gender,
          age,
          educationLevel,
          schoolName,
          email,
          id,
        },
      });
      console.log("child data");
      console.log(response);
      dispatch({
        type: "REGISTERCHILD SUCCESS",
        payload: response,
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: "REGISTERCHILD FAILED", payload: err.message });
    }
  };
};
