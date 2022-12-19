import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../../screens/Home";



const Stack = createNativeStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator>
            
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{ 
                    headerBackTitle: "",
                    title: "",
                    headerShown: false,
                 }}
            />
        
        </Stack.Navigator>
    );
}