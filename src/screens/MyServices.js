import React from 'react';
import { View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


const MyServices = () => {
    return(
        <View style={styles.container}>
        <View>
            <Text style= {styles.text}>My Services</Text>
        </View>
    </View>  
    );
};

export default MyServices;

const styles =  EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'$authBg',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '$primary',
        fontWeight: '$fontWeight600', 
     },
});