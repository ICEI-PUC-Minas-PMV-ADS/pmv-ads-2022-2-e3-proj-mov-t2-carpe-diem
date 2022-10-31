import { SafeAreaView, TextInput, Text, Image, ScrollView, StyleSheet, View } from "react-native";

import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";

export default function HomePage({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderIcons />

        <HeaderLogo />

        <TextInput
          style={styles.TextInput}
          placeholder="Escolha seu Destino"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => setText(value)}
        />
        <AntDesign
          name="search1"
          size={19}
          color="#222"
          onPress={() => { }}
        />

        <Text style={styles.text1}>Regiões onde Trabalhamos </Text>

        <View style={styles.view}>
          <Image source={require('../../assets/img/sudeste.png')} style={{ width: 130, height: 130 }} />
          <Text style={styles.text2}>Sudeste </Text>

          <Image source={require('../../assets/img/nordeste.png')} style={{ width: 130, height: 130 }} />
          <Text style={styles.text2}>Nordeste </Text>


          <Image source={require("../../assets/img/sul.png")} style={{ width: 130, height: 130 }} />
          <Text style={styles.text2}>Sul </Text>

          <Image source={require("../../assets/img/norte.png")} style={{ width: 130, height: 130 }} />
          <Text style={styles.text2}>Norte </Text>
        </View>

        <Text style={styles.text1}>Destinos em Destaque </Text>

        <Image
          source={require("../../assets/img/flat-porto-seguro.png")}
          style={{ width: 300, height: 210 }}
        />
        <Text style={styles.text2}>Flat Porto Seguro - BA </Text>


        <Ionicons name="map-outline" size={24} color="#2C9196" />
        <Text style={styles.text2}>Praia </Text>

        <Ionicons name="bed-outline" size={24} color="#2C9196" />
        <Text style={styles.text2}>01 Quarto </Text>

        <MaterialCommunityIcons name="account-group" size={24} color="#2C9196" />
        <Text style={styles.text2}>05 Hóspedes </Text>

        <MaterialCommunityIcons name="bathtub-outline" size={24} color="#2C9196" />
        <Text style={styles.text2}>01 Banheiro </Text>

        <Text style={styles.text2}>A partir de R$ 180,00 / noite </Text>

        <LinhaSeparadora />

        <FooterIcons />

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
  TextInput: {
    backgroundColor: "#FBCB2B",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 20,
    padding: 7,
  },
  text1: {
    fontSize: 24,
    textAlign: "left",
    padding: 15,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 15,
    textAlign: 'center',
  },
  view: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
});
