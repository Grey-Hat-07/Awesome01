import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openLink(Website: string) {
    //Linking.openURL('https://www.youtube.com/watch?v=2D7U2K6RvXs')
    Linking.openURL(Website);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.HeadingContainer}>
          <Text style={styles.headertext}>
            React Native Tutorial
          </Text>
        </View>
        <Image source={{ uri: 'https://www.hammermarketing.com/wp-content/uploads/sites/2/2020/11/react-native_large.jpg?resize=1200,630', }}
          style={styles.cardImage} />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.
            Use a little—or a lot. You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch.
          </Text>
        </View>
        <View style={styles.FooterContainer}>
          <TouchableOpacity
          // onPress={()=>openLink('https://dev.to/inthepocket/react-native-is-dead-long-live-react-native-4jb6')}
          >
            <Text style={styles.SocialLink}>Read more.</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>openLink('https://github.com/grey-hat-07')}>
            <Text style={styles.SocialLink}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  card: {
    width: 320,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16
  },
  cardElevated: {
    backgroundColor:'#CAD5E2',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1
  }
  },
  HeadingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headertext: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 16,
  },
  cardImage: {
    width: 320,
    height: 180,
  },
  bodyContainer: {
    padding: 10,
  },
  FooterContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  SocialLink:{
    fontSize: 14,
    color: '#000000',
    backgroundColor: '#FFFFFF',
    padding: 6,
    borderRadius: 6,
  },
})