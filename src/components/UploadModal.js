import React, {useState} from 'react';
import {Text, Modal, View, Button, ScrollView} from 'react-native';
import { Icon, Image } from "react-native-elements";
import Toast from "react-native-root-toast";
import { ErrorText, ActivityLoader } from "../components/Shared";
import { useForm } from "react-hook-form";
//import { updateService } from "../services/AuthService";
//import styles from "../styles/auth";
import EStyleSheet from 'react-native-extended-stylesheet';

import * as ImagePicker from 'expo-image-picker';

export default function FormModal({isModalOpen, setIsModalOpen, ID}){
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    /////////////////
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });

        console.log(result);
        console.log(image);

        if (!result.canceled) {
        setImage(result.assets[0].uri);
        }
    };
    ////////////////////
/*    const { control, handleSubmit, formState: { errors }} = useForm();

    const _updateService = async (data) => {
        try {
            setLoading(true);
            const message = await updateService(data, ID);
            setIsModalOpen(!isModalOpen);
            Toast.show(
                message,
                {
                }
            
            )
        } catch (e) {
            setError(e.message);
        }finally{
            setLoading(false);
        }
    }
*/
    const modalContainerStyle ={
        flex: 1,
        justifyContent: 'flex-end',
    }
    const modalStyle = {
        backgroundColor:'white',
        //alignItems:'center',
        margin: 20,
        borderRadius: 16,
        paddingHorizontal: 30,
        paddingVertical: 20,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }

    const btnStyle ={
        backgroundColor:'#3F88C5', 
        padding:'3%', 
        paddingLeft:'7%',
        paddingRight:'7%',
        textAlign: 'center', 
        borderRadius: 15, 
        color:"$white", 
        fontWeight: 'bold'
    } 
    
    return (
        <>
            <Modal visible={isModalOpen} transparent= {true} animationType={'slide'}>
                <View style = {modalContainerStyle}>
                {loading == true ? <ActivityLoader /> : null}
                    <View style = {modalStyle}>
                    <Icon
                        name="close"
                        type="ionicon"
                        size= {30}
                        color= "black"
                        style={{ marginTop: 2, marginRight: 100 }}
                        onPress={() => setIsModalOpen(!setIsModalOpen)}
                    />
                    <Text style={styles.titleX}>Subir foto</Text>
                    <Text>  </Text>
                    <Text
                                 onPress={pickImage}
                                style={styles.button}
                            >
                            <Icon
                                    name="camera"
                                    color='white'
                                    type = "ionicon" 
                            />
                    </Text>
                    {image && 
                    <View>
                    <Text>  </Text>
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                    <Text>  </Text>
                    <Text  style={styles.button}>
                        Guardar Cambios
                    </Text>
                    </View>
                    }

                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles =  EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'$authBg',
 
    },
    text: {
        color: '$primary',
        fontWeight: '$fontWeight600', 
        fontFamily: '$400Regular',
     },

     title:{
        fontFamily: '$700Bold',
        fontSize: 16,
        color:'$primary',
    },

    titleX:{
        marginLeft: '5%',
        marginTop:'5%',
        fontFamily: '$700Bold',
        fontSize: 22,
        color:'$primary'

    },
    input: {
        fontFamily: '$400Regular',
        color:'$black',
        fontWeight:'bold,',
        padding: 10,
        width: '100%',
        marginTop: 10,
        borderRadius: 15,
        backgroundColor:'#F5F9FF',
        borderColor: 'transparent',
    },
    errorValidation: {
        color: "$red",
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