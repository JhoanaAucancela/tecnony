import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import styles from "../../styles/auth";
import { Text, Button, Image } from "react-native-elements";
import Toast from "react-native-root-toast";
import { ErrorText, ActivityLoader } from "../../components/Shared";
import { useForm } from "react-hook-form";
import { EmailInput, PasswordInput, TextInput } from "../../components/inputs";
import { signup } from "../../services/AuthService";


const Signup = ({ navigation }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [secureEntry, setSecureEntry] = useState(true);
    const [secureConfirmationEntry, setSecureConfirmationEntry] = useState(true);
    const { control, handleSubmit, formState: { errors }} = useForm();

    const _signup = async (data) => {
        //TODO registrar usuarios
        try {
            setLoading(true);
            const message = await signup(data);
            await navigation.navigate("Login");
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

    const toggleSecureEntry = () => {
        setSecureEntry(!secureEntry);
    }

    const toggleSecureConfirmationEntry = () => {
        setSecureConfirmationEntry(!secureConfirmationEntry);
    }
    return(
        <View style={ styles.container }>
            <View style={{ alignItems: 'center' }}>
                <Image 
                    style = {{ width:250, height:50, marginTop:20 }}
                    source = {require("../../../assets/logo.png")}
                />
            </View>
           <ScrollView style={ styles.containerScroll }>
            {loading == true ? <ActivityLoader /> : null}
            
            <Text h2 style={ styles.title }>Registrarse</Text>
            <Text style={styles.subtitle}>Crea tu cuenta</Text>
            
            <ErrorText error={error} />

            <Text style={styles.text}>Nombre de usuario</Text>

            <TextInput
                name="username"
                minLength={2}
                maxLength={30}
                iconName="person-circle-outline"
                placeholder="Username"
                control={control}
                errors = {errors}
                errorValidationStyle = {styles.errorValidation}
                inputStyle={styles.input}
            />

            <Text style={styles.text}>Nombre</Text>          
            <TextInput
                name="first_name"
                minLength={3}
                maxLength={35}
                iconName="person-outline"
                placeholder="Name"
                control={control}
                errors = {errors}
                errorValidationStyle = {styles.errorValidation}
                inputStyle={styles.input}
            />

            <Text style={styles.text}>Apellido</Text>
            <TextInput
                name="last_name"
                minLength={3}
                maxLength={35}
                iconName="person-outline"
                placeholder="Lastname"
                control={control}
                errors = {errors}
                errorValidationStyle = {styles.errorValidation}
                inputStyle={styles.input}
            />

            <Text style={styles.text}>Celular</Text>
            <TextInput
                name="personal_phone"
                minLength={2}
                maxLength={30}
                iconName="phone-portrait-outline"
                placeholder="Cell Phone"
                control={control}
                errors = {errors}
                errorValidationStyle = {styles.errorValidation}
                inputStyle={styles.input}
            />

            <Text style={styles.text}>Dirección</Text>
            <TextInput
                name="address"
                minLength={2}
                maxLength={30}
                iconName="map-outline"
                placeholder="Address"
                control={control}
                errors = {errors}
                errorValidationStyle = {styles.errorValidation}
                inputStyle={styles.input}
            />

            <Text style={styles.text}>Cédula</Text>
            <TextInput
                name="cedula"
                minLength={2}
                maxLength={30}
                iconName="card-outline"
                placeholder="cedula"
                control={control}
                errors = {errors}
                errorValidationStyle = {styles.errorValidation}
                inputStyle={styles.input}
            />

            <Text style={styles.text}>Correo Electronico</Text>
            <EmailInput 
                name="email"
                control={ control }
                errors={ errors }
                placeholder="E-mail"
                errorValidationStyle={styles.errorValidation}
                inputStyle={ styles.input }
            />
            <Text style={styles.text}>Fecha de nacimiento</Text>
            <TextInput
                name="birthdate"
                minLength={2}
                maxLength={30}
                iconName="calendar-outline"
                placeholder="Date of Birth"
                control={control}
                errors = {errors}
                errorValidationStyle = {styles.errorValidation}
                inputStyle={styles.input}
            />

            <Text style={styles.text}>Teléfono</Text>
            <TextInput
                name="home_phone"
                minLength={2}
                maxLength={30}
                iconName="call-outline"
                placeholder="Phone"
                control={control}
                errors = {errors}
                errorValidationStyle = {styles.errorValidation}
                inputStyle={styles.input}
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

            <Text style={styles.text}>Confirmar Contraseña</Text>
            <PasswordInput 
                name="password_confirmation"
                control={control}
                errors={errors}
                errorValidationStyle={styles.errorValidation}
                inputStyle={styles.input}
                secureEntry={ secureConfirmationEntry }
                toggleSecureEntry = { toggleSecureConfirmationEntry }
            />
 
            <Button 
                titleStyle={styles.buttonTitle}
                buttonStyle={styles.button}
                title="Crear Cuenta"
                type="outline"
                onPress={handleSubmit(_signup)}
            />

                    <Text>  </Text>           
        </ScrollView>
            <View style={{ alignItems: 'center' }}>
                <Text
                    onPress={() => navigation.navigate("Login")}
                    style={styles.link}
                >
                    ¿Ya tienes una cuenta?
                </Text>
            </View>

                    <Text>  </Text>
                    <Text>  </Text>
                    <Text>  </Text>
        
        </View>
    );
}

export default Signup;

