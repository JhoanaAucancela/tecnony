import React from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
//import { getItemAsync} from "expo-secure-store";
import { USER_TOKEN_KEY } from "../providers/AuthProvider";

const axiosInstance = axios.create({
    baseURL: "http://192.168.0.105:8000/api/v1/",
    //baseURL: "http://192.168.3.113:8000/api/",
    //baseURL: Application.extra.api_url + "/",
    //baseURL: Constants.expoConfig.extra.api_url
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
    }
});

axiosInstance.interceptors.request.use(async req => {
    const access_token = await SecureStore.getItemAsync(USER_TOKEN_KEY);
    
    req.headers["Authorization"] = `Bearer ${access_token}`;
    //req.headers.authorization = `Bearer ${access_token}`; 
   return req;
});
export default axiosInstance