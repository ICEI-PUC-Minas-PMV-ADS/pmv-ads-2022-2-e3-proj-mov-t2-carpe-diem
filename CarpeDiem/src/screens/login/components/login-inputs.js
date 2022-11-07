import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { LoginButtons } from "./login-buttons";

function LoginInputs({ navigation }) {
  return (
    <View style={styles.containerTextInput}>
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Informe o Email"k
        autocorrect={false}
        onChangeText={() => {}}
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Informe a Senha"
        autocorrect={false}
        onChangeText={() => {}}
      />
      <LoginButtons navigation={navigation} />
    </View>    
  );
}

const styles = StyleSheet.create({
  containerTextInput: {
    justifyContent: "center",
    width: "100%",
    fontSize: 16,
    textAlign: "center",
    padding: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign:"justify",
    padding: 8,
  },
  textInput: {
    backgroundColor: "#FBCB2B",
    width: "100%",
    marginBottom: 15,
    color: "#222",
    fontSize: 16,
    borderRadius: 20,
    padding: 7,
    margin: "auto",
  },
});

export { LoginInputs };
