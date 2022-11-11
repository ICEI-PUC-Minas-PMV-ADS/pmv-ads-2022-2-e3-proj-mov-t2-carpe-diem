import React from "react";
import { View, Image, StyleSheet } from "react-native";

function HeaderLogo() {
  return (
    <View style={styles.containerLogo}>
      <Image
        source={require("../../../assets/img/logo-slogan.png")}
        style={{ width: 280, height: 80 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    alignItems: "center",
  },
});

export { HeaderLogo };
