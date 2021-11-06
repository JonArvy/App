import React from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function Settings(props) {
    const [loaded] = useFonts({
        GlacialIndifference: require('./assets/fonts/GlacialIndifference-Regular.otf'),
        GlacialIndifferenceItalic: require('./assets/fonts/GlacialIndifference-Italic.otf'),
        GlacialIndifferenceBold: require('./assets/fonts/GlacialIndifference-Bold.otf'),
    });

    if (!loaded) {
        console.log("null");
    }

    return (
        <View style={styles.container}>
            <Image style={styles.topimg} source={require('./assets/UI_design_top.png')} />
            <View style={styles.title}>
                <Text style={styles.titletext}>Settings!</Text>
            </View>
            <Image style={styles.bottomimg} source={require('./assets/UI_design_bottom.png')} />
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        height: windowHeight,
        width: windowWidth,
    },
    topimg: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 0,
    },
    bottomimg: {
        position: "absolute",
        bottom: 0,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    titletext: {
        fontSize: 40,
        fontFamily: 'GlacialIndifferenceBold',
        color: "#02abff",
        marginBottom: 10,
        width: 200,
        height: 60,
        textAlign: "center",

        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 1 },
        textShadowRadius: 7,
    },
});

export default Settings;