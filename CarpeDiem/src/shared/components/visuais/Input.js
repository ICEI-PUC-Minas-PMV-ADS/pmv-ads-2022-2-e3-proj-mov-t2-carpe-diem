import { Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';

export default function Input({ title, password }) {
  const [text, setText] = useState('dentro');
  /*const [fontsLoaded] = useFonts({
    'QuicksandRegular': require('./src/assets/fonts/Quicksand-Regular.ttf'),
  });
  */

  return (
    <View style={style.view}>
      <Text style={style.text}>{title}</Text>

      <TextInput
        secureTextEntry={password ? true : false}
        onChangeText={setText}
        style={style.input}
        value={text}>
      </TextInput>

    </View>
  );
}


const style = {
  view: {
    width: '100%',
    marginBottom:10
  },
  text: {
    fontFamily: 'QuicksandRegular',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#FBCB2B',
    borderRadius: 20,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 10,
  },
};