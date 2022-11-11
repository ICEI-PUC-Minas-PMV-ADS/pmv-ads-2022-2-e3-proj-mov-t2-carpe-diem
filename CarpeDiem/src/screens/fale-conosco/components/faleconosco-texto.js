import React from "react";
import { View, Text, StyleSheet } from "react-native";

function FaleConoscoTexto() {
  return (
    <View style={styles.containerFaleConosco}>
      <Text style={styles.faleconoscoText}>Como podemos {"\n"}te ajudar?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerFaleConosco: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  faleconoscoText: {
    fontWeight: "700",
    fontSize: 36,
    textAlign: "center",
    padding: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
});

export { FaleConoscoTexto };
