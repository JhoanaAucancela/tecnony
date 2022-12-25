import React from 'react';
import { View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


import axios from "axios";
const baseURL = "http://192.168.0.104:8000/api/v1/hiring/show";

const MyServices = () => {

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}`).then((response) => {
        setPost(response.data.data.service);
        });
    }, []);
    
      if (!post) return <Text>No fue posible obtener los servicios</Text>

    return(
        <View style={styles.container}>
        <View>
            <Text style= {styles.text}>My Services</Text>

            {
                psot.map((item, index) => (
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