import React from "react";
import { View, Text, StyleSheet } from "react-native";

function EsqueceuSenhaTexto() {
  return (
    <View style={styles.containerEsqueceuSenha}>
      <Text style={styles.EsqueceuSenhaText}>
        ESQUECEU SUA {'\n'} SENHA?
        
	  </Text>
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
    padding: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { EsqueceuSenhaTexto };
