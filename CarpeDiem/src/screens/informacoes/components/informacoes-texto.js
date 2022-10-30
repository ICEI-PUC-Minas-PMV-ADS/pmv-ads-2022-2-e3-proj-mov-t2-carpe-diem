import React from "react";
import { View, Text, StyleSheet } from "react-native";

function InformacoesTexto() {
  return (
    <View style={styles.containerInformacoes}>
      <Text style={styles.InformacoesText}>POLÍTICA DE PRIVACIDADE</Text>
      <Text style={styles.InformacoesSubText}>
        A missão do Carpe Diem é ajudar a construir conexões entre as pessoas e
        tornar o mundo mais aberto e inclusivo. Em outras palavras, construir um
        mundo onde todos possam se sentir em casa em qualquer lugar. Somos uma
        comunidade construída com base na confiança. Para conquistar essa
        confiança, é fundamental que demonstremos com clareza como usamos suas
        informações e protegemos seu direito humano à privacidade.
      </Text>

      <Text style={styles.InformacoesText}>TERMOS E CONDIÇÕES DE USO</Text>
      <Text style={styles.InformacoesSubText}>
        Nossa missão é criar um mundo onde você se sinta em casa em qualquer
        lugar. De cabanas a castelos, navegue entre milhões de Anúncios e
        encontre aqueles que melhor se encaixem nas suas preferências de viagem.
        Confira a descrição e as fotos, entre em contato para obter mais
        informações sobre um Anúncio.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInformacoes: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  InformacoesText: {
    fontWeight: "700",
    fontSize: 24,
  },
  InformacoesSubText: {
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
  },
});

export { InformacoesTexto };
