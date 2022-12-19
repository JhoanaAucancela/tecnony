import React, { useState } from "react";
import { View } from "react-native";
import styles from "../styles/informationStyle";
import { Text, Button, Image } from "react-native-elements";


const Information_3 = ({ navigation }) => {

   
    return(

        <View style={ styles.container }>
            
            <View style={{ height:"70%", justifyContent: 'center', alignItems: 'center', }}>
                <Image 
                    style = {styles.imageLeft}
                    source = {require("../../assets/logo_retra.png")}
                />
                <Image 
                    style = {styles.imageInformation}
                    source = {require("../../assets/iconInformation3.png")}
                />
            </View>

            <View style={styles.boxtext}>
                <Text style={styles.titulo}>A tu alcance</Text>
                <Text style={styles.subtitulo}>Te ayudamos a encontrar los mejores técnicos de calidad y confianza.</Text>
                <Text style={styles.boton} onPress={() => navigation.navigate("Login")}>
                    Empecemos
                </Text>
            </View>
        </View>
    );
}

export default Information_3;