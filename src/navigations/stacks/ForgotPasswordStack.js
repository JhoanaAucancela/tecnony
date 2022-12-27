import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from "../../screens/ForgotPassword";

const Stack = createNativeStackNavigator();

export default function ForgotPasswordStack(){
    return(
        <Stack.Navigator>
            
            <Stack.Screen 
                name="ForgotPassword" 
                component={ForgotPassword}
                options={{ 
                    headerBackTitle: "",
                    title: "",
                    headerShown: false,
                 }}
            />
        </Stack.Navigator>
    );
}