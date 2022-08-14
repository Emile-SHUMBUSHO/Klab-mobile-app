import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../config";

export const AuthContext = createContext({
  getToken: (token) => {},
  logout: (token) => {},
});

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const register = (fullName, email, password, role) => {
    setIsLoading(true);

    axios({
      method: "POST",
      url: `${BASE_URL}/register`,
      data: { fullName, email, password, role },
    })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`register error ${JSON.stringify(e)}`);
        setIsLoading(false);
      });
  };

  const login = (email, password) => {
    setIsLoading(true);
    axios({
      method: "POST",
      url: `${BASE_URL}/login/LoginInfo`,
      data: { email, password },
    })
      .then((res) => {
        let userInfo = {
          token: res.data.Token.original.access_token,
          ...res.data.data,
        };
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem("token", userInfo.token);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`login error ${JSON.stringify(e)}`);
        setIsLoading(false);
      });
  };

  const getToken = async (token) => {
    const res = await AsyncStorage.getItem(token);
    if (res) return res;
    else null;
  };

  // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8va2xhYmF0dGVuZGVlcy5oZXJva3VhcHAuY29tL2FwaS9sb2dpbi9Mb2dpbkluZm8iLCJpYXQiOjE2NjAwNTA2ODgsImV4cCI6MTY2MDA1NDI4OCwibmJmIjoxNjYwMDUwNjg4LCJqdGkiOiJ3ODltMHhqaW1pSHhlTzRlIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.I-LPkkSQ4b6ip3cdqkuZmaGicM0Ij_q3P2IsRC8QPXw

  const logout = async () => {
    const token = await AsyncStorage.getItem("token");
    setIsLoading(true);
    axios({
      method: "POST",
      url: `${BASE_URL}/logout`,
      headers: { Authorization: `Bearer${token}` },
    })
      .then((res) => {
        console.log(token);
        AsyncStorage.removeItem("userInfo");
        setUserInfo({});
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        login,
        logout,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
