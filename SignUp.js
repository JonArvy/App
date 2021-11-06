import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Picker } from '@react-native-picker/picker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SignUp(props) {

    const [loaded] = useFonts({
        GlacialIndifference: require('./assets/fonts/GlacialIndifference-Regular.otf'),
        GlacialIndifferenceItalic: require('./assets/fonts/GlacialIndifference-Italic.otf'),
        GlacialIndifferenceBold: require('./assets/fonts/GlacialIndifference-Bold.otf'),
    });

    if (!loaded) {
        console.log("null");
    }

    const [selectedGender, setSelectedGender] = useState();

    return (
        <View style={styles.container}>
            <Image style={styles.topimg} source={require('./assets/UI_design_top.png')} />
            <Image style={styles.imgr} source={require('./assets/bling.png')} />
            <View style={styles.title}>
                <Text style={styles.titletext}>Sign Up</Text>
                <Text style={styles.titlesubtext}>Sign Up and connect with your friends on [system_name]</Text>
            </View>
            <View style={styles.textinputmaincontainer}>
                <View style={styles.sidetosidecontainer}>
                    <TextInput style={[styles.textinput, { width: 145, marginRight: 5 }]} placeholder="First Name" />
                    <TextInput style={[styles.textinput, { width: 145, marginLeft: 5 }]} placeholder="Last Name" />
                </View>
                <TextInput style={styles.textinput} placeholder="Email/Mobile Address" />
                <TextInput style={styles.textinput} secureTextEntry={true} placeholder="Create your Password" />
                <TextInput style={styles.textinput} secureTextEntry={true} placeholder="Re-type your Password" />
                <View style={styles.sidetosidecontainer}>
                    <Picker style={[styles.textinput, { width: 145, marginRight: 5, color: "#000" }]}
                        selectedValue={selectedGender}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}>
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Prefer to not say" value="idk" />
                    </Picker>
                    <TextInput style={[styles.textinput, { width: 145, marginLeft: 5 }]} placeholder="Birthday" />
                </View>
            </View>
            <View style={styles.buttoncontainer}>
                <Image style={styles.checkbox} source={require('./assets/Square.png')} />
                <Text style={styles.footer}>I agree to the terms and condition</Text>
            </View>
            <View style={styles.buttoncontainer}>
                <TouchableOpacity
                    style={styles.buttonstyle}
                    onPress={() => console.log(selectedGender)}>
                    <Text style={styles.buttontext}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.sidetosidecontainer, { alignItems: "center", justifyContent: "center" }]}>
                <Text style={styles.loginnow}>Already have an account? </Text>
                <Text style={[styles.loginnow, { color: "#02abff" }]}>Log In </Text>
                <Text style={styles.loginnow}>now</Text>
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
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
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
    loginnow: {
        textAlign: "center",
        fontSize: 10,
        marginTop: 7,
    },
    checkbox: {
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -5,
        marginRight: 5,
    }

});

export default SignUp;