import React from "react";
import { ActivityIndicator, View } from "react-native";
import {Text} from "react-native-elements";
import EStyleSheet from "react-native-extended-stylesheet";

export const ErrorText = ({ error }) => {
    return <Text style = { styles.errorText }>{ error }</Text>
}

const modalContainerStyle ={
    flex: 1,
    position: 'absolute', 
    backgroundColor:'rgba(52, 52, 52, 0.8)',
    zIndex: 1,
    justifyContent: 'center',
    alignItems:'center',
    width:"100%",
    height:"100%"
}


export const ActivityLoader = () => {
    return (
        <View style = {modalContainerStyle}>
            <ActivityIndicator color= "#11517C" size="large" />
        </View>
    );
}

const styles = EStyleSheet.create({
    errorText: {
        marginBottom: 8,
        color: "$red",
        fontFamily: '$400Regular',
    }
})