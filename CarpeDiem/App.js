import React from "react";
import * as AkarIcons from "akar-icons";
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
  bemvindoSubText: {socialMediaIcons
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