import React from "react";
import * as AkarIcons from "akar-icons";
import * as CarbonIcons from '@carbon/icons-react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.socialMediaIcons}>
        <AkarIcons.InstagramFill
          color="#2C9196"
          strokeWidth={2}
          size={20}
          style={{ display: "block" }}
        />
        <AkarIcons.TwitterFill
          color="#2C9196"
          strokeWidth={2}
          size={20}
          style={{ display: "block" }}
        />
        <AkarIcons.FacebookFill
          color="#2C9196"
          strokeWidth={2}
          size={20}
          style={{ display: "block" }}
        />
      </View>

      <View style={styles.containerLogo}>
        <Image
          source={require("./src/assets/logo.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>

      <View style={styles.containerBemvindo}>
        <Text style={styles.bemvindoText}>BEM VINDO</Text>
        <Text style={styles.bemvindoSubText}>
          Você não está logado. Entre usando sua conta de rede social ou
          cadastre seus dados.
        </Text>

        <View style={styles.socialMediaLoginIcons}>
          <AkarIcons.InstagramFill
            color="#2C9196"
            strokeWidth={2}
            size={35}
            style={{ display: "inline" }}
          />
          <AkarIcons.TwitterFill
            color="#2C9196"
            strokeWidth={2}
            size={35}
            style={{ display: "inline" }}
          />
        </View>
      </View>

      <View style={styles.linhaSeparadora}>
        <LinhaSeparadora color="black" />
      </View>

      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          autocorrect={false}
          onChangeText={() => {}}
        ></TextInput>

        <TextInput
          style={styles.textInput}
          placeholder="Senha"
          autocorrect={false}
          onChangeText={() => {}}
        ></TextInput>

        <TouchableOpacity style={styles.btnEsqueceuSenha}>
          <Text style={styles.esqueceuSenhaText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnEntrar}>
          <Text style={styles.entrarText}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCadastro}>
          <Text style={styles.cadastroText}>
            Ainda não tem conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1ECE9",
  },
  containerLogo: {
    flex: 1,
    alignItems: "center",
  },
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
  btnEntrar: {
    backgroundColor: "#6FDDE3",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    fontSize: 17,
    borderRadius: 20,
    padding: 7,
    height: 45,
  },
  entrarText: {
    fontWeight: "700",
    fontSize: 16,
  },
  btnCadastro: {
    marginBottom: 10,
  },
  cadastroText: {
    fontSize: 16,
  },
  btnEsqueceuSenha: {
    alignItems: "center",
    justifyContent: "center",
    width: "170px",
    height: "50px",
    padding: 7,
  },
  esqueceuSenhaText: {
    fontSize: 10,
  },
  socialMediaIcons: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "right",
    bottom: "1%",
    left: "42%",
  },
  socialMediaLoginIcons: {
    flex: 2,
    paddingVertical: 200,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: "1%",
  },
  containerBemvindo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  bemvindoText: {
    fontWeight: "700",
    fontSize: 36,
  },
  bemvindoSubText: {
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
  },
  linhaSeparadora: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "right",
    bottom: "1%",
  },
});

const LinhaSeparadora = ({ color }) => (
  <hr style={{ width: "400px", height: "0px", left: "202px", top: "320px" }} />
);