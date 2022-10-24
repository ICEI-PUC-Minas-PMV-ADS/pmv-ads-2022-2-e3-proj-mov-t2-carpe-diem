import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { CadastroTexto } from "./components/cadastro-texto";

function Cadastro() {
  return (
    <KeyboardAvoidingView style={styles.cadastroBackground}>
      <CadastroTexto />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  cadastroBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1ECE9",
  },
});

export default Cadastro;
