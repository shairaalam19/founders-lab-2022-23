import * as React from 'react';
import {useState} from 'react';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, Platform, TextInput } from 'react-native';


export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [zipcode, setZipcode] = useState(0);
    const [age, setAge] = useState(0);

    // const handleSubmit = (e) => {
    //     console.log(age)
    // }

    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar style="auto" /> */}
            {/* <Text numberOfLines={1} onPress={handlePress}>Coach Connect</Text> */}
            <Image style={styles.tinyLogo} source={require('./../assets/logo_transparent.png')}/>
            <View style={styles.input}>
                <TextInput 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    onChangeText={setUsername}
                    value={name}
                />
                <TextInput 
                    type="text" 
                    name="password" 
                    placeholder="Password" 
                    onChangeText={setPassword}
                    value={password}
                />
            </View>
            {/* <Button 
                style={styles.button} 
                title="Submit"
                type="Submit"
            /> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#702FBF',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 20 : 0 
  },
  tinyLogo: {
    width: 50,
    height: 50
  },
  logo: {
    width: 300,
    height: 300,
  },
  button: {
    backgroundColor: '#EDB951',
    padding: 20
  },
  input: {
    color: '#000000'
  }
});