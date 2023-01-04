import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import styles from "../styles/auth";
import { Text, Button, Image } from "react-native-elements";
import Toast from "react-native-root-toast";
import { ErrorText, ActivityLoader } from "../components/Shared";
import { useForm } from "react-hook-form";
import { TextInput } from "../components/inputs";
import { contractService } from "../services/AuthService";


const FormService = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { control, handleSubmit, formState: { errors }} = useForm();

    const _contractService = async (data) => {
        try {
            setLoading(true);
            const message = await contractService(data, 8);
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
        <ScrollView style={ styles.containerScroll }>
            
            
            <Text h2 style={ styles.title }>Formulario</Text>
            <Text style={styles.subtitle}>Solicitud de contratación del servicio.</Text>
            {loading == true ? <ActivityLoader /> : null}
            <ErrorText error={error} />
            <Text style={styles.text}>Dispositivo</Text>
            <TextInput
                name="device"
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
            <TextInput
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

            <Button 
                titleStyle={styles.buttonTitle}
                buttonStyle={styles.button}
                title="Contratar servicio"
                type="outline"
                onPress={handleSubmit(_contractService)}
            />
            <Text>  </Text>
            <Text>  </Text>
            <Text>  </Text>
            <Text>  </Text>

        </ScrollView>
    </View>  
    );
};

export default FormService;
