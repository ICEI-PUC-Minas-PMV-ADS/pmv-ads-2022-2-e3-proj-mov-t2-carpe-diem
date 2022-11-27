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
import "../../../global";

export default function Perfil({ navigation }) {
  const btnEditarLabel = "EDITAR";
  const btnSalvarLabel = "SALVAR";
  const btnCancelarLabel = "CANCELAR";
  const btnSairLabel = "SAIR";

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [layoutEdicao, setLayoutEdicao] = useState("");
  const [edicaoInputs, setEdicaoInputs] = useState("");

  useEffect(() => {
    setNome(global.nome);
    setCpf(global.cpf);
    setEmail(global.email);
    setSenha(global.senha);

    setLayoutEdicao(modoEdicao);
    setEdicaoInputs({ editable: modoEdicao});
  }, []);

  const modoEdicao = (modoEdicao) => {
    setLayoutEdicao(modoEdicao);
    setEdicaoInputs({ editable: modoEdicao});
    Botoes();
  };

  const handleClick = (modoEdicao) => {
    setEdicaoInputs({ editable: modoEdicao});
  };

  const Botoes = () => {
    return (
      <View>
        {layoutEdicao ? (
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

        <Text style={styles.text2}>Nome Usuário </Text>
        <TextInput
          style={styles.textInput}
          value={nome}
          onChangeText={setNome}
          editable={edicaoInputs.editable}
        />

        <Text style={styles.text2}>CPF </Text>
        <TextInput
          style={styles.textInput}
          value={cpf}
          onChangeText={setCpf}
          editable={edicaoInputs.editable}
        />

        <Text style={styles.text2}>Email </Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          editable={edicaoInputs.editable}
        />

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
