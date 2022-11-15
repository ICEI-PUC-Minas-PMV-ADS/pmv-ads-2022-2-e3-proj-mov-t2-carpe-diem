import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as SQLExecutor from "../../../database/services/SQLExecutor";

/* 
CLASSE INUTILIZADA
*/

/* 
CLASSE INUTILIZADA
*/

/* 
CLASSE INUTILIZADA
*/

/* 
CLASSE INUTILIZADA
*/
function CadastroButtons({ navigation, inputCadastro }) {
  const cadastrarUsuario = () => {
    if (!inputCadastro.nome) {
      alert("Insira o seu nome!");
      return false;
    }
    if (!inputCadastro.cpf) {
      alert("Insira o seu CPF!");
      return false;
    }
    if (!inputCadastro.email) {
      alert("Insira o seu email!");
      return false;
    }
    if (!inputCadastro.senha) {
      alert("Insira a sua senha!");
      return false;
    }

    SQLExecutor.insertUsuario(inputCadastro);
  };

  const redirecionaTela = () => {
    navigation.push("Login");
  };

  return (
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
        <Text style={styles.cadastroText}>Já possui Cadastro? Faça Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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

export { CadastroButtons };
