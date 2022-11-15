import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as SQLExecutor from "../../../database/services/SQLExecutor";

function CadastroInputs({ navigation }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");

  const cadastrarUsuario = () => {
    if (!nome) {
      alert("Insira o seu nome!");
      return false;
    }
    if (!cpf) {
      alert("Insira o seu CPF!");
      return false;
    }
    if (!email) {
      alert("Insira o seu email!");
      return false;
    }
    if (!senha) {
      alert("Insira a sua senha!");
      return false;
    }

    let usuario = {
      nome: nome,
      cpf: cpf,
      email: email,
      senha: senha,
    };

    SQLExecutor.insertUsuario(usuario);
  };

  const redirecionaTela = () => {
    navigation.push("Login");
  };

  return (
    <View style={styles.containerTextInput}>
      <Text style={styles.text}>Nome Completo*</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        style={styles.textInput}
        placeholder="Informe o Nome Completo"
        autocorrect={false}
      />

      <Text style={styles.text}>CPF*</Text>
      <TextInput
        value={cpf}
        onChangeText={setCpf}
        style={styles.textInput}
        placeholder="Informe o CPF"
        autocorrect={false}
        keyboardType="phone-pad"
      />
      <Text style={styles.text}>Email*</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
        placeholder="Informe o Email"
        autocorrect={true}
        keyboardType="email-address"
      />

      <Text style={styles.text}>Senha*</Text>
      <TextInput
        value={senha}
        onChangeText={setSenha}
        style={styles.textInput}
        placeholder="Informe a Senha"
        autocorrect={false}
        secureTextEntry={true}
      />

      <Text style={styles.text}>Confirme sua Senha*</Text>
      <TextInput
        value={senhaConfirm}
        onChangeText={setSenhaConfirm}
        style={styles.textInput}
        placeholder="Confirme sua Senha"
        autocorrect={false}
        secureTextEntry={true}
      />

      <View style={styles.container}>
        <TouchableOpacity style={styles.btnEsqueceuSenha}>
          <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" />
          <Text style={styles.lembreDispositivoText}>
            Lembre-me neste dispositivo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.esqueceuSenhaText}>Esqueceu a Senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnEntrar} onPress={cadastrarUsuario}>
          <Text style={styles.entrarText}>CADASTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCadastro} onPress={redirecionaTela}>
          <Text style={styles.cadastroText}>
            Já possui Cadastro? Faça Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTextInput: {
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
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
  container: {
    display: "flex",
  },
  btnEsqueceuSenha: {
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "center",
    padding: 7,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lembreDispositivoText: {
    fontSize: 12,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "justify",
  },
  esqueceuSenhaText: {
    fontSize: 12,
    width: "100%",
    marginLeft: 250,
  },
  btnEntrar: {
    backgroundColor: "#6FDDE3",
    borderRadius: 20,
    width: "80%",
    padding: 2,
    marginBottom: 15,
    fontSize: 16,
    marginLeft: 30,
  },
  entrarText: {
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    textAlign: "center",
    padding: 10,
    paddingTop: 7,
    paddingBottom: 7,
    textTransform: "uppercase",
  },
  btnCadastro: {
    marginBottom: 10,
  },
  cadastroText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export { CadastroInputs };
