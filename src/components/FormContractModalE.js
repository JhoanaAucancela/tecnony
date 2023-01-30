import React, {useState, useRef} from 'react';
import {Text, Modal, View, Button, ScrollView, Alert} from 'react-native';
import { Icon, Card } from "react-native-elements";
import Toast from "react-native-root-toast";
import { ErrorText, ActivityLoader } from "./Shared";
import { set, useForm } from "react-hook-form";
import { TextInput, TextAreaInput,TextInputValue } from "./inputs";
import { contractService } from "../services/AuthService";
import styles from "../styles/auth";

///////////////////////////////
import {Picker} from '@react-native-picker/picker';
///////////////////////////////////

export default function FormContractModalE({isModalOpen, setIsModalOpen, ID}){
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { control, handleSubmit, formState: { errors }} = useForm();

    ////////////////////////
    const [selectedPago, setSelectedPago] = useState(1);

    const pickerRef = React.useRef();

    //////////////////////////

    const _contractService = async (data) => {
        try {
            setLoading(true);
            const message = await contractService(data, ID);
            Alert.alert('Tecnony', {message}, [
                {text: 'OK'},
              ])
            setIsModalOpen(!setIsModalOpen)
            Toast.show(
                message,
                {
                }
            )
        } catch (e) {
            setError(message);
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
                        <Text h2 style={ styles.title }>Formulario</Text>
                        <Text style={styles.subtitle}>Solicitud de contratación del servicio.</Text>
                        
                        <ErrorText error={error} />
                        <Text style={styles.text}>Dispositivo</Text>
                        <TextInput
                            name="device"
                            minLength={2}
                            maxLength={20}
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
                            minLength={2}
                            maxLength={20}
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
                            minLength={2}
                            maxLength={20}
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
                            maxLength={10}
                            iconName="barcode"
                            placeholder="Ej. HSO12355 (Opcional)"
                            control={control}
                            errors = {errors}
                            errorValidationStyle = {styles.errorValidation}
                            inputStyle={styles.input}
                        />

                        <Text style={styles.text}>Descripcion del problema</Text>
                        <TextAreaInput
                            name="description_problem"
                            minLength={2}
                            maxLength={530}
                            iconName="create"
                            placeholder="Ej. La pantalla esta rota"
                            control={control}
                            errors = {errors}
                            errorValidationStyle = {styles.errorValidation}
                            inputStyle={styles.input}
                        />
                        <Text style={styles.text}>Método de pago</Text>
                        <Picker
                            style={styles.input}
                            ref={pickerRef}
                            selectedValue={selectedPago}
                            onValueChange={(itemValue, itemIndex) => setSelectedPago(itemValue)}>
                            <Picker.Item label="Efectivo" value={1}/>
                        </Picker>

                       
                        <Text style={styles.button} onPress={handleSubmit(_contractService)}>📝 Contratar</Text>
                        
                        <TextInputValue
                            value={selectedPago}
                            name="payment_method"
                            placeholder=""
                            control={control}
                            errors = {errors}
                            errorValidationStyle = {styles.errorValidation}
                            inputStyle={styles.inputVisible}
                    />


                    </ScrollView>
                </View>
            </Modal>
        </>
    );
}

