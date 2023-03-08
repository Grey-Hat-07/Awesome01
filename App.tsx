import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, useColorScheme, Alert} from 'react-native';
import Flatcards from './Components/Flatcards';
import FanzyCard from './Components/FanzyCard';
function App() {

  const isDarkMode = useColorScheme() === 'dark';
  return(
    <SafeAreaView style = {styles.container}>
      <ScrollView>
        {/* <Text>app</Text> */}
        <Flatcards/>
        <FanzyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  },
 
  
});

export default App;
