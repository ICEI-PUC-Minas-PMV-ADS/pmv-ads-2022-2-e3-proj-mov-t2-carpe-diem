import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { CadastroButtons } from "./cadastro-buttons";

function CadastroInputs({ navigation }) {
  return (
    <View style={styles.containerTextInput}>
      <Text>Nome completo</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Informe o Nome Completo"
        autocorrect={false}
        onChangeText={() => {}}
      />
      <Text>CPF</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Informe o CPF"
        autocorrect={false}
        onChangeText={() => {}}
      />
       <Text>Email</Text>
       <TextInput
        style={styles.textInput}
        placeholder="Informe o Email"
        autocorrect={false}
        onChangeText={() => {}}
      />
       <Text>Senha</Text>
       <TextInput
        style={styles.textInput}
        placeholder="Informe a Senha"
        autocorrect={false}
        onChangeText={() => {}}
      />
      <Text>Confirme sua Senha</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Confirme sua Senha"
        autocorrect={false}
        onChangeText={() => {}}
      />
      <CadastroButtons navigation={navigation} />
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  containerTextInput: {
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

export { CadastroInputs };
