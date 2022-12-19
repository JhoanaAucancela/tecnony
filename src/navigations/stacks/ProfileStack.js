import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from "../../screens/Profile";
import EditProfile from "../../screens/EditProfile";
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

            <Stack.Screen name="EditProfile" component={EditProfile}
            options={{ 
                    title:"Editar Perfil",
                    headerTitleAlign: "center",
                    headerStyle: styles.headerStyle,
                    headerTintColor: styles.header.color,
                    headerTitleStyle: {
                        fontFamily: styles.header.fontFamily,
                        
                    }
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