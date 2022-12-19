import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { fetchServices } from '../services/ServicesService';
import { Card, Image } from 'react-native-elements';

const Services = () => {
    const  [services, setServices] = useState([]);
    useEffect (()=>{
       (async () => {
            const _services = await fetchServices();
            setServices(_services.data);
       })();
    }, []);

    
    return(
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text>Services</Text>
 
                </View>
            </ScrollView>
        </View>  
    );
};

export default Services;

const styles =  EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'$white',

    },
    services:{
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});