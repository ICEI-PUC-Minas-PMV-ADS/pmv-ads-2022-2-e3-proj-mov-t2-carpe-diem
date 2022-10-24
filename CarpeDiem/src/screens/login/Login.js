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
import { LoginTexto } from "./components/login-texto";
import { LoginInputs } from "./components/login-inputs";

// export default function Login() {
export default function Login({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.loginBackground}>
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
  loginBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1ECE9",
  },
});
