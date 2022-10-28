import { Text, View, TextInput } from 'react-native';
import { useFonts } from 'expo-font';

export default function H1({ title }) {
  /*const [fontsLoaded] = useFonts({
    QuicksandBold: require('../../assets/fonts/Quicksand-Bold.ttf'),
  });
  */

  return (
    <View style={style.view}>
      <Text style={style.text}>{title}</Text>
    </View>
  );
}

const style = {
  view: {
    width: '100%',
    marginBottom:10,
    textAlign:'center'
  },
  text: {
    fontFamily: 'QuicksandBold',
    fontSize: 36,
    textAlign:'center'
  },
  input: {
    backgroundColor: '#FBCB2B',
    borderRadius: 20,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 10,
  },
};