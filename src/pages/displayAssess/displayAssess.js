import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config'
import styles from './styles';

class displayAssess extends Component {
    
  state = {
    conditions: [] 
    
  }

  constructor(props) {
    super(props);
    this.subscriber =
      firebase.firestore()
        .collection("conditions")
        .orderBy('createdAt', 'desc')
        .limit(1)
        .onSnapshot(docs => {
          let conditions = []
          docs.forEach( doc => {
            conditions.push(doc.data())
          })
          this.setState({ conditions })
          console.log(conditions)
        })
  }

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground source={require('../../../assets/background1.jpeg')} style={styles.image}>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: '100%' }}
          keyboardShouldPersistTaps="always">
            <Image style={styles.logo}
              source={require('../../../assets/logoiium.png')}
            />

            <Text style = {styles.header}>  Information Saved! </Text>

            <Text style = {styles.word}>  1) Which room are you currently staying at? </Text>
            <View
                style={styles.display}>
                  { this.state.conditions.map((cond, index) => <View key = {index}>
                <Text style={styles.buttonTitle}>{cond.firstQues}</Text></View>)}
            </View>
                    
            <Text style = {styles.word}>2) How are you feeling today?</Text>
            <View
                style={styles.display}>
                  { this.state.conditions.map((cond, index) => <View key = {index}>
                <Text style={styles.buttonTitle}>{cond.secondQues}</Text></View>)}
            </View>
                    
            <Text style = {styles.word}>3) What are the symptoms that you are currently experiencing?</Text>
            <View
                style={styles.buttons}>
                  { this.state.conditions.map((cond, index) => <View key = {index}>
                <Text style={styles.buttonTitle}>Coughs: {String(cond.coughs)}</Text>
                <Text style={styles.buttonTitle}>Fever: {String(cond.fever)}</Text>
                <Text style={styles.buttonTitle}>Sore throat: {String(cond.sorethroat)}</Text>
                <Text style={styles.buttonTitle}>Tiredness: {String(cond.fatigue)}</Text>
                <Text style={styles.buttonTitle}>Loss of taste or smell: {String(cond.losstaste)}</Text>
                <Text style={styles.buttonTitle}>Chest pain or pressure: {String(cond.chestpain)}</Text>
                <Text style={styles.buttonTitle}>Difficulty in breathing: {String(cond.breathing)}</Text></View>)}
                
            </View>
            

            <Text style = {styles.word}>4) Since when have you started experiencing the symptoms?</Text>
            <View
                style={styles.display}>
                  { this.state.conditions.map((cond, index) => <View key = {index}>
                <Text style={styles.buttonTitle}>{cond.fourthQues}</Text></View>)}
            </View>
                    
            <Text style = {styles.word}>5) List down the places you frequently visited for today.</Text>
            <View
                style={styles.display}>
                  { this.state.conditions.map((cond, index) => <View key = {index}>
                <Text style={styles.buttonTitle}>{cond.fifthQues}</Text></View>)}
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.buttonTitle}>Back to Menu Page</Text>
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

export default displayAssess;


    

