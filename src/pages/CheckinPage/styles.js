import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#daf2dc'
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
        width: 450,
        height: 820,
        justifyContent: "center"
      },

    word: {
        flex: 1,
        marginTop: 50,
        fontSize: 30,
        textAlign: "center"
    },

    button: {
        backgroundColor: '#ffcce7',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch',
        justifyContent: 'center',
      },

    buttonTitle: {
        color: 'black',
        fontSize: 16,
        fontWeight: "bold"
    },

    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },

    footerText: {
        fontSize: 16,
        color: '#2e2e2d',
        marginTop: 150
    }
})