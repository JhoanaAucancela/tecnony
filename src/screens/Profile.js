import React, {useState, useEffect} from "react";
import { View, Text, Button} from 'react-native';
import { Avatar, Icon } from "react-native-elements";
import EStyleSheet from 'react-native-extended-stylesheet';
import { useAuth, USER_KEY } from "../providers/AuthProvider";
import * as SecureStore from "expo-secure-store";

import { logout } from "../services/AuthService";
import Toast from "react-native-root-toast";
import FormEditProfileModal from "../components/FormEditProfileModal";

export default function Profile(props){

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [user, setUser] =useState([]);

    useEffect(() => {
        (async () => {
           const _user = await SecureStore.getItemAsync(USER_KEY);
           setUser(JSON.parse(_user)); 
        })();
    }, []);

    const {handleLoguot} = useAuth();

    const _logout = async () => {
        try{
            await logout();
            await handleLoguot();
            Toast.show("Cierre de sesion exitoso");
        }catch (e){
            Toast.show("Cierre de sesion exitoso");
        }
    }

    return(
        <View style={styles.container}>
            {user &&
                <View>
                    <View style={{ flexDirection: "row" }}>
                    <Text style={styles.titleX}>Mi Perfil</Text>
                        <Text
                            onPress={() => _logout()}
                            style={styles.buttonlogout}
                        > 🔙 Cerrar sesión
                            
                            
                        </Text>
                    </View>
                    
                    
                    <View style={{ alignItems: 'center', marginTop:'5%' }}>
                        <Avatar
                            roundeds
                            size='xlarge'
                            source={{ uri: user.avatar }}
                        />
                    </View>
                    
                    <View style={{ marginLeft:'2%', marginTop:'5%' }}>
                        <Text style={styles.title}>Nombre de usuario:</Text>
                        <Text style={styles.text}>      {user.username}</Text>

                        <Text style={styles.title}>Nombre completo:</Text>
                        <Text style={styles.text}>      {user.full_name}</Text>

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

                        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginTop:'5%' }}>

                            <Text
                                onPress={() => setIsModalOpen(!isModalOpen)}
                                style={styles.button}
                            >
                            Editar Perfil
                            </Text>

                            <FormEditProfileModal
                                isModalOpen={isModalOpen} 
                                setIsModalOpen={setIsModalOpen}
                            />
                        </View>

                    </View>
                </View>
            }
        </View>
    );
}



const styles =  EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'$authBg',
        alignItems: 'center',
    },

    buttonlogout: {
        fontFamily: '$400Regular',
        color:'$black',
        textDecorationLine: "underline",
        marginLeft:'40%',
        marginTop:'5%'
        
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

    titleX:{
        marginLeft: '5%',
        marginTop:'5%',
        fontFamily: '$700Bold',
        fontSize: 24,
        color:'$primary'
    },

    title:{
        marginLeft: '5%',
        fontFamily: '$700Bold',
        fontSize: 18,
        color:'$primary'
    },
    text:{
        marginLeft: '5%',
        fontFamily: '$400Regular',
        fontSize: 18,
    }
});