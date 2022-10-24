import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { EsqueceuSenhaButtons } from "./esqueceu-senha-buttons";

function EsqueceuSenhaInputs() {
  return (
    <View style={styles.containerTextInput}>
      <TextInput
        style={styles.textInput}
        placeholder="Nome Completo"
        autocorrect={false}
        onChangeText={() => {}}
      ></TextInput>

      <TextInput
        style={styles.textInput}
        placeholder="Email"
        autocorrect={false}
        onChangeText={() => {}}
      ></TextInput>

      <EsqueceuSenhaButtons />
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
});

export { EsqueceuSenhaInputs };
