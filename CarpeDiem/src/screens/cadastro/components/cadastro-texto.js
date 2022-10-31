import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LoginIcons } from "../../../shared/components/login/login-icons";
import { LinhaSeparadora } from "../../../shared/components/visuais/linha-separadora";


function CadastroTexto() {
  return (
    <View style={styles.containerCadastro}>

      <Text style={styles.cadastroText}>CADASTRO</Text>

      <Text style={styles.cadastroSubText}>
        Você não está logado.  {'\n'}
        Entre usando sua conta de rede social {'\n'} ou cadastre seus dados.
      </Text>

      <LoginIcons />

      

      <Text style={styles.cadastroSubText}>Campos de Preenchimento Obrigatório</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  containerCadastro: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cadastroText: {
    fontWeight: "700",
    fontSize: 36,
    padding: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  cadastroSubText: {
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingBottom: 25,
  },
});

export { CadastroTexto };
