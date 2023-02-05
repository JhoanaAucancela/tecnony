import React, { useCallback } from 'react';
import { View, Text, ScrollView} from 'react-native';
import { Card, Image, Icon } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import { USER_TOKEN_KEY } from "../providers/AuthProvider";
import * as SecureStore from "expo-secure-store";
import ComentsModal from '../components/ComentsModal';
import ViewComentsModal from '../components/ViewComentsModal';


const Opinions = () => {
    const url = "https://tecnony-v1.herokuapp.com/api/v1/satisfaction-form";
    
    const [characters, setCharacters] = React.useState([])
    const [error, setError] = React.useState([])
    const [isModalCOpen, setIsModalCOpen] = React.useState(false);
    const [isModalVOpen, setIsModalVOpen] = React.useState(false);

    const[numService, setNumService] = React.useState();
    const[numCService, setNumCService] = React.useState();


    const fetchMyServices = (config) => {
        try{
            fetch("https://tecnony-v1.herokuapp.com/api/v1/satisfaction-form",config)
            .then(response => response.json())
            .then(data => setCharacters(data.data.service_requests))
            .catch(error => console.log("Opinions: ",error))
        }catch(e){
            setError(e.message);
            
        }
            
    };

    React.useEffect(() => {
        (async () => {
           const _token = await SecureStore.getItemAsync(USER_TOKEN_KEY);
           const config = {
            headers:{
                Authorization: `Bearer ${_token}`
            }
        };
           fetchMyServices(config);
        })();
    }, []);

    const verServicios = (num) => {
        setNumService(num);
        setIsModalVOpen(!isModalVOpen);
    }

    const ComentServicios = (num) => {
        setNumCService(num);
        setIsModalCOpen(!isModalCOpen);
    }

    if(characters.length===0) {
        return (
            <View style={styles.container}>
            <Text style= {styles.titleX}>No hay servicios por comentar</Text>
            </View>
    )}
    return(
        <View style={styles.container}>
            <Text style= {styles.titleX}>Servicios por Calificar</Text>
           
            <ScrollView>
            {
                characters.map((item, index) => (
                    <View key={index}>
                        <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                            <Card.Title style={styles.title}>{item.device}</Card.Title>
                            <Image
                                source = {require("../../assets/device.png")}
                                style={{ width: '100%', height: 170, borderRadius: 15 }}
                            />
                            <Card.Divider />
                            <View style={{ flexDirection:"row"}}>
                                <View style={{ width:'100%'}}>
                                    <Text style ={styles.descripcion}>Modelo: </Text>
                                    <Text style={styles.descripciontext}>{item.model}</Text>

                                    <Text style={styles.descripcion}>Descripción: </Text>
                                    <Text style={styles.descripciontext}>{item.description_problem}</Text>
                                    
                                    <Text style={styles.descripcion}>Fecha: </Text>
                                    <Text style={styles.descripciontext}>{item.date_issue}</Text>
                                    <Text>   </Text>

                                    <View style = {{ alignItems: "center" }}>
                                        <View style = {{ flexDirection: "row", alignItems: 'center' }}>
                                            <Text style={styles.button} onPress={() => ComentServicios((item.id))}
                                            >Calificar</Text>
                                            <ComentsModal 
                                                isModalOpen={isModalCOpen} 
                                                setIsModalOpen={setIsModalCOpen} 
                                                ID={numCService}
                                            />
                                            <Text> </Text>
                                            <Text style={styles.button} onPress={() => verServicios((item.id))}
                                            >Ver más</Text>
                                            <ViewComentsModal 
                                                isModalOpen={isModalVOpen} 
                                                setIsModalOpen={setIsModalVOpen} 
                                                ID={numService}
                                                estado={isModalVOpen}
                                            />
                                        </View>
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

export default Opinions;


const styles =  EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'$authBg',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        flex: 1,
        backgroundColor:'$authBg',
        alignItems: 'center',
       
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
        textAlign:'center'
    },
    title:{
        fontFamily: '$700Bold',
        fontSize: 16,
        color:'$primary',
    },
    subtitle:{
        fontFamily: '$700Bold',
        fontSize: 14,
        color:'black',
    },
    box: { 
        backgroundColor:'#3F88C5', 
        width:'35%', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 2, 
        borderColor:'$authBg',
    },
});