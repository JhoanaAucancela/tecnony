import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Opinions from "../../screens/Opinions";


const Stack = createNativeStackNavigator();

export default function OpinionsStack(){
    return(
        <Stack.Navigator>
           
            <Stack.Screen 
                name="Opinions" 
                component={Opinions}
                options={{ 
                    title:"",
                    headerShown: false,
                 }}    
            />
            
        </Stack.Navigator>
    );
}