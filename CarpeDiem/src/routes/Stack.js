import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from "../screens/login/Login";
import EsqueceuSenha from "../screens/esqueceu-senha/EsqueceuSenha";
import Cadastro from "../screens/cadastro/Cadastro";
import Home from "../screens/home/Home";
import DetalhesImovel from "../screens/detalhes-imovel/DetalhesImovel";
import PerfilUsuario from "../screens/perfil-usuario/PerfilUsuario";
import EntrarContato from "../screens/entrar-contato/EntrarContato";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Cadastro: {
      screen: Cadastro,
    },
    EsqueceuSenha: {
      screen: EsqueceuSenha,
    },
    Home: {
      screen: Home,
    },
    DetalhesImovel: {
      screen: DetalhesImovel,
    },
    PerfilUsuario: {
      screen: PerfilUsuario,
    },
    EntrarContato: {
      screen: EntrarContato,
    },
  },
  {
    initialRouteName: "Login",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default createAppContainer(AppNavigator);
