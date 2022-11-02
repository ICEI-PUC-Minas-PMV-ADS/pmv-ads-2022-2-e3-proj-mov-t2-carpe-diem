import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Praia1() {
  return (
    <View>
      <Text style={styles.textSubTitulo}>Residencial Malibu - BA</Text>

      <View style={styles.flexbox1}>
        <Ionicons name="map-outline" size={24} color="#2C9196" />
        <Text style={styles.textIcones}>Praia Apaga Fogo </Text>

        <MaterialCommunityIcons
          name="account-group"
          size={24}
          color="#2C9196"
        />
        <Text style={styles.textIcones}>03 Hóspedes </Text>
      </View>

      <View style={styles.flexbox1}>
        <Ionicons name="bed-outline" size={24} color="#2C9196" />
        <Text style={styles.textIcones}>01 Quarto </Text>

        <MaterialCommunityIcons
          name="bathtub-outline"
          size={24}
          color="#2C9196"
        />
        <Text style={styles.textIcones}>01 Banheiro </Text>

        <Text style={styles.textIcones}>A partir de R$ 160,00 / noite</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textSubTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 15,
  },
  textIcones: {
    fontSize: 16,
    textAlign: "center",
    padding: 15,
  },
  flexbox1: {
    alignItems: "center",
    flexDirection: "row",
    alignContent: "stretch",
    flexWrap: "wrap",
  },
});

export { Praia1 };
