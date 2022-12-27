import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Card, Image, Icon } from 'react-native-elements';

import Auxialiar from './auxiliar';
import ViewServices from './ViewServices';

const baseURL = "https://tecnony-v1.herokuapp.com/api/v1/view-service";



export default function Services (props) {

    const [characters, setCharacters] = useState([]);

    const fetchCharacters = (url) => {
        
    fetch(url)
        .then(response => response.json())
        .then(data => setCharacters(data.data.services))
        .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchCharacters(baseURL);
    }, []) 

    const verServicios = (num) => {
        const serviceURL = `${baseURL}/${num}`;
        alert(serviceURL);
        //<Auxialiar num = {serviceURL} />
        
        
    }
      
    return(
        <View style={styles.container}>
            <Text style={styles.titleX}>Servicios</Text>
            <ScrollView>
            {
                characters.map((item, index) => (
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
        paddingLeft:'7%',
        paddingRight:'7%',
        textAlign: 'center', 
        borderRadius: 15, 
        color:"$white", 
        fontWeight: 'bold'
    },
});