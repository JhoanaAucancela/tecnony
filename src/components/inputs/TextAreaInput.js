import * as React from 'react';
import { Controller } from 'react-hook-form';
import {Icon, Input, Text} from 'react-native-elements';

export default function TextAreaInput({ name, required = true, minLength, maxLength, iconName, placeholder, control, errors, inputStyle, errorValidationStyle }){
    return(
        <>
            <Controller
                control={control}
                rules = {{ 
                    required,
                    minLength,
                    maxLength,
                    
                }}
                render={({ field: { onChange, onBlur, value} }) => (
                    <Input
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={onChange}
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
            {errors[name] ?.type == "minLength" && <Text style={errorValidationStyle}>Logitud demasiado corta</Text>}
            {errors[name] ?.type == "maxLength" && <Text style={errorValidationStyle}>Logitud demasiado larga</Text>}
            
        </>
    );
}