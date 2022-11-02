import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import { EsqueceuSenhaTexto } from "./components/esqueceu-senha-texto";
import { EsqueceuSenhaInputs } from "./components/esqueceu-senha-inputs";
import { EsqueceuSenhaButtons } from "./components/esqueceu-senha-buttons";
import BtnBlue from "../../shared/components/visuais/BtnBlue";

export default function EsqueceuSenha({ navigation }) {
  const btnRecuperarSenhaLabel = "RECUPERAR SENHA";

  return (
    <SafeAreaView style={styles.EsqueceuSenha}>
      
      <HeaderIcons />

      <HeaderLogo />

      <StatusBar style="auto" />

      <EsqueceuSenhaTexto />

      <EsqueceuSenhaInputs navigation={navigation} />

      <BtnBlue label={btnRecuperarSenhaLabel} />

      <EsqueceuSenhaButtons />

      <LinhaSeparadora />

      <FooterIcons />

      <FooterText />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  EsqueceuSenha: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "#F1ECE9",
  },
});
