import React from "react";
import { View, Text, StyleSheet } from "react-native";

function FaleConoscoTexto() {
  return (
    <View style={styles.containerFaleConosco}>
      <Text style={styles.faleconoscoText}>Como podemos te ajudar?</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  containerFaleConosco: {
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    height: 250,
  },
  faleconoscoText: {
    fontWeight: "700",
    fontSize: 36,
    textAlign: "center",
  },

});

export { FaleConoscoTexto };
