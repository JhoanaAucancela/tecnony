import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { Button, Image } from "react-native-elements";
import { EmailInput } from "../components/inputs";
import { set, useForm } from "react-hook-form";
import Toast from "react-native-root-toast";
import styles from "../styles/auth";
import { ErrorText, ActivityLoader } from "../components/Shared";
import { forgotPassword } from "../services/AuthService";

const ForgotPassword = ({ navigation }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { control, handleSubmit, formState: { errors }} = useForm();


    const _forget = async (data) => {
        try{
            setLoading(true);
            const message = await forgotPassword(data);
            await navigation.navigate("Login");
            Toast.show(
                message,
                {
                }
            )
        }catch (e){
            setError(e.message);
        }finally{
            setLoading(false);
        }
    }

    return(
        <View style={styles.container}>
        
            <View style={{ alignItems: 'center' }}>
                <Image 
                style = {{ width:250, height:50 }}
                source = {require("../../assets/logo.png")}
            />
            </View>
            {loading == true ? <ActivityLoader /> : null}
            <View style={{width: '100%', padding:'2%', paddingLeft:'3%'}}>
                <Text h2 style={styles.title}>Recuperar Cuenta</Text>
                <Text style={styles.subtitle}>Ingresa el correo electrónico que usas en Tecnony</Text>
                <Text> </Text>
                <ErrorText error={error} />
                <Text style={styles.text}>Correo Electrónico</Text>
                <EmailInput 
                    name="email"
                    control={ control }
                    errors={ errors }
                    placeholder="E-mail"
                    errorValidationStyle={styles.errorValidation}
                    inputStyle={ styles.input }
                />
            </View>
            
            <View style={{ alignItems: 'center' }}>
                <Button 
                    titleStyle={styles.buttonTitle}
                    buttonStyle={styles.button}
                    title="Recuperar Cuenta"
                    type="outline"
                    onPress={handleSubmit(_forget)}
                />

                <Text
                    onPress={() => navigation.navigate("Signup")}
                    style={styles.link}
                >
                    ¿No tienes una cuenta?
                </Text>
            </View>
    
    </View>  
    );
};

export default ForgotPassword;

