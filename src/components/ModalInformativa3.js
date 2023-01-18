import React, {useState} from 'react';
import {Text, Modal, View, Button } from 'react-native';
import { Icon, Card, Image, Avatar } from "react-native-elements";
import styles from "../styles/informationStyle";


export default function ModalInformativa3({isModalOpen, setIsModalOpen}){
    
    
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
                            style = {styles.imageInformation}
                            source = {require("../../assets/iconInformation3.png")}
                        />
                        </View>

                        <View style={styles.boxtext}>
                            <Text style={styles.titulo}>A tu alcance</Text>
                            <Text style={styles.subtitulo}>Te ayudamos a encontrar los mejores técnicos de calidad y confianza.</Text>
                            <Text style={styles.boton} onPress={() => setIsModalOpen(!setIsModalOpen)}>
                                Empecemos
                            </Text>
                        </View>
                        
                    </View>
                </View>
            </Modal>
        </>
    );
}

