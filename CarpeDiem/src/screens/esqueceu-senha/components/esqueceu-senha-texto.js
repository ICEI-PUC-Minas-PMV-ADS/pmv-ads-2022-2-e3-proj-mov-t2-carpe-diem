import React from "react";
import { View, Text, StyleSheet } from "react-native";

function EsqueceuSenhaTexto() {
  return (
    <View style={styles.containerEsqueceuSenha}>
      <Text style={styles.EsqueceuSenhaText}>ESQUECEU SUA SENHA?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerEsqueceuSenha: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  EsqueceuSenhaText: {
    fontWeight: "700",
    fontSize: 36,
  },
});

export { EsqueceuSenhaTexto };
