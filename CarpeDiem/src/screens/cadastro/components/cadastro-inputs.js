import React, { useEffect, useState } from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import { CadastroButtons } from "./cadastro-buttons";

function CadastroInputs({ navigation }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {}, [usuario]);

  const updateUserData = () => {
    insertUsuario({
      nome: nome,
      cpf: cpf,
      email: email,
      senha: senha,
    });
  };

  const  insertUsuario= (inputCadastro) => {
    setUsuario(inputCadastro);
  };

  return (
    <View style={styles.containerTextInput}>
      <Button title="TESTE CADASTRO" onPress={updateUserData} />

      <Text style={styles.text}>Nome Completo*</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        style={styles.textInput}
        placeholder="Informe o Nome Completo"
        autocorrect={false}
      />

      <Text style={styles.text}>CPF*</Text>
      <TextInput
        value={cpf}
        onChangeText={setCpf}
        style={styles.textInput}
        placeholder="Informe o CPF"
        autocorrect={false}
        keyboardType="phone-pad"
      />
      <Text style={styles.text}>Email*</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
        placeholder="Informe o Email"
        autocorrect={true}
        keyboardType="email-address"
      />

      <Text style={styles.text}>Senha*</Text>
      <TextInput
        value={senha}
        onChangeText={setSenha}
        style={styles.textInput}
        placeholder="Informe a Senha"
        autocorrect={false}
        secureTextEntry={true}
      />

      <Text style={styles.text}>Confirme sua Senha*</Text>
      <TextInput
        value={senhaConfirm}
        onChangeText={setSenhaConfirm}
        style={styles.textInput}
        placeholder="Confirme sua Senha"
        autocorrect={false}
        secureTextEntry={true}
      />

      <CadastroButtons navigation={navigation} inputCadastro={usuario} />
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
