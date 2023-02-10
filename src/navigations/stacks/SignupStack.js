import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from "../../screens/auth/Signup";

const Stack = createNativeStackNavigator();

export default function SignupStack(){
    return(
        <Stack.Navigator>
            
            <Stack.Screen 
                name="Signup" 
                component={Signup}
                options={{ 
                    headerBackTitle: "",
                    title: "",
                    headerShown: false,
                 }}
            />
        </Stack.Navigator>
    );
}