import * as React from 'react';
import { Controller } from 'react-hook-form';
import {Icon, Input, Text} from 'react-native-elements';

export default function TextInput({ name, required = true, iconName, placeholder, control, errors, inputStyle, errorValidationStyle }){
    return(
        <>
            <Controller
                control={control}
                rules = {{ 
                    required,
                    
                }}
                render={({ field: { onChange, onBlur, value} }) => (
                    <Input
                        
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
            
            
        </>
    );
}