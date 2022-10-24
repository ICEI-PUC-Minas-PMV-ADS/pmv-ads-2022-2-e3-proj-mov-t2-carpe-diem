import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { LinhaSeparadora } from "../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../shared/components/footer/footer-icons";
import { FooterText } from "../shared/components/footer/footer-text";
import { HeaderIcons } from "../shared/components/header/header-icons";
import { HeaderLogo } from "../shared/components/header/header-logo";
import { EsqueceuSenhaTexto } from "./components/esqueceu-senha-texto";

export default function EsqueceuSenha() {
  return (
    <KeyboardAvoidingView style={styles.EsqueceuSenha}>
      <HeaderIcons />

      <HeaderLogo />

      <EsqueceuSenhaTexto />

      <EsqueceuSenhaInputs/>

      <LinhaSeparadora />

      <FooterIcons />

      <FooterText />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  EsqueceuSenha: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1ECE9",
  },
});
