import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { firebase } from '../../firebase/config'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function RegistrationPage({navigation}) {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [matricNum, setMatricNum] = useState('')
    const [kulliyyah, setKulliyyah] = useState('')
    const [contactNum, setContactNum] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        props.navigation.navigate('Login')
    }

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const timestamp = firebase.firestore.FieldValue.serverTimestamp();
                const data = {
                    authorID: uid,
                    fullName,
                    email,
                    matricNum,
                    kulliyyah,
                    contactNum,
                    address,
                    createdAt: timestamp,

                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Home', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logoiium.png')}
                />
                
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor="#e0ffff"
                    placeholderColor="#e0ffff"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#e0ffff"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder='Matric Number'
                    placeholderTextColor="#e0ffff"
                    onChangeText={(text) => setMatricNum(text)}
                    value={matricNum}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder='Kulliyyah'
                    placeholderTextColor="#e0ffff"
                    onChangeText={(text) => setKulliyyah(text)}
                    value={kulliyyah}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder='Contact No.'
                    placeholderTextColor="#e0ffff"
                    onChangeText={(text) => setContactNum(text)}
                    value={contactNum}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder='Home Address'
                    placeholderTextColor="#e0ffff"
                    onChangeText={(text) => setAddress(text)}
                    value={address}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholderTextColor="#e0ffff"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#e0ffff"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>

                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? 
                    <Text onPress={onFooterLinkPress} style={styles.footerLink}> Log in</Text></Text>
                    <Text style = {styles.footerText}>{"\n"}{"\n"} © Start-Up; 2021</Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}