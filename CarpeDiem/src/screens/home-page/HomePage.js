import {
  SafeAreaView,
  TextInput,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderIcons />

        <HeaderLogo />

        <View style={styles.containerSearchbar}>
          <TextInput
            style={styles.TextInput}
            placeholder="Escolha seu Destino"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Ionicons
            name="search"
            size={16}
            color="#2C9196"
            onPress={() => {}}
            style={{
              padding: 12,
              height: 40,
              borderRadius: 20,
              backgroundColor: "#F36E2B",
              color: "#FFFFFF",
            }}
          />
        </View>

        <Text style={styles.text1}>Regiões onde Trabalhamos </Text>

        <View style={styles.view}>
          <Image
            source={require("../../assets/img/sudeste.png")}
            style={{ width: "100%", height: 130 }}
          />
          <Text style={styles.text2}>Sudeste </Text>

          <Image
            source={require("../../assets/img/nordeste.png")}
            style={{ width: "100%", height: 130 }}
          />
          <Text style={styles.text2}>Nordeste </Text>
        </View>

        <View style={styles.view}>
          <Image
            source={require("../../assets/img/sul.png")}
            style={{ width: "100%", height: 130 }}
          />
          <Text style={styles.text2}>Sul </Text>

          <Image
            source={require("../../assets/img/norte.png")}
            style={{ width: "100%", height: 130 }}
          />
          <Text style={styles.text2}>Norte </Text>
        </View>

        <Text style={styles.text1}>Destinos em Destaque </Text>

        <Image
          source={require("../../assets/img/flat-porto-seguro.png")}
          style={{ width: "100%", height: 210 }}
        />
        <Text style={styles.text2}>Flat Porto Seguro - BA </Text>

        <View style={styles.flexbox1}>
          <Ionicons name="map-outline" size={24} color="#2C9196" />
          <Text style={styles.text2}>Praia Porto Seguro</Text>

          <Ionicons name="bed-outline" size={24} color="#2C9196" />
          <Text style={styles.text2}>01 Quarto </Text>
        </View>

        <View style={styles.flexbox1}>
          <MaterialCommunityIcons
            name="account-group"
            size={24}
            color="#2C9196"
          />
          <Text style={styles.text2}>05 Hóspedes </Text>

          <MaterialCommunityIcons
            name="bathtub-outline"
            size={24}
            color="#2C9196"
          />
          <Text style={styles.text2}>01 Banheiro </Text>
        </View>

        <Text style={styles.text5}>A partir de R$ 180,00 / noite </Text>

        <LinhaSeparadora />

        <FooterIcons navigation={navigation} />

        <FooterText />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    rowGap: "20%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1ECE9",
  },
  containerSearchbar: {
    fontSize: 16,
    width: "95%",
    padding: 8,
    flexDirection: "row",
    flexDirection: "row",
  },
  TextInput: {
    backgroundColor: "#FBCB2B",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 16,
    borderRadius: 20,
    padding: 7,
    textAlign: "center",
  },
  text1: {
    fontSize: 24,
    textAlign: "left",
    padding: 15,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
  },
  text5: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    padding: 25,
  },
  view: {
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  flexbox1: {
    alignItems: "center",
    flexDirection: "row",
    alignContent: "stretch",
    flexWrap: "wrap",
  },
});
