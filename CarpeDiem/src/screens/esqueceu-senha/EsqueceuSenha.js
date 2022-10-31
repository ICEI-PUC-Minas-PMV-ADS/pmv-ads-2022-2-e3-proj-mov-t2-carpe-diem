import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import { EsqueceuSenhaTexto } from "./components/esqueceu-senha-texto";
import { EsqueceuSenhaInputs } from "./components/esqueceu-senha-inputs";

export default function EsqueceuSenha() {
  return (
    <SafeAreaView style={styles.EsqueceuSenha}>
      <HeaderIcons />

      <HeaderLogo />

      <EsqueceuSenhaTexto />

      <EsqueceuSenhaInputs/>

      <LinhaSeparadora />

      <FooterIcons />

      <FooterText />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  EsqueceuSenha: {
    flex: 1,
    backgroundColor: "#F1ECE9",
  },
});
