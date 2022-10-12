import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { LinhaSeparadora } from "../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../shared/components/footer/footer-icons";
import { FooterText } from "../shared/components/footer/footer-text";
import { HeaderIcons } from "../shared/components/header/header-icons";
import { HeaderLogo } from "../shared/components/header/header-logo";
import { LoginTexto } from "./components/login-texto";
import { LoginInputs } from "./components/login-inputs";

export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <HeaderIcons />

      <HeaderLogo />

      <LoginTexto />

      <LinhaSeparadora />

      <LoginInputs/>

      <LinhaSeparadora />

      <FooterIcons />

      <FooterText />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1ECE9",
  },
  entrarText: {
    fontWeight: "700",
    fontSize: 16,
  },
  esqueceuSenhaText: {
    fontSize: 10,
  },
});
