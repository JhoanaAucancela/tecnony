import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Services from "../../screens/Services";
import EStyleSheet from 'react-native-extended-stylesheet';

const Stack = createNativeStackNavigator();

export default function ServicesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Services" component={Services}
                options={{ 
                    title: "",
                    headerShown: false,
                 }}
            />

        </Stack.Navigator>
    )
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