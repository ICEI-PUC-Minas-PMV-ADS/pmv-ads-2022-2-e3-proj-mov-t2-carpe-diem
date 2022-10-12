import React from "react";
import { View, Image, StyleSheet } from "react-native";

function HeaderLogo() {
  return (
    <View style={styles.containerLogo}>
      <Image
        source={require("../../../assets/img/logo-slogan.png")}
        style={{ width: 350, height: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    flex: 1,
    alignItems: "center",
  },
});

export { HeaderLogo };
