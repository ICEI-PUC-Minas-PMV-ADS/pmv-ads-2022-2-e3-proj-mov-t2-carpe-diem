import React from "react";

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
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import BtnBlue from "../../shared/components/visuais/BtnBlue";

export default function ResultadoBusca() {
  const btnDetalhesLabel = "DETALHES";

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}> */}
      <ScrollView>
        <HeaderIcons />
        <HeaderLogo />
        <StatusBar style="auto" />

        <Text style={styles.textTitulo}>Acomodações Disponíveis </Text>

        <View style={styles.containerSearchbar}>
          <TextInput
            style={styles.TextInput}
            placeholder="Escolha seu Destino"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(value) => setText(value)}
          />
          <Ionicons
            name="search"
            size={16}
            color="#2C9196"
            onPress={() => {}}
            style={{
              padding: 12,
              height: 40,
              borderRadius: 20,
              backgroundColor: "#F36E2B",
              color: "#FFFFFF",
            }}
          />
        </View>

        <Image
          source={require("../../assets/img/pousada-princess.jpg")}
          style={{ width: 300, height: 210 }}
        />

        {/* Residencial Malibu - BA */}
        <Text style={styles.textSubTitulo}>Residencial Malibu - BA</Text>

        <View style={styles.flexbox1}>
          <Ionicons name="map-outline" size={24} color="#2C9196" />
          <Text style={styles.textIcones}>Praia Apaga Fogo </Text>

          <MaterialCommunityIcons
            name="account-group"
            size={24}
            color="#2C9196"
          />
          <Text style={styles.textIcones}>03 Hóspedes </Text>
        </View>

        <View style={styles.flexbox1}>
          <Ionicons name="bed-outline" size={24} color="#2C9196" />
          <Text style={styles.textIcones}>01 Quarto </Text>

          <MaterialCommunityIcons
            name="bathtub-outline"
            size={24}
            color="#2C9196"
          />
          <Text style={styles.textIcones}>01 Banheiro </Text>
          
          <Text style={styles.textIcones}>A partir de R$ 160,00 / noite</Text>
        </View>

        {/* Especificações do imóvel */}
        <Text style={styles.textSubTitulo}>Pousada Princess - BA </Text>

        <View style={styles.flexbox1}>
          <Ionicons name="map-outline" size={24} color="#2C9196" />
          <Text style={styles.textIcones}>Praia Apaga Fogo </Text>

          <MaterialCommunityIcons
            name="account-group"
            size={24}
            color="#2C9196"
          />
          <Text style={styles.textIcones}>03 Hóspedes </Text>
        </View>

        <View style={styles.flexbox1}>
          <Ionicons name="bed-outline" size={24} color="#2C9196" />
          <Text style={styles.textIcones}>01 Quarto </Text>

          <MaterialCommunityIcons
            name="bathtub-outline"
            size={24}
            color="#2C9196"
          />
          <Text style={styles.textIcones}>01 Banheiro </Text>

          <Text style={styles.textIcones}>A partir de R$ 160,00 / noite</Text>
        </View>

        <BtnBlue label={btnDetalhesLabel} />

        <LinhaSeparadora />

        <FooterIcons />

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
  textTitulo: {
    fontSize: 24,
    textAlign: "left",
    padding: 5,
    paddingTop: 20,
    fontWeight: "bold",
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
