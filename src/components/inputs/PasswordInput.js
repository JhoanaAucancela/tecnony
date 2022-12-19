import * as React from 'react';
import { Controller } from 'react-hook-form';
import {Icon, Input, Text} from 'react-native-elements';

export default function PasswordInput({ name, control, errors, inputStyle, errorValidationStyle, secureEntry, toggleSecureEntry }){
    return(
        <>
            <Controller
                control={control}
                rules = {{ 
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value} 
                        style={inputStyle}
                        placeholderTextColor="black"
                        placeholder='Password'
                        leftIcon={
                            <Icon name='key' type='ionicon' size={24} color='black' />
                        }
                        rightIcon={
                            <Icon name='eye' type='ionicon' size={24} color='black' onPress={toggleSecureEntry} />
                        }
                        secureTextEntry = {secureEntry}
                    />
                )}
                name={name}
            />
            {errors[name] ?.type == "required" && <Text style={errorValidationStyle}>Campo requerido</Text>}
            {errors[name] ?.type == "minLength" && <Text style={errorValidationStyle}>Contraseña demasiado corta</Text>}
            {errors[name] ?.type == "maxLength" && <Text style={errorValidationStyle}>Contraseña demasiado larga</Text>}
        </>
    );
}