import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Icon } from "react-native-elements";
import EStyleSheet from "react-native-extended-stylesheet";
import { logout } from "../services/AuthService";
import { useAuth, USER_KEY } from "../providers/AuthProvider";
import * as SecureStore from "expo-secure-store";
import Toast from "react-native-root-toast";

export default function DrawerContent(props){
    const [user, setUser] =useState([]);

    useEffect(() => {
        (async () => {
           const _user = await SecureStore.getItemAsync(USER_KEY);
           setUser(JSON.parse(_user)); 
        })();
    }, []);

    const {handleLoguot} = useAuth();

    const _logout = async () => {
        try{
            await logout();
            await handleLoguot();
            Toast.show("Cierre de sesión exitoso");
        }catch (e){
            Toast.show("Cierre de sesión exitoso");
        }
    }

    return(
        <View style={ styles.drawerContent.flex }>
            
                <View style = {styles.drawerContent}>
                    <View style = {styles.userInfo}>
                        <View style={{ flexDirection: "row"}}>
                        
                            {user &&
                                <View style={{ alignItems: 'center',padding:'10%'}}>
                                    <Avatar
                                        rounded
                                        size="medium"
                                        source={{ uri: user.avatar }}
                                    />
                                    <Text style={styles.title}>{user.username}</Text>
                                    <Text style={styles.subtitle}>{user.email}</Text>
                                </View>   
                            }
                        </View>
                    </View>
                    <View styles={styles.drawerItem}>
                        <DrawerItem
                            label="Inicio"
                            labelStyle= {styles.label}
                            onPress={() => props.navigation.navigate("Home")}
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
                                    name="person-outline"
                                    color={color}
                                    size = {size}
                                    type = "ionicon" 
                                />
                            )}
                            label="Mi cuenta"
                            labelStyle= {styles.label}
                            onPress={() => {
                                props.navigation.navigate("Account");
                            }}
                        />
                    </View>

                    <View styles={styles.drawerItem}>
                        <DrawerItem
                            label="Servicios"
                            labelStyle= {styles.label}
                            onPress={() => props.navigation.navigate("Services")}
                            icon={({ color, size }) => (
                                <Icon
                                    name="cart"
                                    color={color}
                                    size = {size}
                                    type = "ionicon" 
                                />
                            )}
                        />
                    </View>
                    
                    <View styles={styles.drawerItem}>
                        <DrawerItem
                            label="Mis servicios"
                            labelStyle= {styles.label}
                            onPress={() => props.navigation.navigate("MyServices")}
                            icon={({ color, size }) => (
                                <Icon
                                    name="basket"
                                    color={color}
                                    size = {size}
                                    type = "ionicon" 
                                />
                            )}
                        />
                    </View>

                    <View styles={styles.drawerItem}>
                        <DrawerItem
                            label="Cerrar sesión"
                            onPress={() => _logout()}
                            labelStyle= {styles.label}
                            icon={({ color, size }) => (
                                <Icon
                                    name="exit-outline"
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
        backgroundColor:'$primary',
        

        
    },
    userInfo:{
        paddingLeft: 20,
        marginTop:'15%',
        backgroundColor:'$primary',
        borderRadius: 15, 
    },

    title:{
        fontWeight: "bold",
        fontFamily: '$700Bold',
        color:'white',
    },
    subtitle:{
        lineHeight: 14,
        fontFamily: '$700Bold',
        padding: '2%',
        color:'white',

    },
    drawerItem:{
        marginTop:'-60%'

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