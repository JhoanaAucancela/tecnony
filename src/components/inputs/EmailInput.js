import * as React from 'react';
import { Controller } from 'react-hook-form';
import {Icon, Input, Text} from 'react-native-elements';

export default function EmailInput({ name, control, errors, inputStyle, errorValidationStyle }){
    return(
        <>
            <Controller
                control={control}
                rules = {{ 
                    required: true,
                    pattern: /^\S+@\S+$/i,
                }}

                name={name}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value} 
                        style={inputStyle}
                        placeholderTextColor="gray"
                        placeholder='E-mail'
                        leftIcon={
                            <Icon name='at' type='ionicon' size={24} color="black" />
                        }
                        keyboardType = "email-address"
                    />
                )}
            />
            {errors[name] ?.type== "required" &&<Text style={errorValidationStyle}>Campo requerido</Text>}
            {errors[name] ?.type== "pattern" &&<Text style={errorValidationStyle}>El formato del correo no es valido</Text>}
        </>
    );
}