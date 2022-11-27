import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity, } from "react-native";
import FlashMessage from "react-native-flash-message";
import { Ionicons } from "@expo/vector-icons";
import { showMessage, hideMessage } from "react-native-flash-message";
import * as SQLExecutorFaleConosco from "../../../database/services/SQLExecutorFaleConosco";

function FaleConoscoInputs({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const criarFaleConosco = () => {
    if (!nome) {
      alert("Insira o seu nome!");
      return false;
    }
    if (!email) {
      alert("Insira o seu email!");
      return false;
    }
    if (!mensagem) {
      alert("Insira o sua mensagem!");
      return false;
    }

    let faleconosco = {
      nome: nome,
      mensagem: mensagem,
      email: email,
      senha: senha,
    };
    SQLExecutorFaleConosco.insertFaleConosco(faleconosco);

    sucessoCriarFaleConosco();
  };

  const redirecionaTela = () => {
    navigation.push("Obrigado");
  };

  const sucessoCriarFaleConosco = () => {
    showMessage({
      message: "Mensagem enviada com sucesso!",
      type: "success"
    });
    redirecionaTela();
  };


  return (
    <View style={styles.containerTextInput}>

      <Text style={styles.text}>Nome Completo</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        style={styles.textInput}
        placeholder="Nome Completo"
        autocorrect={false}
      />

      <Text style={styles.text}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
        placeholder="Email"
        autocorrect={true}
        keyboardType="email-address"
      />

      <Text style={styles.text}>Mensagem</Text>
      <TextInput
        value={mensagem}
        onChangeText={setMensagem}
        style={styles.textInputMensagem}
        placeholder="Mensagem"
        autocorrect={false}
      />

      <View style={styles.container}>
        <TouchableOpacity style={styles.btnEnviar} onPress={criarFaleConosco}>
          <Text style={styles.enviarText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
      <FlashMessage position="bottom" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  containerTextInput: {
    justifyContent: "center",
    width: "100%",
    fontSize: 16,
    textAlign: "center",
    padding: 20,
  },
  container: {
    display: "flex",
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
  },
  btnEnviar: {
    backgroundColor: "#6FDDE3",
    borderRadius: 20,
    width: "80%",
    height: 40,
    padding: 2,
    marginBottom: 15,
    fontSize: 16,
    marginLeft: 50,
  },
  enviarText: {
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    textAlign: "center",
    padding: 10,
    paddingTop: 7,
    paddingBottom: 7,
    textTransform: "uppercase",
  },
  textInputMensagem: {
    backgroundColor: "#FBCB2B",
    width: "100%",
    height: 200,
    maxLength: 255,
    marginBottom: 15,
    color: "#222",
    fontSize: 16,
    borderRadius: 20,
    padding: 7,
  },
});

export { FaleConoscoInputs };
