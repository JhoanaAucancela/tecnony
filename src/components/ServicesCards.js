import React from "react";
import { View } from "react-native";
import { Card, Image } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';


const ServicesCards = (servic = []) => {
    return(
        <View >
            {
                servic.map((item, index) => (
                    <View key={index} >
                
                        <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                            <Card.Title>{item.name}</Card.Title>
                            <View style={{ flexDirection: "row"}}>
                                <View style={{ width:'40%'}}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={{ width: 100, height: 150 }}
                                    />
                                </View>
                                <View style={{ width:'60%'}}>
                                    <Text style={styles.descripcion}>Descripción: </Text>
                                    <Text style={styles.descripciontext}>{item.description}</Text>
                                    
                                    <Text style={styles.descripcion}>Precio: </Text>
                                    <Text style={styles.descripciontext}>{item.price}</Text>
                                    <Text>   </Text>
                                    <Text style={styles.button}> 
                                    <Icon
                                        name="cart"
                                        color='white'
                                        type = "ionicon" 
                                    />
                                    </Text>
                                </View>
                            </View>  
                        </Card>
                    
                    
                    </View>
                ))
            }
            
        </View>
    )
}

export default ServicesCards;

const styles =  EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'$white',
        alignItems:'center',

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
    descripcion:{
        fontFamily:'$700Bold',
    },

    descripciontext:{
        fontFamily:'$400Regular',
    },
    titleX:{
        fontFamily: '$700Bold',
        fontSize: 24,
        color:'$primary',
    },
    button: {
        backgroundColor:'#3F88C5', 
        padding:'3%', 
        paddingLeft:'7%',
        paddingRight:'7%',
        textAlign: 'center', 
        borderRadius: 15, 
        color:"$white", 
        fontWeight: 'bold'
    },
});