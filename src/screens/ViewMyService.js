import React from 'react';
import { View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import axios from "axios";
import { Card, Image, Icon, Avatar } from 'react-native-elements';


import { ErrorText, ActivityLoader } from "../components/Shared";

const baseURL = "https://tecnony-v1.herokuapp.com/api/v1/hiring/show";


export default function ViewMyService(props) {

    const [post, setPost] = React.useState([]);
    const [tecnico, setTecnico] = React.useState([]);

    
      const fetchCharacters = (url, config) => {
        fetch(url, config)
            .then(response => response.json())
            .then(data => setPost(data.data.service_request))
            .catch(error => console.log(error))
      };


      React.useEffect(() => {
          fetchCharacters(`${baseURL}/41`);
          fetchTecnico(`${baseURL}/41`);
      }, [])

      
  

    return(

        <View style={styles.container}>
           <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                            <Card.Title style={styles.title}>{item.device}</Card.Title>
                            <Image
                                source = {require("../../assets/device.png")}
                                style={{ width: '100%', height: 170, borderRadius: 15 }}
                            />
                            <Card.Divider />
                            <View style={{ flexDirection: "row"}}>
                                <View style={{ width:'100%'}}>
                                    <Text style ={styles.descripcion}>Modelo: </Text>
                                    <Text style={styles.descripciontext}>{post.model}</Text>

                                    <Text style={styles.descripcion}>Descripción: </Text>
                                    <Text style={styles.descripciontext}>{post.description_problem}</Text>
                                    
                                    <Text style={styles.descripcion}>Fecha: </Text>
                                    <Text style={styles.descripciontext}>{post.date_issue}</Text>
                                    <Text>   </Text>
                                    <Text>{item.id}</Text>                             
                                    
                                </View>
                            </View>  
                        </Card>    
        </View>
    
        
    );
};


const styles =  EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'$authBg',
    },
    text: {
        color: '$primary',
        fontWeight: '$fontWeight600', 
        marginLeft: '4%'
     },

     title:{
        fontFamily: '$700Bold',
        fontSize: 16,
        color:'$primary',
    },
    titleX:{
        fontFamily: '$700Bold',
        fontSize: 24,
        color:'$primary',
    },
    descripcion:{
        fontFamily:'$700Bold',
    },

    descripciontext:{
        fontFamily:'$400Regular',
        color:'#273469',
    },
    lineStyle:{ 
        borderWidth: 0.5, 
        borderColor:'#CDCACA', 
        margin:10,
        paddingLeft: "90%"

    },
    button: {
        backgroundColor:'#3F88C5', 
        padding:'3%', 
        paddingLeft:'10%',
        paddingRight:'10%',
        textAlign: 'center', 
        borderRadius: 15, 
        color:"$white", 
        fontWeight: 'bold'
    },

});
