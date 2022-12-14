import React, { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import { Praia1 } from "./components/praia-1";
import { Praia2 } from "./components/praia-2";
import BtnBlue from "../../shared/components/visuais/BtnBlue";

export default function ResultadoBusca({ navigation }) {
  const btnDetalhesLabel = "DETALHES";
  const redirecionaTela = () => {
    navigation.push("ResultadoBusca");
  };

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderIcons />
        <HeaderLogo />
        <StatusBar style="auto" />

        <View>
          <Searchbar
            placeholder="Bahia"
            onIconPress={redirecionaTela}
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoCorrect={true}
          />
        </View>

        <Text style={styles.textTitulo}>Acomodações Disponíveis </Text>

        <Image
          source={require("../../assets/img/apt-residencial-malibu.jpg")}
          style={{ width: "100%", height: 210 }}
        />

        {/* Residencial Malibu - BA */}
        <Praia1 />

        <BtnBlue label={btnDetalhesLabel} />

        <Image
          source={require("../../assets/img/pousada-princess.jpg")}
          style={{ width: "100%", height: 210 }}
        />

        {/* Especificações do imóvel */}
        <Praia2 />

        <BtnBlue label={btnDetalhesLabel} />

        <LinhaSeparadora />

        <FooterIcons navigation={navigation} />

        <FooterText />
      </ScrollView>
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
  scrollView: {
    backgroundColor: "#F1ECE9",
  },
  containerSearchbar: {
    fontSize: 16,
    width: "95%",
    padding: 8,
    flexDirection: "row",
    flexDirection: "row",
  },
  TextInput: {
    backgroundColor: "#FBCB2B",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 16,
    borderRadius: 20,
    padding: 7,
    textAlign: "center",
  },
  textTitulo: {
    fontSize: 24,
    textAlign: "left",
    padding: 5,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  textSubTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 15,
  },
  textIcones: {
    fontSize: 16,
    textAlign: "center",
    padding: 15,
  },
  flexbox1: {
    alignItems: "center",
    flexDirection: "row",
    alignContent: "stretch",
    flexWrap: "wrap",
  },
});
