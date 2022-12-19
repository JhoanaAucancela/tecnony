import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Icon, Image } from "react-native-elements";
import EStyleSheet from "react-native-extended-stylesheet";


export default function DrawerContent(props){
    

    return(
        <View style={ styles.drawerContent.flex }>
            
                <View style = {styles.drawerContent}>
                    <View style = {styles.userInfo}>
                        <View>
                            
                            <Image 
                                style = {{ width:160, height:90 }}
                                source = {require("../../assets/logo_retra.png")}
                            />

            
                        </View>
                    </View>
                    <View styles={styles.drawerItem}>
                        <DrawerItem
                            label="Home"
                            labelStyle= {styles.label}
                            onPress={() => props.navigation.navigate("Services")}
                            icon={({ color, size }) => (
                                <Icon
                                    name="home"
                                    color={color}
                                    size = {size}
                                    type = "ionicon" 
                                />
                            )}
                        />
                    </View>

                    <View styles={styles.drawerItem}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="person"
                                    color={color}
                                    size = {size}
                                    type = "ionicon" 
                                />
                            )}
                            label="Iniciar Sesion"
                            labelStyle= {styles.label}
                            onPress={() => {
                                props.navigation.navigate("Login");
                            }}
                        />
                    </View>

                    <View styles={styles.drawerItem}>
                        <DrawerItem
                            label="Registrarse"
                            labelStyle= {styles.label}
                            onPress={() => props.navigation.navigate("Signup")}
                            icon={({ color, size }) => (
                                <Icon
                                    name="person-add"
                                    color={color}
                                    size = {size}
                                    type = "ionicon" 
                                />
                            )}
                        />
                    </View>
                    
                    
                </View>
                
            
            
            <View style={styles.drawerItem}>
                
            </View>
        </View>
    );
}

const styles = EStyleSheet.create({
    drawerContent: {
        flex: 1,
        
    },
    userInfo:{
        marginTop:'-100%'
        
    },
    userInfo:{
        paddingLeft: 20,
        marginTop:'15%'
        
    },
    title:{
        
        fontWeight: "bold",
        fontFamily: '$700Bold',
    },
    subtitle:{
        lineHeight: 14,
        fontFamily: '$700Bold',
    },
    drawerItem:{
        marginTop:'-100%'

    },
    label: {
        fontFamily: '$700Bold',
    },
    bottomDrawerItem:{
        marginBottom: 10,
        borderTopColor: "#ddd5d5",
        boderTopWidth: 1,
        
    }
});