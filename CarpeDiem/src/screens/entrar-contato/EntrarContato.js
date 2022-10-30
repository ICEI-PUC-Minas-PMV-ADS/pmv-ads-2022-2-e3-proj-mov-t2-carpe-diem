import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";

export default function EntrarContato() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderIcons />
      <HeaderLogo />
      <StatusBar style="auto" />

      <Text style={styles.text1}>Pousada Princess </Text>
      <Text style={styles.text2}>Porto Seguro - BA </Text>
      <Image
        source={require("../../assets/img/pousada-princess.jpg")}
        style={{ width: 300, height: 210 }}
      />

      <Text style={styles.text1}>Gostou do Imóvel? </Text>
      <Text style={styles.text2}>
        Verifique a Disponibilidade e Faça sua Reserva!
      </Text>

      <MaterialIcons name="alternate-email" size={32} color="#2C9196" />
      <Text style={styles.text2}>carpediem@hotmail.com</Text>

      <Ionicons name="logo-whatsapp" size={32} color="#2C9196" />
      <Text style={styles.text2}>(31) 98925-9223</Text>

      <MaterialIcons name="phone-in-talk" size={32} color="#2C9196" />
      <Text style={styles.text2}>(31) 3256-9851</Text>

      <LinhaSeparadora />
      <FooterIcons />
      <FooterText />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    textAlign: "left",
    padding: 5,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
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
