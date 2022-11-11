import React from "react";
import { Text, View, Linking } from "react-native";

export default function BtnBlue({ label, href = "#" }) {
  const [text, onChangeText] = React.useState(label);

  return (
    <View style={style.view}>
      <Text
        onPress={() => {
          Linking.openURL(href);
        }}
        style={style.text}
      >
        {text}
      </Text>
    </View>
  );
}

const style = {
  view: {
    backgroundColor: "#6FDDE3",
    borderRadius: 20,
    width: "80%",
    padding: 2,
    marginBottom: 15,
    fontSize: 16,
    marginLeft: 30,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
    textAlign: "center",
    padding: 10,
    paddingTop: 7,
    paddingBottom: 7,
    textTransform: "uppercase",
  },
};
