import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import "../../../../global";

function FooterIcons({ navigation }) {
  const redirecionaTela = (tela) => {
    if (tela === "PerfilUsuario" && !global.usuarioLogado) {
      alert("Faça login para acessar a sua página de usuário");
    }
    else if (tela === "PerfilUsuario" && global.usuarioLogado) {
      navigation.push(tela);
    }
    else navigation.push(tela);
  };

  return (
    <View style={styles.footerIconsWrapperView}>
      {/* Busque por um imóvel */}
      <TouchableHighlight onPress={() => redirecionaTela("HomePage")}>
        <View style={styles.footerIconsView}>
          <Icon name="home" size={20} color="#2C9196" />
          <Text style={{ fontSize: 10 }}>Busque por{"\n"} um Imóvel</Text>
        </View>
      </TouchableHighlight>

      {/* Fale Conosco */}
      <TouchableHighlight onPress={() => redirecionaTela("FaleConosco")}>
        <View style={styles.footerIconsView}>
          <Icon name="phone" size={20} color="#2C9196" />
          <Text style={{ fontSize: 10 }}>Fale Conosco</Text>
        </View>
      </TouchableHighlight>

      {/* Políticas e Condições de Uso */}
      <TouchableHighlight onPress={() => redirecionaTela("Informacoes")}>
        <View style={styles.footerIconsView}>
          <Icon name="info-circle" size={20} color="#2C9196" />
          <Text style={{ fontSize: 10, textAlign: "center" }}>
            Políticas e {"\n"} Condições de Uso
          </Text>
        </View>
      </TouchableHighlight>

      {/* Cadastre-se */}
      <TouchableHighlight onPress={() => redirecionaTela("Cadastro")}>
        <View style={styles.footerIconsView}>
          <Icon name="user-plus" size={20} color="#2C9196" />
          <Text style={{ fontSize: 10 }}>Cadastre-se</Text>
        </View>
      </TouchableHighlight>

      {/* Perfil */}
      <TouchableHighlight onPress={() => redirecionaTela("PerfilUsuario")}>
        <View style={styles.footerIconsView}>
          <Icon name="user-circle" size={20} color="#2C9196" />
          <Text style={{ fontSize: 10 }}>Perfil</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  footerIconsWrapperView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: "1%",
  },
  footerIconsView: {
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
