import React from 'react';
import {Text, Modal, View,ScrollView} from 'react-native';
import { Icon, Card, Image } from "react-native-elements";
import EStyleSheet from 'react-native-extended-stylesheet';
import { USER_TOKEN_KEY } from "../providers/AuthProvider";
import * as SecureStore from "expo-secure-store";
import ModalUpdateComprobante from './ModalUpdateComprobante';

export default function ViewMoreModal({isModalOpen, setIsModalOpen, ID, estado}){
    
    const baseURL = "https://tecnony-v1.herokuapp.com/api/v1/hiring/show";
    const [post, setPost] = React.useState([]); // Datos del contrato
    const [attention, setAttention] = React.useState([]); // Datos del diagnostico
    const [tecnico, setTecnico] = React.useState([]); //Datos del tecnico
    const [servicio, setServicio] = React.useState([]); //Datos del servicio
    const [isModalCOpen, setIsModalCOpen] = React.useState(false);


    const fetchCharacters = (url, config) => {// Datos del contrato
        setPost([]);
        fetch(`https://tecnony-v1.herokuapp.com/api/v1/hiring/show/${ID}`, config)
            .then(response => response.json())
            .then(data => setPost(data.data.service_request))
            .catch(error => console.log("ViewMoreModal post: ",error))
      };

      const fetchAttention = (url, config) => {// Datos del diagnostico
        setAttention([]);
        fetch(`https://tecnony-v1.herokuapp.com/api/v1/hiring/show/${ID}`, config)
            .then(response => response.json())
            .then(data => setAttention(data.data.attention))
            .catch(error => console.log("ViewMoreModal attention: ",error))
      };

      const fetchTecnico = (url, config) => {//Datos del tecnico
        setTecnico([]);
        fetch(`https://tecnony-v1.herokuapp.com/api/v1/hiring/show/${ID}`, config)
            .then(response => response.json())
            .then(data => setTecnico(data.data.created_by))
            .catch(error => console.log("ViewMoreModal tecnico: ",error))
      };


      const fetchService = (url, config) => { //Datos del servicio
        setServicio([]);
        fetch(`https://tecnony-v1.herokuapp.com/api/v1/hiring/show/${ID}`, config)
            .then(response => response.json())
            .then(data => setServicio(data.data.of_service))
            .catch(error => console.log("ViewMoreModal Servicio: ",error))
      };

      

      React.useEffect(() => {
        if(isModalOpen){
            (async () => {
                const _token = await SecureStore.getItemAsync(USER_TOKEN_KEY);
                const config = {
                 headers:{
                     Authorization: `Bearer ${_token}`
                 }
             };
             fetchCharacters(`https://tecnony-v1.herokuapp.com/api/v1/hiring/show/${ID}`,config)
             fetchAttention(`https://tecnony-v1.herokuapp.com/api/v1/hiring/show/${ID}`,config)
             fetchTecnico(`https://tecnony-v1.herokuapp.com/api/v1/hiring/show/${ID}`,config)
             fetchService(`https://tecnony-v1.herokuapp.com/api/v1/hiring/show/${ID}`,config)
             })();
        }
        
    }, [isModalOpen]);
    ///////////

    function cargar(){
        if(post.length === 0){
            return(
                <View style = {modalStyle}>
                    <Text style= {styles.titleX}>Cargando...</Text>
                </View>       
            )
        }
    }

    function Pagar(metodoPago, std){

        if (std === 4){
            if (metodoPago === 2){
                return(
                    <View>
                        <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                            <Card.Title style={styles.title}>Pagar Servicio</Card.Title>
                            <Card.Divider />
                            <Text style ={styles.descripcion}>Banco: <Text style ={styles.descripciontext}>{tecnico.banking_entity}</Text></Text>
                            <Text style ={styles.descripcion}>Tipo de cuenta: <Text style ={styles.descripciontext}>{tecnico.account_type}</Text></Text>
                            <Text style ={styles.descripcion}>N° de cuenta: <Text style ={styles.descripciontext}>{tecnico.account_number}</Text></Text>
                            <Text>  </Text>
                            <Text style={styles.button} onPress={() => setIsModalCOpen(!isModalCOpen)}
                            >Subir Comprobante</Text>

                            <ModalUpdateComprobante
                                isModalOpen={isModalCOpen} 
                                setIsModalOpen={setIsModalCOpen} 
                                ID={ID}
                            />
                        </Card>
                    </View>
                )
            }
        }

        else if (std === 6){
            if (metodoPago === 2){
                return(
                    <View>
                        <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                            <Text>Comprobante</Text>
                        </Card>
                    </View>
                )
            }
        }
        
    }

    const modalContainerStyle ={
        flex: 1,
        justifyContent: 'flex-end',
    }
    const modalStyle = {
        backgroundColor:'white',
        //alignItems:'center',
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
    }
    
    return (
        <>
            <Modal visible={isModalOpen} transparent= {true} animationType={'slide'}>
                <View style = {modalContainerStyle}>
                    
                    <ScrollView style = {modalStyle}>
                    <Icon
                        name="close"
                        type="ionicon"
                        size= {30}
                        color= "black"
                        style={{ marginTop: 2, marginRight: 100 }}
                        onPress={() => setIsModalOpen(!setIsModalOpen)}
                    />
                        
                        {cargar()}
                        <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                            <Card.Title style={styles.title}>Datos del Dispositivo</Card.Title>
                            <Image
                                source = {require("../../assets/device.png")}
                                style={{ width: '100%', height: 80, borderRadius: 15 }}
                            />
                            <Card.Divider />
                            <View style={{ flexDirection: "row"}}>
                                <View style={{ width:'100%'}}>
                                    <Text style ={styles.descripcion}>Modelo: <Text style={styles.descripciontext}>{post.model}</Text></Text>
                                    
                                    <Text style ={styles.descripcion}>Dispositivo: <Text style={styles.descripciontext}>{post.device}</Text></Text>
                                    
                                    <Text style={styles.descripcion}>Descripción: <Text style={styles.descripciontext}>{post.description_problem}</Text></Text>
                                                                        
                                    <Text style={styles.descripcion}>Fecha: <Text style={styles.descripciontext}>{post.date_issue}</Text></Text>
                                </View>
                            </View>  
                        </Card>

                        <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                            <Card.Title style={styles.title}>Datos del Servicio Contratado</Card.Title>
                            <Image
                                source = { { uri: servicio.image } }
                                style={{ width: '100%', height: 80, borderRadius: 15 }}
                            />
                            <Card.Divider />
                            <View style={{ flexDirection: "row"}}>
                                <View style={{ width:'100%'}}>
                                    <Text style ={styles.descripcion}>Nombre: <Text style={styles.descripciontext}>{servicio.name}</Text></Text>
                                    
                                    <Text style ={styles.descripcion}>Categoria: <Text style={styles.descripciontext}>{servicio.categories}</Text></Text>
                                    
                                    <Text style={styles.descripcion}>Descripción: <Text style={styles.descripciontext}>{servicio.description}</Text></Text>
                                                                        
                                    <Text style={styles.descripcion}>Precio: <Text style={styles.descripciontext}>{servicio.price}</Text></Text>
                                </View>
                            </View>  
                        </Card>


                        <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                            <Card.Title style={styles.title}>Diagnostico del técnico</Card.Title>     
                            <Card.Divider />
                            <View style={{ flexDirection: "row"}}>
                                <View style={{ width:'100%'}}>
                                    <Text style ={styles.descripcion}>Diagnostico: <Text style={styles.descripciontext}>{attention.diagnosis}</Text></Text>
                                    
                                    <Text style ={styles.descripcion}>Resolución: <Text style={styles.descripciontext}>{attention.incident_resolution}</Text></Text>
                                    
                                    <Text style ={styles.descripcion}>Repuestos: <Text style={styles.descripciontext}>{attention.spare_parts}</Text></Text>

                                    <Text style ={styles.descripcion}>Garantia: <Text style={styles.descripciontext}>{attention.warranty}</Text></Text>

                                    <Text style ={styles.descripcion}>Precio Repuesto: <Text style={styles.descripciontext}>{attention.price_spare_parts}</Text></Text>
                                    
                                    <Text style={styles.descripcion}>Precio Final: <Text style={styles.descripciontext}>{attention.final_price}</Text></Text>
                                                                        
                                    <Text style={styles.descripcion}>Fecha: <Text style={styles.descripciontext}>{attention.end_date}</Text></Text>
                                </View>
                            </View>  
                        </Card>
                        
                        <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                            <Card.Title style={styles.title}>Datos del tecnico</Card.Title>
                            <Card.Divider />
                                    <Text style ={styles.descripcion}>Nombre: <Text style ={styles.descripciontext}>{tecnico.full_name}</Text></Text>
                                    <Text style ={styles.descripcion}>Teléfono: <Text style ={styles.descripciontext}>{tecnico.work_phone}</Text></Text>
                        </Card>
                        {Pagar(post.payment_method, post.state)}
                        <Text> </Text>
                        <Text> </Text>
                        <Text> </Text>

                        
                    </ScrollView>
                </View>
            </Modal>
        </>
    );
}

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