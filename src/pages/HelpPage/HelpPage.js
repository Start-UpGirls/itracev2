import React from 'react'
import { Image, Text, View,ImageBackground } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function HelpPage({props}) {

    return (
        <View style={styles.container}>
         <ImageBackground source={require('../../../assets/background1.jpeg')} style={styles.image2}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logoiium.png')}
                />
                <Text style = { styles.header }>Standard of Procedures from IIUM Student Union</Text>
                <Image
                    style={styles.image}
                    source={require('../../../assets/help.jpg')}
                />

                <View style={styles.footerView}>
                    <Text style = {styles.footerText}> {"\n"}{"\n"} © Start-Up; 2021</Text>
                </View>
            </KeyboardAwareScrollView>
            </ImageBackground>
        </View>
    )
}