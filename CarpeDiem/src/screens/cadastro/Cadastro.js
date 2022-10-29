import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { CadastroTexto } from "./components/cadastro-texto";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";
import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora"
import { CadastroInputs } from "../cadastro/components/cadastro-inputs"


export default function Cadastro({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView style={styles.scrollView}>
       <HeaderIcons />
      
       <HeaderLogo />

       <CadastroTexto />
 
       <CadastroInputs navigation={navigation} />

       <LinhaSeparadora />

       <FooterIcons />

       <FooterText />

     </ScrollView> 
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#F1ECE9',
  },
  scrollView: {
    backgroundColor: '#F1ECE9',    
  },
  
});

