import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Card, Image, Icon, Input } from 'react-native-elements';
import ModalInformativa from '../components/ModalInformativa';
import ModalInformativa2 from '../components/ModalInformativa2';
import ModalInformativa3 from '../components/ModalInformativa3';


export default function ServicesInvitados (props) {
    const baseURL = "https://tecnony-v1.herokuapp.com/api/v1/view-service";

    const [characters, setCharacters] = useState([]); //Hooks servicios
    const [loading, setLoading] = useState(true); // Hooks Activity Loaders
    const [search, setSearch] = useState(""); //Hooks Busqueda

    const [isModalOpen, setIsModalOpen] = useState(true);
    const [isModalOpen2, setIsModalOpen2] = useState(true);
    const [isModalOpen3, setIsModalOpen3] = useState(true);


    const fetchCharacters = (url) => {
        try{
            fetch("https://tecnony-v1.herokuapp.com/api/v1/view-service")
            .then(response => response.json())
            .then(data => setCharacters(data.data.services))
            .catch(error => console.log("Services Invitados: ",error))
        }catch(e){
            setError(e.message);
            
        }finally{
            setLoading(false);
        }
            
        };

    useEffect(() => {
        fetchCharacters(baseURL);
    }, []) 

    const verServicios = () => {
        
    }

    if(characters.length===0) {
        
        return (
            <View style={styles.container}>
            <Text style= {styles.titleX}>Cargando...</Text>
            </View>
    
    )}

    return(
        <View style={styles.container}>

            <ModalInformativa3
                isModalOpen={isModalOpen3} 
                setIsModalOpen={setIsModalOpen3} 
            />
            <ModalInformativa2
                isModalOpen={isModalOpen2} 
                setIsModalOpen={setIsModalOpen2} 
            />
            
            <ModalInformativa
                isModalOpen={isModalOpen} 
                setIsModalOpen={setIsModalOpen} 
            />
            
            <Text style={styles.titleX}>Servicios</Text>
            
            <Input 
                type = "search"
                value = {search}
                onChangeText={(value) => setSearch(value)}
                style={styles.input}
                placeholder="Buscar"
                placeholderTextColor="gray"
                leftIcon={
                    <Icon name="search" type='ionicon' size={24} color="black" />
                }
                        
            />

            
            
            <ScrollView>
            {
                characters.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
                    <View key={index} >
                        <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                            <Card.Title style={styles.title}>{item.name}</Card.Title>
                            <Card.Divider />
                            <View style={{ flexDirection: "row"}}>
                                <View style={{ width:'40%'}}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={{ width: '90%', height: 170 }}
                                    />
                                </View>
                                <View style={{ width:'60%'}}>
                                    <Text style ={styles.descripcion}>Categoria: </Text>
                                    <Text style={styles.descripciontext}>{item.categories}</Text>

                                    <Text style={styles.descripcion}>Descripción: </Text>
                                    <Text style={styles.descripciontext}>{item.description}</Text>
                                    
                                    <Text style={styles.descripcion}>Precio: </Text>
                                    <Text style={styles.descripciontext}>$ {item.price}</Text>
                                    <Text>   </Text>
                             
                                   
                                    <Text style={styles.button} onPress={() => Alert.alert('Tecnony', "Para acceder a este servicio inicia sesión", [
                                                                            {text: 'OK', onPress: () => props.navigation.navigate("LoginServ")},
                                                                            {text: 'Cancelar'}
                                                                        ])}>
                                    <Icon
                                        onPress={() => Alert.alert('Tecnony', "Para acceder a este servicio inicia sesión", [
                                            {text: 'OK', onPress: () => props.navigation.navigate("LoginServ")},
                                            {text: 'Cancelar'}
                                          ]) }
                                        name="cart"
                                        color='white'
                                        type = "ionicon" 
                                    />
                                    </Text>

                                </View>
                            </View>  
                        </Card>
                    </View>
                ))
            }
                <Text> </Text>

            </ScrollView>

            
        </View> 

    );
};



const styles =  EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'$white',
        alignItems:'center',
        justifyContent: 'center',

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
    button: {
        backgroundColor:'#3F88C5', 
        padding:'3%', 
       
        textAlign: 'center', 
        borderRadius: 15, 
        color:"$white", 
        fontWeight: 'bold'
    },
    input: {
        fontFamily: '$400Regular',
        color:'$black',
        fontWeight:'bold,',
        padding: 10,
        width: '100%',
        marginTop: 10,
        borderRadius: 15,
        backgroundColor:'#F5F9FF',
        borderColor: 'transparent',
    },
});