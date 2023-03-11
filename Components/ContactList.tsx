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
              <Image source={{ uri: contact.image }} style={styles.UserImage} />
              <View>
              <Text style={styles.userName}>{contact.name}</Text>
              <Text style={styles.userStatus}>{contact.Status}</Text>
              </View>
              
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
  Container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  UserImage:{
    width: 50, 
    height: 50, 
    borderRadius: 50,
    marginRight: 16, 
  },
  userCard: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 8,
    alignItems: 'center',
    marginBottom:1,
    backgroundColor:'#3944F7',
    borderRadius: 10,
    padding: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  userStatus: {
    fontSize: 12,
  },
})