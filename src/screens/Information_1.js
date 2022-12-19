import React, { useState } from "react";
import { View } from "react-native";
import styles from "../styles/informationStyle";
import { Text, Button, Image } from "react-native-elements";



const Information_1 = ({ navigation }) => {

   
    return(

        <View style={ styles.container }>
            
            <View style={{ height:"70%", justifyContent: 'center', alignItems: 'center', }}>
                <Image 
                    style = {styles.imageLeft}
                    source = {require("../../assets/logo_retra.png")}
                />
                <Image 
                    style = {styles.imageInformation}
                    source = {require("../../assets/iconInformation1.png")}
                />
            </View>

            <View style={styles.boxtext}>
                <Text style={styles.titulo}>Mantenimientos y Reparaciones</Text>
                <Text style={styles.subtitulo}>A tu alcance.</Text>
                <Text style={styles.boton} onPress={() => navigation.navigate("Information_2")}>
                    Siguiente
                </Text>
            </View>
        </View>
    );
}

export default Information_1;
