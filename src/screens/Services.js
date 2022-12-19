import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import { Avatar, Icon } from "react-native-elements";
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
            <Text style={styles.titleX}>Servicios</Text>
            <ScrollView>

                   
                    <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                        <Card.Title>Mrs.</Card.Title>
                        <View style={{ flexDirection: "row"}}>
                            <View style={{ width:'40%'}}>
                                <Image
                                    source={{ uri: 'https://picsum.photos/id/1/200/300' }}
                                    style={{ width: 100, height: 150 }}
                                />
                            </View>
                            <View style={{ width:'60%'}}>
                                <Text style={styles.descripcion}>Descripción: </Text>
                                <Text style={styles.descripciontext}>In mollitia nihil quis. A ad sint repudiandae corrupti ipsam labore. Magni eos ipsum quaerat sequi iure quasi. Dolores sint voluptatibus aut quis earum aperiam quidem. Quibusdam sed et iusto ea.</Text>
                                
                                <Text style={styles.descripcion}>Precio: </Text>
                                <Text style={styles.descripciontext}>28.42</Text>
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


                    <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                        <Card.Title>Mrs.</Card.Title>
                        <View style={{ flexDirection: "row"}}>
                            <View style={{ width:'40%'}}>
                                <Image
                                    source={{ uri: 'https://picsum.photos/id/2/200/300' }}
                                    style={{ width: 100, height: 150 }}
                                />
                            </View>
                            <View style={{ width:'60%'}}>
                                <Text style={styles.descripcion}>Descripción: </Text>
                                <Text style={styles.descripciontext}>Consequatur autem ullam incidunt quia culpa. Quia ea dolores est temporibus nostrum quas sit. Harum culpa cumque eaque similique quisquam deserunt et laboriosam.</Text>
                                
                                <Text style={styles.descripcion}>Precio: </Text>
                                <Text style={styles.descripciontext}>45.47</Text>
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


                    <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                        <Card.Title>Mrs.</Card.Title>
                        <View style={{ flexDirection: "row"}}>
                            <View style={{ width:'40%'}}>
                                <Image
                                    source={{ uri: 'https://picsum.photos/id/4/200/300' }}
                                    style={{ width: 100, height: 150 }}
                                />
                            </View>
                            <View style={{ width:'60%'}}>
                                <Text style={styles.descripcion}>Descripción: </Text>
                                <Text style={styles.descripciontext}>Aut sit molestias non in pariatur id cum. Neque aut rerum qui velit facere. Impedit distinctio possimus saepe. Error non ipsa eligendi deleniti est quo.</Text>
                                
                                <Text style={styles.descripcion}>Precio: </Text>
                                <Text style={styles.descripciontext}>48.17</Text>
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


                    <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                        <Card.Title>Dr.</Card.Title>
                        <View style={{ flexDirection: "row"}}>
                            <View style={{ width:'40%'}}>
                                <Image
                                    source={{ uri: 'https://picsum.photos/id/5/200/300' }}
                                    style={{ width: 100, height: 150 }}
                                />
                            </View>
                            <View style={{ width:'60%'}}>
                                <Text style={styles.descripcion}>Descripción: </Text>
                                <Text style={styles.descripciontext}>Aut sit molestias non in pariatur id cum. Neque aut rerum qui velit facere. Impedit distinctio possimus saepe. Error non ipsa eligendi deleniti est quo.</Text>
                                
                                <Text style={styles.descripcion}>Precio: </Text>
                                <Text style={styles.descripciontext}>48.17</Text>
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

                    <Card  containerStyle={{borderRadius: 15,alignItems: 'center'}}>
                        <Card.Title>Dr.</Card.Title>
                        <View style={{ flexDirection: "row"}}>
                            <View style={{ width:'40%'}}>
                                <Image
                                    source={{ uri: 'https://picsum.photos/id/6/200/300' }}
                                    style={{ width: 100, height: 150 }}
                                />
                            </View>
                            <View style={{ width:'60%'}}>
                                <Text style={styles.descripcion}>Descripción: </Text>
                                <Text style={styles.descripciontext}>Itaque inventore quod ducimus omnis in. Non tempora quod cum laboriosam enim id. Tempore non officia aut nam aliquid explicabo dolor perspiciatis. Est perspiciatis excepturi omnis debitis quae.</Text>
                                
                                <Text style={styles.descripcion}>Precio: </Text>
                                <Text style={styles.descripciontext}>48.17</Text>
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
                    <Text>  </Text>
                    <Text>  </Text>
                    <Text>  </Text>
                    <Text>  </Text>
            </ScrollView>
        </View>  
    );
};

export default Services;

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