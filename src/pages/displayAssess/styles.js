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

    word: {
        height: 60,
        marginLeft: 30,
        marginBottom: -30,
        marginTop: 10,
    }, 

    header: {
        flex: 1,
        marginLeft: 20,
        marginTop: 10,
        fontSize: 30,
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
    image: {
        flex: 1,
        resizeMode: "cover",
        width: 450,
        height: 820,
        justifyContent: "center"
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