import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Image, View, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <HeaderIcons />

        <HeaderLogo />

        <StatusBar style="auto" />

        <Text style={styles.text1}>Pousada Princess </Text>
        <Text style={styles.text5}>Porto Seguro - BA </Text>
        
        <Image
          source={require("../../assets/img/pousada-princess.jpg")}
          style={{ width: "100%", height: 210 }}
        />

        <Text style={styles.text3}>Gostou do Imóvel? </Text>
        <Text style={styles.text2}>
          Verifique a Disponibilidade {"\n"}e Faça sua Reserva!
        </Text>

        <View style={styles.flexbox2}>
          <MaterialIcons name="alternate-email" size={32} color="#2C9196" />
          <Text style={styles.text4}>carpediem@hotmail.com</Text>
        </View>

        <View style={styles.flexbox2}>
          <Ionicons name="logo-whatsapp" size={32} color="#2C9196" />
          <Text style={styles.text4}>(31) 98925-9223</Text>
        </View>

        <View style={styles.flexbox2}>
          <MaterialIcons name="phone-in-talk" size={32} color="#2C9196" />
          <Text style={styles.text4}>(31) 3256-9851</Text>
        </View>

        <LinhaSeparadora />

        <FooterIcons />

        <FooterText />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    textAlign: "left",
    //padding: 5,
    paddingTop: 40,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 36,
    padding: 24,
  },
  text3: {
    fontSize: 24,
    textAlign: "center",
    //padding: 2,
    paddingTop: 36,
    fontWeight: "bold",
  },
  text4: {
    fontSize: 16,
    textAlign: "center",
    //fontWeight: "bold",
    padding: 15,
  },
  text5: {
    fontSize: 16,
    textAlign: "left",
    fontWeight: "bold",
    paddingBottom: 15,
    paddingTop: 5,
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
  flexbox2: {
    alignItems: "center",        
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  scrollView: {
    backgroundColor: "#F1ECE9",
  },
});
