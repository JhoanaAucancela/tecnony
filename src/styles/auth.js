import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'$authBg',
        textAlign: 'center',
        justifyContent: 'center',
    },

    containerScroll: {
        width: '100%', 
        padding:'2%', 
        paddingLeft:'3%'
    },

    title:{
        fontFamily: '$700Bold',
        color:'$primary',
        fontSize: 30,
        
    },
    titleS:{
        fontFamily: '$700Bold',
        color:'$primary',
        fontSize: 16,
        
    },
    subtitle:{
        color: '#788190', 
        padding:'2%',
        fontFamily: '$400Regular',
    },
    text:{
        padding:'2%',
        fontFamily: '$400Regular',
        
    },

    textBtn:{
        padding:'2%',
        fontFamily: '$400Regular',
        color:'$primary',
        textDecorationLine: "underline",
    },

    textBold:{
        padding:'2%',
        fontFamily: '$400Regular',
        fontWeight: 'bold'
    },
    buttonTitle: {
        fontFamily: '$400Regular',
        color:"$white",
        fontSize: 20,
    },
    button: {
        backgroundColor:'#3F88C5', 
        padding:'3%', 
        paddingLeft:'7%',
        paddingRight:'7%',
        textAlign: 'center', 
        borderRadius: 15, 
        color:"$white", 
        fontWeight: 'bold'
    },
    input: {
        fontFamily: '$400Regular',
        color:'$black',
        fontWeight:'bold,',
        padding: 10,
        width: '100%',
        marginTop: 10,
        borderRadius: 15,
        backgroundColor:'#F5F9FF',
        borderColor: 'transparent',
    },

    inputpicker: {
        fontFamily: '$400Regular',
        color:'$black',
        fontWeight:'bold,',
        padding: 10,
        width: '80%',
        height: 40,
        marginTop: 10,
        borderRadius: 15,
        backgroundColor:'#F5F9FF',
        borderColor: 'transparent',
    },

    inputVisible: {
        color:'transparent',
        backgroundColor:'transparent',
        borderColor: 'transparent',
    },

    link: {
        fontFamily: '$400Regular',
        color:'$black',
        textDecorationLine: "underline",
        padding: '3%',
        
    },
    linkRigth:{
        textAlign: 'right',
        fontFamily: '$400Regular',
        color:'$black',
        textDecorationLine: "underline",
        padding: '3%'
    },
    errorValidation: {
        color: "$red",
    },

    datePicker: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
      },
    
});

export default styles;