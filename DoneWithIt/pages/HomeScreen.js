import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, Platform } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      {/* <Text numberOfLines={1} onPress={handlePress}>Coach Connect</Text> */}
      <Image style={styles.logo} source={require('./../assets/logo_transparent.png')}/>
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
    </SafeAreaView>
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
  button: {
    backgroundColor: '#EDB951',
    padding: 20
  }
});