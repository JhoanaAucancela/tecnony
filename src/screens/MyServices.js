import React, { useCallback } from 'react';
import { View, Text, ScrollView} from 'react-native';
import { Card, Image, Icon } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import { useAuth, USER_KEY, USER_TOKEN_KEY } from "../providers/AuthProvider";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

const apiURL = "https://tecnony-v1.herokuapp.com/api/v1/hiring/show";

const MyServices = () => {

    
  const url = "https://tecnony-v1.herokuapp.com/api/v1/hiring/show";
    
    const [characters, setCharacters] = React.useState([])
    const [error, setError] = React.useState([])

    const [token, setToken] = React.useState([]);

    React.useEffect(() => {
        (async () => {
           const _token = await SecureStore.getItemAsync(USER_TOKEN_KEY);
           setToken(_token);
        })();

        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        };

        axios.get(url, config)
        .then(data => setCharacters(data.data.data.service_requests))
        .catch(err => setError(err))
    }, []);

    

    if(!characters) return <Text>{error}</Text>



    return(

        
        <View style={styles.container}>
            <Text style= {styles.titleX}>Servicios Contratados</Text>
           
            <ScrollView>
            {
                characters.map((item, index) => (
                    <View key={index} >
                        <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                            <Card.Title style={styles.title}>{item.device}</Card.Title>
                            <Card.Divider />
                            <View style={{ flexDirection: "row"}}>
                                <View style={{ width:'100%'}}>
                                    <Text style ={styles.descripcion}>Modelo: </Text>
                                    <Text style={styles.descripciontext}>{item.model}</Text>

                                    <Text style={styles.descripcion}>Descripción: </Text>
                                    <Text style={styles.descripciontext}>{item.description_problem}</Text>
                                    
                                    <Text style={styles.descripcion}>Fecha: </Text>
                                    <Text style={styles.descripciontext}>{item.date_issue}</Text>
                                    <Text>   </Text>
                             
                                    <View style = {{ alignItems: "center" }}>
                                        <Text style={styles.button} //onPress={() => verServicios((item.id))}
                                        >Ver más</Text>
                                    </View>
                                </View>
                            </View>  
                        </Card>
                    </View>
                ))
            }
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>

            </ScrollView>
            
        
    </View>  

    );
};

export default MyServices;

const styles =  EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'$authBg',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '$primary',
        fontWeight: '$fontWeight600', 
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
    descripcion:{
        fontFamily:'$700Bold',
    },

    descripciontext:{
        fontFamily:'$400Regular',
        color:'#273469',
    },
    titleX:{
        fontFamily: '$700Bold',
        fontSize: 24,
        color:'$primary',
    },
    title:{
        fontFamily: '$700Bold',
        fontSize: 16,
        color:'$primary',
    },
});