import * as React from 'react';
import { Controller } from 'react-hook-form';
import {Icon, Input, Text} from 'react-native-elements';

export default function TextInputValue2({ name, required = true, iconName, placeholder, control, errors, inputStyle, errorValidationStyle, value }){
    return(
        <>
            <Controller
                control={control}
                rules = {{ 
                    required,
                }}
                
                render={({ field: { onBlur, onChange, defaultValue }}) => (
                    <Input
                        onChange={onChange}
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
                defaultValue={value}
                name={name}
            />
            {errors[name] ?.type == "required" && <Text style={errorValidationStyle}>Campo requerido</Text>}
            
        </>
    );
}