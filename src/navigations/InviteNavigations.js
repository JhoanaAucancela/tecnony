import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContentInvite from "../components/DrawerContentInvite";

import { Icon } from "react-native-elements";
import EStyleSheet from "react-native-extended-stylesheet";

import ServicesStack from "./stacks/ServicesStack";
import LoginStack from "./stacks/LoginStack";
import SignupStack from "./stacks/SignupStack";

const BottomTabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabBar = ({ appName }) => {
    return(
        <BottomTabs.Navigator
            initialRouteName="Services"
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({focused}) => showIcon( route, focused ),
               
                tabBarStyle: {
                    alignItems: "center",
                    backgroundColor: styles.tabStyles.backgroundColor,
                    paddingTop: 5,
                    position: "absolute",
                    
                }
            })}
        >
            <BottomTabs.Screen 
                name="Services"
                component={ServicesStack}
                options={{ 
                    title: "",
                    headerTitle: appName,
                    headerTitleAlign: "center",
                    headerStyle: styles.headerStyle,
                    headerTintColor: styles.header.color,
                    headerTitleStyle: {
                        fontFamily: styles.header.fontFamily,
                        
                    }
                 }}
            />

            <BottomTabs.Screen 
                name="Login"
                component={LoginStack}
                options={{ 
                    title: "",
                    headerTitle: appName,
                    headerTitleAlign: "center",
                    headerStyle: styles.headerStyle,
                    headerTintColor: styles.header.color,
                    headerTitleStyle: {
                        fontFamily: styles.header.fontFamily,
                    }
                 }}
            />

            <BottomTabs.Screen 
                name="Signup"
                component={SignupStack}
                options={{ 
                    title: "",
                    headerTitle: appName,
                    headerTitleAlign: "center",
                    headerStyle: styles.headerStyle,
                    headerTintColor: styles.header.color,
                    headerTitleStyle: {
                        fontFamily: styles.header.fontFamily,
                    }
                 }}
            />
        </BottomTabs.Navigator>
    );
}

TabBar.defaultProps = {
    appName: "Tecnony",
    //appName: Application.name,
}

const showIcon = (route, focused) => {
    let icon = "";

    switch (route.name){
        case "Services": {
            icon = "home";
            break;
        }

        case "Login": {
            icon = "person";
            break;
        }
        case "Signup": {
            icon = "person-add";
            break;
        }
    }
    return <Icon name={icon} type="ionicon" color={focused ? "white" : "black"} style= {{ marginTop: 2 }} />
}



export default function ServicesNavigation(){
    return (
        <Drawer.Navigator
            
            drawerContent={(props) => <DrawerContentInvite {...props} />}
            screenOptions={{ 
                headerShown:false,
             }}
        >
            <Drawer.Screen
                name=" sas"
                component={TabBar}
                
            />

        </Drawer.Navigator>
    );
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