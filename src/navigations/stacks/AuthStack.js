import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EStyleSheet from "react-native-extended-stylesheet";
import * as Application from 'expo-application';
import Login from "../../screens/auth/Login";
import Signup from "../../screens/auth/Signup";
import ForgotPassword from "../../screens/ForgotPassword";

const Stack = createNativeStackNavigator();

const AuthStack = ({ appName }) => {
    return (
        <Stack.Navigator
            initialRouteName="Information_1"
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
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen 
                name="ForgotPassword" 
                component={ForgotPassword}
                options={{ 
                    headerBackTitle: "",
                    title: "",
                    headerShown: false,
                 }}
            />
            
        </Stack.Navigator>
    );
}

AuthStack.defaultProps = {
    //    appName: Application.name,
    appName: "Tecnony",
}

export default AuthStack;

const styles = EStyleSheet.create({
    headerStyle:{
        backgroundColor: "$authBg",
    },

    header: {
        color: '$primary',
        fontFamily: '$700Bold',
    },
});