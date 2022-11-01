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

        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.TextInput}
            placeholder="Escolha seu Destino"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(value) => setText(value)}
          />
          <Ionicons name="search" size={16} color="#2C9196" onPress={() => { }} style={{padding: 10, height: 55 }} />
        </View>

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

        <View style={styles.flexbox1}>
          <Ionicons name="map-outline" size={24} color="#2C9196" />
          <Text style={styles.text2}>Praia Porto Seguro</Text>

          <Ionicons name="bed-outline" size={24} color="#2C9196" />
          <Text style={styles.text2}>01 Quarto </Text>
        </View>

        <View style={styles.flexbox1}>
          <MaterialCommunityIcons name="account-group" size={24} color="#2C9196" />
          <Text style={styles.text2}>05 Hóspedes </Text>

          <MaterialCommunityIcons name="bathtub-outline" size={24} color="#2C9196" />
          <Text style={styles.text2}>01 Banheiro </Text>
        </View>

        <Text style={styles.text5}>A partir de R$ 180,00 / noite </Text>

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
  containerTextInput: {    
    fontSize: 16,
    textAlign:"center",
    alignItems: "center",
    //justifyContent: "center",
    width: "95%",   
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    //margin: 7
  },
  TextInput: {
    backgroundColor: "#FBCB2B",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 16,
    borderRadius: 20,
    padding: 7,
    textAlign:"center",
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
    //textAlign: 'center',
  },
  text5: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    padding: 25,
  },
  view: {
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "stretch",
  },
  flexbox1: {
    alignItems: "center",    
    flexDirection: "row",
    //justifyContent: "space-evenly",   
    alignContent: "stretch", 
    flexWrap: "wrap",
  },
});
