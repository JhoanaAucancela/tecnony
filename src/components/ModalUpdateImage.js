import * as ImagePicker from 'expo-image-picker';
import React, {useState, useEffect, useRef, Component} from "react";
import { View, Text, Modal, Button, TouchableOpacity } from 'react-native';
import { Avatar, Icon, Image} from "react-native-elements";
import { useForm } from "react-hook-form";
import Toast from "react-native-root-toast";
import { ErrorText, ActivityLoader } from "../components/Shared";
import {  updateImage } from "../services/AuthService";

const modalContainerStyle ={
    flex: 1,
    justifyContent: 'center'
}
const modalStyle = {
    backgroundColor:'#F5F9FF',
    alignItems:'center',
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



export default function ModalUpdateImage ({isModalOpen, setIsModalOpen}) {
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const { control, handleSubmit, formState: { errors }} = useForm();

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        type:'image',
      });
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };

  const handleUploadPhoto = async () => {

    try {
        setLoading(true);
        const data = new FormData();
        data.append('image', {
            name: 'image.jpeg',
            type: 'image/jpeg',
            uri: image
          }, "image.jpeg");
        const message = await updateImage(data)
        setIsModalOpen(!setIsModalOpen)
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
  };

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
                    <ErrorText error={error} />
                <Button title="Seleccionar Foto" onPress={pickImage} />
            
                        {image && <View>
                            <Text>  </Text>
                            
                            <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius:15 }} />
                            <Text>  </Text>
                            <Button title="Guardar Foto" onPress={handleSubmit(handleUploadPhoto)} />
                        </View>
                        }
                </View>
            </View>
        </Modal>
    </>
  )
}
