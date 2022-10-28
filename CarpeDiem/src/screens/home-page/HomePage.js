import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";

import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";

export default function HomePage({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.homeBackground}>
      <HeaderIcons/>
      
      <HeaderLogo/>

      <LinhaSeparadora />

      <FooterIcons/>

      <FooterText/>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  homeBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1ECE9",
  },
});
