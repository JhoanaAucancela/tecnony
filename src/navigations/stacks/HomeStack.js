import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../../screens/Home";

import Profile from "../../screens/Profile";
import Services from "../../screens/Services";
import Myservices from "../../screens/MyServices";
import Opinions from "../../screens/Opinions";


const Stack = createNativeStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator>
            
            <Stack.Screen name="Home" component={Home}
                options={{ 
                    headerBackTitle: "",
                    title: "",
                    headerShown: false,
                 }}
            />

            <Stack.Screen name="Profile" component={Profile}
                options={{ 
                    headerBackTitle: "",
                    title: "",
                    headerShown: false,
                 }}
            />

            <Stack.Screen name="Services" component={Services}
                options={{ 
                    headerBackTitle: "",
                    title: "",
                    headerShown: false,
                 }}
            />

            <Stack.Screen name="Myservices" component={Myservices}
                options={{ 
                    headerBackTitle: "",
                    title: "",
                    headerShown: false,
                 }}
            />

            <Stack.Screen name="Opinions" component={Opinions}
                options={{ 
                    headerBackTitle: "",
                    title: "",
                    headerShown: false,
                 }}
            />


        
        </Stack.Navigator>
    );
}