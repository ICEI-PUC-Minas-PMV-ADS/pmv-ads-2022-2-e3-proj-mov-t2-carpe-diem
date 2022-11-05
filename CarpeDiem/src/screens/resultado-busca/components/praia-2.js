import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Praia2() {
  return (
    <View>
      <Text style={styles.textSubTitulo}>Pousada Princess - BA </Text>

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
      </View>

      <Text style={styles.textPreco}>A partir de R$ 160,00 / noite</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textSubTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
  },
  textIcones: {
    fontSize: 16,
    textAlign: "center",
    padding: 10,
  },
  flexbox1: {
    alignItems: "center",
    flexDirection: "row",
    alignContent: "stretch",
    flexWrap: "wrap",
  },
  textPreco: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    padding: 25,
  },
});

export { Praia2 };
