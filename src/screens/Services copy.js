import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import { Avatar, Icon } from "react-native-elements";
import EStyleSheet from 'react-native-extended-stylesheet';
//import { fetchServices } from '../services/ServicesService';
import { Card, Image, Button} from 'react-native-elements';



import axios from "axios";
const baseURL = "http://192.168.0.105:8000/api/v1/view-service";


const Services = () => {

    const [post, setPost] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
        setPost(response.data.data.service);
        });
    }, []);
    
      if (!post) return <Text>"No post!"</Text>
    
      
    return(
        <View style={styles.container}>
            <Text style={styles.titleX}>Servicios</Text>
            <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                        <Card.Title>{post.name}</Card.Title>
                        <View style={{ flexDirection: "row"}}>
                            <View style={{ width:'40%'}}>
                                <Image
                                    source={{ uri: post.image }}
                                    style={{ width: 100, height: 150 }}
                                />
                            </View>
                            <View style={{ width:'60%'}}>
                                <Text style={styles.descripcion}>Descripción: </Text>
                                <Text style={styles.descripciontext}>{post.description}</Text>
                                
                                <Text style={styles.descripcion}>Precio: </Text>
                                <Text style={styles.descripciontext}>{post.price}</Text>
                                <Text>   </Text>
                                <Text style={styles.button}> 
                                <Icon
                                    name="cart"
                                    color='white'
                                    type = "ionicon" 
                                />
                                </Text>
                            </View>
                        </View>  
                    </Card>
        </View>  
    );
};

export default Services;

const styles =  EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'$white',
        alignItems:'center',

    },
    services:{
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
    descripcion:{
        fontFamily:'$700Bold',
    },

    descripciontext:{
        fontFamily:'$400Regular',
    },
    titleX:{
        fontFamily: '$700Bold',
        fontSize: 24,
        color:'$primary',
    },
    button: {
        backgroundColor:'#3F88C5', 
        padding:'3%', 
        paddingLeft:'7%',
        paddingRight:'7%',
        textAlign: 'center', 
        borderRadius: 15, 
        color:"$white", 
        fontWeight: 'bold'
    },
});