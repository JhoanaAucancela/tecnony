import React from "react";
import { View } from "react-native";
import { Card, Image } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';


const MyServicesCards = (Myservices = []) => {
    return(
        <View >
            {
                Myservices.map((item, index) => (
                    <View key={index} >
                           
                        <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                        <Card.Title>{item.name}</Card.Title>
                        <View style={{ flexDirection: "row"}}>
                        
                            <View>
                                <Text style={styles.descripcion}>Fecha: </Text>
                                <Text style={styles.descripciontext}>{item.date_issue}</Text>
                                
                                <Text style={styles.descripcion}>Descripción: </Text>
                                <Text style={styles.descripciontext}>{item.description_problem}</Text>
                                <Text>   </Text>
                                <Text style={styles.button}> 
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

export default MyServicesCards;

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