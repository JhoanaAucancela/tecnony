import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ServicesNavigation from "./ServicesNavigations";
import InviteNavigation from "./InviteNavigations";

const AppNavigation = ({ userToken }) => {
    return (
        <NavigationContainer>
              {userToken == null ? <InviteNavigation /> : <ServicesNavigation />}
              
        </NavigationContainer>
    )
}

export default AppNavigation;