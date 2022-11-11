import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";

export default function BuscaVazia() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HeaderIcons />

        <HeaderLogo />

        <View>
          <Ionicons
            name="search"
            size={96}
            onPress={() => {}}
            style={styles.button}
          />
        </View>

        <Text style={styles.text1}>
          Não encontramos {"\n"}imóveis com as {"\n"}características digitadas{" "}
        </Text>

        <Text style={styles.text2}>
          Por favor, verifique sua pesquisa e tente {"\n"}novamente para obter
          resultados{" "}
        </Text>

        <LinhaSeparadora />

        <FooterIcons />

        <FooterText />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    textAlign: "center",
    padding: 5,
    paddingTop: 5,
    fontWeight: "bold",
    marginBottom: 25,
  },
  text2: {
    fontSize: 16,
    textAlign: "center",
    padding: 8,
    marginBottom: 95,
  },
  container: {
    //display: "flex",
    //rowGap: 9,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "#F1ECE9",
  },
  scrollView: {
    backgroundColor: "#F1ECE9",
  },
  button: {
    height: 150,
    width: 150,
    maxWidth: 300,
    maxHeight: 300,
    borderRadius: 100,
    backgroundColor: "#2C9196",
    display: "flex",
    color: "#FFFFFF",
    //flexDirection: "column",
    textAlign: "center",
    marginLeft: 70,
    marginVertical: 70,
    //alignItems: "center",
    //textAlignVertical: "middle",
    padding: 23,
  },
});
