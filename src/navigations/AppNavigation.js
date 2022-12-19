import React from "react";
//import AuthNavigation  from "./AuthNavigation";
import { NavigationContainer } from "@react-navigation/native";
import ServicesNavigation from "./ServicesNavigations";
import InviteNavigation from "./InviteNavigations";

// <ServicesNavigation />
const AppNavigation = ({ userToken }) => {
    return (
        <NavigationContainer>
              {userToken == null ? <InviteNavigation /> : <InviteNavigation />}
        </NavigationContainer>
    )
}

export default AppNavigation;