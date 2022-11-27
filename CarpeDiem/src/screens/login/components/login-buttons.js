import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function LoginButtons({ navigation }) {
  const redirecionaTela = () => {
    navigation.push("Cadastro");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnCadastro} onPress={redirecionaTela}>
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
    alignItems: "center",
    justifyContent: "center",
    width: "170%",
    height: "50%",
    padding: 7,
  },
  esqueceuSenhaText: {
    fontSize: 12,
    width: "100%",
    marginLeft: 250,
    padding: 8,
  },
  btnEntrar: {
    backgroundColor: "#6FDDE3",
    width: "80%",
    justifyContent: "center",
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 20,
    padding: 2,
    marginLeft: 30,
  },
  entrarText: {
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    textAlign: "center",
    padding: 10,
    paddingTop: 7,
    paddingBottom: 7,
    textTransform: "uppercase",
  },
  btnCadastro: {
    marginBottom: 10,
  },
  cadastroText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export { LoginButtons };
