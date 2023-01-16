import React, {useState} from 'react';
import {Text, Modal, View, Button, TouchableOpacity} from 'react-native';
import { Icon, Card, Image, Avatar } from "react-native-elements";
import EStyleSheet from 'react-native-extended-stylesheet';

import { ScrollView } from 'react-native-gesture-handler';
import FormContractModal from '../components/FormContractModal';


const baseURL = "https://tecnony-v1.herokuapp.com/api/v1/view-service";

export default function ViewServiceModal({isModalOpen, setIsModalOpen, ID, estado}){
    
    ///////////
    const [post, setPost] = React.useState([]); // Datos del servicio
    const [tecnico, setTecnico] = React.useState([]); //Datos del tecnico
    const [isModalCOpen, setIsModalCOpen] = React.useState(false);

    const fetchCharacters = (url) => {
        fetch(url)
       
            .then(response => response.json())
            .then(data => setPost(data.data.service))
            .catch(error => console.log(error))
      };

      const fetchTecnico = (url) => {
      fetch(url)
           
            .then(response => response.json())
            .then(data => setTecnico(data.data.created_by))
            .catch(error => console.log(error))
      };




      React.useEffect(() => {
        setPost([]);
        setTecnico([]);
            (async () => {
                setPost([]);
                setTecnico([]);
                fetchCharacters(`${baseURL}/${ID}`)
                fetchTecnico(`${baseURL}/${ID}`)
            })()

          //  console.log(ID)      
    }, [estado]);

    
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
    ///////////

    const Local = () => {
        if(tecnico.local_name != null){
            return(
                <View style = {{ alignItems: 'center' }}>  
                <Card containerStyle={{borderRadius: 15, width:'100%'}}>
                        <Card.Title  style={styles.title}>🏛️ Local</Card.Title>
                        <Card.Divider/> 
                            <Text style ={styles.descripcion}>Local: <Text style ={styles.descripciontext}>{tecnico.local_name}</Text></Text>
                            <Text style ={styles.descripcion}>Dirección: <Text style ={styles.descripciontext}>{tecnico.local_address}</Text></Text>
                            <Text style ={styles.descripcion}>Horario de atención: <Text style ={styles.descripciontext}>{tecnico.attention_schedule}</Text></Text>
                </Card>
            </View>

            )
        }
    };

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

                        <View style={{ alignItems: 'center' }}>
                            <Text style= {styles.titleX}>{post.name}</Text>
                            <View style= {styles.lineStyle}></View>
                        </View>

                        <Card containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                                <Image
                                    source={{ uri: post.image }}
                                    style={{ width: '100%', height: 170, borderRadius: 15 }}
                                />
                        <Card.Divider/>
                            
                                <Text style ={styles.descripcion}>Categoria: <Text style ={styles.descripciontext}>{post.categories}</Text></Text>
                                <Text style ={styles.descripcion}>Descripción: <Text style ={styles.descripciontext}>{post.description}</Text></Text>
                                <Text style ={styles.descripcion}>Precio: <Text style ={styles.descripciontext}>{post.price}</Text></Text>
                        
                        </Card>
                        {Local()}
                        <View style = {{ alignItems: 'center' }}>  
                            <Card containerStyle={{borderRadius: 15, width:'100%'}}>
                                    <Card.Title  style={styles.title}>🙍🏻‍♂️ Técnico</Card.Title>
                                    <Card.Divider/> 
                                        <Text style ={styles.descripcion}>Nombre: <Text style ={styles.descripciontext}>{tecnico.full_name}</Text></Text>
                                        <Text style ={styles.descripcion}>Teléfono: <Text style ={styles.descripciontext}>{tecnico.work_phone}</Text></Text>
                                        <Text style ={styles.descripcion}>Profesión: <Text style ={styles.descripciontext}>{tecnico.profession}</Text></Text>
                                    
                            </Card>
                        </View>
                        

                        <View style = {{ alignItems: 'center' }}>  
                            
                        </View>
                            
                        
                        <View style={{ alignItems: 'center', padding:'5%' }}>
                                                    
                            <Text style={styles.button} onPress={() => setIsModalCOpen(!isModalCOpen)}
                            > Contratar
                            
                            </Text>
                            <FormContractModal 
                                isModalOpen={isModalCOpen} 
                                setIsModalOpen={setIsModalCOpen} 
                                ID={post.id}
                            />
                        </View>


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