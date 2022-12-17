import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFonts ,Nunito_600SemiBold , Nunito_400Regular } from "@expo-google-fonts/nunito";

export default function Signup({ navigation }) {

    let [fontsLoaded] = useFonts({

        Nunito_600SemiBold ,
        Nunito_400Regular

    });
    if (!fontsLoaded) {
        return null;
    };

    return (
        <View style={styles.signupcontainer}>
            <View style={{ marginBottom: 40, }}>
                <Text style={styles.signuptext}>Sign up with mobile </Text>
                <Text style={styles.signuptext}>number</Text>
            </View>
            <View style={styles.regnumberblk}>
                <Text style={styles.reginputlables}>YOUR PHONE</Text>
                <TextInput style={styles.reginputs} />
            </View>
            <View style={styles.regpasswordblk}>
                <Text style={styles.reginputlables}>PASSWORD</Text>
                <TextInput style={styles.reginputs} />
            </View>
            <View style={styles.regcreatepass}>
                <Text style={styles.reginputlables}>CREATE PASSWORD</Text>
                <TextInput style={styles.reginputs} />
            </View>
            <View style={{ marginTop: 40 }}>
                <Pressable style={{ textAlign: "center" }} onPress={() => navigation.navigate("Signin")}>
                    <Ionicons style={{ fontSize: 30 }} name="arrow-back-circle-outline"></Ionicons>
                </Pressable>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                <Pressable style={styles.signupbtn}>
                    <Text style={{ color: "#fff", fontSize: 18, fontFamily: "Nunito_600SemiBold", textAlign: "center" }}>SIGN UP</Text>
                </Pressable>
                <Text style={{ fontSize: 12, }}>Already have an account? <Pressable onPress={() => navigation.navigate("Signin")}><Text style={{ color: "#1788ff", fontSize: 15, marginTop: 10, fontWeight: "700" }}>Sign in</Text></Pressable></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    signupcontainer: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        paddingBottom: 20,
        paddingTop: 50,
        paddingLeft: 50,
        paddingRight: 50,
    },

    signuptext: {
        textAlign: "center",
        fontFamily: "Nunito_600SemiBold",
        fontSize: 18,
    },
    reginputlables: {
        fontSize: 12,
        fontFamily: "Nunito_600SemiBold",
        color: "#ff5b1e",
        marginBottom: 5,
        fontWeight: "700"
    },
    reginputs: {
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        width: "100%",
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    regnumberblk: {
        marginBottom: 40,
    },
    regpasswordblk: {
        marginBottom: 40,
    },
    signupbtn: {
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
