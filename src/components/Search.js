import React, { useState, useEffect } from "react";
import { View } from "react-native";

const Search = () => {
    //Hooks de useState
    const [ service, setService ] = useState([])
    const [search, setSearch] = useState("")
    const baseURL = "https://tecnony-v1.herokuapp.com/api/v1/view-service";

    const showData = async() => {
       const response =  await fetch(baseURL)
       const data = await response.json()
       
    }
    //function para tener los datos de la API

    //metodo de filtrado

    //funcion de busqueda

    //Rederizar la vista
    return(
        <View>

        </View>
    )
}

export default Search;