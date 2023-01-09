import React, { useEffect } from "react";
import {Text, Modal, View, Button, ScrollView, alert} from 'react-native';
import axios from "axios";

const baseURL = "https://tecnony-v1.herokuapp.com/api/v1/view-service/";

const Auxialiar = (props) =>{

  const [id, setId] = React.useState("");

  React.useEffect(()=> {
    setId(props.id)
  },[])

 return(
  alert(id)
  )

}

export default Auxialiar;
