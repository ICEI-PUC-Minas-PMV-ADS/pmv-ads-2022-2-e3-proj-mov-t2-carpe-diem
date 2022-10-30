import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";

import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { FaleConoscoInputs } from "./components/faleconosco-inputs";
import { FaleConoscoTexto } from "./components/faleconosco-texto";

export default function FaleConosco({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.faleconoscoBackground}>
      <HeaderIcons />

      <HeaderLogo />

      <FaleConoscoTexto />

      <FaleConoscoInputs navigation={navigation} />

      <LinhaSeparadora />

      <FooterIcons />

      <FooterText />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  faleconoscoBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1ECE9",
  },
});
