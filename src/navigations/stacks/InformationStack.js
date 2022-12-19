import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EStyleSheet from "react-native-extended-stylesheet";
import Information_1 from "../../screens/Information_1";
import Information_2 from "../../screens/Information_2";
import Information_3 from "../../screens/Information_3";

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

            <Stack.Screen name="Information_1" component={Information_1} />
            <Stack.Screen name="Information_2" component={Information_2} />
            <Stack.Screen name="Information_3" component={Information_3} />
            
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