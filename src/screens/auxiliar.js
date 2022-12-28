import React from "react";
import ViewServices from "./ViewServices";
import { View, Text, Alert} from 'react-native';
import axios from "axios";

const baseURL = "https://tecnony-v1.herokuapp.com/api/v1/view-service";

const Auxialiar = (urlServices) =>{
   const [post, setPost] = React.useState([]);
/*
   React.useEffect(() => {
       axios.get(`${baseURL}/1`).then((response) => {
       setPost(response.data.data.service);
       });
   }, []);
   
     if (!post) return <Text>"No post!"</Text>
 
 */
 return(
  
  alert((urlServices))
  //alert("LLamada de services a Auxiliar")
  
  )

}

export default Auxialiar;
