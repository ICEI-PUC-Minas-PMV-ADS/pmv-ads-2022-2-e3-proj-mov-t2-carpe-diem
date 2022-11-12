import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function BtnBlue({ navigation, label }) {
  const redirecionaTela = () => {
    navigation.push("Login");
  };

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={redirecionaTela}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  view: {
    backgroundColor: "#6FDDE3",
    borderRadius: 20,
    width: "80%",
    padding: 2,
    marginBottom: 15,
    fontSize: 16,
    marginLeft: 30,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    textAlign: "center",
    padding: 10,
    paddingTop: 7,
    paddingBottom: 7,
    textTransform: "uppercase",
  },
};
