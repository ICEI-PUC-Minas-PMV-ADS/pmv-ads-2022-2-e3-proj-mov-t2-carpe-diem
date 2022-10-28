import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { LoginButtons } from "./login-buttons";

function LoginInputs({ navigation }) {
  return (
    <View style={styles.containerTextInput}>
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
});

export { LoginInputs };
