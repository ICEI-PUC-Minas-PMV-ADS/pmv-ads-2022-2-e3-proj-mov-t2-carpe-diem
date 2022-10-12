import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function FooterIcons() {
  return (
    <View style={styles.footerIcons}>
      <View style={styles.footerIconsIndividual}>
        <Icon name="home" size={20} color="#2C9196" />
        <Text
          style={{
            fontSize: 7,
          }}
        >
          Busque por um imóvel
        </Text>
      </View>

      <View style={styles.footerIconsIndividual}>
        <Icon name="phone" size={20} color="#2C9196" />
        <Text
          style={{
            fontSize: 7,
          }}
        >
          Fale conosco
        </Text>
      </View>

      <View style={styles.footerIconsIndividual}>
        <Icon name="info-circle" size={20} color="#2C9196" />
        <Text
          style={{
            fontSize: 7,
          }}
        >
          Políticas e Condições de Uso
        </Text>
      </View>

      <View style={styles.footerIconsIndividual}>
        <Icon name="user-plus" size={20} color="#2C9196" />
        <Text
          style={{
            fontSize: 7,
          }}
        >
          Cadastre-se
        </Text>
      </View>

      <View style={styles.footerIconsIndividual}>
        <Icon name="user-circle" size={20} color="#2C9196" />
        <Text
          style={{
            fontSize: 7,
          }}
        >
          Perfil
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: "1%",
  },
  footerIconsIndividual: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export { FooterIcons };
