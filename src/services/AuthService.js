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

export async function updateProfile (data) {
    try{
        let res = await axios.post("profile",data);
        return res.data.message;
    }catch(e){
        throw errorHandler(e);
    }
}

export async function updateImage (data) {
console.log("***",data)
console.log("60873e5b-0315-4e6b-83e6-ecab15b11968.jpeg")
    try{
   
        let res = await axios.post("profile/avatar",{image:"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540jhoana6413%252FTecnony/ImagePicker/ad8c28fb-2ee9-4f50-ac4d-dc6fe99ea5d1.jpeg"},{
            headers: {
                'Content-Type': 'multipart/form-data',
              } 
          });
        return res.data.message;
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
    }catch(e){
        throw errorHandler(e);
    }
}

export async function forgotPassword (data) {
    try{
        let res = await axios.post("forgot-password",data);
       // await setItemAsync(USER_TOKEN_KEY, res.data.data.token);
       return res.data.message;
       
    }catch (e){
        throw errorHandler(e);
    }
}

export async function contractService (data, id) {
    try{
        let res = await axios.post(`hiring/${id}`,data);
        return res.data.message;
    }catch(e){
        throw errorHandler(e);
    }
}

export async function updateService (data, id) {
    try{
        let res = await axios.post(`hiring/update/${id}`,data);
        return res.data.message;
    }catch(e){
        throw errorHandler(e);
    }
}


export async function comentService (data, id) {
    try{
        let res = await axios.post(`satisfaction-form/create/${id}`,data);
        return res.data.message;
    }catch(e){
        throw errorHandler(e);
    }
}