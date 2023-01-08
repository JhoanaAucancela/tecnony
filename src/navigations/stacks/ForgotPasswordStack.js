import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from "../../screens/ForgotPassword";
import EStyleSheet from "react-native-extended-stylesheet";

const Stack = createNativeStackNavigator();

export default function ForgotPasswordStack(){
    return(
        <Stack.Navigator>
            
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
}

const styles =  EStyleSheet.create({
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