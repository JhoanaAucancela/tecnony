import React from 'react';
import { View, Text} from 'react-native';
import { Button, Image } from "react-native-elements";
import { EmailInput } from "../components/inputs";
import { set, useForm } from "react-hook-form";

import styles from "../styles/auth";



const ForgotPassword = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors }} = useForm();
    const [error, setError] = React.useState(null);


    const _forget = async (data) => {
        try{
            

        }catch (e){
            
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
            <View style={{width: '100%', padding:'2%', paddingLeft:'3%'}}>
                <Text h2 style={styles.title}>Recuperar Cuenta</Text>
                <Text style={styles.subtitle}>Ingresa el correo electronico que usas en Tecnony</Text>
                <Text> </Text> 
                <Text style={styles.text}>Correo Electronico</Text>
                <EmailInput 
                    name="email"
                    control={ control }
                    errors={ errors }
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

