import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, Nunito_600SemiBold, Nunito_400Regular } from "@expo-google-fonts/nunito";
import React from "react";

export default function Verificationcode({ navigation }) {

    let [fontsLoaded] = useFonts({

        Nunito_600SemiBold,
        Nunito_400Regular
    });
    if (!fontsLoaded) {
        return null;
    };

  return (
    <View>
      <Text>Verification Code</Text>
      <Text>SMS Verification code has been <br/> sent to :</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
