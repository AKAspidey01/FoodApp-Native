import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts , Nunito_400Regular } from "@expo-google-fonts/nunito";

export default function CuratedText() {
    let [fontsLoaded] = useFonts({
        Nunito_400Regular
       });
       if (!fontsLoaded) {
         return null;
       };

  return (
    <View style={styles.curated}>
        <Text style={styles.bottomtext}>Curated Food Recommendation</Text>
        <Text style={styles.bottomtext}>For Runaway Members</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    bottomtext : {
        fontSize : 18,
        fontFamily : "Nunito_400Regular",
        textAlign : "center"
    },

});
