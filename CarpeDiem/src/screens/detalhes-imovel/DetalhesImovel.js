import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HeaderIcons } from "../../shared/components/header/header-icons";
import { HeaderLogo } from "../../shared/components/header/header-logo";
import { LinhaSeparadora } from "../../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../../shared/components/footer/footer-icons";
import { FooterText } from "../../shared/components/footer/footer-text";

import BtnBlueContato from '../../shared/components/visuais/BtnBlueContato';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderIcons />
      <HeaderLogo />
      <StatusBar style="auto" />

      <Text style={styles.text1}>Detalhes do Imóvel </Text>
      
      <Text style={styles.text1}>Pousada Princess </Text>
      <Text style={styles.text2}>Porto Seguro - BA </Text>
      <Image source={require('../../assets/img/pousada-princess.jpg')} style={{ width: 300, height: 210 }} />
      
      <Text style={styles.text2}>Especificações </Text>      
      
      <Ionicons name= "map-outline" size={24} color="#2C9196" /> Praia Apaga Fogo
            
      <Ionicons name="bed-outline" size={24} color="#2C9196" /> 01 Quarto   
      
      <MaterialCommunityIcons name= "account-group" size={24} color="#2C9196" /> 03 Hóspedes
      
      <MaterialCommunityIcons name= "bathtub-outline" size={24} color="#2C9196" /> 01 Banheiro
      
      <Text style={styles.text2}>Tipo de Espaço </Text>
      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> Apartamento

      <Text style={styles.text2}>O que o espaço term a oferecer </Text>
      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> Piscina
      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> Wi-Fi
      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> Vista para o Mar
      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> Pátio
      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> Estacionamento
      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> Possui Rampas

      <Text style={styles.text2}>Informações Adicionais </Text>
      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> Horário Check-In
      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> Horário Check-Out
      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> Distância para a Praia

      <Text style={styles.text2}>Diárias a partir de R$ 240,00 / noite </Text>

      <Text style={styles.text2}>Entre em Contato para Verificar a Disponibilidade e Realizar sua Reserva! </Text>
      
      <BtnBlueContato />

      <LinhaSeparadora />
      <FooterIcons />
      <FooterText />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    textAlign: 'left',
    padding: 5,
    fontFamily: 'QuicksandRegular',
    fontWeight:'bold',
  },
  text2: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'QuicksandRegular',
    fontWeight:'bold',
    padding: 15,
  },  
  container: {
    display: 'flex',
    rowGap: 9,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: '#F1ECE9',
  },
});