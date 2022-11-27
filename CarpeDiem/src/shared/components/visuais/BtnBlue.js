import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function BtnBlue({ navigation, label, modoEdicao, atualizarDados }) {
  const redirecionaTela = () => {
    navigation.push("Login");
  };

  const acaoBotao = () => {
    if (label === "SALVAR") {
      // console.log(nome);
      atualizarDados(true);
    } else if (label === "SAIR") {
      redirecionaTela();
    } else if (label === "EDITAR") {
      modoEdicao(true);
    } else if (label === "CANCELAR") {
      modoEdicao(false);
    }
  };

  const LayoutPerfil = () => {
    return (
      <View style={styles.viewButton}>
        <TouchableOpacity onPress={acaoBotao}>
          <Text style={styles.textButton}>{label}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <LayoutPerfil />
    </View>
  );
}

const styles = {
  viewButton: {
    backgroundColor: "#6FDDE3",
    borderRadius: 20,
    width: "80%",
    padding: 2,
    marginBottom: 15,
    fontSize: 16,
    marginLeft: 30,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    textAlign: "center",
    padding: 10,
    paddingTop: 7,
    paddingBottom: 7,
    textTransform: "uppercase",
  },
};
