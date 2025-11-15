import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

function MainApp() {
  const [randomBackground, setRandomBackground] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const random = Math.random()
      console.log(random)
      color += hexRange[Math.floor(random * 10)];
    }
    setRandomBackground(color);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: randomBackground }]}
      edges={['top', 'left', 'right']}
    >
      <StatusBar backgroundColor={randomBackground} barStyle="dark-content" />

      <View>
        <Text>here</Text>
      </View>

      <View style={styles.centeredContent}>
        
          <View style={styles.actionBtn}>
            <TouchableOpacity onPress={generateColor}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
            </TouchableOpacity>
          </View>
        
      </View>
    </SafeAreaView>
  );
}


export default function App() {
  return (
    <SafeAreaProvider>
      <MainApp />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});
