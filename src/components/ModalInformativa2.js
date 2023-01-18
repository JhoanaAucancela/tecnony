import React, {useState} from 'react';
import {Text, Modal, View, Button } from 'react-native';
import { Icon, Card, Image, Avatar } from "react-native-elements";
import styles from "../styles/informationStyle";
import ModalInformativa3 from './ModalInformativa3';


export default function ModalInformativa2({isModalOpen, setIsModalOpen}){

    const [isModalIOpen, setIsModalIOpen] = useState(false);
    
    
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

    return (
        <>
            <Modal visible={isModalOpen} transparent= {true} animationType={'slide'}>
                <View style = {modalContainerStyle}>
                    <View style = {modalStyle}>
                    
                        <Image 
                                style = {styles.imageLeft}
                                source = {require("../../assets/logo_retra.png")}
                            />
                        
                    
                       <View style={{  justifyContent: 'center', alignItems: 'center', }}>
                            <Image 
                                style = {styles.imageInformation2}
                                source = {require("../../assets/iconInformation2.png")}
                            />
                        </View>

                        <View style={styles.boxtext}>
                            <Text style={styles.titulo}>Solicita tu servicio</Text>
                            <Text style={styles.subtitulo}>Te brindamos los mejores servicios de calidad y seguridad.</Text>
                            <Text style={styles.boton} onPress={() => setIsModalOpen(!setIsModalOpen)}
                            >
                                Siguiente
                            </Text>

                            <ModalInformativa3
                                isModalOpen={isModalIOpen} 
                                setIsModalOpen={setIsModalIOpen} 
                            />
                        </View>
                        
                    </View>
                </View>
            </Modal>
        </>
    );
}

