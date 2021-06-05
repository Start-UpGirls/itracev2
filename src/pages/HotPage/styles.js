import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center'
    },

    logo: {
        flex: 1,
        height: 200,
        width: 160,
        alignSelf: "center",
        margin: 30
    },

    header: {
        flex: 1,
        marginLeft: 550,
        marginTop: 50,
        fontSize: 30,
    },

    word: {
        
        fontSize: 20, 
        fontFamily: 'sans-serif',
        alignSelf: "center",

    }, 

    button: {
        backgroundColor: '#252222',
        marginLeft: 100,
        marginRight: 30,
        marginTop: 20,
        height: 100,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        width: '45%'
    },

    buttonTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center'
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