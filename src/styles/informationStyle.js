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
        position:"relative",
    },

    imageInformation:{ 
        width:270, 
        height:250 , 

    },
    imageInformation1:{ 
        width:270, 
        height:260 , 

    },

    imageInformation2:{ 
        width:270, 
        height:205 , 

    },

    boxtext:{
        backgroundColor:'#3F88C5', 
        width: '100%',
        padding:'6%', 
        alignItems: 'center', 
        borderRadius: 15, 
        color:"#FFFFFF", 
        fontWeight: 'bold',  
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
        textAlign:'center'
    },
    subtitulo:{
        fontFamily: '$400Regular',
        fontSize: 20,
        color: '$black',
        padding:'2%', 
    },

    link: {
        fontFamily: '$400Regular',
        color:'$black',
        fontSize:16,
        textDecorationLine: "underline",
        padding: '3%',
        
    },
    
});

export default styles;