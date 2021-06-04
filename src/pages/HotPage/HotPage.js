import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
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
               <Text style={styles.word}>Ali Bin Abu Talib = {Number(place.ali)}</Text>
               <Text style={styles.word}>Al-Faruq = {Number(place.faruq)}</Text>
               <Text style={styles.word}>Aminah = {Number(place.aminah)}</Text>
               <Text style={styles.word}>As-Siddiq = {Number(place.siddiq)}</Text>
               <Text style={styles.word}>Asiah = {Number(place.asiah)}</Text>
               <Text style={styles.word}>Asma = {Number(place.asma)}</Text>
               <Text style={styles.word}>Bilal Bin Rabah = {Number(place.bilal)}</Text>
               <Text style={styles.word}>Hafsa = {Number(place.hafsa)}</Text>
               <Text style={styles.word}>Halimatus Saadiyah = {Number(place.halimah)}</Text>
               <Text style={styles.word}>Maryam = {Number(place.maryam)}</Text>
               <Text style={styles.word}>Nusaibah = {Number(place.nusaibah)}</Text>
               <Text style={styles.word}>Ruqayyah = {Number(place.ruqayyah)}</Text>
               <Text style={styles.word}>Safiyyah = {Number(place.safiyyah)}</Text>
               <Text style={styles.word}>Salahuddin Al-Ayyubi = {Number(place.salah)}</Text>
               <Text style={styles.word}>Sumayyah = {Number(place.sumayyah)}</Text>
               <Text style={styles.word}>Uthman Bin Al-Affan = {Number(place.uthman)}</Text>
               <Text style={styles.word}>Zubair Al-Awwam = {Number(place.zubair)}</Text>
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
