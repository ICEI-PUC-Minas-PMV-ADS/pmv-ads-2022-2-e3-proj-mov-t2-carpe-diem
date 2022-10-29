import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { CadastroButtons } from "./cadastro-buttons";

function CadastroInputs({ navigation }) {
  return (
    <View style={styles.containerTextInput}>
      <Text style={styles.text}>Nome Completo</Text>
      <TextInput
        style={styles.textInput}
        //placeholder="Informe o Nome Completo"
        autocorrect={false}
        onChangeText={() => {}}
      />
      <Text style={styles.text}>CPF</Text>
      <TextInput
        style={styles.textInput}
        //placeholder="Informe o CPF"
        autocorrect={false}
        onChangeText={() => {}}
      />
       <Text style={styles.text}>Email</Text>
       <TextInput
        style={styles.textInput}
        //placeholder="Informe o Email"
        autocorrect={false}
        onChangeText={() => {}}
      />
       <Text style={styles.text}>Senha</Text>
       <TextInput
        style={styles.textInput}
        //placeholder="Informe a Senha"
        autocorrect={false}
        onChangeText={() => {}}
      />
      <Text style={styles.text}>Confirme sua Senha</Text>
      <TextInput
        style={styles.textInput}
        //placeholder="Confirme sua Senha"
        autocorrect={false}
        onChangeText={() => {}}
      />
      <CadastroButtons navigation={navigation} />
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  containerTextInput: {    
    fontSize: 16,
    textAlign:'center',
    //alignItems: "center",
    justifyContent: "center",
    width: "100%",   
    padding: 30,     
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'start',
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
    display: "block",
    margin: "auto",
  },
});

export { CadastroInputs };
