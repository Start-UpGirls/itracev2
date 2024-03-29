import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity,ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config'
import styles from './styles';

class CheckinPage extends Component {

  state = {
    users: [] 
    
  }

 
  
  render() {
    return (
      <View style = {styles.container}>
      <ImageBackground source={require('../../../assets/background1.jpeg')} style={styles.image}>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: '100%' }}
          keyboardShouldPersistTaps="always">
            <Image style = { styles.logo }
              source={require('../../../assets/logoiium.png')}
            />

            { this.state.users.map((user, index) => <View key = {index}>
            <Text style = {styles.word}> Welcome back, {user.fullName}</Text>

            </View>)}

            <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Scanner')}>
                    <Text style={styles.buttonTitle}>Check In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.buttonTitle}>Menu Page</Text>
            </TouchableOpacity>

            <View style={styles.footerView}>
                    <Text style = {styles.footerText}> {"\n"}{"\n"} © Start-Up; 2021</Text>
            </View>
            
        </KeyboardAwareScrollView>
        </ImageBackground>
      </View>
    )
  }
}
 export default CheckinPage;

