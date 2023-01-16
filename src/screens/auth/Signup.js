import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import styles from "../../styles/auth";
import { Text, Button, Image, Input } from "react-native-elements";
import Toast from "react-native-root-toast";
import { ErrorText, ActivityLoader } from "../../components/Shared";
import { useForm } from "react-hook-form";
import { EmailInput, PasswordInput, TextInput, DateInput } from "../../components/inputs";
import { signup } from "../../services/AuthService";


import DateTimePicker from '@react-native-community/datetimepicker';

const Signup = ({ navigation }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [secureEntry, setSecureEntry] = useState(true);
    const [secureConfirmationEntry, setSecureConfirmationEntry] = useState(true);
    const { control, handleSubmit, formState: { errors }} = useForm();
///////////////
    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date("2001","10","13"));
    const [fecha, setFecha] = useState("");

    function showDatePicker() {
        setDatePicker(true);
    };

    function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
        setFecha(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
      };
    
///////////////

    const _signup = async (data) => {
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
            {loading == true ? <ActivityLoader /> : null}
            <View style={{ alignItems: 'center' }}>
                <Image 
                    style = {{ width:250, height:50, marginTop:20 }}
                    source = {require("../../../assets/logo.png")}
                />
            </View>
           <ScrollView style={ styles.containerScroll }>
            
            
            <Text h2 style={ styles.title }>Registrarse</Text>
            <Text style={styles.subtitle}>Crea tu cuenta</Text>
            
            <ErrorText error={error} />

            <Text style={styles.text}>Nombre de usuario</Text>

            <TextInput
                name="username"
                minLength={2}
                maxLength={10}
                iconName="person-circle-outline"
                placeholder="Nombre de usuario"
                control={control}
                errors = {errors}
                errorValidationStyle = {styles.errorValidation}
                inputStyle={styles.input}
            />

            <Text style={styles.text}>Nombre</Text>          
            <TextInput
                name="first_name"
                minLength={3}
                maxLength={10}
                iconName="person-outline"
                placeholder="Nombre"
                control={control}
                errors = {errors}
                errorValidationStyle = {styles.errorValidation}
                inputStyle={styles.input}
            />

            <Text style={styles.text}>Apellido</Text>
            <TextInput
                name="last_name"
                minLength={3}
                maxLength={15}
                iconName="person-outline"
                placeholder="Apellido"
                control={control}
                errors = {errors}
                errorValidationStyle = {styles.errorValidation}
                inputStyle={styles.input}
            />

            <Text style={styles.text}>Celular</Text>
            <TextInput
                name="personal_phone"
                keyboardType="phone-pad"
                minLength={10}
                maxLength={10}
                iconName="phone-portrait-outline"
                placeholder="Celular"
                control={control}
                errors = {errors}
                errorValidationStyle = {styles.errorValidation}
                inputStyle={styles.input}
            />

            <Text style={styles.text}>Dirección</Text>
            <TextInput
                name="address"
                minLength={5}
                maxLength={30}
                iconName="map-outline"
                placeholder="Dirección"
                control={control}
                errors = {errors}
                errorValidationStyle = {styles.errorValidation}
                inputStyle={styles.input}
            />

            <Text style={styles.text}>Cédula</Text>
            <TextInput
                name="cedula"
                keyboardType="phone-pad"
                required= {false}
                minLength={10}
                maxLength={10}
                iconName="card-outline"
                placeholder="Cédula (Opcional)"
                control={control}
                errors = {errors}
                errorValidationStyle = {styles.errorValidation}
                inputStyle={styles.input}
            />

            <Text style={styles.text}>Correo Electrónico</Text>
            <EmailInput 
                name="email"
                control={ control }
                errors={ errors }
                placeholder="E-mail"
                errorValidationStyle={styles.errorValidation}
                inputStyle={ styles.input }
            />
            <Text style={styles.text}>Fecha de nacimiento</Text>
            <DateInput
                
                name="birthdate"
                //required={false}
                value={fecha}
                iconName="calendar-outline"
                placeholder="Fecha de nacimiento (Opcional)"
                control={control}
                errors = {errors}
                errorValidationStyle = {styles.errorValidation}
                inputStyle={styles.input}
                dateSelect = { showDatePicker }
            />

            <Text style={styles.text}>Teléfono</Text>
            <TextInput
                name="home_phone"
                keyboardType='phone-pad'
                required= {false}
                minLength={7}
                maxLength={7}
                iconName="call-outline"
                placeholder="Teléfono (Opcional)"
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
            
            
            {datePicker && (
          <DateTimePicker
            
            maximumDate={new Date("2007","01","01")}
            minimumDate={new Date("1933","01","01")}
            value={date}
            mode={'date'}
            display='default'
            is24Hour={true}
            onChange={onDateSelected}
            style={styles.datePicker}
          />
        )}
 
        
 
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
                    
        
        </View>
    );
}

export default Signup;

