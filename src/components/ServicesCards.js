import React from "react";
import { View } from "react-native";
import { Card, Image } from 'react-native-elements';


const ServicesCards = (services = []) => {
    return(
        <View >
            {
                services.map((item, index) => (
                    <View key={index} >
                        <Card>
                            <Image
                                resizeMode="cover" 
                                source={{ uri: item.image }} 
                                style = {styles.image}
                            />
                        </Card>
                    </View>
                ))
            }
            
        </View>
    )
}

export default ServicesCards