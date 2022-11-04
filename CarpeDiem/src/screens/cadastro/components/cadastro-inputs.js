import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
// import { TextInput } from "react-native-paper";
import { CadastroButtons } from "./cadastro-buttons";

function CadastroInputs({ navigation }) {
  return (
    <View style={styles.containerTextInput}>
      <Text style={styles.text}>Nome Completo*</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Informe o Nome Completo"
        autocorrect={false}
      />

      <Text style={styles.text}>CPF*</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Informe o CPF"
        autocorrect={false}
        keyboardType="phone-pad"
      />
      <Text style={styles.text}>Email*</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Informe o Email"
        autocorrect={true}
        keyboardType="email-address"
      />

      <Text style={styles.text}>Senha*</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Informe a Senha"
        autocorrect={false}
        secureTextEntry={true}
      />

      <Text style={styles.text}>Confirme sua Senha*</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Confirme sua Senha"
        autocorrect={false}
        secureTextEntry={true}
      />
      <CadastroButtons navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerTextInput: {
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "justify",
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

export { CadastroInputs };
