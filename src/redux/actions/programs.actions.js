import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../../config";

export const fetchChildProgram = () => {
  return async (dispatch) => {
    dispatch(actions(FETCHPROGRAM));
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
        console.log(data);
        dispatch(actions(FETCH_PROGRAM_SUCCESS, data));
      });
    } catch (err) {
      console.log(err);
      dispatch(actions(FETCH_PROGRAM_FAILED, err.message));
    }
  };
};
