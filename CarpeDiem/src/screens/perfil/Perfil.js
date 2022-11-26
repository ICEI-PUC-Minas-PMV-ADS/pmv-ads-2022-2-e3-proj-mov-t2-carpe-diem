import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import BtnBlue from "../../shared/components/visuais/BtnBlue";
import H1 from "../../shared/components/visuais/H1";
import "../../../global";

export default function Perfil({ navigation }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const btnEditarLabel = "EDITAR";
  const btnSalvarLabel = "SALVAR";
  const btnCancelarLabel = "CANCELAR";
  const btnSairLabel = "SAIR";

  let editarPerfil = false;

  const [show, setShow] = useState("");

  useEffect(() => {
    setShow(modoEdicao);
  }, []);

  const modoEdicao = (modoEdicao) => {
    setShow(modoEdicao);
    editarPerfil = modoEdicao;
    Botoes();
  };

  const Botoes = () => {
    return (
      <View>
        {show ? (
          <View>
            <BtnBlue
              navigation={navigation}
              label={btnSalvarLabel}
              modoEdicao={modoEdicao}
            />

            <BtnBlue
              navigation={navigation}
              label={btnCancelarLabel}
              modoEdicao={modoEdicao}
            />

            <BtnBlue
              navigation={navigation}
              label={btnSairLabel}
              modoEdicao={modoEdicao}
            />
          </View>
        ) : (
          <View>
            <BtnBlue
              navigation={navigation}
              label={btnEditarLabel}
              modoEdicao={modoEdicao}
            />

            <BtnBlue
              navigation={navigation}
              label={btnSairLabel}
              modoEdicao={modoEdicao}
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

        {/* Informações do Usuário */}
        <Text style={styles.text2}>Nome Usuário </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setNome}
          defaultValue={global.nome}
          editable={editarPerfil}
        />

        <Text style={styles.text2}>CPF </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setCpf}
          defaultValue={global.cpf}
          editable={editarPerfil}
        />

        <Text style={styles.text2}>Email </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setEmail}
          defaultValue={global.email}
          editable={editarPerfil}
        />

        <Text style={styles.text2}>Senha </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setSenha}
          defaultValue={global.senha}
          editable={editarPerfil}
        />

        {/* Botões tela Perfil*/}

        <Botoes />

        <LinhaSeparadora />

        <FooterIcons navigation={navigation} />

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
