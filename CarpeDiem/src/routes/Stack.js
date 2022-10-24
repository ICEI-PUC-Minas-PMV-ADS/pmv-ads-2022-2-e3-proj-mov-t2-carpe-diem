import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screens/login/Login";
import Cadastro from "../screens/cadastro/Cadastro";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Cadastro: {
      screen: Cadastro,
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
