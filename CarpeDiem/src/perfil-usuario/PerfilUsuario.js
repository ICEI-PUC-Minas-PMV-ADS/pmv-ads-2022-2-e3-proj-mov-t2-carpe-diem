import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { HeaderIcons } from "../shared/components/header/header-icons";
import { HeaderLogo } from "../shared/components/header/header-logo";
import { LinhaSeparadora } from "../shared/components/visuais/linha-separadora";
import { FooterIcons } from "../shared/components/footer/footer-icons";
import { FooterText } from "../shared/components/footer/footer-text";

import BtnBlue from '../shared/components/visuais/BtnBlue';
import Input from '../shared/components/visuais/Input';
import H1 from '../shared/components/visuais/H1';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderIcons />
      <HeaderLogo />
      <MaterialIcons name= "account-circle" size={80} color="#2C9196" />
      <StatusBar style="auto" />
      <H1 title="Perfil" />
      <Text style={styles.text}>Nome Usuário </Text>
      <Text style={styles.text}>email@email.com.br</Text>
      <LinhaSeparadora />
      <Input title="Nome Completo" />
      <Input title="CPF" />
      <Input title="Email" />
      <Input title="Senha" />
      <Input title="Confirme sua Senha" />
      <BtnBlue />
      <BtnBlue />
      <BtnBlue />
      <Text style={styles.text2}>Ainda não tem conta? Cadastre-se</Text>
      <LinhaSeparadora />
      <FooterIcons />
      <FooterText />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: 'center',
    padding: 5,
  },
  text2: {
    fontSize: 16,
    textAlign: 'center',
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