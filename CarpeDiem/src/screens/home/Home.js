import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Image } from "react-native";

import { FooterText } from "../../shared/components/footer/footer-text";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/img/logo.png")}
        style={{ width: 250, height: 250 }}
      />
      <Image
        source={require("../../assets/img/frase.png")}
        style={{ width: 250, height: 60 }}
      />

      <StatusBar style="auto" />

      <FooterText />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    rowGap: 9,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#F1ECE9",
  },
});
