import React, {useState} from 'react';
import {Text, Modal, View, Button, ScrollView} from 'react-native';
import { Icon } from "react-native-elements";
import Toast from "react-native-root-toast";
import { ErrorText, ActivityLoader } from "../components/Shared";
import { useForm } from "react-hook-form";
import { TextInput, TextAreaInput } from "../components/inputs";
import { comentService } from "../services/AuthService";
import styles from "../styles/auth";


export default function ComentsModal({isModalOpen, setIsModalOpen, ID}){
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { control, handleSubmit, formState: { errors }} = useForm();

    const _comentService = async (data) => {
        try {
            setLoading(true);
            const message = await comentService(data, ID);
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
                    <Text>{ID}</Text> 
                    <Icon
                        name="close"
                        type="ionicon"
                        size= {30}
                        color= "black"
                        style={{ marginTop: 2, marginRight: 100 }}
                        onPress={() => setIsModalOpen(!setIsModalOpen)}
                    />
                        <Text h2 style={ styles.title }>Comparte tu opinión</Text>
                        
                        <ErrorText error={error} />
                        

                        <Text style={styles.text}>Comentario</Text>

                    <TextAreaInput
                        name="comment"
                        minLength={2}
                        maxLength={500}
                        iconName="person-circle-outline"
                        placeholder="Comentario"
                        control={control}
                        errors = {errors}
                        errorValidationStyle = {styles.errorValidation}
                        inputStyle={styles.input}
                    />
                    <Text style={styles.text}>Sugerencia</Text>

                    <TextAreaInput
                        name="suggestion"
                        required={false}
                        minLength={2}
                        maxLength={500}
                        iconName="person-circle-outline"
                        placeholder="Sugerencia"
                        control={control}
                        errors = {errors}
                        errorValidationStyle = {styles.errorValidation}
                        inputStyle={styles.input}
                    />

                    <Text style={styles.text}>Calificación</Text>

                    <TextInput
                        name="qualification"
                        minLength={2}
                        maxLength={2}
                        iconName="person-circle-outline"
                        placeholder="Calificacion"
                        control={control}
                        errors = {errors}
                        errorValidationStyle = {styles.errorValidation}
                        inputStyle={styles.input}
                    />

                        
                        <Text style={btnStyle} onPress={handleSubmit(_comentService)}>Save</Text>
                        
                    </ScrollView>
                </View>
            </Modal>
        </>
    );
}

