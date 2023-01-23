import * as ImagePicker from 'expo-image-picker';
import React, {useState, useEffect, useRef, Component} from "react";
import { ScrollView, View, Text, Modal, Button, TouchableOpacity } from 'react-native';
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
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        type:'image',
      });
  
      console.log(result); 
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };

  const handleUploadPhoto = async () => {
      try {
        setLoading(true);
        const file = await fetch(image)
        const blob = await file.blob()
        const message = await updateImage(blob);
        console.log(message)
        alert(message);
        console.log(e.message)
        Toast.show(
            message,
            {
            }
        )
    } catch (e) {
        setError(e.message);
        alert(e.message);
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
