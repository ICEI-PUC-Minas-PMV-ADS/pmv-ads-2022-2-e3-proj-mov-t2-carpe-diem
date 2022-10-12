import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function LoginButtons() {
  return (
    <View>
      <TouchableOpacity style={styles.btnEsqueceuSenha}>
        <Text style={styles.esqueceuSenhaText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnEntrar}>
        <Text style={styles.entrarText}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCadastro}>
        <Text style={styles.cadastroText}>
          Ainda não tem conta? Cadastre-se
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnEsqueceuSenha: {
    alignItems: "center",
    justifyContent: "center",
    width: "170px",
    height: "50px",
    padding: 7,
  },
  btnEntrar: {
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
  btnCadastro: {
    marginBottom: 10,
  },
  cadastroText: {
    fontSize: 16,
  },
});

export { LoginButtons };
