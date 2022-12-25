import React, {useState, useEffect} from "react";
import { ScrollView, View, Text} from 'react-native';
import { Avatar, Icon, Input } from "react-native-elements";
import EStyleSheet from 'react-native-extended-stylesheet';

import { useAuth, USER_KEY } from "../providers/AuthProvider";
import * as SecureStore from "expo-secure-store";


const EditProfile = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        (async () => {
           const _user = await SecureStore.getItemAsync(USER_KEY);
           setUser(JSON.parse(_user)); 
           NameForm()
        })();
    }, []);

    
    

    return(
        <View style={styles.container}>

            <ScrollView>
                <View style={{ alignItems: 'center', marginTop:'5%' }}>
                    <View>
                        <Avatar
                            roundeds
                            size='xlarge'
                            source={{ uri: user.avatar }}
                        />
                        <Text
                                onPress={() => props.navigation.navigate("EditProfile")}
                                style={styles.button}
                            >
                            <Icon
                                    name="camera"
                                    color='white'
                                    type = "ionicon" 
                                />
                        </Text>
                    </View>

                        <ScrollView style={{ width: '90%', }}>
                            <Text style={styles.title}>Nombre de usuario:</Text>
                            <Input style={styles.input} value={user.username} ></Input>

                            <Text style={styles.title}>Cédula:</Text>
                            <Input style={styles.input} value={user.cedula}></Input>

                            <Text style={styles.title}>E-mail:</Text>
                            <Input style={styles.input} value={user.email}></Input>

                            <Text style={styles.title}>Fecha de nacimiento:</Text>
                            <Input style={styles.input} value={user.birthdate}></Input>

                            <Text style={styles.title}>Télefono:</Text>
                            <Input style={styles.input} value={user.home_phone}></Input>

                            <Text style={styles.title}>Celular:</Text>
                            <Input style={styles.input} value={user.personal_phone}></Input>

                            <Text style={styles.title}>Dirección:</Text>
                            <Input style={styles.input} value={user.address}></Input>

                            <Text
                                onPress={() => props.navigation.navigate("EditProfile")}
                                style={styles.button}
                            >
                                Guardar Cambios
                            </Text>

                            <Text> </Text>
                            <Text> </Text>
                            <Text> </Text>
                            <Text> </Text>
                        </ScrollView>


                
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
 
    },
    text: {
        color: '$primary',
        fontWeight: '$fontWeight600', 
        fontFamily: '$400Regular',
     },

    titleX:{
        marginLeft: '5%',
        marginTop:'5%',
        fontFamily: '$700Bold',
        fontSize: 22,
        color:'$primary'

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