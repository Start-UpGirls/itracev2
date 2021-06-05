import React, { Component } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, Alert, ImageBackground } from 'react-native'
import { firebase } from '../../firebase/config'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

class ProfilePage extends Component {


  constructor() {
    super();
    this.state = {
      fullName: '',
      matricNum: '',
      kulliyyah: '',
      contactNum: '',
      address: '',
      authorID: '',
      createdAt: '',
      email: ''
    };
  }
 
  userID = firebase.auth().currentUser.uid;

  componentDidMount() {
    const dbRef = firebase.firestore().collection('users').doc(this.userID)
    dbRef.get().then((res) => {
      if (res.exists) {
        const user = res.data();
        this.setState({
          authorID: res.id,
          fullName: user.fullName,
          matricNum: user.matricNum,
          kulliyyah: user.kulliyyah,
          contactNum: user.contactNum,
          address: user.address,
          createdAt: user.createdAt,
          email: user.email
        });
      } else {
        console.log("Document does not exist!");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  updateUser() {
    const updateDBRef = firebase.firestore().collection('users').doc(this.state.authorID);
    updateDBRef.set({
      authorID: this.state.authorID,
      fullName: this.state.fullName,
      matricNum: this.state.matricNum,
      kulliyyah: this.state.kulliyyah,
      contactNum: this.state.contactNum,
      address: this.state.address,
      email: this.state.email,
      createdAt: this.state.createdAt,
    }).then((docRef) => {
      this.setState({
        authorID: this.state.authorID,
        fullName: '',
      matricNum: '',
      kulliyyah: '',
      contactNum: '',
      address: '',
      email: this.state.email,
      createdAt: this.state.createdAt,
      });
      Alert.alert("Information Updated!")
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
  }


  render() {
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
              
              <View>
              <Text style = {styles.word }>Name: </Text>
              <TextInput
                style={ styles.input }
                defaultValue= {this.state.fullName}
                onChangeText={(val) => this.inputValueUpdate(val, 'fullName')}
              /></View>

              <View style={styles.SeparatorLine} />   

              <View>
              <Text style = {styles.word }>Matric Number: </Text>
              <TextInput
                style={ styles.input }
                defaultValue= {this.state.matricNum}
                onChangeText={(val) => this.inputValueUpdate(val, 'matricNum')}
              /></View>

              <View style={styles.SeparatorLine} /> 

              <View>
              <Text style = {styles.word }>Kulliyyah: </Text>
              <TextInput
                style={ styles.input}
                defaultValue= {this.state.kulliyyah}
                onChangeText={(val) => this.inputValueUpdate(val, 'kulliyyah')}
              /></View>

              <View style={styles.SeparatorLine} /> 

              <View>
              <Text style = {styles.word }>Contact Number: </Text>
              <TextInput
              style={ styles.input }
              defaultValue= {this.state.contactNum}
                onChangeText={(val) => this.inputValueUpdate(val, 'contactNum')}
              /></View>

              <View style={styles.SeparatorLine} /> 

              <View>
              <Text style = {styles.word }>Address: </Text>
              <TextInput
                style={ styles.input }
                defaultValue= {this.state.address}
                onChangeText={(val) => this.inputValueUpdate(val, 'address')}
              /></View>

            <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.updateUser()}>
                    <Text style={styles.buttonTitle}>Update</Text>
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

export default ProfilePage
