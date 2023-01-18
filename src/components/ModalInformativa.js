import React, {useState} from 'react';
import {Text, Modal, View, Button } from 'react-native';
import { Icon, Card, Image, Avatar } from "react-native-elements";
import styles from "../styles/informationStyle";
import ModalInformativa2 from './ModalInformativa2';


export default function ModalInformativa({isModalOpen, setIsModalOpen}){
    
    const [isModalIOpen, setIsModalIOpen] = useState(false);

    const Siguiente = (isModalOpen) => {
            setIsModalIOpen(!isModalIOpen);
            //setIsModalOpen(!isModalOpen);
    }

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
                                style = {styles.imageInformation1}
                                source = {require("../../assets/iconInformation1.png")}
                            />
                        </View>

                        <View style={styles.boxtext}>
                            <Text style={styles.titulo}>Mantenimientos y Reparaciones</Text>
                            <Text style={styles.subtitulo}>A tu alcance.</Text>
                            <Text style={styles.boton} onPress={() => setIsModalOpen(!setIsModalOpen)}>
                                Siguiente
                            </Text>
                            <ModalInformativa2
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

