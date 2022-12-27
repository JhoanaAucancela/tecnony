import React from "react";
import ViewServices from "./ViewServices";
import { View, Text, Alert} from 'react-native';
import axios from "axios";

const baseURL = "https://tecnony-v1.herokuapp.com/api/v1/view-service";

export default function Auxialiar(props){
  
   const [post, setPost] = React.useState([]);

   const url = `${props.num}`

   React.useEffect(() => {
       axios.get(`${url}`).then((response) => {
       setPost(response.data.data.service);
       });
   }, []);
   
     if (!post) return <Text>"No post!"</Text>
 
   
 return(
  
  alert((post.name))

  
  )
}

