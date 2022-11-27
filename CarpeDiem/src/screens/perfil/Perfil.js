import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import BtnBlue from "../../shared/components/visuais/BtnBlue";
import H1 from "../../shared/components/visuais/H1";
import * as SQLExecutor from "../../database/services/SQLExecutor";
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import "../../../global";

export default function Perfil({ navigation }) {
  const btnEditarLabel = "EDITAR";
  const btnSalvarLabel = "SALVAR";
  const btnCancelarLabel = "CANCELAR";
  const btnSairLabel = "SAIR";

  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [layoutEdicao, setLayoutEdicao] = useState("");
  const [edicaoInputs, setEdicaoInputs] = useState(false);

  useEffect(() => {
    setId(global.id);
    setNome(global.nome);
    setCpf(global.cpf);
    setEmail(global.email);
    setSenha(global.senha);

    setLayoutEdicao(modoEdicao);
  }, []);

  const modoEdicao = (modoEdicao) => {
    setLayoutEdicao(modoEdicao);
    setEdicaoInputs(modoEdicao);
    Botoes();
  };

  const atualizarDados = (dados) => {
    if (dados === true) {
      let usuario = {
        id: id,
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha,
      };

      SQLExecutor.updateUsuario(usuario);

      sucessoUpdate();
    }
  };

  const sucessoUpdate = () => {
    showMessage({
      message: "Usuário atualizado com sucesso!",
      type: "success",
    });
  };

  const Botoes = () => {
    return (
      <View>
        {layoutEdicao ? (
          <View>
            <Text style={styles.text2}>Nome Usuário </Text>
            <BtnBlue
              navigation={navigation}
              label={btnSalvarLabel}
              modoEdicao={modoEdicao}
              atualizarDados={atualizarDados}
            />
            <BtnBlue
              navigation={navigation}
              label={btnCancelarLabel}
              modoEdicao={modoEdicao}
              atualizarDados={atualizarDados}
            />
            <BtnBlue
              navigation={navigation}
              label={btnSairLabel}
              modoEdicao={modoEdicao}
              atualizarDados={atualizarDados}
            />
          </View>
        ) : (
          <View>
            <BtnBlue
              navigation={navigation}
              label={btnEditarLabel}
              modoEdicao={modoEdicao}
              atualizarDados={atualizarDados}
            />
            <BtnBlue
              navigation={navigation}
              label={btnSairLabel}
              modoEdicao={modoEdicao}
              atualizarDados={atualizarDados}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HeaderIcons />

        <HeaderLogo />

        <Ionicons
          name="person-circle"
          size={80}
          color="#2C9196"
          style={{ textAlign: "center" }}
        />

        <H1 title="Perfil" />

        <Text style={styles.text}>{global.nome}</Text>

        <Text style={styles.text}>{global.email}</Text>

        <LinhaSeparadora />

        <Text style={styles.text2}>Nome Usuário </Text>
        <TextInput
          style={styles.textInput}
          value={nome}
          onChangeText={setNome}
          editable={edicaoInputs}
        />

        <Text style={styles.text2}>CPF </Text>
        <TextInput
          style={styles.textInput}
          value={cpf}
          onChangeText={setCpf}
          editable={edicaoInputs}
        />

        <Text style={styles.text2}>Email </Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          editable={edicaoInputs}
        />

        <Text style={styles.text2}>Senha </Text>
        <TextInput
          style={styles.textInput}
          value={senha}
          onChangeText={setSenha}
          editable={edicaoInputs}
        />

        <Botoes />

        <LinhaSeparadora />

        <FooterIcons navigation={navigation} />

        <FooterText />
      </ScrollView>
      <FlashMessage position="bottom" />
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
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "justify",
    padding: 8,
  },
  container: {
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
