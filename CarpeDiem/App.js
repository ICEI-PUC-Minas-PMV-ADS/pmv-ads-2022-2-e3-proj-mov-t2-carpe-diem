import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/screens/login/Login";
import EsqueceuSenha from "./src/screens/esqueceu-senha/EsqueceuSenha";
import Cadastro from "./src/screens/cadastro/Cadastro";
import Home from "./src/screens/home/Home";
import HomePage from "./src/screens/home-page/HomePage";
import DetalhesImovel from "./src/screens/detalhes-imovel/DetalhesImovel";
import PerfilUsuario from "./src/screens/perfil/Perfil";
import EntrarContato from "./src/screens/entrar-contato/EntrarContato";
import FaleConosco from "./src/screens/fale-conosco/FaleConosco";
import Informacoes from "./src/screens/informacoes/Informacoes";
import ResultadoBusca from "./src/screens/resultado-busca/ResultadoBusca";
import BuscaVazia from "./src/screens/busca-vazia/BuscaVazia";
import Obrigado from "./src/screens/obrigado/Obrigado";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Login}
        headerShown="false"
        screenOptions={{
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="DetalhesImovel" component={DetalhesImovel} />
        <Stack.Screen name="PerfilUsuario" component={PerfilUsuario} />
        <Stack.Screen name="EntrarContato" component={EntrarContato} />
        <Stack.Screen name="FaleConosco" component={FaleConosco} />
        <Stack.Screen name="Informacoes" component={Informacoes} />
        <Stack.Screen name="ResultadoBusca" component={ResultadoBusca} />
        <Stack.Screen name="BuscaVazia" component={BuscaVazia} />
        <Stack.Screen name="Obrigado" component={Obrigado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
