import React from "react";
import { View, StyleSheet } from "react-native";
import * as AkarIcons from "akar-icons";

function LoginIcons() {
  return (
    <View style={styles.socialMediaLoginIcons}>
      <View style={{ right: "45%" }}>
        <AkarIcons.GoogleFill
          color="#2C9196"
          strokeWidth={2}
          size={35}
          style={{ display: "inline" }}
        />
      </View>

      <View style={{ left: "45%" }}>
        <AkarIcons.FacebookFill
          color="#2C9196"
          strokeWidth={2}
          size={35}
          style={{ display: "inline" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  socialMediaLoginIcons: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: "1%",
  },
});

export { LoginIcons };
