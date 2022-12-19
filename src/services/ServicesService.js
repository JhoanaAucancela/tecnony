import axios from "../utils/axios";
import errorHandler from "../utils/axiosErrorHandler";

export async function fetchServices(){
    try {
        let { data } = await axios.get("view-service");//obtener datos de la BDD
        return data.data;
    } catch (e){
        throw errorHandler(e);
    }
}