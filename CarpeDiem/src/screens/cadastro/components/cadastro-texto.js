import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LoginIcons } from "../../../shared/components/login/login-icons";
import { LinhaSeparadora } from "../../../shared/components/visuais/linha-separadora";


function CadastroTexto() {
  return (
    <View style={styles.containerCadastro}>
      <Text style={styles.cadastroText}>CADASTRO</Text>
      <Text style={styles.cadastroSubText}>
        Você não está logado. Entre usando sua conta de rede social ou cadastre
        seus dados.
      </Text>

      <LoginIcons />

      <LinhaSeparadora />

      <Text style={styles.cadastroSubText}>Campos de Preenchimento Obrigatório</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  containerCadastro: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  cadastroText: {
    fontWeight: "700",
    fontSize: 36,
  },
  cadastroSubText: {
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
  },
});

export { CadastroTexto };
