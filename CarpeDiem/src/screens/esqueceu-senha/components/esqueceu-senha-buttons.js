import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function EsqueceuSenhaButtons() {
  const redirecionaTela = () => {
    navigation.push("Cadastro");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnEsqueceuSenha}
        onPress={redirecionaTela}
      >
        <Text style={styles.cadastroText}>
          Ainda não tem conta? Cadastre-se
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  btnEsqueceuSenha: {
    marginBottom: 10,
  },
  cadastroText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export { EsqueceuSenhaButtons };
