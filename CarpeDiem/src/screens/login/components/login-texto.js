import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LoginIcons } from "../../../shared/components/login/login-icons";

function LoginTexto() {
  return (
    <View style={styles.containerLogin}>
      <Text style={styles.loginText}>Bem Vindo</Text>

      <Text style={styles.loginSubText}>
        Você não está logado. {"\n"}
        Entre usando os dados cadastrados.
      </Text>

      <LoginIcons />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  loginText: {
    fontWeight: "700",
    fontSize: 36,
    padding: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  loginSubText: {
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingBottom: 25,
  },
});

export { LoginTexto };
