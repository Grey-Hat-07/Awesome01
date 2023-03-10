import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
    {
        uid: '1',
        name: 'Rahul',
        Status: 'I love programming',
        image: 'https://api.multiavatar.com/rahul.png',
    },
    {
        uid: '2',
        name: 'Virat',
        Status: 'I love programming',
        image: 'https://api.multiavatar.com/virat.png',
    },
    {
        uid: '3',
        name: 'Rohit',
        Status: 'I love programming',
        image: 'https://api.multiavatar.com/rohit.png',
    },
    {
        uid: '4',
        name: 'Dhoni',
        Status: 'I love programming',
        image: 'https://api.multiavatar.com/dhoni.png',
    },
]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.Container}>
        {contacts.map((contact) => {
          return (
            <View key={contact.uid} style={styles.userCard}>
              <Image source={{uri: contact.image}} style={{width: 50, height: 50, borderRadius: 50}}/>
                <Text style={styles.userName}>{contact.name}</Text>
                <Text style={styles.userStatus}>{contact.Status}</Text>
            </View>
          )
        })
        
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        paddingHorizontal: 20,
        fontWeight: 'bold',
    },
    Container:{},
    userCard:{

    },
    userName:{
    },
    userStatus:{
    },
})