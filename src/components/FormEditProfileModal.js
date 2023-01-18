import React, {useState, useEffect, useRef, Component} from "react";
import { ScrollView, View, Text, Modal} from 'react-native';
import { Avatar, Icon, Image } from "react-native-elements";
import EStyleSheet from 'react-native-extended-stylesheet';
import { USER_TOKEN_KEY } from "../providers/AuthProvider";
import * as SecureStore from "expo-secure-store";
import { TextInputValueChange } from "../components/inputs";
import { useForm } from "react-hook-form";
import Toast from "react-native-root-toast";
import { ErrorText, ActivityLoader } from "../components/Shared";
import { updateProfile, updateImage } from "../services/AuthService";
import UploadModal from "./UploadModal";

export default function FormEditProfileModal ({isModalOpen, setIsModalOpen}) {
    
    const url = "https://tecnony-v1.herokuapp.com/api/v1/profile";
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { control, handleSubmit, formState: { errors }} = useForm();

    const [user, setUser] = useState([]); 
    const [token, setToken] = useState([]);

    const [ModalOpen, setModalOpen] = React.useState(false);
    

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
            telefono: "",
            celular: "",
            direccion: ""
    });

    const _updateProfile = async (data) => {
        try {
            setLoading(true);
            const message = await updateProfile(data);
            setIsModalOpen(!setIsModalOpen);
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
            setForm({
                ...form,
                usernombre:     user.username,
                nombre:     user.first_name,
                apellido:     user.last_name,
                cedula:     user.cedula,
                telefono:     user.home_phone,
                celular:     user.personal_phone,
                direccion:     user.address
            })
        })();
    }, [isModalOpen]);

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

    const btnStyle ={
        backgroundColor:'#3F88C5', 
        padding:'3%', 
        paddingLeft:'7%',
        paddingRight:'7%',
        textAlign: 'center', 
        borderRadius: 15, 
        color:"$white", 
        fontWeight: 'bold'
    } 
    
    return (
        <>
            <Modal visible={isModalOpen} transparent= {true} animationType={'slide'}>
                <View style = {modalContainerStyle}>
                {loading == true ? <ActivityLoader /> : null}
                    <ScrollView style = {modalStyle}>
                    <Icon
                        name="close"
                        type="ionicon"
                        size= {30}
                        color= "black"
                        style={{ marginTop: 2, marginRight: 100 }}
                        onPress={() => setIsModalOpen(!setIsModalOpen)}
                    />
                        <Text h2 style={ styles.titleX }>Editar Perfil</Text>
                        <ErrorText error={error} />
                        
                        <View style={{ alignItems: 'center', marginTop:'5%' }}>
                    <View>
                        <Avatar
                            roundeds
                            size='xlarge'
                            source={{ uri: user.avatar }}
                        />
                    
                        
                    </View>
                    

                        <ScrollView style={{ width: '90%', }}>
                            <Text style={styles.title}>Nombre de usuario:</Text>
                            <TextInputValueChange 
                                name="username"
                                minLength={2}
                                maxLength={10}
                                required={false} 
                                iconName="person-circle-outline"
                                placeholder="Nombre de usuario"
                                control={control} 
                                errors = {errors}
                                errorValidationStyle = {styles.errorValidation} 
                                inputStyle={styles.input} 
                                value={form.usernombre}  
                                onChangeText={(value) => setForm({...form, usernombre: value})}/>
                            
                                <Text style={styles.title}>Nombre:</Text>
                                <TextInputValueChange
                                    name="first_name"
                                    minLength={3}
                                    maxLength={10}
                                    required={false}
                                    iconName="person"
                                    placeholder="Nombre"
                                    control={control} 
                                    errors = {errors}
                                    errorValidationStyle = {styles.errorValidation} 
                                    inputStyle={styles.input} 
                                    value={form.nombre} 
                                    onChangeText={(value) => setForm({...form, nombre: value})}/>


                            <Text style={styles.title}>Apellido:</Text>
                            <TextInputValueChange 
                                name="last_name"
                                minLength={3}
                                maxLength={15}
                                required={false}
                                iconName="person"
                                placeholder="Apellido"
                                control={control} 
                                errors = {errors}
                                errorValidationStyle = {styles.errorValidation} 
                                inputStyle={styles.input} 
                                value={form.apellido} 
                                onChangeText={(value) => setForm({...form, apellido: value})}/>

                            <Text style={styles.title}>Cédula:</Text>
                            <TextInputValueChange 
                                name="cedula"
                                minLength={10}
                                maxLength={10}
                                keyboardType="phone-pad"
                                required={false}
                                iconName="card-outline"
                                placeholder="Cédula"
                                control={control} 
                                errors = {errors}
                                errorValidationStyle = {styles.errorValidation} 
                                inputStyle={styles.input} 
                                value={form.cedula} 
                                onChangeText={(value) => setForm({...form, cedula: value})}/>

                            <Text style={styles.title}>Télefono:</Text>
                            <TextInputValueChange 
                                name="home_phone"
                                minLength={7}
                                maxLength={7}
                                keyboardType="phone-pad"
                                required={false}
                                iconName="call-outline"
                                placeholder="Teléfono (Opcional)"
                                control={control} 
                                errors = {errors}
                                errorValidationStyle = {styles.errorValidation} 
                                inputStyle={styles.input} 
                                value={form.telefono} 
                                onChangeText={(value) => setForm({...form, telefono: value})}/>

                            <Text style={styles.title}>Celular:</Text>
                            <TextInputValueChange 
                                name="personal_phone"
                                keyboardType="phone-pad"
                                minLength={10}
                                maxLength={10}
                                required={false}
                                iconName="phone-portrait-outline"
                                placeholder="Celular"
                                control={control} 
                                errors = {errors}
                                errorValidationStyle = {styles.errorValidation} 
                                inputStyle={styles.input} 
                                value={form.celular}
                                onChangeText={(value) => setForm({...form, celular: value})}/>


                            <Text style={styles.title}>Dirección:</Text>
                            <TextInputValueChange 
                                name="address"
                                minLength={5}
                                maxLength={30}
                                required={false}
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