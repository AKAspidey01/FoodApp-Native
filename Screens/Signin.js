import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
// import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { useFonts, Nunito_600SemiBold, Nunito_400Regular } from "@expo-google-fonts/nunito";



export default function Signin({ navigation }) {


    let [fontsLoaded] = useFonts({

        Nunito_600SemiBold,
        Nunito_400Regular

    });
    if (!fontsLoaded) {
        return null;
    };

    return (
        <View style={styles.signincontainer}>
            <View style={{ marginBottom: 80, }}>
                <Text style={styles.signintext}>Sign in with mobile</Text>
                <Text style={styles.signintext}>number</Text>
            </View>
            <View style={styles.numberblk}>
                <Text style={styles.inputlables}>YOUR PHONE</Text>
                <TextInput style={styles.loginputs} />
            </View>
            <View style={styles.passwordblk}>
                <Text style={styles.inputlables}>PASSWORD</Text>
                <TextInput style={styles.loginputs} />
            </View>
            <View style={{ marginTop: 40 }}>
                <Pressable style={{ textAlign: "center" }} onPress={() => navigation.navigate("WelcomeScreen")}>
                    <Ionicons style={{ fontSize: 30 }} name="arrow-back-circle-outline"></Ionicons>
                </Pressable>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                <Pressable style={styles.signinbtn}>
                    <Text style={{ color: "#fff", fontSize: 18, fontFamily: "Nunito_600SemiBold", textAlign: "center" }}>SIGN IN</Text>
                </Pressable>
                <Text style={{ fontSize: 12 }}>Don't have an account? <Pressable onPress={() => navigation.navigate("Signup")}><Text style={{ color: "#1788ff", fontSize: 15, marginTop: 10, fontWeight: "700" }}>Sign up</Text></Pressable></Text>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    signincontainer: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        paddingBottom: 20,
        paddingTop: 50,
        paddingLeft: 50,
        paddingRight: 50,
    },
    signintext: {
        textAlign: "center",
        fontFamily: "Nunito_600SemiBold",
        fontSize: 18,
    },
    inputlables: {
        fontSize: 12,
        fontFamily: "Nunito_600SemiBold",
        color: "#ff5b1e",
        marginBottom: 5,
        fontWeight: "700"
    },
    loginputs: {
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        width: "100%",
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    numberblk: {
        marginBottom: 40,
    },
    signinbtn: {
        borderRadius: 4,
        backgroundColor: "#ff5b1e",
        paddingHorizontal: 70,
        paddingVertical: 10,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        marginBottom: 30,
        shadowOffset: { width: -2, height: 6 },
        shadowColor: '#ff5b1e',
        shadowOpacity: 0.5,
        shadowRadius: 3,
    }
});
