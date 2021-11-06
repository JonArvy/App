import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';

import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    GlacialIndifference: require('./assets/fonts/GlacialIndifference-Regular.otf'),
    GlacialIndifferenceItalic: require('./assets/fonts/GlacialIndifference-Italic.otf'),
    GlacialIndifferenceBold: require('./assets/fonts/GlacialIndifference-Bold.otf'),
  });

  if (!loaded) {
    console.log("null");
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Main} name="Main" options={{ headerShown: false }} />
        <Stack.Screen component={Home} name="Home" options={{ headerShown: false }} />
        <Stack.Screen component={SignUp} name="SignUp" options={{ headerShown: false }} />
        <Stack.Screen component={Login} name="Login" options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonstext}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonstext}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonstext}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    width: 100,
    height: 50,
    backgroundColor: "blue",
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonstext: {
    textAlign: "center",
    color: "#fff"
  },
});