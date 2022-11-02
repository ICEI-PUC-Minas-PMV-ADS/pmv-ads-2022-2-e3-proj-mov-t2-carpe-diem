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
    borderRadius: 20,
    width: "80%",
    //alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    fontSize: 16,    
    padding: 2,
    //height: 45,
    marginLeft: 30,
  },
  enviarText: {
    fontWeight: "700",
    fontSize: 16,
    width: "100%",
    textAlign: "center",
    padding: 10,
    paddingTop: 7,
    paddingBottom: 7,    
  },
});

export { FaleConoscoButtons };
