import React, {useState, useEffect, useRef, Component} from "react";
import { ScrollView, View, Text, Modal } from 'react-native';
import { Avatar, Icon, Image, Input } from "react-native-elements";
import EStyleSheet from 'react-native-extended-stylesheet';
import { USER_TOKEN_KEY } from "../providers/AuthProvider";
import * as SecureStore from "expo-secure-store";
import { TextInputValueChange } from "../components/inputs";
import { useForm } from "react-hook-form";
import Toast from "react-native-root-toast";
import { ErrorText, ActivityLoader } from "../components/Shared";
import { updateProfile, updateImage } from "../services/AuthService";
import { Form, FormItem } from 'react-native-form-component';


export default function FormEditProfileModal ({isModalOpen, setIsModalOpen}) {
    
    const url = "https://tecnony-v1.herokuapp.com/api/v1/profile";
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { control, handleSubmit, formState: { errors }} = useForm();

    const [user, setUser] = useState([]); 
    const [token, setToken] = useState([]);
    

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
            username: "",
            first_name: "",
            last_name: "",
            cedula: "",
            home_phone: "",
            personal_phone: "",
            address: ""
    });

    const _updateProfile = async () => {
        try {
            setLoading(true);
            const message = await updateProfile(form);
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
                username: user.username,
                first_name: user.first_name, 
                last_name: user.last_name,
                cedula: user.cedula,
                home_phone: user.home_phone,
                personal_phone: user.personal_phone,
                address: user.address
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

    const username = useRef();
    const first_name = useRef();
    const last_name = useRef();
    const cedula = useRef();
    const home_phone = useRef();
    const personal_phone = useRef();
    const address = useRef();

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
                        <Text> </Text> 
                        <Form onButtonPress={handleSubmit(_updateProfile)} buttonStyle={styles.button} buttonText="Guardar Cambios">
                            <FormItem
                                label="Nombre de usuario:"
                                isRequired
                                textInputStyle={styles.input}
                                value={form.username}
                                onChangeText={(value) => setForm({...form, username: value})}
                                asterik
                                ref={username} 
                            />

                        <FormItem
                                label="Nombre:"
                                isRequired
                                textInputStyle={styles.input}
                                value={form.first_name}
                                onChangeText={(value) => setForm({...form, first_name: value})}
                                asterik
                                ref={first_name} 
                            />

                            <FormItem
                                label="Apellido:"
                                isRequired
                                textInputStyle={styles.input}
                                value={form.last_name}
                                onChangeText={(value) => setForm({...form, last_name: value})}
                                asterik
                                ref={last_name} 
                            />

                        <FormItem
                                label="Cédula:"
                                notRequired
                                textInputStyle={styles.input}
                                value={form.cedula}
                                onChangeText={(value) => setForm({...form, cedula: value})}
                               
                                ref={cedula} 
                            />
                            <FormItem
                                label="Teléfono:"
                                notRequired
                                textInputStyle={styles.input}
                                value={form.home_phone}
                                onChangeText={(value) => setForm({...form, home_phone: value})}
                                
                                ref={home_phone} 
                            />

                            <FormItem
                                label="Celular:"
                                isRequired
                                textInputStyle={styles.input}
                                value={form.personal_phone}
                                onChangeText={(value) => setForm({...form, personal_phone: value})}
                                asterik
                                ref={personal_phone} 
                            />

                            <FormItem
                                label="Dirección:"
                                isRequired
                                textInputStyle={styles.input}
                                value={form.address}
                                onChangeText={(value) => setForm({...form, address: value})}
                                asterik
                                ref={address} 
                            />
                        </Form>


                        
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