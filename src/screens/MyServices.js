import React, { useCallback } from 'react';
import { View, Text, ScrollView, Modal} from 'react-native';
import { Card, Image, Icon, Input, Button } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import { USER_TOKEN_KEY } from "../providers/AuthProvider";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import Toast from "react-native-root-toast";
import FormModal from '../components/FormModal';
import ComentsModal from '../components/ComentsModal';

const MyServices = () => {

    
  const url = "https://tecnony-v1.herokuapp.com/api/v1/hiring/show";
    
    const [characters, setCharacters] = React.useState([]);
    const [error, setError] = React.useState([]);
    const [search, setSearch] = React.useState(""); //Hooks Busqueda
    const [message, setMessage] = React.useState([]);
    const [token, setToken] = React.useState("");

    //MODAL
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [isModalCOpen, setIsModalCOpen] = React.useState(false);


    const fetchMyServices = (url, config) => {
        try{
            fetch(url,config)
            .then(response => response.json())
            .then(data => setCharacters(data.data.service_requests))
            .catch(error => console.log(error))
        }catch(e){
            setError(e.message);
            
        }
            
    };
/*
    function FormModal({isFormModalOpen, setFormModalOpen}){
        return (
            <>
                <Modal visible={isModalOpen} transparent= {true} animationType={'slide'}>
                <View style = {styles.modalContainerStyle}>
                    <View style = {styles.modalStyle}>
                        <Text>hello</Text>
                        <Text style={styles.button} onPress={() => setIsModalOpen(!setIsModalOpen)}>Close and Save</Text>
                    </View>
                </View>
            </Modal>
            </>
        );
    }
*/
    const fetchCancel = (url,config) =>{
        try{
            fetch(url,config)
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.log(error))
        }catch(e){
            setError(e.message);
        }
    };

    React.useEffect(() => {
        (async () => {
           const _token = await SecureStore.getItemAsync(USER_TOKEN_KEY);
           setToken(_token)
           const config = {
            headers:{
                Authorization: `Bearer ${_token}`
            }
        };
           fetchMyServices(url, config);
        })();
    }, []);

    const Estado = (estado) =>{
        if(estado === 0){
            return <Text style={styles.descripciontext}>Pendiente</Text>
        }
        else if(estado === 1){
            return <Text style={styles.descripciontext}>Rechazado</Text>
        }
        else if(estado === 2){
            return <Text style={styles.descripciontext}>Cancelado</Text>
        }
        else if(estado === 3){
            return <Text style={styles.descripciontext}>En curso</Text>
        }
        else if(estado === 4){
            return <Text style={styles.descripciontext}>Finalizado</Text>
        }
        else {
            return <Text style={styles.descripciontext}>Comentado</Text>
        }
    }

    const Btn = (std, ID) => {

        const urlCancel = `https://tecnony-v1.herokuapp.com/api/v1/hiring/cancel/${ID}`;
        const configBtn = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        if(std === 0){
            return (
                <View style = {{ flexDirection: "row", alignItems: 'center' }}>
                    <Text style={styles.BtnCancel} onPress={() => fetchCancel((urlCancel, configBtn))}
                    >Cancelar</Text>
                    <Text> </Text>
                    <Text style={styles.button} onPress={() => setIsModalOpen(!isModalOpen)}
                    >Editar</Text>
                    <FormModal 
                        isModalOpen={isModalOpen} 
                        setIsModalOpen={setIsModalOpen} 
                        ID={ID}
                    />
                    <Text> </Text>
                    <Text style={styles.button} //onPress={() => verServicios((item.id))}
                    >Ver más</Text>
                    <Text> </Text>
                </View>
            )
        }
        else if(std === 1){

            return (
                <View style = {{ flexDirection: "row", alignItems: 'center' }}>
                    <Text style={styles.BtnCancel}>La solicitud ha sido rechazada</Text>
                </View>
            )
        }
        else if(std === 2){
            return (
                <View style = {{ flexDirection: "row", alignItems: 'center' }}>
                    <Text style={styles.BtnRehabilitar} onPress={() => fetchCancel((urlCancel, configBtn))} //onPress={() => alert("rea")}
                    >Rehabilitar</Text>
                    <Text> </Text>
                    <Text style={styles.button} //onPress={() => verServicios((item.id))}
                    >Ver más</Text>
                </View>
            )
        }
        else if(std === 4){
            return (
                <View style = {{ flexDirection: "row", alignItems: 'center' }}>
                    <Text style={styles.button} onPress={() => setIsModalCOpen(!isModalCOpen)}
                    >Comentar</Text>
                    <ComentsModal 
                        isModalOpen={isModalCOpen} 
                        setIsModalOpen={setIsModalCOpen} 
                        ID={ID}
                    />
                    <Text style={styles.button} //onPress={() => verServicios((item.id))}
                    >Ver más</Text>
                </View>
            )
        }
        else{
            return(
                <View style = {{ alignItems: "center" }}>
                    <Text style={styles.button} //onPress={() => verServicios((item.id))}
                    >Ver más</Text>
                </View>
            )
        }
    }

        
    return(

        
        <View style={styles.container}>
            

            <Text style= {styles.titleX}>Servicios Contratados</Text>
            <Input 
                type = "search"
                value = {search}
                onChangeText={(value) => setSearch(value)}
                style={styles.input}
                placeholder="Ej. Computadora"
                placeholderTextColor="gray"
                leftIcon={
                    <Icon name="search" type='ionicon' size={24} color="black" />
                }
                        
            />
            <ScrollView>
            {
                characters.filter((item) => item.device.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
                    <View key={index} >
                        <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                            <Card.Title style={styles.title}>{item.device}</Card.Title>
                            <Image
                                source = {require("../../assets/device.png")}
                                style={{ width: '100%', height: 170, borderRadius: 15 }}
                            />
                            <Card.Divider />
                            <View style={{ flexDirection: "row"}}>
                                <View style={{ width:'100%'}}>
                                    <Text style ={styles.descripcion}>Estado de la solicitud: </Text>
                                    {Estado((item.state))}
                                    <Text style ={styles.descripcion}>Modelo: </Text>
                                    <Text style={styles.descripciontext}>{item.model}</Text>

                                    <Text style={styles.descripcion}>Problema: </Text>
                                    <Text style={styles.descripciontext}>{item.description_problem}</Text>
                                    
                                    <Text style={styles.descripcion}>Fecha: </Text>
                                    <Text style={styles.descripciontext}>{item.date_issue}</Text>
                                    <Text>{item.id}</Text>
                                    <View style = {{ alignItems: "center" }}>
                                        {Btn(item.state, item.id)} 
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


    BtnCancel: {
        backgroundColor:'#CB4335', 
        padding:'3%', 
        paddingLeft:'7%',
        paddingRight:'7%',
        textAlign: 'center', 
        borderRadius: 15, 
        color:"$white", 
        fontWeight: 'bold'
        
    },
    BtnRehabilitar: {
        backgroundColor:'#27AE60', 
        padding:'3%', 
        paddingLeft:'7%',
        paddingRight:'7%',
        textAlign: 'center', 
        borderRadius: 15, 
        color:"$white", 
        fontWeight: 'bold'
    },

    buttonTitle: {
        fontFamily: '$400Regular',
        color:"$white",
    },
    /*Estilo Modal*/
    modalContainerStyle: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    modalStyle: {
        backgroundColor:'white',
        alignItems:'center',
        margin: 20,
        borderRadius: 16,
        paddingHorizontal: 30,
        paddingVertical: 20,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

});