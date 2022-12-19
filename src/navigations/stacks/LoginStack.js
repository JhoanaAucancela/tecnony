import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../../screens/auth/Login";


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
            
        </Stack.Navigator>
    );
}