import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { InformacoesTexto } from "./components/informacoes-texto";

export default function Informacoes() {
  return (
    <KeyboardAvoidingView style={styles.Informacoes}>
      <HeaderIcons />

      <HeaderLogo />

      <InformacoesTexto />

      <LinhaSeparadora />

      <FooterIcons />

      <FooterText />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  Informacoes: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1ECE9",
  },
});
