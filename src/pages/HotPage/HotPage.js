import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config'
import styles from './styles';

class HotPage extends Component {
   
   state = {
      places: [] 
    }
   
    constructor(props) {
      super(props);
      this.subscriber =
        firebase.firestore()
          .collection("hotspot")
          .limit(1)
          .onSnapshot(docs => {
            let places = []
            docs.forEach( doc => {
              places.push(doc.data())
            })
            this.setState({ places })
            console.log(places)
          })
   }

   render() {
      return (
         <View style={styles.container}>
            <KeyboardAwareScrollView
               style={{ flex: 1, width: '100%' }}
               keyboardShouldPersistTaps="always">
               <Image
                    style={styles.logo}
                    source={require('../../../assets/logoiium.png')}
                />
               
               { this.state.places.map((place, index) => <View key = {index}>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Ali Bin Abu Talib </Text>
                    <Text style={styles.buttonTitle}>{Number(place.ali)}</Text>
               </View>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Al-Faruq</Text>
                    <Text style={styles.buttonTitle}>{Number(place.faruq)}</Text>
               </View>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Aminah </Text>
                    <Text style={styles.buttonTitle}>{Number(place.aminah)}</Text>
               </View>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>As-Siddiq </Text>
                    <Text style={styles.buttonTitle}>{Number(place.siddiq)}</Text>
               </View>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Asiah </Text>
                    <Text style={styles.buttonTitle}>{Number(place.asiah)}</Text>
               </View>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Asma</Text>
                    <Text style={styles.buttonTitle}>{Number(place.asma)}</Text>
               </View>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Bilal Bin Rabah</Text>
                    <Text style={styles.buttonTitle}>{Number(place.bilal)}</Text>
               </View>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Hafsa </Text>
                    <Text style={styles.buttonTitle}>{Number(place.hafsa)}</Text>
               </View>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Halimatus Saadiyah </Text>
                    <Text style={styles.buttonTitle}>{Number(place.halimah)}</Text>
               </View>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Maryam </Text>
                    <Text style={styles.buttonTitle}>{Number(place.maryam)}</Text>
               </View>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Nusaibah </Text>
                    <Text style={styles.buttonTitle}>{Number(place.nusaibah)}</Text>
               </View>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Ruqayyah</Text>
                    <Text style={styles.buttonTitle}>{Number(place.ruqayyah)}</Text>
               </View>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Safiyyah</Text>
                    <Text style={styles.buttonTitle}>{Number(place.safiyyah)}</Text>
               </View>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Salahuddin Al-Ayyubi</Text>
                    <Text style={styles.buttonTitle}>{Number(place.salah)}</Text>
               </View>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Sumayyah </Text>
                    <Text style={styles.buttonTitle}>{Number(place.sumayyah)}</Text>
               </View>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Uthman Bin Al-Affan</Text>
                    <Text style={styles.buttonTitle}>{Number(place.uthman)}</Text>
               </View>
               <View
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Zubair Al-Awwam</Text>
                    <Text style={styles.buttonTitle}>{Number(place.zubair)}</Text>
               </View>
              
               </View>)}


               <View style={styles.footerView}>
                    <Text style = {styles.footerText}> {"\n"}{"\n"} © Start-Up; 2021</Text>
               </View>
            </KeyboardAwareScrollView>
         </View>
      )
   }
}
export default HotPage
