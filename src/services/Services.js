import axios from "../utils/axios";
import errorHandler from "../utils/axiosErrorHandler";


export async function fetchDataServices(ID){
    try {
        let { data } = await axios.get(`view-service/${ID}`);//obtener datos de la BDD
        return data.data.data.service;
    } catch (e){
        throw errorHandler(e);
    }
}