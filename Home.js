import React from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, TouchableOpacity, TextInput, Dimensions, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function Home(props) {

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
            <Image style={styles.bottomimg} source={require('./assets/UI_design_bottom.png')} />
            <View style={styles.rowarrange}>
                <Text style={{ fontFamily: "GlacialIndifference", marginLeft: 30, fontSize: 40 }}>Tae tae App</Text>
                <TouchableOpacity>
                    <Image style={[styles.navicon, { marginTop: 7 }]} source={require('./assets/settings.png')} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.userprofile}>
                <Image style={[styles.profilepic, { width: 60, height: 60 }]} source={require('./assets/sai.jpg')} />
                <Text style={{ textAlign: "center", marginTop: 5, fontSize: 12, fontFamily: "GlacialIndifference" }}>SAIRA</Text>
            </TouchableOpacity>

            <View style>
                <Text style={{ fontSize: 12, fontFamily: "GlacialIndifference", marginLeft: 30, marginBottom: 10, }}>Stories</Text>
                <View style={styles.friendsbar}>
                    <TouchableOpacity style={styles.friendsbutton}>
                        <Image style={styles.profilepic} source={require('./assets/christian.jpg')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.friendsbutton}>
                        <Image style={styles.profilepic} source={require('./assets/fred.jpg')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.friendsbutton}>
                        <Image style={styles.profilepic} source={require('./assets/marialy.jpg')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.friendsbutton}>
                        <Image style={styles.profilepic} source={require('./assets/ore.jpg')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.friendsbutton}>
                        <Image style={styles.profilepic} source={require('./assets/monalisa.jpg')} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.postsscrollview}>
                <View style={styles.postcontainer}>
                    <View style={styles.rowarrange}>
                        <TouchableOpacity style={[styles.friendsbutton, { marginLeft: 25, marginTop: 10, marginBottom: 5, }]}>
                            <Image style={styles.profilepic} source={require('./assets/christian.jpg')} />
                        </TouchableOpacity>
                        <View>
                            <Text style={{ marginTop: 16, }}>Christian Angelo Navera</Text>
                            <Text>2 hours ago</Text>
                        </View>
                    </View>
                    <Text style={styles.caption}>"The quick brown fox jumps over the lazy dog" is an English-language pangram—a sentence that contains all of the letters of the English alphabet. Owing to its brevity and coherence, it has become widely known. Windowsssssssssss XP</Text>
                    <View>
                        <TouchableOpacity style={styles.postimgbtn}>
                            <Image style={styles.postimg} source={require('./assets/windowsxp.jpg')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.besideoptions}>
                        <TouchableOpacity style={[styles.besideiconbutton, { marginTop: 20, marginBottom: 50 }]}>
                            <Image style={styles.besideicon} source={require('./assets/option.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.besideiconbutton}>
                            <Image style={styles.besideicon} source={require('./assets/heart.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.besideiconbutton}>
                            <Image style={styles.besideicon} source={require('./assets/comment.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.besideiconbutton}>
                            <Image style={styles.besideicon} source={require('./assets/share.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.postcontainer}>
                    <View style={styles.rowarrange}>
                        <TouchableOpacity style={[styles.friendsbutton, { marginLeft: 25, marginTop: 10, marginBottom: 5, }]}>
                            <Image style={styles.profilepic} source={require('./assets/fred.jpg')} />
                        </TouchableOpacity>
                        <View>
                            <Text style={{ marginTop: 16, }}>Frederick Louis Marlang</Text>
                            <Text>2 hours ago</Text>
                        </View>
                    </View>
                    <Text style={styles.caption}>Face reveal</Text>
                    <View>
                        <TouchableOpacity style={styles.postimgbtn}>
                            <Image style={styles.postimg} source={require('./assets/monalisa.jpg')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.besideoptions}>
                        <TouchableOpacity style={[styles.besideiconbutton, { marginTop: 20, marginBottom: 50 }]}>
                            <Image style={styles.besideicon} source={require('./assets/option.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.besideiconbutton}>
                            <Image style={styles.besideicon} source={require('./assets/heart.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.besideiconbutton}>
                            <Image style={styles.besideicon} source={require('./assets/comment.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.besideiconbutton}>
                            <Image style={styles.besideicon} source={require('./assets/share.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>


            <View style={styles.navbar}>
                <View style={styles.navcontainer}>
                    <TouchableOpacity style={styles.navbutton}>
                        <Image style={styles.navicon} source={require('./assets/home_or_newsfeed.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navbutton}>
                        <Image style={styles.navicon} source={require('./assets/new_notification.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navbutton}>
                        <Image style={styles.navicon} source={require('./assets/create_post_button.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navbutton}>
                        <Image style={styles.navicon} source={require('./assets/new_message.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navbutton}>
                        <Image style={styles.navicon} source={require('./assets/search_icon.png')} />
                    </TouchableOpacity>
                </View>
            </View>

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
        marginTop: 10,
    },

    rowarrange: {
        flexDirection: "row",
    },

    friendsbar: {
        flexDirection: "row",
        marginLeft: 30,
        marginBottom: 5,
    },

    friendsbutton: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },

    navbar: {
        position: "absolute",
        bottom: 0,

    },
    navcontainer: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        width: windowWidth,
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    navbutton: {
        alignItems: "center",
        justifyContent: "center",
    },
    navicon: {
        width: 35,
        height: 35,
        marginHorizontal: 20,
    },
    userprofile: {
        position: "absolute",
        right: 20,
        top: 60,
    },
    profilepic: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },

    postcontainer: {
        backgroundColor: "#fff",
        marginTop: 7,
        paddingBottom: 15,
    },

    postimgbtn: {
        marginLeft: 25,
        width: null,
        height: null,
        resizeMode: "contain",
    },

    postimg: {
        width: 300,
        height: 200,
    },

    besideoptions: {
        width: 67,
        height: 270,
        position: "absolute",
        right: 0,
    },
    besideiconbutton: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },

    besideicon: {
        width: 35,
        height: 35,

    },

    caption: {
        marginLeft: 25,
        marginBottom: 5,
        width: 300,
    },

    postsscrollview: {
        height: 200,
        backgroundColor: "#f6f5e7",
    },
});

export default Home;