import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LoginButtons } from "./login-buttons";
import * as SQLExecutor from "../../../database/services/SQLExecutor";
import "../../../../global";

function LoginInputs({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const setGlobais = (usuarioEncontrado) => {
    global.nome = usuarioEncontrado.nome;
    global.cpf = usuarioEncontrado.cpf;
    global.email = usuarioEncontrado.email;
    global.senha = usuarioEncontrado.senha;
    global.usuarioLogado = true;
  };

  const redirecionaTelaLogin = (usuarioEncontrado) => {
    navigation.navigate("PerfilUsuario");
  };

  const redirecionaTela = (tela) => {
    navigation.navigate(tela);
  };

  const validaInput = () => {
    if (email.length <= 0) {
      alert("Insira o seu email!");
      return false;
    }
    if (senha.length <= 0) {
      alert("Insira a sua senha!");
      return false;
    }

    validaLogin();
  };

  const validaLogin = () => {
    SQLExecutor.getUsuarioLogin(email, senha).then((usuarioEncontrado) => {
      if (usuarioEncontrado) {
        setGlobais(usuarioEncontrado);
        redirecionaTelaLogin(usuarioEncontrado);
      } else {
        alert("Verifique a senha ou nome de usuário!");
      }
    });
  };

  return (
    <View style={styles.containerTextInput}>
      <Text style={styles.text}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
        placeholder="Informe o Email"
        autocorrect={true}
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        value={senha}
        onChangeText={setSenha}
        style={styles.textInput}
        placeholder="Informe a Senha"
        autocorrect={false}
        secureTextEntry={true}
      />

      <TouchableOpacity
        onPress={() => {
          redirecionaTela("EsqueceuSenha");
        }}
      >
        <Text style={styles.esqueceuSenhaText}>Esqueceu a Senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnEntrar} onPress={validaInput}>
        <Text style={styles.entrarText}>ENTRAR</Text>
      </TouchableOpacity>
      <LoginButtons navigation={navigation} />
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
  esqueceuSenhaText: {
    fontSize: 12,
    width: "100%",
    marginLeft: 250,
    padding: 8,
  },
  btnEntrar: {
    backgroundColor: "#6FDDE3",
    width: "80%",
    justifyContent: "center",
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 20,
    padding: 2,
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
});

export { LoginInputs };
