import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { BASE_URL } from "../../config";
export const Init = () => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem("token");
    if (token !== null) {
      console.log("token fetched");
      dispatch({
        type: "LOGIN",
        payload: token,
      });
    }
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
      await AsyncStorage.setItem("name", response);
      console.log(response);
      dispatch({
        type: "REGISTER SUCCESS",
        payload: response,
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: "REGISTER FAILED", payload: err.message });
    }
  };
};

export const Login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${BASE_URL}/login/LoginInfo`,
        data: {
          email,
          password,
        },
      });
      await AsyncStorage.setItem(
        "token",
        response.data.Token.original.access_token
      );
      var decoded = jwt_decode(response.data.Token.original.access_token);
      dispatch({
        type: "LOGIN",
        payload: response.data.Token.original.access_token,
      });
      dispatch({
        type: "USERINFO",
        payload: decoded,
      });
      await AsyncStorage.setItem("user", decoded);
    } catch (err) {
      console.log(err);
    }
  };
};

export const Logout = () => {
  return async (dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: "LOGOUT",
    });
  };
};
