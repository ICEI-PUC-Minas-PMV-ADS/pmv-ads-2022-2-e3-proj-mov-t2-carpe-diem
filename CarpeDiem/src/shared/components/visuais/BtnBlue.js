import React from 'react';
import { Text, View, Linking } from 'react-native';
import { useFonts } from 'expo-font';

export default function BtnBlue({ title, href = "#" }) {
  const [text, onChangeText] = React.useState("salvar");  

  return (
    <View style={style.view}>
      <Text
        onPress={() => {Linking.openURL(href);}}
        style={style.text}>{text}
      </Text>
    </View>
  );
}

const style = {
  view: {
    backgroundColor: '#6FDDE3',
    borderRadius: 20,
    alignItems: 'center',
    display: 'flex',
    width:"100%",
    padding: 2,
  },
  text: {
    fontWeight:'bold',
    fontSize: 20,
    width:"100%",
    textAlign:'center',
    padding: 10,
    paddingTop: 5,
    paddingBottom: 7,
    textTransform:"uppercase"
  },
};