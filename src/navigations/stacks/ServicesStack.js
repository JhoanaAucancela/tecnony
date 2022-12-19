import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Services from "../../screens/Services";

const Stack = createNativeStackNavigator();

export default function ServicesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Services" 
                component={Services}
                options={{ 
                    title: "",
                    headerShown: false,
                 }}
            />
        </Stack.Navigator>
    )
}
