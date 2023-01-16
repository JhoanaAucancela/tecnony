import React, {useState} from 'react';
import {Text, Modal, View, Button, ScrollView} from 'react-native';
import { Icon } from "react-native-elements";
import Toast from "react-native-root-toast";
import { ErrorText, ActivityLoader } from "../components/Shared";
import { useForm } from "react-hook-form";
import { TextInput, TextAreaInput } from "../components/inputs";
import { updateService } from "../services/AuthService";
import styles from "../styles/auth";


export default function FormModal({isModalOpen, setIsModalOpen, ID}){
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { control, handleSubmit, formState: { errors }} = useForm();

    const _updateService = async (data) => {
        try {
            setLoading(true);
            const message = await updateService(data, ID);
            setIsModalOpen(!isModalOpen);
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
                        <Text h2 style={ styles.title }>Editar el servicio</Text>
                        <ErrorText error={error} />
                        <Text style={styles.text}>Dispositivo</Text>
                        <TextInput
                            name="device"
                            //required={false}
                            minLength={2}
                            maxLength={30}
                            iconName="cube"
                            placeholder="Ej. Computadora"
                            control={control}
                            errors = {errors}
                            errorValidationStyle = {styles.errorValidation}
                            inputStyle={styles.input}
                        />

                        <Text style={styles.text}>Modelo</Text>
                        <TextInput
                            name="model"
                            //required={false}
                            minLength={2}
                            maxLength={30}
                            iconName="phone-portrait"
                            placeholder="Ej. HP-500"
                            control={control}
                            errors = {errors}
                            errorValidationStyle = {styles.errorValidation}
                            inputStyle={styles.input}
                        />

                        <Text style={styles.text}>Marca</Text>
                        <TextInput
                            name="brand"
                            //required={false}
                            minLength={2}
                            maxLength={30}
                            iconName="logo-closed-captioning"
                            placeholder="Ej. HP"
                            control={control}
                            errors = {errors}
                            errorValidationStyle = {styles.errorValidation}
                            inputStyle={styles.input}
                        />

                        <Text style={styles.text}>Serie</Text>
                        <TextInput
                            name="serie"
                            required={false}
                            minLength={2}
                            maxLength={30}
                            iconName="barcode"
                            placeholder="Ej. HSO12355"
                            control={control}
                            errors = {errors}
                            errorValidationStyle = {styles.errorValidation}
                            inputStyle={styles.input}
                        />

                        <Text style={styles.text}>Descripcion del problema</Text>
                        <TextAreaInput
                            name="description_problem"
                            //required={false}
                            minLength={2}
                            maxLength={530}
                            iconName="create"
                            placeholder="Ej. La pantalla esta rota"
                            control={control}
                            errors = {errors}
                            errorValidationStyle = {styles.errorValidation}
                            inputStyle={styles.input}
                        />
                        
                        <Text style={btnStyle} onPress={handleSubmit(_updateService)}>Guardar</Text>
                        <Text>  </Text>
                        <Text>  </Text>
                        <Text>  </Text>

                        
                    </ScrollView>
                </View>
            </Modal>
        </>
    );
}

