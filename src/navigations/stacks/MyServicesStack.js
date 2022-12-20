import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyServices from "../../screens/MyServices";


const Stack = createNativeStackNavigator();

export default function MyServicesStack(){
    return(
        <Stack.Navigator>
           
            <Stack.Screen 
                name="MyServices" 
                component={MyServices}
                options={{ 
                    title:"",
                    headerShown: false,
                 }}    
            />
            
        </Stack.Navigator>
    );
}