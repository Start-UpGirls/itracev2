import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '#D2E4D2',
    },

    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        width: 450,
        height: 820,
        justifyContent: "center"
      },

    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 100,
        width: 100,
        resizeMode : 'center',
        borderRadius: 20,
      
     },

     SeparatorLine :{
 
        width: 1,
        height: 40
         
    },

    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor:'#ffcce7',
        width: 300,
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 50,
        marginTop: 100,
    },

    buttonText: {
        color: 'black',
        fontSize: 16
        
    },

    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    }

})