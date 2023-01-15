import React, { useState } from "react";
import { View } from "react-native";
import styles from "../../styles/auth";
import { Text, Button, Image } from "react-native-elements";
import Toast from "react-native-root-toast";
import { ErrorText, ActivityLoader } from "../../components/Shared";
import { set, useForm } from "react-hook-form";
import { EmailInput, PasswordInput } from "../../components/inputs";

import { useAuth } from "../../providers/AuthProvider";
import { login } from "../../services/AuthService";

const Login = ({ navigation }) => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [secureEntry, setSecureEntry] = useState(true);
    const { control, handleSubmit, formState: { errors }} = useForm();
    const { handleLogin } = useAuth();

    const _login = async (data) => {
        try{
            setLoading(true);
            const response = await login(data);
            await handleLogin(response.data);
            Toast.show(
                "Bienvenid@",
                {
                    position: Toast.positions.CENTER,
                }
            );

        }catch (e){
            setError(e.message);
            setLoading(false);
        }
    }

    const toggleSecureEntry = () => {
        setSecureEntry(!secureEntry);
    }

    return(
        <View style={ styles.container }>
            {loading == true ? <ActivityLoader /> : null}
            <View style={{ alignItems: 'center' }}>
                <Image 
                    style = {{ width:250, height:50 }}
                    source = {require("../../../assets/logo.png")}
                />
            </View>
            

            <ErrorText error={error} />

            <View style={{width: '100%', padding:'2%', paddingLeft:'3%'}}>
                <Text h2 style={styles.title}>Acceso</Text>
                <Text style={styles.subtitle}>Inicia sesión en tu cuenta</Text>
                
                <Text style={styles.text}>Correo Electrónico</Text>
                <EmailInput 
                    name="email"
                    control={ control }
                    errors={ errors }
                    errorValidationStyle={styles.errorValidation}
                    inputStyle={ styles.input }
                />
                <Text style={styles.text}>Contraseña</Text>
                <PasswordInput 
                    name="password"
                    control={control}
                    errors={errors}
                    errorValidationStyle={styles.errorValidation}
                    inputStyle={styles.input}
                    secureEntry={ secureEntry }
                    toggleSecureEntry = { toggleSecureEntry }
                />

                <Text
                    onPress={() => navigation.navigate("ForgotPassword")}
                    style={styles.linkRigth}
                >
                    Olvide mi contraseña
                </Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <Button 
                    titleStyle={styles.buttonTitle}
                    buttonStyle={styles.button}
                    title="Acceder"
                    type="outline"
                    onPress={handleSubmit(_login)}
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
}

export default Login;

