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
    image: {
        flex: 1,
        resizeMode: "cover",
        width: 400,
        height: 820,
        justifyContent: "center"
      },

    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },

    word: {
        height: 60,
        marginLeft: 30,
        marginBottom: -30,
        marginTop: 10,
    }, 

    button: {
        backgroundColor: '#ffcce7',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },

    buttonTitle: {
        color: 'black',
        fontSize: 16,
        fontWeight: "bold"
    },

    SeparatorLine :{
        marginBottom: 30
    },

    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },

})