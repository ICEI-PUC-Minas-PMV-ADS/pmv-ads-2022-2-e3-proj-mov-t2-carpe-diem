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
      
      <Ionicons name= "map-outline" size={24} color="#2C9196" /> 
      <Text style={styles.text2}>Praia Apaga Fogo </Text>
            
      <Ionicons name="bed-outline" size={24} color="#2C9196" />   
      <Text style={styles.text2}>01 Quarto </Text>
      
      <MaterialCommunityIcons name= "account-group" size={24} color="#2C9196" /> 
      <Text style={styles.text2}>03 Hóspedes </Text>
      
      <MaterialCommunityIcons name= "bathtub-outline" size={24} color="#2C9196" /> 
      <Text style={styles.text2}>01 Banheiro </Text>
      
      <Text style={styles.text2}>Tipo de Espaço </Text>
      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> 
      <Text style={styles.text2}>Apartamento </Text>

      <Text style={styles.text2}>O que o espaço term a oferecer </Text>
      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> 
      <Text style={styles.text2}>Piscina </Text>

      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> 
      <Text style={styles.text2}>Wi-Fi </Text>

      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> 
      <Text style={styles.text2}>Vista para o Mar </Text>

      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> 
      <Text style={styles.text2}>Pátio </Text>

      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> 
      <Text style={styles.text2}>Estacionamento </Text>

      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> 
      <Text style={styles.text2}>Possui Rampas </Text>

      <Text style={styles.text2}>Informações Adicionais </Text>
      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> 
      <Text style={styles.text2}>Horário Check-In </Text>

      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> 
      <Text style={styles.text2}>Horário Check-Out </Text>

      <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" /> 
      <Text style={styles.text2}>Distância para a Praia </Text>

      <Text style={styles.text2}>Diárias a partir de R$ 240,00 / noite </Text>

      <Text style={styles.text2}>Entre em Contato para {'\n'} Verificar a Disponibilidade e {'\n'} Realizar sua Reserva! </Text>
      
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
    fontWeight:'bold',
  },
  text2: {
    fontSize: 16,
    textAlign: 'center',
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