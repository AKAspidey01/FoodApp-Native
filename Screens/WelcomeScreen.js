import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
// import { useFonts , Nunito_700Bold } from "@expo-google-fonts/nunito";
import { useFonts, Poppins_900Black } from "@expo-google-fonts/poppins";
import CuratedText from "./CuratedText";
import { Ionicons } from "@expo/vector-icons";

export default function WelcomeScreen({ navigation }) {

    let [fontsLoaded] = useFonts({
        Poppins_900Black,
    });
    if (!fontsLoaded) {
        return null;
    };

    return (
        <View style={styles.welcomecontainer}>
            <View style={styles.welcomeimgblk}><Image style={styles.welcomeimg} source={require("../assets/cooking-welcome.png")} /></View>
            <View style={{ flexDirection: "row", marginTop: 20, marginBottom: 30, }}><Text style={styles.cuktext}>CUK </Text><Text style={styles.cuktext2}> CUK</Text></View>
            <CuratedText />
            <Pressable onPress={() => navigation.navigate("Signin")}><Ionicons name="arrow-forward-circle-outline" style={{ fontSize: 30, marginTop: 20 }}></Ionicons></Pressable>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Pressable style={{ marginBottom: 40 }}>
                    <Text style={{ color: "#1788ff", fontSize: 16 ,fontWeight : "700" }}>Need Help ?</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    welcomecontainer: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        paddingBottom : 20,
        paddingTop : 50,
        paddingLeft : 50,
        paddingRight : 50,
    },
    welcomeimg: {
        width: 125,
        height: 125,
        borderRadius: 5,
        backgroundColor: "#fd6716",
        borderColor: "#ffa35b",
        borderWidth: 5,

    },
    welcomeimgblk : {
        shadowOffset: { width: -2, height: 5 },
        shadowColor: '#ff5b1e',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        borderRadius : 5,
    },
    cuktext: {
        fontSize: 30,
        fontWeight: "900",
        color: "#fc2630",
        fontFamily: "Poppins_900Black",
        textShadowColor: '#fc2630',
        textShadowOffset: {width: -1, height: 2},
        textShadowRadius: 5
    },
    cuktext2: {
        fontSize: 30,
        fontWeight: "900",
        color: "#ff751e",
        fontFamily: "Poppins_900Black",
        textShadowColor: '#ff751e',
        textShadowOffset: {width: -1, height: 2},
        textShadowRadius: 5
    },

});
