import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from "../../screens/Profile";
import EStyleSheet from 'react-native-extended-stylesheet';

const Stack = createNativeStackNavigator();

export default function ProfileStack(){
    return(
        <Stack.Navigator>
            
            <Stack.Screen name="Profile" component={Profile}
                options={{ 
                    title:"",
                    headerShown: false,
                 }}    
            />
        
        </Stack.Navigator>
    );
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