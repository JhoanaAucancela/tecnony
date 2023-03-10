import React from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { USER_TOKEN_KEY } from "../providers/AuthProvider";

const axiosInstance = axios.create({
    baseURL: "https://tecnony-v1.herokuapp.com/api/v1/",
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
    }
});

axiosInstance.interceptors.request.use(async req => {
    const access_token = await SecureStore.getItemAsync(USER_TOKEN_KEY);
    
    req.headers["Authorization"] = `Bearer ${access_token}`;
   return req;
});
export default axiosInstance