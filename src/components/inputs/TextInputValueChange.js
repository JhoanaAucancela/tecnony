import * as React from 'react';
import { Controller } from 'react-hook-form';
import {Icon, Input, Text} from 'react-native-elements';

export default function TextInputValueChange({ name, required = true, minLength, maxLength, iconName, placeholder, control, errors, inputStyle, errorValidationStyle, value, onChangeText, keyboardType }){
    return(
        <>
            <Controller
                control={control}
                rules = {{ 
                    required,
                    minLength,
                    maxLength,  
                }}
                render={({ field: { onBlur }}) => (
                    <Input
                        keyboardType={keyboardType}
                        onChangeText={onChangeText}
                        onBlur={onBlur}
                        value={value}
                        style={inputStyle}
                        placeholder={placeholder}
                        placeholderTextColor="gray"
                        leftIcon={
                            <Icon name={iconName} type='ionicon' size={24} color="black" />
                        }
                    />
                )}
                name={name}
            />
            {errors[name] ?.type == "required" && <Text style={errorValidationStyle}>Campo requerido</Text>}
            
        </>
    );
}