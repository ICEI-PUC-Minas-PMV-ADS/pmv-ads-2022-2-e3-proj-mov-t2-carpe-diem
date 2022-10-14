import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { CadastroTexto } from "./components/cadastro-texto";

export default function Cadastro() {
  return (
    <KeyboardAvoidingView style={styles.loginBackground}>
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
