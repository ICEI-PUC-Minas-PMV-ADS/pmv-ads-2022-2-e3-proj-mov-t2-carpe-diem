import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function CadastroButtons({ navigation }) {
  const redirecionaTela = () => {
    navigation.push("Login");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnEsqueceuSenha}>
        <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" />
        <Text style={styles.lembreDispositivoText}>
          Lembre-me neste dispositivo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.esqueceuSenhaText}>Esqueceu a Senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnEntrar}>
        <Text style={styles.entrarText}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCadastro} onPress={redirecionaTela}>
        <Text style={styles.cadastroText}>Já possui Cadastro? Faça Login</Text>
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
    //width: "170%",
    //height: "50%",
    justifyContent: "center",
    padding: 7,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lembreDispositivoText: {
    fontSize: 12,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "justify",
  },
  esqueceuSenhaText: {
    fontSize: 12,
    width: "100%",
    marginLeft: 250,
  },
  btnEntrar: {
    backgroundColor: "#6FDDE3",
    borderRadius: 20,
    //textAlign: "center",
    //alignItems: 'center',
    width: "80%",
    padding: 2,
    marginBottom: 15,
    fontSize: 16,
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

export { CadastroButtons };
