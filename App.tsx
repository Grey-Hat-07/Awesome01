import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, useColorScheme, Alert} from 'react-native';
import Flatcards from './Components/Flatcards';
import FanzyCard from './Components/FanzyCard';
import ActionCard from './Components/ActionCard';
import ContactList from './Components/ContactList';
function App() {

  const isDarkMode = useColorScheme() === 'dark';
  return(
    <SafeAreaView style = {styles.container}>
      <ScrollView>
        {/* <Text>app</Text> */}
        <Flatcards/>
        <FanzyCard />
       <ActionCard />
       <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    // flexDirection: 'column',
  },
 
  
});

export default App;
