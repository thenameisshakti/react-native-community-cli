import React from 'react';
import {
  Text,
  View,

  
} from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';


function Main (){
  return (
   <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text> Clone of the Spotify</Text>
      </View>
    </SafeAreaView>
  )
}
export default Main