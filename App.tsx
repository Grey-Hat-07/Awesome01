/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, useColorScheme} from 'react-native';

function App() {

  const isDarkMode = useColorScheme() === 'dark';
  return(
    <View style={styles.container}>
      <Text style={isDarkMode?styles.whiteText:styles.whiteText}>Teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    fontSize: 50,
    justifyContent: 'center',
    //backgroundColor: 'blue',
  },
  whiteText: {
    color: '#fff',
  },
  blackText: {
    color: '#000',
  }
});

export default App;
