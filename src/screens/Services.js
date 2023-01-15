import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Card, Image, Icon, Input } from 'react-native-elements';


import { ErrorText, ActivityLoader } from "../components/Shared";
import Auxialiar from './auxiliar';

import ViewServiceModal from '../components/ViewServiceModal';


const baseURL = "https://tecnony-v1.herokuapp.com/api/v1/view-service";



export default function Services (props) {

    const [characters, setCharacters] = useState([]); //Hooks servicios
    const [loading, setLoading] = useState(false); // Hooks Activity Loaders
    const [search, setSearch] = useState(""); //Hooks Busqueda

    const [isModalVSOpen, setIsModalVSOpen] = React.useState(false);
    const[numService, setNumService] = useState()

    const fetchCharacters = (url) => {
        try{
            fetch(url)
            .then(response => response.json())
            .then(data => setCharacters(data.data.services))
            .catch(error => console.log(error))
        }catch(e){
            setError(e.message);
            
        }finally{
            setLoading(false);
        }
            
        };

    useEffect(() => {
        setLoading(true);
        fetchCharacters(baseURL);
    }, []) 

    const verServicios = (num) => {
        setNumService(num);
        setIsModalVSOpen(!isModalVSOpen);
    }

    function ver (num){
    
            return(
                <>
                    
                </>
         )
    }


    if(characters.length===0) {
        return (
            <View style={styles.container}>
            <Text style= {styles.titleX}>Cargando...</Text>
            </View>
    
    )}
    
    return(
        <View style={styles.container}>
            {loading == true ? <ActivityLoader /> : null}
            <Text style={styles.titleX}>Servicios</Text>
            
            <Input 
                type = "search"
                value = {search}
                onChangeText={(value) => setSearch(value)}
                //onChangeText = {(e) => setSearch(e.target.value)}
                style={styles.input}
                placeholder="Ej. Reparaciones"
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
                                    <Text style={styles.descripciontext}>{item.price}</Text>
                                    <Text>   </Text>
                             
                                    <Text style={styles.button} onPress={() => verServicios((item.id))}>
                                    <Icon
                                        onPress={() => verServicios((item.id)) }
                                        name="cart"
                                        color='white'
                                        type = "ionicon" 
                                    />
                                    </Text>
                                    
                                    <ViewServiceModal
                                        isModalOpen={isModalVSOpen} 
                                        setIsModalOpen={setIsModalVSOpen} 
                                        ID={numService}
                                        //estado={true}
                                    /> 
                                   
        
        
                                </View>
                            </View>  
                        </Card>
                    </View>
                ))
            }
                <Text> </Text>
                <Text> </Text>
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