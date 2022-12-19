import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'$white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageLeft:{
        width:125, 
        height:60, 
        marginRight:"60%", 
        position:"relative",
    },

    imageInformation:{ 
        width:270, 
        height:250 , 

    },

    boxtext:{
        backgroundColor:'#3F88C5', 
        width: '100%',
        padding:'6%', 
        alignItems: 'center', 
        borderRadius: 15, 
        color:"#FFFFFF", 
        fontWeight: 'bold',  
        height:"30%",
        justifyContent: 'center',
        textAlign:'center',

    },

    boton:{
        fontFamily: '$700Bold',
        backgroundColor:'#FFFFFF', 
        padding:'6%', 
        textAlign: 'center', 
        borderRadius: 15, 
        color:"#3F88C5", 
        fontWeight: 'bold',  
    },
    titulo:{
        fontFamily: '$700Bold',
        fontSize: 32,
        color: '$white',
        padding:'2%', 
    },
    subtitulo:{
        fontFamily: '$400Regular',
        fontSize: 20,
        color: '$black',
        padding:'2%', 
    },
    
    
});

export default styles;