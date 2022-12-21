import axios from "../utils/axios";
import errorHandler from "../utils/axiosErrorHandler";

export async function fetchServices(){
    try {
        let { data } = await axios.get("view-service/1");//obtener datos de la BDD
        return data.data.service;
    } catch (e){
        throw errorHandler(e);
    }
}