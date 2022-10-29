import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LinhaSeparadora = ({ color }) => (
  // <View style={styles.linhaSeparadora}>
  //   <hr style={{ width: "400px", height: "0px", left: "202px", top: "320px"}} />
  // </View>

  <Text>LINHA SEPARADORA </Text>
);

const styles = StyleSheet.create({
  linhaSeparadora: {
    //paddingVertical: 15,
    //paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: "1%",
  },
});

export { LinhaSeparadora };
