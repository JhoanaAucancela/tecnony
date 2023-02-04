import React, {useState, useRef} from 'react';
import {Text, Modal, View, Button, TouchableOpacity, Image} from 'react-native';
import { Icon } from "react-native-elements";
import Toast from "react-native-root-toast";
import { ErrorText, ActivityLoader } from "../components/Shared";
import { useForm } from "react-hook-form";
import { comentService } from "../services/AuthService";
import styles from "../styles/auth";

import { Form, FormItem } from 'react-native-form-component';


export default function ComentsModal({isModalOpen, setIsModalOpen, ID}){
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { control, handleSubmit, formState: { errors }} = useForm();

    //////

    const [maxRating, setMaxRating] = useState([2,4,6,8,10])

    const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
    const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

    const comment = useRef();
    const suggestion = useRef();

    const [form, setForm] = useState({
        comment: "",
        suggestion: "",
        qualification: 2
    });

    const CustomRatingBar = () => {
        return(
            <View style={{ justifyContent: 'center', flexDirection:'row', marginTop:30 }}>
                {
                    maxRating.map((item, key) => {
                        return(
                            <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setForm({...form, qualification: item})}
                            >
                                <Image 
                                    style={{ width: 40, height: 40, resizeMode: 'cover' }}
                                    source={
                                        item <= form.qualification
                                        ? {uri: starImgFilled}
                                        : {uri: starImgCorner}
                                    }
                                />
                            </TouchableOpacity>
                        )
                    })
                }

            </View>
        )
    }
    //////
    const _comentService = async () => {
        try {
            setLoading(true);
            const message = await comentService(form, ID);
            setIsModalOpen(!setIsModalOpen);
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

    const btnStyle ={
        backgroundColor:'#3F88C5', 
        padding:'3%', 
        paddingLeft:'7%',
        paddingRight:'7%',
        textAlign: 'center', 
        borderRadius: 15, 
        color:"$white", 
        fontWeight: 'bold'
    }


    
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
                        <Text h2 style={ styles.title }>Comparte tu opinión</Text>
                        <ErrorText error={error} />
                        <Form onButtonPress={handleSubmit(_comentService)}  buttonStyle={styles.button} buttonText="Guardar">
                        <FormItem
                                label="Comentario"
                                labelStyle={styles.text}
                                isRequired
                                maxLength={500}
                                textArea = {true}
                                placeholder="Comentario"
                                textInputStyle={styles.input}
                                value={form.comment}
                                onChangeText={(value) => setForm({...form, comment: value})}
                                asterik
                                ref={comment} 
                                children = {<Icon name="create" type='ionicon' size={24} color="black" />}
                            />
                            

                        <FormItem
                                label="Sugerencias"
                                labelStyle={styles.text}
                                notRequired
                                textArea = {true}
                                placeholder="Sugerencias"
                                textInputStyle={styles.input}
                                value={form.suggestion}
                                onChangeText={(value) => setForm({...form, suggestion: value})}
                                ref={suggestion} 
                                children = {<Icon name="create" type='ionicon' size={24} color="black" />}
                            />
                       
                            <Text style={styles.textBold}>Calificación</Text>
                            <CustomRatingBar/>
                        </Form>
                    </View>
                </View>
            </Modal>
        </>
    );
}

