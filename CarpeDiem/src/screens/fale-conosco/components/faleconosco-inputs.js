import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity, } from "react-native";
import FlashMessage from "react-native-flash-message";
import { Ionicons } from "@expo/vector-icons";
import { showMessage, hideMessage } from "react-native-flash-message";
import * as SQLExecutor from "../../../database/services/SQLExecutor";

function FaleConoscoInputs({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setmensagem] = useState("");
    
  const /*cadastrarUsuario*/ criarFaleConosco= () => {
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
    SQLExecutor.insertFaleConosco(faleconosco);

    sucessoCriarFaleConosco();
  };

  const redirecionaTela = () => {
    navigation.push("Login");
  };

  const sucessoCriarFaleConosco = () => {
    showMessage({
      message: "Mensagem enviada com sucesso!",
      type: "success"
    });
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
        style={styles.textInput}
        placeholder="Email"
        autocorrect={true}
        keyboardType="email-address"
        onChangeText={() => {}}
      ></TextInput>
      
      <Text style={styles.text}>Mensagem</Text>
      <TextInput
        style={styles.textInputMensagem}
        placeholder="Mensagem"
        autocorrect={false}
        onChangeText={() => {}}
      ></TextInput>
      
      <View style={styles.container}>
      <TouchableOpacity style={styles.btnEnviar} onPress={criarFaleConosco}>
          <Text style={styles.enviarText}>ENVIAR</Text>
        </TouchableOpacity>
        </View>
        <FlashMessage position="bottom" />
      {/* <FaleConoscoButtons navigation={navigation} /> */}
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
    textAlign:"justify",
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
