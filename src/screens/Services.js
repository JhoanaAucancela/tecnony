import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


import ServicesCards from '../components/ServicesCards';
import axios from "axios";


const baseURL = "https://tecnony-v1.herokuapp.com/api/v1/view-service";



const Services = () => {

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
      
    return(
        <View style={styles.container}>
            <Text style={styles.titleX}>Servicios</Text>
            <ScrollView>
                <ServicesCards servicios={characters}/>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>

            </ScrollView>
        </View>  
    );
};

export default Services;

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
    },
    titleX:{
        fontFamily: '$700Bold',
        fontSize: 24,
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