import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { EsqueceuSenhaButtons } from "./esqueceu-senha-buttons";

function EsqueceuSenhaInputs() {
  return (
    <View style={styles.containerTextInput}>
      
      <Text style={styles.text}>Nome Completo</Text>
      <TextInput
        style={styles.textInput}
        //placeholder="Nome Completo"
        autocorrect={false}
        onChangeText={() => {}}
      ></TextInput>

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.textInput}
        //placeholder="Email"
        autocorrect={false}
        onChangeText={() => {}}
      ></TextInput>      
      
    </View>
  );
}

const styles = StyleSheet.create({
  containerTextInput: {
    //flex: 1,
    //alignItems: "center",
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

export { EsqueceuSenhaInputs };
