import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Chatcard() {
  const contacts = [
    {
      uid: '1',
      name: 'Sunil',
      Status: 'I love programming',
      image: 'https://api.multiavatar.com/sunil.png',
      lastMessage: 'I have a new project',
      time : '10:00 AM',
      unreaded: 3,
    },
    {
      uid: '2',
      name: 'Kiara',
      Status: 'I love programming',
      image: 'https://api.multiavatar.com/kiara.png',
      lastMessage: 'Hello',
      time: '9:11 AM',
      unreaded: 2,
    },
    {
      uid: '3',
      name: 'Ambani',
      Status: 'I love programming',
      image: 'https://api.multiavatar.com/ambani.png',
      lastMessage: 'You are a good programmer',
      time: '8:00 AM',
      unreaded: 1,
    },
    {
      uid: '4',
      name: 'Kriti',
      Status: 'I love programming',
      image: 'https://api.multiavatar.com/kriti.png',
      lastMessage: 'What are you doing?',
      time: '7:00 AM',
      unreaded: 0,
    },
  ]
  return (
    <View>
      <Text style={styles.headingText}>Chats</Text>
      <View style={styles.container}>
        {contacts.map((contact) => (
          <View key={contact.uid} style={styles.card}>
            <Image source={{ uri: contact.image }} style = {styles.image} />
            <View  style={styles.userDetails}>
              <View style={styles.header}>
              <Text style={styles.userNames}>{contact.name}</Text>
              {/* <Text>{contact.Status}</Text> */}
              <Text style={styles.time}>{contact.time}</Text>
              </View>
              <View style={styles.message}>
              <Text style={styles.lastMessage}>{contact.lastMessage}</Text>
              {contact.unreaded > 0 && <Text style={styles.unreaded}>{contact.unreaded}</Text>}
              </View>
              
            </View>
          </View>
        ))}

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
  container: {
    marginHorizontal: 20,
    flexDirection: 'column',
  },
  card: {
    flexDirection: 'row',
    flex: 1,
    // borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    padding: 6,
    marginVertical: 2,
    backgroundColor: '#120E43',
  },
  unreaded:{
    color: '#FFFFFF',
    backgroundColor: '#38CC77',
    fontSize: 10,
    padding: 2,
    paddingHorizontal: 6,
    borderRadius: 180,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userNames: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  lastMessage: {},
  time : {
    color: '#FFFFFF',
    fontSize: 10,
  },
  header: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userDetails: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 10,
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  message: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})