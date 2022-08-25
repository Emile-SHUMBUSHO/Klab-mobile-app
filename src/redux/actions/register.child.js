import axios from "axios";
import { BASE_URL } from "../../config";

export const Register = (
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
    try {
      const response = await axios({
        method: "POST",
        url: `${BASE_URL}/futureCodersregister`,
        data: {
          firstName,
          lastName,
          gender,
          educationLevel,
          schoolName,
          email,
          id,
        },
      });
      dispatch({
        type: "REGISTERCHILD SUCCESS",
        payload: response,
      });
    } catch (err) {
      dispatch({ type: "REGISTERCHILD FAILED", payload: err.message });
    }
  };
};
