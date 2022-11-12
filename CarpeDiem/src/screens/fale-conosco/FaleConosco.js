import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { FaleConoscoInputs } from "./components/faleconosco-inputs";
import { FaleConoscoTexto } from "./components/faleconosco-texto";

export default function FaleConosco({ navigation }) {
  return (
    <SafeAreaView style={styles.faleconoscoBackground}>
      <ScrollView style={styles.scrollView}>
        <HeaderIcons />

        <HeaderLogo />

        <StatusBar style="auto" />

        <FaleConoscoTexto />

        <FaleConoscoInputs navigation={navigation} />

        <LinhaSeparadora />

        <FooterIcons navigation={navigation} />

        <FooterText />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  faleconoscoBackground: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F1ECE9",
  },
  scrollView: {
    backgroundColor: "#F1ECE9",
  },
});
