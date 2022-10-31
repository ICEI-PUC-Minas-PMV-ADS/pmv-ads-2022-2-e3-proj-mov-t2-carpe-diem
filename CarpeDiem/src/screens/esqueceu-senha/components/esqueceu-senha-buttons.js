import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Cadastro from "../../cadastro/Cadastro"

function EsqueceuSenhaButtons() {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.btnRecuperarSenha}>
        <Text style={styles.RecuperarSenhaText}>RECUPERAR SENHA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCadastro}
        onPress={() => Cadastro()}
      >
        <Text style={styles.CadastroText}>
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
  btnRecuperarSenha: {
    backgroundColor: "#6FDDE3",
    width: "80%",
    //alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 20,
    padding: 2,
    //height: 45,
    marginLeft: 30,
  },
  RecuperarSenhaText: {
    fontWeight:"bold",
    fontSize: 16,
    width:"100%",
    textAlign:"center",
    padding: 10,
    paddingTop: 7,
    paddingBottom: 7,
    textTransform:"uppercase"
  },
  btnCadastro: {
    marginBottom: 10,
  },
  CadastroText: {
    fontSize: 16,
    textAlign:"center",
  },
});

export { EsqueceuSenhaButtons };
