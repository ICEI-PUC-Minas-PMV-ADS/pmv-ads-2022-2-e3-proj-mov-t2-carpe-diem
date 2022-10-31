import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import BtnBlue from "../../shared/components/visuais/BtnBlue";
import H1 from "../../shared/components/visuais/H1";
import { getUsuario } from "../../database/services/SQLExecutor";

export default function Perfil() {
  const btnSalvarLabel = "SALVAR";
  const btnCancelarLabel = "EXCLUIR";
  const btnExcluirLabel = "SAIR";

  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    getUsuario().then((dados) => {
      setUsuario(dados);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HeaderIcons />

        <HeaderLogo />

        <MaterialIcons name="account-circle" size={0} color="#2C9196" />

        <H1 title="Perfil" />

        <Text style={styles.text}>Nome Usuário </Text>

        <Text style={styles.text}>email@email.com.br</Text>

        <LinhaSeparadora />

        {/* Informações do Usuário */}
        <TextInput
          style={styles.textInput}
          placeholder="Teste"
          onChangeText={(newText) => setText(newText)}
          defaultValue={usuario[0].nome}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Teste"
          onChangeText={(newText) => setText(newText)}
          defaultValue={usuario[0].cpf}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Teste"
          onChangeText={(newText) => setText(newText)}
          defaultValue={usuario[0].email}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Teste"
          onChangeText={(newText) => setText(newText)}
          defaultValue={usuario[0].senha}
        />

        {/* Botões tela Perfil*/}
        <BtnBlue label={btnSalvarLabel} />

        <BtnBlue label={btnCancelarLabel} />

        <BtnBlue label={btnExcluirLabel} />

        <LinhaSeparadora />

        <FooterIcons />

        <FooterText />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: "center",
    padding: 5,
  },
  text2: {
    fontSize: 16,
    textAlign: "center",
  },
  container: {
    display: "flex",
    rowGap: 9,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#F1ECE9",
  },
  scrollView: {
    backgroundColor: "#F1ECE9",
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
});
