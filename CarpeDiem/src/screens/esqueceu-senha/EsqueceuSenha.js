import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import { EsqueceuSenhaTexto } from "./components/esqueceu-senha-texto";
import { EsqueceuSenhaButtons } from "./components/esqueceu-senha-buttons";

export default function EsqueceuSenha({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const btnRecuperarSenhaLabel = "RECUPERAR SENHA";

  const redefinirSenha = () => {
    if (!nome) {
      alert("Insira o seu nome!");
      return false;
    }
    if (!email) {
      alert("Insira o seu email!");
      return false;
    }

    alert("Sua requisição de redefinição de senha foi enviada!");
    setTimeout(logoff, 2000);
  };

  function logoff() {
    redirecionaTela();
  }
  
  const redirecionaTela = () => {
    navigation.push("Login");
  };

  return (
    <SafeAreaView style={styles.EsqueceuSenha}>
      <HeaderIcons />

      <HeaderLogo />

      <EsqueceuSenhaTexto />

      <View style={styles.containerTextInput}>
        <Text style={styles.text}>Nome Completo</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nome Completo"
          autocorrect={false}
          onChangeText={setNome}
        ></TextInput>

        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Informe o Email"
          autocorrect={true}
          keyboardType="email-address"
          onChangeText={setEmail}
        ></TextInput>
      </View>

      <View style={styles.viewButton}>
        <TouchableOpacity onPress={redefinirSenha}>
          <Text style={styles.textButton}>{btnRecuperarSenhaLabel}</Text>
        </TouchableOpacity>
      </View>

      <EsqueceuSenhaButtons />

      <LinhaSeparadora />

      <FooterIcons navigation={navigation} />

      <FooterText />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  EsqueceuSenha: {
    flex: 1,
    backgroundColor: "#F1ECE9",
  },
  containerTextInput: {
    justifyContent: "center",
    width: "100%",
    fontSize: 16,
    textAlign: "center",
    padding: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "justify",
    padding: 8,
  },
  textInput: {
    backgroundColor: "#FBCB2B",
    width: "100%",
    marginBottom: 15,
    color: "#222",
    fontSize: 16,
    borderRadius: 20,
    padding: 7,
    margin: "auto",
  },
  viewButton: {
    backgroundColor: "#6FDDE3",
    borderRadius: 20,
    width: "80%",
    padding: 2,
    marginBottom: 15,
    fontSize: 16,
    marginLeft: 30,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    textAlign: "center",
    padding: 10,
    paddingTop: 7,
    paddingBottom: 7,
    textTransform: "uppercase",
  },
});
