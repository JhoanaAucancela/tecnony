import React, {useState, useEffect} from "react";
import { View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button, Image, Icon } from "react-native-elements"
import Services from "../screens/Services"

import * as SecureStore from "expo-secure-store";
import { useAuth, USER_KEY } from "../providers/AuthProvider";


const Home = () => {

    const [user, setUser] =useState([]);

    useEffect(() => {
        (async () => {
           const _user = await SecureStore.getItemAsync(USER_KEY);
           setUser(JSON.parse(_user)); 
        })();
    }, []);

    return(
        <View style={styles.container} >

            {user &&
                <View style={{ marginTop:'30%', alignItems:'center'}}>
                    <Text style={styles.titleX}>Menú</Text>
                    <Text style={styles.subtitle}>¡ Hola {user.username} !</Text>
                    <Text>      </Text>
                </View>
            }
            
            
            <View style = {{ flexDirection: "row", height:'80%'}}>
                <View style ={styles.box}>
                    <Text style = {styles.text}>Mi cuenta</Text>
                    <Icon
                        name="person-outline"
                        type="ionicon"
                        size= {30}
                        color= "white"
                        style={{ marginTop: 2, marginRight: 10 }}
                        onPress={() => navigation.navigate("Home")}
                        
                    />

                </View>
                <Text>      </Text>
                <View style ={styles.box}>
                    <Text style = {styles.text}>Servicios</Text>
                    <Icon
                        name="construct"
                        type="ionicon"
                        size= {30}
                        color= "white"
                        style={{ marginTop: 2, marginRight: 10 }}
                        onPress={() => navigation.navigate("Services")}
                    />
                </View>
            </View>

            <View style = {{ flexDirection: "row", height:'80%', marginTop:'-120%'}}>
                <View style ={styles.box}>
                    <Text style = {styles.text}>Mis servicios</Text>
                    <Icon
                        name="basket"
                        type="ionicon"
                        size= {30}
                        color= "white"
                        style={{ marginTop: 2, marginRight: 10 }}
                        onPress={() => navigation.navigate("Home")}
                    />

                </View>
                <Text>      </Text>
                <View style ={styles.box}>
                    <Text style = {styles.text}>Comentarios</Text>
                    <Icon
                        name="chatbubbles"
                        type="ionicon"
                        size= {30}
                        color= "white"
                        style={{ marginTop: 2, marginRight: 10 }}
                        onPress={() => navigation.navigate("Home")}
                    />
                </View>
            </View>
    </View>  
    );
};

export default Home;

const styles =  EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'$authBg',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    title: {
        color: '$primary',
        fontWeight: '$fontWeight600', 
     },

     titleX:{
        fontFamily: '$700Bold',
        fontSize: 24,
        color:'$primary',
    },

    subtitle:{
        fontFamily:'$400Regular',
        fontSize: 18,
        color:'gray'
    },

    text: {
        color: '$white',
        fontWeight: '$fontWeight600', 
     },

    box: { 
        backgroundColor:'#3F88C5', 
        width:'35%', 
        height:'20%', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 15,
    },
});