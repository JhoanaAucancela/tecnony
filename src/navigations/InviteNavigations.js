import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContentInvite from "../components/DrawerContentInvite";
import EStyleSheet from "react-native-extended-stylesheet";

import ServicesInvitadoStack from "./stacks/ServicesInvitadoStack";
import LoginStack from "./stacks/LoginStack";
import SignupStack from "./stacks/SignupStack";
import ForgotPasswordStack from "./stacks/ForgotPasswordStack";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const TabBar = ({ appName }) => {
    return (
        <Stack.Navigator
            initialRouteName="ServicesInvitadoStack"
            screenOptions={{ 
                headerBackTitle: "",
                headerShown: true,
                headerTitle: appName,
                headerStyle: styles.headerStyle,
                headerShadowVisible: false,
                alignItems: "center",
                headerTintColor: styles.header.color,
                headerTitleStyle: {
                    fontFamily: styles.header.fontFamily,
                    fontWeight: styles.header.fontWeight,
                }
             }}
        >
            <Stack.Screen name="ServicesInvitadoStack" component={ServicesInvitadoStack} 
                options={{ 
                    headerBackTitle: "",
                    title: "",
                    headerShown: false,
                 }}
            />
            <Stack.Screen name="Login" component={LoginStack} 
                options={{ 
                    headerBackTitle: "",
                    title: "",
                    headerShown: false,
                 }}
            />
            <Stack.Screen name="Signup" component={SignupStack} 
                options={{ 
                    headerBackTitle: "",
                    title: "",
                    headerShown: false,
                 }}
            />
             <Stack.Screen name="ForgotPassword" component={ForgotPasswordStack} 
                options={{ 
                    headerBackTitle: "",
                    title: "",
                    headerShown: false,
                 }}
             />
            
            
            

            
        </Stack.Navigator>
    );
}


export default function ServicesNavigation(){
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContentInvite {...props} />}
            screenOptions={{ 
                headerShown:true,
             }}
        >
            <Drawer.Screen
                name="TabBar"
                component={TabBar}
                options={{ 
                    title: "",
                    headerTitle: "Tecnony",
                    headerTitleAlign: "center",
                    headerStyle: styles.headerStyle,
                    headerTintColor: styles.header.color,
                    headerTitleStyle: {
                        fontFamily: styles.header.fontFamily,
                    }
                 }}
            />

        </Drawer.Navigator>
    );
}

TabBar.defaultProps = {
    appName: "Tecnony",
}




const styles =  EStyleSheet.create({
    tabStyles: {
        backgroundColor: '#3F88C5',
    },
    headerStyle: {
        backgroundColor: '$primary',
        shadowColor: '$primary',
    },
    header:{
        color: "$white",
        fontFamily: '$700Bold',

    }
});