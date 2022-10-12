import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

const LinhaSeparadora = ({ color }) => (
  <View style={styles.linhaSeparadora}>
    <hr style={{ width: "400px", height: "0px", left: "202px", top: "320px"}} />
  </View>
);

const styles = StyleSheet.create({
  linhaSeparadora: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "right",
    bottom: "1%",
  },
});

export {LinhaSeparadora};