import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Services from "../../screens/Services";
import ViewServices from "../../screens/ViewServices";
import Auxialiar from "../../screens/auxiliar";
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

            <Stack.Screen  name="ViewServices" component={ViewServices}
                options={{ 
                    title: "Detalles del servicio",
                    headerTitleAlign: "center",
                    headerStyle: styles.headerStyle,
                    headerTintColor: styles.header.color,
                    headerTitleStyle: {
                        fontFamily: styles.header.fontFamily,
                        
                    }
                }}
            />
            <Stack.Screen name="Auxialiar" component={Auxialiar}
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