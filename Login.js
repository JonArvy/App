import React from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function Login(props) {
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
            <Image style={styles.imgr} source={require('./assets/bling.png')} />
            <View style={styles.title}>
                <Text style={styles.titletext}>Welcome!</Text>
                <Text style={styles.titlesubtext}>Sign In and connect with your friends on [system_name]</Text>
                <Image style={styles.friendsimg} source={require('./assets/friends.png')} />
            </View>
            <View style={styles.textinputmaincontainer}>
                <TextInput style={styles.textinput} placeholder="Email or Username" />
                <TextInput style={styles.textinput} secureTextEntry={true} placeholder="Password" />
            </View>
            <View>
                <Text style={styles.footer}>Forgot your password?</Text>
            </View>
            <View style={styles.buttoncontainer}>
                <TouchableOpacity
                    style={styles.buttonstyle}
                    onPress={() => console.log("Sign In")}>
                    <Text style={styles.buttontext}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.sidetosidecontainer, { alignItems: "center", justifyContent: "center" }]}>
                <Text style={styles.signupnow}>Didn't have any account? </Text>
                <Text style={[styles.signupnow, { color: "#02abff", textDecorationLine: 'underline' }]}>Sign Up </Text>
                <Text style={styles.signupnow}>now</Text>
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
    imgr: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: 220,
        marginTop: -30,
        width: 100,
        height: 100,
    },
    bottomimg: {
        position: "absolute",
        bottom: 0,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
    },
    friendsimg: {
        width: 280,
        height: 220,
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
    titlesubtext: {
        fontSize: 16,
        color: "#000000",
        textAlign: "center",
        fontFamily: 'GlacialIndifference',
        width: 300,
        marginBottom: 20,
    },
    textinputmaincontainer: {
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    sidetosidecontainer: {
        flexDirection: "row",
    },
    textinput: {
        fontSize: 14,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        width: 300,
        height: 50,
        marginBottom: 15,
        borderRadius: 10,
    },
    buttoncontainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 0,
        marginBottom: 0,

        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonstyle: {
        backgroundColor: "#02abff",
        width: 300,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,

        borderWidth: 1,
        borderColor: "#0200ff",
        borderRadius: 10,
    },
    buttontext: {
        color: "#ffffff"
    },
    footer: {
        textAlign: "center",
        fontSize: 10,
        marginTop: -3,
    },
    signupnow: {
        textAlign: "center",
        fontSize: 10,
        marginTop: 7,
    },

});

export default Login;