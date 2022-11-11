import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { FaleConoscoButtons } from "./faleconosco-buttons";

function FaleConoscoInputs({ navigation }) {
  return (
    <View style={styles.containerTextInput}>
      
      <Text style={styles.text}>Nome Completo</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Nome Completo"
        autocorrect={false}
        onChangeText={() => {}}
      ></TextInput>

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        autocorrect={false}
        onChangeText={() => {}}
      ></TextInput>
      
      <Text style={styles.text}>Mensagem</Text>
      <TextInput
        style={styles.textInputMensagem}
        placeholder="Mensagem"
        autocorrect={false}
        onChangeText={() => {}}
      ></TextInput>
      
      <FaleConoscoButtons navigation={navigation} />
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
  },
  textInputMensagem: {
    backgroundColor: "#FBCB2B",
    width: "100%",
    height: 200,
    maxLength: 255, 
    marginBottom: 15,
    color: "#222",
    fontSize: 16,
    borderRadius: 20,
    padding: 7, 
  },
});

export { FaleConoscoInputs };
