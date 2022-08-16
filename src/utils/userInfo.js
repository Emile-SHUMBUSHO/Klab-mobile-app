import jwt_decode from "jwt-decode";

export const UserInfo = async (token) => {
  try {
    const userInfo = await jwt_decode(token);

    return userInfo;
  } catch (err) {
    console.log(err);
  }
};
