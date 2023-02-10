import React from 'react';
import {Text, Modal, View,ScrollView} from 'react-native';
import { Icon, Card, Image, Avatar } from "react-native-elements";
import EStyleSheet from 'react-native-extended-stylesheet';
import { USER_TOKEN_KEY } from "../providers/AuthProvider";
import * as SecureStore from "expo-secure-store";
import ModalUpdateComprobante from './ModalUpdateComprobante';

export default function ViewMoreModal({isModalOpen, setIsModalOpen, ID, estado}){
    
    const [post, setPost] = React.useState([]); // Datos del contrato
    const [attention, setAttention] = React.useState([]); // Datos del diagnostico
    const [tecnico, setTecnico] = React.useState([]); //Datos del tecnico
    const [servicio, setServicio] = React.useState([]); //Datos del servicio
    const [datatecnico, setDatatecnico] = React.useState([]); //Datos del servicio

    const [isModalCOpen, setIsModalCOpen] = React.useState(false);


    const fetchData =  (config) => {
        setPost([]);
        fetch(`https://tecnony-v1.herokuapp.com/api/v1/hiring/show/${ID}`, config)
            .then(response => response.json())
            .then(data => setPost(data.data.service_request))
            .catch(error => console.log("ViewMoreModal post: ",error))
        
        setAttention([]);
        fetch(`https://tecnony-v1.herokuapp.com/api/v1/hiring/show/${ID}`, config)
            .then(response => response.json())
            .then(data => setAttention(data.data.attention))
            .catch(error => console.log("ViewMoreModal attention: ",error))
        
        setTecnico([]);
        fetch(`https://tecnony-v1.herokuapp.com/api/v1/hiring/show/${ID}`, config)
            .then(response => response.json())
            .then(data => setTecnico(data.data.created_by))
            .catch(error => console.log("ViewMoreModal tecnico: ",error))
        
        setServicio([]);
        fetch(`https://tecnony-v1.herokuapp.com/api/v1/hiring/show/${ID}`, config)
            .then(response => response.json())
            .then(data => setServicio(data.data.of_service))
            .catch(error => console.log("ViewMoreModal Servicio: ",error))

            
        setDatatecnico([]);
        fetch(`https://tecnony-v1.herokuapp.com/api/v1/hiring/show/${ID}`, config)
              .then(response => response.json())
              .then(data => setDatatecnico(data.data.datos_tecnico))
              .catch(error => console.log("ViewMoreModal datos_tecnico: ",error))
    }


      

      React.useEffect(() => {
        if(isModalOpen){
            (async () => {
                const _token = await SecureStore.getItemAsync(USER_TOKEN_KEY);
                const config = {
                 headers:{
                     Authorization: `Bearer ${_token}`
                 }
             };
             fetchData(config)
           
             })();
        }
        
    }, [isModalOpen]);
    ///////////

    function cargar(){
        if(post.length === 0){
            return(
                <View style={{ height: '100%', justifyContent: 'center', alignItems:'center' }}>
                    <Text style= {styles.titleX}>Cargando...</Text>
                </View>       
            )
        }

        else{
            return(
                <View>
                        <View style={{ alignItems:'center', textAlign:'center' }}>
                            <Text style= {styles.titleX}>{servicio.name}</Text>
                        </View>
                        
                        
                        <View>
                            <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                                
                                <Card.Title style={styles.title}>Datos del Servicio Contratado</Card.Title>
                                
                                <Card.Divider />
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
                                                                            
                                        <Text style={styles.descripcion}>Precio: <Text style={styles.descripciontext}>$ {servicio.price}</Text></Text>
                                    </View>
                                </View>  
                            </Card>
                        </View>
                        <ScrollView horizontal={true}>
                        <View style={{width: 300 }}>
                            <Card  containerStyle={{borderRadius: 15 , width: '98%' }}>
                                <Card.Title style={styles.title}>Datos del Dispositivo</Card.Title>
                                <Card.Divider />
                                <Image
                                    source = {require("../../assets/device.png")}
                                    style={{ width: '100%', height: 80, borderRadius: 15 }}
                                />
                                <Card.Divider />
                                <View>
                                    <View style={{ width:'100%'}}>
                                        <Text style ={styles.descripcion}>Dispositivo: <Text style={styles.descripciontext}>{post.device}</Text></Text>
                                        <Text style ={styles.descripcion}>Modelo: <Text style={styles.descripciontext}>{post.model}</Text></Text>
                                        <Text style={styles.descripcion}>Marca: <Text style={styles.descripciontext}>{post.brand}</Text></Text>
                                        {post.serie && <Text style={styles.descripcion}>Serie: <Text style={styles.descripciontext}>{post.serie}</Text></Text>}
                                        <Text style={styles.descripcion}>Descripción: <Text style={styles.descripciontext}>{post.description_problem}</Text></Text>
                                        {metodoPago(post.payment_method)}
                                        <Text style={styles.descripcion}>Fecha: <Text style={styles.descripciontext}>{post.date_issue}</Text></Text>
                                    </View>
                                </View>  
                            </Card>
                        </View>

                        <View style={{width: 300 }}>
                            <Card  containerStyle={{borderRadius: 15, width: '98%'}}>
                                <Card.Title style={styles.title}>Diagnostico del técnico</Card.Title>     
                                <Card.Divider />
                                <View style={{ flexDirection: "row"}}>
                                    <View style={{ width:'100%'}}>
                                        <Text style ={styles.descripcion}>Diagnostico: <Text style={styles.descripciontext}>{attention.diagnosis}</Text></Text>
                                        
                                        <Text style ={styles.descripcion}>Resolución: <Text style={styles.descripciontext}>{attention.incident_resolution}</Text></Text>
                                        
                                        {attention.spare_parts && <Text style ={styles.descripcion}>Repuestos: <Text style={styles.descripciontext}>{attention.spare_parts}</Text></Text>}

                                        {attention.warranty && <Text style ={styles.descripcion}>Garantia: <Text style={styles.descripciontext}>{attention.warranty}</Text></Text>}

                                        {attention.price_spare_parts && <Text style ={styles.descripcion}>Precio Repuesto: <Text style={styles.descripciontext}>$ {attention.price_spare_parts}</Text></Text>}
                                        
                                        <Text style={styles.descripcion}>Precio Final: <Text style={styles.descripciontext}>$ {attention.final_price}</Text></Text>
                                                                            
                                        <Text style={styles.descripcion}>Fecha: <Text style={styles.descripciontext}>{attention.end_date}</Text></Text>
                                    </View>
                                </View>  
                            </Card>
                        </View>
                        
                        <View style={{width: 300 }}>
                            <Card  containerStyle={{borderRadius: 15, width: '95%'}}>
                                <Card.Title style={styles.title}>Datos del tecnico</Card.Title>
                                <Card.Divider />
                                    <View style = {{ alignItems: 'center' }}>
                                            <Avatar
                                                rounded
                                                size="medium"
                                                source={{ uri: datatecnico.avatar }}
                                            />
                                        </View>
                                <Text style ={styles.descripcion}>Nombre: <Text style ={styles.descripciontext}>{tecnico.full_name}</Text></Text>
                                <Text style ={styles.descripcion}>Teléfono: <Text style ={styles.descripciontext}>{tecnico.work_phone}</Text></Text>
                                <Text style ={styles.descripcion}>E-mail: <Text style ={styles.descripciontext}>{datatecnico.correo}</Text></Text>

                            </Card>
                        </View>

                        
                        </ScrollView>
                </View>
            )
        }
    }

    function metodoPago(metodoPago){
        if (metodoPago === 1){
            return <Text style={styles.descripcion}>Tipo de pago: <Text style={styles.descripciontext}>Efectivo</Text></Text>
        }
        else{
            return <Text style={styles.descripcion}>Tipo de pago: <Text style={styles.descripciontext}>Depósito o Transferencia</Text></Text>
        }
    }

    function Pagar(metodoPago, std){

        if (std === 4){
            if (metodoPago === 2){
                return(
                    <View>
                        <Card  containerStyle={{borderRadius: 15}}>
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
                        {Pagar(post.payment_method, post.state)}
                        
                        
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