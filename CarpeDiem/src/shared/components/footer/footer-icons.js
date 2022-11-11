import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function FooterIcons() {
  return (
    <View style={styles.footerIcons}>
      <View style={styles.footerIconsIndividual}>
        <Icon name="home" size={20} color="#2C9196" />
        <Text style={{ fontSize: 10 }}>Busque por{"\n"} um Imóvel</Text>
      </View>

      <View style={styles.footerIconsIndividual}>
        <Icon name="phone" size={20} color="#2C9196" />
        <Text style={{ fontSize: 10 }}>Fale Conosco</Text>
      </View>

      <View style={styles.footerIconsIndividual}>
        <Icon name="info-circle" size={20} color="#2C9196" />
        <Text style={{ fontSize: 10, textAlign: "center" }}>
          Políticas e {"\n"} Condições de Uso
        </Text>
      </View>

      <View style={styles.footerIconsIndividual}>
        <Icon name="user-plus" size={20} color="#2C9196" />
        <Text style={{ fontSize: 10 }}>Cadastre-se</Text>
      </View>

      <View style={styles.footerIconsIndividual}>
        <Icon name="user-circle" size={20} color="#2C9196" />
        <Text style={{ fontSize: 10 }}>Perfil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerIcons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: "1%",
  },
  footerIconsIndividual: {
    paddingVertical: 5,
    padding: 5,
    paddingBottom: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },
});

export { FooterIcons };
