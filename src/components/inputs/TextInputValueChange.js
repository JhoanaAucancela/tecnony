import * as React from 'react';
import { Controller } from 'react-hook-form';
import {Icon, Input, Text} from 'react-native-elements';

export default function TextInputValueChange({ name, required = true, iconName, placeholder, control, errors, inputStyle, errorValidationStyle, value, onChangeText }){
    return(
        <>
            <Controller
                control={control}
                rules = {{ 
                    required,
                }}
                defaultValue={value}
                render={({ field: { onBlur, defaultValue }}) => (
                    <Input
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