import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/DrawerContent";

import { Icon } from "react-native-elements";
import EStyleSheet from "react-native-extended-stylesheet";

import ServicesStack from "./stacks/ServicesStack";
import ProfileStack from "./stacks/ProfileStack";
import HomeStack from "./stacks/HomeStack";
import MyServicesStack from "./stacks/MyServicesStack"


const BottomTabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabBar = ({ appName }) => {
    return(
        <BottomTabs.Navigator
            initialRouteName="Home"
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({focused}) => showIcon( route, focused ),
                headerRight: () => menuIcon(navigation),
                tabBarStyle: {
                    alignItems: "center",
                    backgroundColor: styles.tabStyles.backgroundColor,
                    paddingTop: 5,
                    position: "absolute",
                    overflow: 'hidden',
                }
            })}
        >
            <BottomTabs.Screen 
                name="Home"
                component={HomeStack}
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
                name="MyServices"
                component={MyServicesStack}
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
                name="Account"
                component={ProfileStack}
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
        case "Home": {
            icon = "home";
            break;
        }

        case "Services": {
            icon = "construct";
            break;
        }
        case "MyServices": {
            icon = "basket";
            break;
        }
        case "Account": {
            icon = "person";
            break;
        }
    }
    return <Icon name={icon} type="ionicon" color={focused ? "white" : "black"} style= {{ marginTop: 2 }} />
}

const menuIcon = (navigation) => {
    return(
        <Icon
            name="menu"
            type="ionicon"
            size= {30}
            color= "white"
            style={{ marginTop: 2, marginRight: 10 }}
            onPress={() => navigation.toggleDrawer()}
        />
    )
}

export default function ServicesNavigation(){
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{ 
                headerShown:false,
             }}
        >
            <Drawer.Screen
                name="ButtonBar"
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