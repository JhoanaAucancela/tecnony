import React, { useEffect } from "react";
import {Text, Modal, View, Button, ScrollView, alert} from 'react-native';
import axios from "axios";

const baseURL = "https://tecnony-v1.herokuapp.com/api/v1/view-service/";

const Auxialiar = (props) =>{
 return(
  <Text>{props.nombre}</Text>
  )

}

export default Auxialiar;
