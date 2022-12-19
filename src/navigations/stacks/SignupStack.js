import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from "../../screens/auth/Signup";


import { Icon } from "react-native-elements";
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