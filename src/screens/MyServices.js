import React, { useCallback } from 'react';
import { View, Text, ScrollView, Modal, Alert} from 'react-native';
import { Card, Image, Icon, Input, Button } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import { USER_TOKEN_KEY } from "../providers/AuthProvider";
import * as SecureStore from "expo-secure-store";
import Toast from "react-native-root-toast";
import FormModal from '../components/FormModal';
import ComentsModal from '../components/ComentsModal';
import ViewComentsModal from '../components/ViewComentsModal';
import ViewMoreModal from '../components/ViewMoreModal';
import { Picker } from 'react-native-form-component';

const MyServices = () => {

    
    const url = "https://tecnony-v1.herokuapp.com/api/v1/hiring/show";
    
    const [characters, setCharacters] = React.useState([]);
    const [error, setError] = React.useState([]);
    const [search, setSearch] = React.useState(""); //Hooks Busqueda
    const [message, setMessage] = React.useState([]);
    const [token, setToken] = React.useState("");
    const [stateFilter, setStateFilter]= React.useState("");
    const [std, setStd] = React.useState(false);

    //Capturar ID

    const [numServices, setNumServices]= React.useState();//Editar
    const [numCService, setNumCService] = React.useState(); //Calificar
    const [numService, setNumService] = React.useState();//Ver más comentar
    const [numServiceMore, setNumServiceMore] = React.useState(); //Ver más Servicio Completo

    //MODAL
    const [isModalOpen, setIsModalOpen] = React.useState(false);//Editar
    const [isModalCOpen, setIsModalCOpen] = React.useState(false);//Comentar
    const [isModalVOpen, setIsModalVOpen] = React.useState(false);// Ver más comentar
    const [isModalMOpen, setIsModalMOpen] = React.useState(false);//Ver más Servicio Completo



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
    
    React.useEffect(() => {
        (async () => {
            const _token = await SecureStore.getItemAsync(USER_TOKEN_KEY);
            setToken(_token)
           /// console.log(_token)
            const config = {
            headers:{
                Authorization: `Bearer ${_token}`
            }
        }; 
           fetchMyServices(url, config);
           setStd(false);
        })();
        
    }, [std]);



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
            return <Text style={styles.descripciontext}>Por Pagar</Text>
        }
        else if(estado === 5){
            return <Text style={styles.descripciontext}>Por Calificar</Text>
        }
        else {
            return <Text style={styles.descripciontext}>Finalizado</Text>
        }
    }

    const TipoPago = (numPago) =>{
        if(numPago === 1){
            return <Text style={styles.descripciontext}>Efectivo</Text>
        }
        else if(numPago === 2){
            return (
                <View>
                   <Text style={styles.descripciontext}>Depósito</Text>
                </View>
            )
            
        }
        
    }


    const IDServicesCancel = (num) => {
        const urlCancel = `https://tecnony-v1.herokuapp.com/api/v1/hiring/cancel/${num}`;
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        try{
            fetch(urlCancel,config)
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.log(error))
            setStd(true);
            Toast.show( 
                message,{}
            )

        }catch(e){
            setError(e.message);
        }

    }

    const IDServicesEdit = (num) => {
        setIsModalOpen(!isModalOpen);
        setNumServices(num);
        setStd(true);
    }

    const verServiciosC = (num) => {
        setNumService(num);
        setIsModalVOpen(!isModalVOpen);
    }

    const ComentServicios = (num) => {
        setNumCService(num);
        setIsModalCOpen(!isModalCOpen);
        setStd(true);
    }

    const VerMoreService = (num) => {
        setNumServiceMore(num);
        setIsModalMOpen(!isModalMOpen);
    }

    const Btn = (std, ID) => {


        if(std === 0){
            return (
                <View style = {{ flexDirection: "row", alignItems: 'center' }}>
                    <Text style={styles.BtnCancel} onPress={() => IDServicesCancel(ID)}>Cancelar</Text>
                    <Text> </Text>
                    <Text style={styles.BtnEdit} onPress={() => IDServicesEdit((ID))}
                    >Editar</Text>
                    <FormModal 
                        isModalOpen={isModalOpen} 
                        setIsModalOpen={setIsModalOpen} 
                        ID={numServices}
                    />
                </View>
            )
        }
        else if(std === 1){

            return (
                <View style = {{ flexDirection: "row", alignItems: 'center' }}>
                    <Text style={styles.BtnCancel} onPress={() => 
                    Alert.alert('Tecnony', 'Para más información revise su correo electrónico', [
                        {text: 'OK'},
                      ])
                }>La solicitud ha sido rechazada</Text>
                </View>
            )
        }
        else if(std === 2){
            return (
                <View style = {{ flexDirection: "row", alignItems: 'center' }}>
                    <Text style={styles.BtnRehabilitar}  onPress={() => IDServicesCancel(ID)} //onPress={() => alert("rea")}
                    >Rehabilitar</Text>
                </View>
            )
        }
        else if(std === 3){
            return (
                <View style = {{ flexDirection: "row", alignItems: 'center' }}>
                <Text style={styles.BtnRehabilitar} >El técnico está atendiendo su solicitud</Text>
                </View>
            )
        }

        else if(std === 4){
            return (
                <View style = {{ flexDirection: "row", alignItems: 'center' }}>
                    <Text style={styles.button}>Pendiente de pago</Text>
                    <Text style={styles.button} onPress={() => VerMoreService((ID))}>Ver más</Text>
                    <ViewMoreModal 
                        isModalOpen={isModalMOpen} 
                        setIsModalOpen={setIsModalMOpen} 
                        ID={numServiceMore}
                        estado={isModalMOpen}
                    />
                </View>
            )
        }
        else if(std === 5){
            return (
                <View style = {{ flexDirection: "row", alignItems: 'center' }}>
                    <Text style={styles.BtnCalificar} onPress={() => ComentServicios((ID))}>Calificar</Text>
                    <ComentsModal 
                        isModalOpen={isModalCOpen} 
                        setIsModalOpen={setIsModalCOpen} 
                        ID={numCService}
                    
                    />
                    <Text> </Text> 
                    <Text style={styles.button} onPress={() => verServiciosC((ID))}>Ver más</Text>
                    <ViewComentsModal 
                        isModalOpen={isModalVOpen} 
                        setIsModalOpen={setIsModalVOpen} 
                        ID={numService}
                        estado={isModalVOpen}

                    />
                </View>
            )
        }
        else{
            return(
                <View style = {{ alignItems: "center" }}>
                    <Text style={styles.button} onPress={() => VerMoreService((ID))}>Ver más</Text>
                    <ViewMoreModal 
                        isModalOpen={isModalMOpen} 
                        setIsModalOpen={setIsModalMOpen} 
                        ID={numServiceMore}
                        estado={isModalMOpen}
                    />
                </View>
            )
        }
    }

    
    function cargar(){
        if(characters.length===0) return (
            <View style={styles.container}>
            <Text style= {styles.titleX}>Cargando...</Text>
            </View>
        )
    
    }
    return(
        <View style={styles.container}>
            <Text style= {styles.titleX}>Servicios Contratados</Text>

            <Picker
                            items={[
                            { label: 'Todos', value: "" },
                            { label: 'Pendientes  ', value: "0" },
                            { label: 'Rechazados  ', value: "1" },
                            { label: 'Cancelados  ', value: "2" },
                            { label: 'En Curso    ', value: "3" },
                            { label: 'Por Pagar   ', value: "4" },
                            { label: 'Por Calificar', value: "5" },
                            { label: 'Finalizados', value: "6" },
                            ]}
                            label=" "
                            itemLabelStyle={styles.text}
                            type="dropdown"
                            pickerIcon= {<Icon name="caret-down-outline" type="ionicon"size= {20}color= "black"/>}
                            selectedValueStyle={styles.input}
                            selectedValue={search}
                            onSelection={(item) =>  setSearch(item.value)} 
            />
            {cargar()}
            <ScrollView>
            {
                characters.filter((item) => item.state.toString().includes(search.toString())).map((item, index) =>  (
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
                                    <Text style ={styles.descripcion}>Modo de pago: </Text>
                                    {TipoPago((item.payment_method))}

                                    <Text>  </Text>
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

    BtnEdit: {
        backgroundColor:'#273469', 
        padding:'3%', 
        paddingLeft:'7%',
        paddingRight:'7%',
        textAlign: 'center', 
        borderRadius: 15, 
        color:"$white", 
        fontWeight: 'bold'
    },

    BtnCalificar: {
        backgroundColor:'#129989', 
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

    input: {
        fontFamily: '$400Regular',
        color:'$black',
        fontWeight:'bold,',
        padding: 10,
        width: '80%',
        height: 40,
        marginTop: 10,
        borderRadius: 15,
        backgroundColor:'#F5F9FF',
        borderColor: 'transparent',
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