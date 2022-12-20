import React from 'react';
import { View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


const Opinions = () => {
    return(
        <View style={styles.container}>
        <View>
            <Text style= {styles.text}>Opinions</Text>
        </View>
    </View>  
    );
};

export default Opinions;

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