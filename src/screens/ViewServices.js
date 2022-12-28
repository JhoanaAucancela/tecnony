import React from 'react';
import { View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import axios from "axios";
import { Card, Image, Icon, Avatar } from 'react-native-elements';


import { ErrorText, ActivityLoader } from "../components/Shared";

const baseURL = "https://tecnony-v1.herokuapp.com/api/v1/view-service";


export default function ViewServices() {

    const [post, setPost] = React.useState([]);
    const [tecnico, setTecnico] = React.useState([]);

    
      const fetchCharacters = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPost(data.data.service))
            .catch(error => console.log(error))
      };


      const fetchTecnico = (url) => {
      fetch(url)
          .then(response => response.json())
          .then(data => setTecnico(data.data.created_by))
          .catch(error => console.log(error))
      };
  
      React.useEffect(() => {
          fetchCharacters(`${baseURL}/1`);
          fetchTecnico(`${baseURL}/1`);
      }, []) 
  

    return(

        <View style={styles.container}>
           
            <View style={{ alignItems: 'center' }}>
                <Text style= {styles.titleX}>{post.name}</Text>
                <View style= {styles.lineStyle}></View>
            </View>
            
            <View style={{ flexDirection: "row", marginLeft: '4%', marginRight:'4%' }}>
                <View style={{ width:'40%'}}>
                    <Image
                        source={{ uri: post.image }}
                        style={{ width: '90%', height: 170 }}
                    />
                </View>

                <View style={{ width:'60%'}}>
                    <Text style ={styles.descripcion}>Categoria: <Text style ={styles.descripciontext}>{post.categories}</Text></Text>
                    <Text style ={styles.descripcion}>Descripción: <Text style ={styles.descripciontext}>{post.description}</Text></Text>
                    <Text style ={styles.descripcion}>Precio: <Text style ={styles.descripciontext}>{post.price}</Text></Text>
                </View>
            </View>
            <Text> </Text>
            <Text style = {styles.text}>Técnico</Text>
            <View style = {{ alignItems: 'center' }}>  
                <Card containerStyle={{borderRadius: 15}}>
                    <View style = {{ flexDirection: "row" }}>
                        <View style={{ width:'20%'}}>
                            <Avatar
                                rounded
                                size="medium"
                                source={{ uri: tecnico.avatar }}
                            />
                        </View>
                        <View style={{ width:'75%'}}>
                            <Text style ={styles.descripcion}>Nombre: <Text style ={styles.descripciontext}>{tecnico.first_name} {tecnico.last_name}</Text></Text>
                            <Text style ={styles.descripcion}>E-mail: <Text style ={styles.descripciontext}>{tecnico.email}</Text></Text>
                            <Text style ={styles.descripcion}>Teléfono: <Text style ={styles.descripciontext}>{tecnico.personal_phone}</Text></Text>
                        </View>
                    </View>
                </Card>
            </View>
                
            
            <View style={{ alignItems: 'center', padding:'5%' }}>
                
                <Text style={styles.button} //</View>onPress={() => verServicios()}
                >
                    <Icon
                        //onPress={() => verServicios() }
                        name="cart"
                        color='white'
                        type = "ionicon" 
                    />
                </Text>
            </View>
    </View>
    
        
    );
};


const styles =  EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'$authBg',
    },
    text: {
        color: '$primary',
        fontWeight: '$fontWeight600', 
        marginLeft: '4%'
     },

     title:{
        fontFamily: '$700Bold',
        fontSize: 16,
        color:'$primary',
    },
    titleX:{
        fontFamily: '$700Bold',
        fontSize: 24,
        color:'$primary',
    },
    descripcion:{
        fontFamily:'$700Bold',
    },

    descripciontext:{
        fontFamily:'$400Regular',
        color:'#273469',
    },
    lineStyle:{ 
        borderWidth: 0.5, 
        borderColor:'#CDCACA', 
        margin:10,
        paddingLeft: "90%"

    },
    button: {
        backgroundColor:'#3F88C5', 
        padding:'3%', 
        paddingLeft:'10%',
        paddingRight:'10%',
        textAlign: 'center', 
        borderRadius: 15, 
        color:"$white", 
        fontWeight: 'bold'
    },

});

