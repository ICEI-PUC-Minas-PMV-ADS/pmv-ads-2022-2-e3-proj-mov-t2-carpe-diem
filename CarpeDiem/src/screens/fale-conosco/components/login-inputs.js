import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { LoginButtons } from "./login-buttons";

function LoginInputs({ navigation }) {
  return (
    <View style={styles.containerTextInput}>
      <TextInput
        style={styles.textInput}
        placeholder="Nome Completo"
        autocorrect={false}
        onChangeText={() => { }}
      ></TextInput>

      <TextInput
        style={styles.textInput}
        placeholder="Email"
        autocorrect={false}
        onChangeText={() => { }}
      ></TextInput>
      <TextInput
        style={styles.textInputMensagem}
        placeholder="Mensagem"
        autocorrect={false}
        onChangeText={() => { }}
      ></TextInput>
      <LoginButtons navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerTextInput: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  textInput: {
    backgroundColor: "#FBCB2B",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 20,
    padding: 7,
    fontFamily: "Quicksand",
  },
  textInputMensagem: {
    backgroundColor: "#FBCB2B",
    width: "90%",
    lineHeight: 100,
    maxLength: 255, 
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 20,
    padding: 7,
    fontFamily: "Quicksand",
  },
});

export { LoginInputs };
