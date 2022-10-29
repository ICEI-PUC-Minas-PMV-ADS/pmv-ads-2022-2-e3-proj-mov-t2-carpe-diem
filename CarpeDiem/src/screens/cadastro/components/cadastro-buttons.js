import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";

function CadastroButtons({ navigation }) {
  const redirecionaTela = () => {

    navigation.push("Login");
  };

  return (
    <View>
      <TouchableOpacity style={styles.btnEsqueceuSenha}>
        <Text style={styles.esqueceuSenhaText}>Lembre-me neste dispositivo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnEntrar}>
        <Text style={styles.entrarText}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCadastro} onPress={redirecionaTela}>
        <Text style={styles.cadastroText}>
          Já possui cadastro? Faça Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnEsqueceuSenha: {
    alignItems: "center",
    justifyContent: "center",
    width: "170%",
    height: "50%",
    padding: 7,
  },
  esqueceuSenhaText: {
    fontSize: 10,
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
  entrarText: {
    fontWeight: "700",
    fontSize: 16,
  },
  btnCadastro: {
    marginBottom: 10,
  },
  cadastroText: {
    fontSize: 16,
  },
});

export { CadastroButtons };
