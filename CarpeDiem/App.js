import React from "react";
import * as AkarIcons from "akar-icons";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.socialMediaIcons}>
        <AkarIcons.InstagramFill
          color="#2C9196"
          strokeWidth={2}
          size={20}
          style={{ display: "block" }}
        />
        <AkarIcons.TwitterFill
          color="#2C9196"
          strokeWidth={2}
          size={20}
          style={{ display: "block" }}
        />
        <AkarIcons.FacebookFill
          color="#2C9196"
          strokeWidth={2}
          size={20}
          style={{ display: "block" }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1ECE9",
  },
  socialMediaIcons: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "right",
    bottom: "1%",
    left: "42%",
  },
});
