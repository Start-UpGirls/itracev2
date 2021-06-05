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
        width: 500,
        height: 600,
        resizeMode: 'contain',
        alignSelf: "center",
      },

    header: {
        flex: 1,
        marginTop: 50,
        fontSize: 30,
        textAlign: "center"
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