import React, {useState, useEffect} from "react";
import { View, Text, ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button, Image, Icon } from "react-native-elements"

import * as SecureStore from "expo-secure-store";
import { USER_KEY } from "../providers/AuthProvider";



export default function Home(props) {

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
                <View style={{ alignItems:'center'}}>
                    <Text style={styles.titleX}>Menú</Text>
                    <Text style={styles.subtitle}>¡ Hola {user.username} !</Text>
                    <Text> </Text>
                </View>
            }

           <View style={{ flexDirection:'row'}}>
                <View >
                    <View style ={styles.box}>
                        <Text style = {styles.text} onPress={() => props.navigation.navigate("Profile")}>Mi cuenta</Text>
                        <Icon
                            name="person-outline"
                            type="ionicon"
                            size= {30}
                            color= "white"
                            style={{ marginTop: 2, marginRight: 10 }}
                            onPress={() => props.navigation.navigate("Profile")}
                        />
                    </View>
                    <Text>  </Text>
                    <View style ={styles.box}>
                        <Text style = {styles.text} onPress={() => props.navigation.navigate("Services")}>Servicios</Text>
                        <Icon
                            name="construct"
                            type="ionicon"
                            size= {30}
                            color= "white"
                            style={{ marginTop: 2, marginRight: 10 }}
                            onPress={() => props.navigation.navigate("Services")}
                        />
                    </View>
                </View>
                <Text>  </Text>
                <View>
                    <View style ={styles.box}>
                        <Text style = {styles.text} onPress={() => props.navigation.navigate("Myservices")}>Mis servicios</Text>
                        <Icon
                            name="basket"
                            type="ionicon"
                            size= {30}
                            color= "white"
                            style={{ marginTop: 2, marginRight: 10 }}
                            onPress={() => props.navigation.navigate("Myservices")}
                        />

                    </View>
                    <Text>  </Text>
                    <View style ={styles.box}>
                        <Text style = {styles.text} onPress={() => props.navigation.navigate("Opinions")}>Comentarios</Text>
                        <Icon
                            name="chatbubbles"
                            type="ionicon"
                            size= {30}
                            color= "white"
                            style={{ marginTop: 2, marginRight: 10 }}
                            onPress={() => props.navigation.navigate("Opinions")}
                        />
                    </View>
                </View>
           </View>

           <Text> </Text>
           <Text> </Text>
           <Image
                source = {require("../../assets/logo_retra.png")}
                style={{ width: 220, height: 120 }}
            />
            
    </View>  
    );
};


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
        width:150, 
        height:150, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 15,
    },

    boxh: { 
        backgroundColor:'#3F88C5', 
        width:300, 
        height:150, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 15,

    },
});