import axios from "axios";
import { BASE_URL } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const register = (
  fname,
  lname,
  gender,
  age,
  level_of_education,
  school_name,
  email,
  program_id
) => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem("token");
    try {
      const response = await axios({
        method: "POST",
        url: `${BASE_URL}/futureCodersregister`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          fname,
          lname,
          gender,
          age,
          level_of_education,
          school_name,
          email,
          program_id,
        },
      });
      console.log(age);
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

export const fetchChild = () => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem("token");
    try {
      const response = await axios({
        method: "GET",
        url: `${BASE_URL}/futureKoder/childWithProgram`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        const { data } = response;
        dispatch({ type: "FECTCH CHILD SUCCESSFUL", payload: data.data });
      });
    } catch (err) {
      dispatch({ type: "FETCH CHILD FAILED", payload: err.message });
    }
  };
};
