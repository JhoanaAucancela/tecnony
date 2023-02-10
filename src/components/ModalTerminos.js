import React, {useState} from 'react';
import {Text, Modal, View, ScrollView } from 'react-native';
import { Icon, Card, Image, Avatar } from "react-native-elements";
import styles from "../styles/auth";


export default function ModalTerminos({isModalOpen, setIsModalOpen}){
    
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
                <ScrollView style = {modalStyle}>
                    <Icon
                        name="close"
                        type="ionicon"
                        size= {30}
                        color= "black"
                        style={{ marginTop: 2, marginRight: 100 }}
                        onPress={() => setIsModalOpen(!setIsModalOpen)}
                    />
                <Text style={ styles.title }>Terminos y Condiciones</Text>
                <Text style={styles.text}>Tecnony está diseñada para brindar a los usuarios una experiencia única y personalizada. Al utilizar la Aplicación, usted acepta los siguientes términos y condiciones:</Text>
                <Text style={styles.subtitle}>1. Datos Personales</Text>
                <Text style={styles.text}>Al registrarse en la Aplicación, usted acepta proporcionar información precisa, completa y actualizada sobre su identidad, incluyendo, entre otros datos, su nombre, dirección de correo electrónico, número de teléfono, información demográfica, número de cédula, etc.</Text>
                <Text style={styles.subtitle}>2. Uso de los Datos Personales</Text>
                <Text style={styles.text}>Nos comprometemos a proteger la privacidad de sus Datos Personales y a utilizarlos de acuerdo con la presente Política de privacidad. La información que recogemos se utilizará para brindarle una experiencia personalizada, mejorar la Aplicación y comunicarse con usted.</Text>
                <Text style={styles.subtitle}>3. Compartir Datos Personales con Terceros</Text>
                <Text style={styles.text}>Nos reservamos el derecho de compartir sus Datos Personales con terceros, siempre y cuando sea necesario para prestar los servicios ofrecidos por la Aplicación o para cumplir con las leyes y regulaciones aplicables. También podemos compartir sus Datos Personales con nuestros proveedores de servicios, que estarán sujetos a las mismas restricciones de privacidad que nosotros.</Text>
                <Text style={styles.subtitle}>4. Seguridad de los Datos Personales</Text>
                <Text style={styles.text}>Tomamos medidas de seguridad razonables para proteger sus Datos Personales contra pérdida, robo, uso indebido, acceso no autorizado, alteración o destrucción. Sin embargo, ninguna transmisión de datos a través de Internet o sistema de almacenamiento electrónico es completamente segura. Por lo tanto, aunque nos esforzamos por proteger sus Datos Personales, no podemos garantizar su seguridad absoluta.</Text>
                <Text>  </Text>
                <Text>  </Text>

                </ScrollView>
                </View>
            </Modal>
        </>
    );
}

