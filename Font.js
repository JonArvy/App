import React from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

function loadFont(props) {
    const [loaded] = useFonts({
        GlacialIndifference: require('./assets/fonts/GlacialIndifference-Regular.otf'),
        GlacialIndifferenceItalic: require('./assets/fonts/GlacialIndifference-Italic.otf'),
        GlacialIndifferenceBold: require('./assets/fonts/GlacialIndifference-Bold.otf'),
    });

    if (!loaded) {
        return console.log("null");
    }
}