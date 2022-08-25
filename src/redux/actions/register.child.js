import axios from "axios";
import { BASE_URL } from "../../config";

export const Register = (name, email, role, password) => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem("token");
    try {
      const response = await axios({
        method: "POST",
        url: `${BASE_URL}/register`,
        data: {
          name,
          email,
          role,
          password,
        },
      });
      dispatch({
        type: "REGISTER SUCCESS",
        payload: response,
      });
    } catch (err) {
      dispatch({ type: "REGISTER FAILED", payload: err.message });
    }
  };
};
