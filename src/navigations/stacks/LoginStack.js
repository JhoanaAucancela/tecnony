import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../../screens/auth/Login";
import ForgotPassword from "../../screens/ForgotPassword";
import EStyleSheet from 'react-native-extended-stylesheet';

import { Icon } from "react-native-elements";
const Stack = createNativeStackNavigator();

export default function LoginStack(){
    return(
        <Stack.Navigator>
           
            <Stack.Screen 
                name="Login" 
                component={Login}
                options={{ 
                    title:"",
                    headerShown: false,
                 }}    
            />
            <Stack.Screen 
                name="ForgotPassword" 
                component={ForgotPassword}
                options={{ 
                    title: "Recuperar Cuenta",
                    headerTitleAlign: "center",
                    headerStyle: styles.headerStyle,
                    headerTintColor: styles.header.color,
                    headerTitleStyle: {
                        fontFamily: styles.header.fontFamily,
                    }
                }}
            />
            
        </Stack.Navigator>
    );
}const styles =  EStyleSheet.create({
    tabStyles: {
        backgroundColor: '#3F88C5',
    },
    headerStyle: {
        backgroundColor: '#273469',
        shadowColor: '$primary',
    },
    header:{
        color: "$white",
        fontFamily: '$700Bold',

    }
});