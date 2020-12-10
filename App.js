
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';


import Progresbar from './src/Progresbar';



const App= (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <Progresbar/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
  engine: {
    position: 'absolute',
    right: 0,
  },
  
});

export default App;
