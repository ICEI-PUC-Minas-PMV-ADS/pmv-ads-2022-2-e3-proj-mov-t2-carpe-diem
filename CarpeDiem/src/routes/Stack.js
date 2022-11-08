import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from "../screens/login/Login";
import EsqueceuSenha from "../screens/esqueceu-senha/EsqueceuSenha";
import Cadastro from "../screens/cadastro/Cadastro";
import Home from "../screens/home/Home";
import HomePage from "../screens/home-page/HomePage";
import DetalhesImovel from "../screens/detalhes-imovel/DetalhesImovel";
import PerfilUsuario from "../screens/perfil/Perfil";
import EntrarContato from "../screens/entrar-contato/EntrarContato";
import FaleConosco from "../screens/fale-conosco/FaleConosco";
import Informacoes from "../screens/informacoes/Informacoes";
import ResultadoBusca from "../screens/resultado-busca/ResultadoBusca";
import BuscaVazia from "../screens/busca-vazia/BuscaVazia";
import Obrigado from "../screens/obrigado/Obrigado";

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
    HomePage: {
      screen: HomePage,
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
    FaleConosco: {
      screen: FaleConosco,
    },
    ResultadoBusca: {
      screen: ResultadoBusca,
    },
    Informacoes: {
      screen: Informacoes,
    },
    BuscaVazia: {
      screen: BuscaVazia,
    },
    Obrigado: {
      screen: Obrigado,
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
