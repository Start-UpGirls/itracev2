import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native'
import { firebase } from '../../firebase/config'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function LoginPage({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('Checkin', {user})
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <View style={styles.container}>
         <ImageBackground source={require('../../../assets/background1.jpeg')} style={styles.image}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logoiium.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style = {styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                
                <View style={styles.footerView}>
                    <Text style = {styles.footerText}> Don't have an account? 
                    <Text onPress={onFooterLinkPress} style={styles.footerLink}> Sign up</Text></Text>
                    
                    <Text style = {styles.footerText}> {"\n"}{"\n"} © Start-Up; 2021</Text>
                </View>
            </KeyboardAwareScrollView>
            </ImageBackground>
        </View>
    )
}