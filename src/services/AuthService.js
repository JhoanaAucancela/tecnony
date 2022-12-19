import axios from "../utils/axios";
import { Platform } from "react-native";
import { setItemAsync, deleteItemAsync } from "expo-secure-store";
import * as SecureStore from "expo-secure-store";
import { USER_TOKEN_KEY, USER_KEY } from "../providers/AuthProvider";
import errorHandler from "../utils/axiosErrorHandler";


export async function login (data) {
    try{
    let res = await axios.post("loginCli",data);
       await setItemAsync(USER_TOKEN_KEY, res.data.data.access_token);
       await setItemAsync(USER_KEY, JSON.stringify(res.data.data.user));
 
       return res.data;
       //return "login exitoso";
    }catch (e){
        throw errorHandler(e);
    }
}

export async function signup (data) {
    try{
        let res = await axios.post("register-cliente",data);
        return res.data.message;
        //return "registro exitoso";
    }catch(e){
        throw errorHandler(e);
    }
}

export async function logout () {
    try{
        let res = await axios.post("logout");
        await deleteItemAsync(USER_TOKEN_KEY);
        await deleteItemAsync(USER_KEY);
        return res.data;
       //return "Salida exitosa";
    }catch(e){
        throw errorHandler(e);
    }
}