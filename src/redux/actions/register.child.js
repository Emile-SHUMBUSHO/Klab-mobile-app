import axios from "axios";
import jwt_decode from "jwt-decode";
import { BASE_URL } from "../../config";
export const Init = () => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem("token");
  };
};

export const Register = (name, email, role, password) => {
  return async (dispatch) => {
    dispatch({ type: "REGISTER" });
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
