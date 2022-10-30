import React from "react";
import { View, StyleSheet } from "react-native";

const LinhaSeparadora = () => <View style={styles.linhaSeparadora} />;

const styles = StyleSheet.create({
  linhaSeparadora: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export { LinhaSeparadora };
