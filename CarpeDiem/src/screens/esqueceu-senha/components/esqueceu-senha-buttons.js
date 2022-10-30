import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Cadastro from "../../cadastro/Cadastro";

function EsqueceuSenhaButtons() {
  return (
    <View>
      <TouchableOpacity style={styles.btnRecuperarSenha}>
        <Text style={styles.RecuperarSenhaText}>RECUPERAR SENHA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCadastro} onPress={() => Cadastro()}>
        <Text style={styles.CadastroText}>
          Ainda não tem conta? Cadastre-se
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnRecuperarSenha: {
    backgroundColor: "#6FDDE3",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    fontSize: 17,
    borderRadius: 20,
    padding: 7,
    height: 45,
  },
  RecuperarSenhaText: {
    fontWeight: "700",
    fontSize: 16,
  },
  btnCadastro: {
    marginBottom: 10,
  },
  CadastroText: {
    fontSize: 16,
  },
});

export { EsqueceuSenhaButtons };
