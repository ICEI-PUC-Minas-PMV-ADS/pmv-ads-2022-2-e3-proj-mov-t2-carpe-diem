import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { CadastroTexto } from "./components/cadastro-texto";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora"
import { CadastroInputs } from "../cadastro/components/cadastro-inputs"


export default function Cadastro({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.cadastroBackground}>
      <HeaderIcons />
      
      <HeaderLogo />

      <CadastroTexto />
 
      <CadastroInputs navigation={navigation} />

      <LinhaSeparadora />

      <FooterIcons />

      <FooterText />

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  cadastroBackground: {
    display: "flex",
    rowGap: 9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1ECE9",
  },
});

