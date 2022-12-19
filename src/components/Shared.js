import React from "react";
import { ActivityIndicator, View } from "react-native";
import {Text} from "react-native-elements";
import EStyleSheet from "react-native-extended-stylesheet";

export const ErrorText = ({ error }) => {
    return <Text style = { styles.errorText }>{ error }</Text>
}

export const ActivityLoader = () => {
    return (
        <View style = {{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator color= "#f29866" size="large" />
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