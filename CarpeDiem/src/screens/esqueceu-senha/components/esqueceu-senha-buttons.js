import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Cadastro from "../../cadastro/Cadastro"

function EsqueceuSenhaButtons() {
  const redirecionaTela = () => {
    navigation.push("Cadastro");
  };
  
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.btnRecuperarSenha}>
        <Text style={styles.RecuperarSenhaText}>RECUPERAR SENHA</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnCadastro}
        onPress={() => Cadastro()}
      >        
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.btnEsqueceuSenha} onPress={redirecionaTela}>
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
  //btnRecuperarSenha: {
  //  backgroundColor: "#6FDDE3",
  //  width: "90%",
  //  alignItems: "center",
  //  justifyContent: "center",
  //  marginBottom: 15,
  //  fontSize: 17,
  //  borderRadius: 20,
  //  padding: 7,
  //  height: 45,
  //},
  //RecuperarSenhaText: {
  //  fontWeight: "700",
  //  fontSize: 16,
  //},
  btnEsqueceuSenha: {
    marginBottom: 10,
  },
  cadastroText: {
    fontSize: 16,
    textAlign:"center",
  },
});

export { EsqueceuSenhaButtons };
