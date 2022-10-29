import React from "react";
import { View, Text, StyleSheet } from "react-native";

function FooterText() {
  return (
    <View>
      <Text style={styles.direitosReservadosText}>
        @2022 Carpe Diem - Todos os Direitos Reservados
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  direitosReservadosText: {
    fontSize: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

export { FooterText };
