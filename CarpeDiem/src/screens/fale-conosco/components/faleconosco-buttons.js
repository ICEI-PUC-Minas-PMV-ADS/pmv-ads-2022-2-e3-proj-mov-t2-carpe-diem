import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";

function FaleConoscoButtons({ navigation }) {
  const redirecionaTela = () => {

    navigation.push();
  };

  return (

    <View>
      <TouchableOpacity style={styles.btnEnviar}>
        <Text style={styles.enviarText}>ENVIAR</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({

  btnEnviar: {
    backgroundColor: "#6FDDE3",
    width: 330,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    fontSize: 17,
    borderRadius: 20,
    padding: 7,
    height: 45,
  },
  enviarText: {
    fontWeight: "700",
    fontSize: 16,
  },

});

export { FaleConoscoButtons };
