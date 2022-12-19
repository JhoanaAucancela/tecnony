import React, {useState, useEffect} from "react";
import { ScrollView, View, Text} from 'react-native';
import { Avatar, Icon, Input } from "react-native-elements";
import EStyleSheet from 'react-native-extended-stylesheet';

import { useAuth, USER_KEY } from "../providers/AuthProvider";
import * as SecureStore from "expo-secure-store";

const EditProfile = () => {

    const [user, setUser] =useState([]);

    useEffect(() => {
        (async () => {
           const _user = await SecureStore.getItemAsync(USER_KEY);
           setUser(JSON.parse(_user)); 
        })();
    }, []);

    return(
        <View style={styles.container}>

            <ScrollView>
                <View style={{ alignItems: 'center', marginTop:'5%' }}>
                    <Avatar
                        roundeds
                        size='xlarge'
                        source={{ uri: user.avatar }}
                    />

                        <Text style={styles.title}>Nombre de usuario:</Text>
                        <Input value={user.username} ></Input>

                        <Text style={styles.title}>Nombre:</Text>
                        <Input value={user.name} ></Input>

                        <Text style={styles.title}>Cédula:</Text>
                        <Text style={styles.text}>      {user.cedula}</Text>

                        <Text style={styles.title}>E-mail:</Text>
                        <Text style={styles.text}>      {user.email}</Text>

                        <Text style={styles.title}>Fecha de nacimiento:</Text>
                        <Text style={styles.text}>      {user.birthdate}</Text>

                        <Text style={styles.title}>Télefono:</Text>
                        <Text style={styles.text}>      {user.home_phone}</Text>

                        <Text style={styles.title}>Celular:</Text>
                        <Text style={styles.text}>      {user.personal_phone}</Text>

                        <Text style={styles.title}>Dirección:</Text>
                        <Text style={styles.text}>      {user.address}</Text>

                
                </View>


            </ScrollView>
    </View>  
    );
};

export default EditProfile;

const styles =  EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'$authBg',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '$primary',
        fontWeight: '$fontWeight600', 
     },

    titleX:{
        marginLeft: '5%',
        marginTop:'5%',
        fontFamily: '$700Bold',
        fontSize: 22,
        color:'$primary'
    },
    
});