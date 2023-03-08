import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default function Flatcards() {
  return (
    <View>
      <Text style={styles.headingtext}>Flatcards</Text>
      <ScrollView horizontal={true}>
      <View style={styles.Container}>
        <View style={[styles.card,styles.cardOne]} >
          <Text>
            Red
          </Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
          <Text>
            Green
          </Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
          <Text>
            Blue
          </Text>
        </View>
        <View style={[styles.card,styles.CardFour]}>
          <Text>
            Purple
          </Text>
        </View>
        <View style={[styles.card,styles.CardFive]}>
          <Text>
            Violet
          </Text>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext: {
        fontSize: 30,
        paddingHorizontal: 20,
        fontWeight: 'bold',
    },
    Container:{
      flexDirection: 'row-reverse',
    },
    card:{
      width: 100,
      height: 100,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      elevation: 5,
      shadowOffset: {width: 5, height: 5},
      shadowColor: 'yellow',
      shadowOpacity: 0.8,
    },
    cardOne:{
        backgroundColor: 'red',
    },
    cardTwo:{
        backgroundColor: 'green',
    },
    cardThree:{
        backgroundColor: 'blue',
    },
    CardFour:{
      backgroundColor: 'purple',
    },
    CardFive:{
      backgroundColor: 'violet',
    },
    

})