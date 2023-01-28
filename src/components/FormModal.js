import React, {useState, useRef} from 'react';
import {Text, Modal, View, ScrollView, Alert} from 'react-native';
import { Icon } from "react-native-elements";
import Toast from "react-native-root-toast";
import { ErrorText, ActivityLoader } from "../components/Shared";
import { set, useForm } from "react-hook-form";
import { updateService } from "../services/AuthService";
import styles from "../styles/auth";
import { Picker, Form, FormItem } from 'react-native-form-component';


export default function FormModal({isModalOpen, setIsModalOpen, ID}){
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { control, handleSubmit, formState: { errors }} = useForm();
     ////////////////////////
     
    const _updateService = async () => {
        try {
            setLoading(true);
            const message = await updateService(form, ID);
            alert(message)
            setIsModalOpen(!isModalOpen);
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


    const device = useRef();
    const model = useRef();
    const brand = useRef();
    const serie = useRef();
    const description_problem = useRef();

    const [form, setForm] = useState({
        device: "",
        model: "",
        brand: "",
        serie: "",
        description_problem: "",
        payment_method: 1
    });

    
    return (
        <>
            <Modal visible={isModalOpen} transparent= {true} animationType={'slide'}>
                <View style = {modalContainerStyle}>
                {loading == true ? <ActivityLoader /> : null}
                    <ScrollView style = {modalStyle}>
                    <Icon
                        name="close"
                        type="ionicon"
                        size= {30}
                        color= "black"
                        style={{ marginTop: 2, marginRight: 100 }}
                        onPress={() => setIsModalOpen(!setIsModalOpen)}
                    />
                        <Text h2 style={ styles.title }>Editar el servicio</Text>
                        <ErrorText error={error} />

                        <Form onButtonPress={handleSubmit(_updateService)}  buttonStyle={styles.button} buttonText="Guardar Cambios">
                        <FormItem
                                label="Dispositivo"
                                labelStyle={styles.text}
                                isRequired
                                placeholder="Ej. Computadora"
                                textInputStyle={styles.input}
                                value={form.device}
                                onChangeText={(value) => setForm({...form, device: value})}
                                asterik
                                ref={device} 
                                children = {<Icon name="cube" type='ionicon' size={24} color="black" />}
                            />
                            
                            <FormItem
                                label="Modelo"
                                labelStyle={styles.text}
                                isRequired
                                placeholder="Ej. HP-500"
                                textInputStyle={styles.input}
                                value={form.model}
                                onChangeText={(value) => setForm({...form, model: value})}
                                asterik
                                ref={model} 
                                children = {<Icon name="phone-portrait" type='ionicon' size={24} color="black" />}
                            />

                        <FormItem
                                label="Marca:"
                                labelStyle={styles.text}
                                isRequired
                                placeholder="Ej. HP"
                                textInputStyle={styles.input}
                                value={form.brand}
                                onChangeText={(value) => setForm({...form, brand: value})}
                                asterik
                                ref={brand} 
                                children = {<Icon name="logo-closed-captioning" type='ionicon' size={24} color="black" />}
                            />
                       

                        <FormItem
                                label="Serie:"
                                labelStyle={styles.text}
                                placeholder="Ej. HSO12355 (Opcional)"
                                notRequired
                                textInputStyle={styles.input}
                                value={form.serie}
                                onChangeText={(value) => setForm({...form, serie: value})}
                                ref={serie} 
                                children = {<Icon name="barcode" type='ionicon' size={24} color="black" />}
                            />

                        <FormItem
                                label="Descripción del problema:"
                                labelStyle={styles.text}
                                isRequired
                                textArea = {true}
                                placeholder="Ej. La pantalla esta rota"
                                textInputStyle={styles.input}
                                value={form.description_problem}
                                onChangeText={(value) => setForm({...form, description_problem: value})}
                                asterik
                                ref={description_problem} 
                                children = {<Icon name="create" type='ionicon' size={24} color="black" />}
                            />

                        <Picker
                            items={[
                            { label: 'Efectivo', value: 1 },
                            { label: 'Deposito', value: 2 },
                            ]}
                            label="Método de pago"
                            itemLabelStyle={styles.text}
                            type="modal"
                            pickerIcon= {<Icon name="caret-down-outline" type="ionicon"size= {20}color= "black"/>}
                            selectedValueStyle={styles.inputpicker}
                            isRequired
                            selectedValue={form.payment_method}
                            asterik
                            onSelection={(item) => setForm({...form, payment_method: item.value})}
                        />
                        
                        </Form>

                        
                    </ScrollView>
                </View>
            </Modal>
        </>
    );
}

