import React, {useState, useEffect} from "react";
import { ScrollView, View, Text} from 'react-native';
import { Avatar, Icon, Input } from "react-native-elements";
import EStyleSheet from 'react-native-extended-stylesheet';

import { useAuth, USER_KEY, USER_TOKEN_KEY } from "../providers/AuthProvider";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import { EmailInput, PasswordInput, TextInput, DateInput, TextInputValue } from "../components/inputs";
import { useForm } from "react-hook-form";
import Toast from "react-native-root-toast";
import { ErrorText, ActivityLoader } from "../components/Shared";
import { updateProfile } from "../services/AuthService";

const EditProfile = () => {

    const url = "https://tecnony-v1.herokuapp.com/api/v1/profile";
    

    const [user, setUser] = useState([]); 
    const [active, setActive] = useState(false); 
    const [token, setToken] = useState([]);
    const [error, setError] = React.useState([]);


    const [loading, setLoading] = useState(false);
    const { control, handleSubmit, formState: { errors }} = useForm();


    const fetchUser = (url, config) => {
        try{
            fetch(url,config)
            .then(response => response.json())
            .then(data => setUser(data.data.user))
            .catch(error => console.log(error))
        }catch(e){
            setError(e.message);
            
        }finally{ 
            setLoading(false);
        }
            
        };

        const [form, setForm] = useState({
            usernombre: "",
            nombre: "",
            apellido: "",
            cedula: "",
            email: "",
            birthdate: "",
            telefono: "",
            celular: "",
            direccion: ""
        })


       
    useEffect(() => {
        (async () => {
            const _token = await SecureStore.getItemAsync(USER_TOKEN_KEY);
            const config = {
                headers:{
                    Authorization: `Bearer ${_token}`
                }
            }; 
            setToken(_token);
            fetchUser(url, config);
            setActive(true);
            setForm({
                ...form,
                usernombre:     user.username,
                nombre:     user.first_name,
                apellido:     user.last_name,
                cedula:     user.cedula,
                email:     user.email,
                birthdate:     user.birthdate,
                telefono:     user.home_phone,
                celular:     user.personal_phone,
                direccion:     user.address
            })
        })();

        
        
        
    }, []);


    
    const _updateProfile = async (data) => {
        try {
            setLoading(true);
            const message = await updateProfile(data);
            Toast.show(
                message,
                {
                }
            )
        } catch (e) {
            setError(e.message);
        }finally{
            setLoading(false);
        }
    }


  

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
                                //onPress={() => props.navigation.navigate("EditProfile")}
                                style={styles.button}
                            >
                            <Icon
                                    name="camera"
                                    color='white'
                                    type = "ionicon" 
                                />
                        </Text>
                    </View>
                    {loading == true ? <ActivityLoader /> : null}

                        <ScrollView style={{ width: '90%', }}>
                            <Text style={styles.title}>Nombre de usuario:</Text>
                            <TextInputValue 
                                name="username"
                                iconName="person-circle-outline"
                                placeholder="Nombre de usuario"
                                control={control} 
                                errors = {errors}
                                errorValidationStyle = {styles.errorValidation} 
                                inputStyle={styles.input} 
                                value={form.usernombre} 
                                onChangeText={(value) => setForm({...form, usernombre: value})}/>
                            
                            <Text style={styles.title}>Nombre:</Text>
                            <TextInputValue 
                                name="first_name"
                                iconName="person"
                                placeholder="Nombre"
                                control={control} 
                                errors = {errors}
                                errorValidationStyle = {styles.errorValidation} 
                                inputStyle={styles.input} 
                                value={form.nombre} 
                                onChangeText={(value) => setForm({...form, nombre: value})}/>
                            
                            <Text style={styles.title}>Apellido:</Text>
                            <TextInputValue 
                                name="last_name"
                                iconName="person"
                                placeholder="Apellido"
                                control={control} 
                                errors = {errors}
                                errorValidationStyle = {styles.errorValidation} 
                                inputStyle={styles.input} 
                                value={form.apellido} 
                                onChangeText={(value) => setForm({...form, apellido: value})}/>

                            <Text style={styles.title}>Cédula:</Text>
                            <TextInputValue 
                                name="cedula"
                                iconName="card-outline"
                                placeholder="Cédula"
                                control={control} 
                                errors = {errors}
                                errorValidationStyle = {styles.errorValidation} 
                                inputStyle={styles.input} 
                                value={form.cedula} 
                                onChangeText={(value) => setForm({...form, cedula: value})}/>

                            <Text style={styles.title}>Télefono:</Text>
                            <TextInputValue 
                                name="home_phone"
                                iconName="call-outline"
                                placeholder="Teléfono (Opcional)"
                                control={control} 
                                errors = {errors}
                                errorValidationStyle = {styles.errorValidation} 
                                inputStyle={styles.input} 
                                value={form.telefono} 
                                onChangeText={(value) => setForm({...form, telefono: value})}/>

                            <Text style={styles.title}>Celular:</Text>
                            <Input name="personal_phone" control={control} errors = {errors} style={styles.input} value={form.celular} onChangeText={(value) => setForm({...form, celular: value})}></Input>
                            <TextInputValue 
                                name="personal_phone"
                                iconName="call-outline"
                                placeholder="Teléfono (Opcional)"
                                control={control} 
                                errors = {errors}
                                errorValidationStyle = {styles.errorValidation} 
                                inputStyle={styles.input} 
                                value={form.telefono}
                                onChangeText={(value) => setForm({...form, telefono: value})}/>


                            <Text style={styles.title}>Dirección:</Text>
                            <TextInputValue 
                                name="address"
                                iconName="map-outline"
                                placeholder="Dirección"
                                control={control} 
                                errors = {errors}
                                errorValidationStyle = {styles.errorValidation} 
                                inputStyle={styles.input} 
                                value={form.direccion}
                                onChangeText={(value) => setForm({...form, direccion: value})}/>
                            <Text
                                onPress={handleSubmit(_updateProfile)}
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

     title:{
        fontFamily: '$700Bold',
        fontSize: 16,
        color:'$primary',
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
    errorValidation: {
        color: "$red",
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