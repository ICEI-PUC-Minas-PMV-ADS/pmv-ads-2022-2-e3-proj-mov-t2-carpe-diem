import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LoginIcons } from "../../shared/components/login/login-icons"

function LoginTexto() {
  return (
    <View style={styles.containerLogin}>
      <Text style={styles.loginText}>BEM VINDO</Text>
      <Text style={styles.loginSubText}>
        Você não está logado. Entre usando sua conta de rede social ou cadastre
        seus dados.
      </Text>

      <LoginIcons />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  loginText: {
    fontWeight: "700",
    fontSize: 36,
  },
  loginSubText: {
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
  },
});

export { LoginTexto };
