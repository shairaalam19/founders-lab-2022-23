import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, Platform } from 'react-native';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      {/* <Text numberOfLines={1} onPress={handlePress}>Coach Connect</Text> */}
      <Image style={styles.logo} source={require('./assets/logo_transparent.png')}/>
      <Button style={styles.sign_up} title="Sign Up" 
        onPress={() => Alert.alert("Error", "Make sure to sign up", [
          { text: "Yes", onPress: () => console.log("Yes")},
          { text: "No", onPress: () => console.log("No")}
        ])}/>
    </SafeAreaView>
  );
}

export default function App() {  
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // {HomeScreen()}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#702FBF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 20 : 0 
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 300,
    height: 300,
  },
  sign_up: {
    backgroundColor: '#EDB951'
  }
});
