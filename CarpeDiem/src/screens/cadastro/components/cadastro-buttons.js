import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function CadastroButtons({ navigation }) {
  const redirecionaTela = () => {
    navigation.push("Login");
  };

  return (
    <View>
      <TouchableOpacity style={styles.btnEsqueceuSenha}>
        <Ionicons name="checkmark-circle-outline" size={24} color="#FBCB2B" />
        <Text style={styles.lembreDispositivoText}>Lembre-me neste dispositivo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnEsqueceuSenha}>        
        <Text style={styles.esqueceuSenhaText}>Esqueceu a Senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnEntrar}>
        <Text style={styles.entrarText}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCadastro} onPress={redirecionaTela}>
        <Text style={styles.cadastroText}>
          Já possui Cadastro? Faça Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnEsqueceuSenha: {
    alignItems: "center",
    justifyContent: "center",
    width: "170%",
    height: "50%",
    justifyContent: "center",    
    padding: 7,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",    
  },
  lembreDispositivoText: {
    fontSize: 12,    
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'start'
  },
  esqueceuSenhaText: {
    fontSize: 12,        
    alignItems: 'right',
    width: '100%',
    textAlign: 'end',
  },  
  btnEntrar: {
    backgroundColor: '#6FDDE3',
    borderRadius: 20,
    //alignItems: 'center',
    //display: 'flex',
    width: "100%",
    padding: 2,
    marginBottom: 15,
    fontSize: 16,  
    //display: "block",
    margin: "auto",     
  },
  entrarText: {    
    fontWeight:'bold',
    fontSize: 16,
    width:"100%",
    textAlign:'center',
    padding: 10,
    paddingTop: 7,
    paddingBottom: 7,
    textTransform:"uppercase"
  },
  btnCadastro: {
    marginBottom: 10,
  },
  cadastroText: {
    fontSize: 16,
    paddingBottom: 20,
  },
});

export { CadastroButtons };
