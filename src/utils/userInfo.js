import jwt_decode from "jwt-decode";

export const UserInfo = async (token) => {
  try {
    const userInfo = await jwt_decode(token);
    if (userInfo) return userInfo;
    else console.log(userInfo);
  } catch (err) {
    console.log(err);
  }
};
