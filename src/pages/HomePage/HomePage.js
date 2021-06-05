import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import { firebase } from '../../firebase/config'

export default function HomePage({navigation}) {

    const onAssessPress = () => {
        navigation.navigate('Assessment')
    }

    const onProfilePress = () => {
        navigation.navigate('Profile')
    }

    const onSOPPress = () => {
        navigation.navigate('SOP')
    }

    const onHelpPress = () => {
        navigation.navigate('Helpdesk')
    }

    const onHotPress = () => {
        navigation.navigate('Hotspot')
    }

    const onLogoutPress = () => {
        firebase
            .auth()
            .signOut()
            .then(() => navigation.navigate('Login'))
    }

    return (
        <View style={styles.container}>
        <KeyboardAwareScrollView>
            <View style={{flexDirection:'row', alignItems:'center', flexWrap: 'wrap', marginTop: 110, marginLeft: 30}}>
            <TouchableOpacity 
                onPress={() => onProfilePress()}> 
                    <Image  
                        source = {require('../../../assets/profile.png')}  
                        style = {styles.ImageIconStyle} 
                    /> 
                    <View style={styles.SeparatorLine} /> 
             </TouchableOpacity> 

             <TouchableOpacity 
                onPress={() => onAssessPress()}> 
                    <Image  
                        source = {require('../../../assets/health.png')}  
                        style = {styles.ImageIconStyle} 
                    /> 
                    <View style={styles.SeparatorLine} /> 
             </TouchableOpacity> 

            
             <TouchableOpacity 
                onPress={() => onSOPPress()}> 
                    <Image  
                        source = {require('../../../assets/sopi.png')}  
                        style = {styles.ImageIconStyle} 
                    /> 
                    <View style={styles.SeparatorLine} /> 
             </TouchableOpacity> 

             <TouchableOpacity 
                onPress={() => onHelpPress()}> 
                    <Image  
                        source = {require('../../../assets/helpdesk.png')}  
                        style = {styles.ImageIconStyle} 
                    /> 
                    <View style={styles.SeparatorLine} /> 
             </TouchableOpacity> 

             <TouchableOpacity 
                onPress={() => onHotPress()}> 
                    <Image  
                        source = {require('../../../assets/hotspot.png')}  
                        style = {styles.ImageIconStyle} 
                    /> 
                    <View style={styles.SeparatorLine} /> 
             </TouchableOpacity>

            </View>
            
            <View style={{flex: 1,alignItems: "center"}} /> 
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLogoutPress()}>
                    <Text style={styles.buttonTitle}>Log Out</Text>
            </TouchableOpacity>

            <View style={styles.footerView}>
                    <Text style = {styles.footerText}> {"\n"}{"\n"} © Start-Up; 2021</Text>
            </View>
</KeyboardAwareScrollView>
 </View>
       
    )
}