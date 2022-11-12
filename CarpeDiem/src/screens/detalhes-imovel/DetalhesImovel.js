import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";

import BtnBlue from "../../shared/components/visuais/BtnBlue";

export default function App({ navigation }) {
  const btnContatoLabel = "ENTRAR EM CONTATO";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HeaderIcons />
        <HeaderLogo />
        <StatusBar style="auto" />

        <Text style={styles.text1}>Detalhes do Imóvel </Text>

        <Text style={styles.text3}>Pousada Princess </Text>
        <Text style={styles.text5}>Porto Seguro - BA </Text>
        <Image
          source={require("../../assets/img/pousada-princess.jpg")}
          style={{ width: 300, height: 210 }}
        />

        {/* Especificações do imóvel */}
        <Text style={styles.text2}>Especificações </Text>

        <View style={styles.flexbox1}>
          <Ionicons name="map-outline" size={24} color="#2C9196" />
          <Text style={styles.text4}>Praia Apaga Fogo </Text>

          <Ionicons name="bed-outline" size={24} color="#2C9196" />
          <Text style={styles.text4}>01 Quarto </Text>
        </View>

        <View style={styles.flexbox1}>
          <MaterialCommunityIcons
            name="account-group"
            size={24}
            color="#2C9196"
          />
          <Text style={styles.text4}>03 Hóspedes </Text>

          <MaterialCommunityIcons
            name="bathtub-outline"
            size={24}
            color="#2C9196"
          />
          <Text style={styles.text4}>01 Banheiro </Text>
        </View>

        {/* Tipo de espaço */}
        <Text style={styles.text2}>Tipo de Espaço </Text>

        <View style={styles.flexbox2}>
          <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" />
          <Text style={styles.text4}>Apartamento </Text>
        </View>

        {/* O que o espaço term a oferecer */}
        <Text style={styles.text2}>O que o espaço tem a oferecer </Text>

        <View style={styles.flexbox1}>
          <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" />
          <Text style={styles.text4}>Piscina </Text>

          <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" />
          <Text style={styles.text4}>Wi-Fi </Text>
        </View>

        <View style={styles.flexbox1}>
          <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" />
          <Text style={styles.text4}>Vista para o Mar </Text>

          <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" />
          <Text style={styles.text4}>Pátio </Text>
        </View>

        <View style={styles.flexbox1}>
          <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" />
          <Text style={styles.text4}>Estacionamento </Text>

          <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" />
          <Text style={styles.text4}>Possui Rampas </Text>
        </View>

        {/* O que o espaço term a oferecer */}
        <Text style={styles.text2}>Informações Adicionais </Text>

        <View style={styles.flexbox2}>
          <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" />
          <Text style={styles.text4}>Horário Check-In </Text>
        </View>

        <View style={styles.flexbox2}>
          <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" />
          <Text style={styles.text4}>Horário Check-Out </Text>
        </View>

        <View style={styles.flexbox2}>
          <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" />
          <Text style={styles.text4}>Distância para a Praia </Text>
        </View>

        <Text style={styles.text5}>Diárias a partir de R$ 240,00 / noite </Text>

        <Text style={styles.text5}>
          Entre em Contato para {"\n"} Verificar a Disponibilidade e {"\n"}{" "}
          Realizar sua Reserva!{" "}
        </Text>

        <BtnBlue label={btnContatoLabel} />

        <LinhaSeparadora />
        <FooterIcons navigation={navigation} />
        <FooterText />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    textAlign: "left",
    padding: 5,
    paddingTop: 20,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 16,
    //textAlign: "center",
    fontWeight: "bold",
    padding: 15,
  },
  text3: {
    fontSize: 20,
    textAlign: "center",
    //padding: 2,
    paddingTop: 24,
    fontWeight: "bold",
  },
  text4: {
    fontSize: 16,
    textAlign: "center",
    //fontWeight: "bold",
    padding: 15,
  },
  text5: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    padding: 25,
  },
  container: {
    display: "flex",
    rowGap: 9,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#F1ECE9",
  },
  flexbox1: {
    alignItems: "center",
    flexDirection: "row",
    //justifyContent: "space-evenly",
    alignContent: "stretch",
    flexWrap: "wrap",
  },
  flexbox2: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  scrollView: {
    backgroundColor: "#F1ECE9",
  },
});
