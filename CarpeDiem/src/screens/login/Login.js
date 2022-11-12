import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LoginTexto } from "./components/login-texto";
import { LoginInputs } from "./components/login-inputs";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.loginBackground}>
      <HeaderIcons />

      <HeaderLogo />

      <StatusBar style="auto" />

      <LoginTexto />

      <LoginInputs navigation={navigation} />

      <LinhaSeparadora />

      <FooterIcons navigation={navigation} />

      <FooterText />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginBackground: {
    flex: 1,
    backgroundColor: "#F1ECE9",
  },
});
