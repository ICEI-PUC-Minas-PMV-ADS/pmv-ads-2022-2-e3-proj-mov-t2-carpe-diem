import React from "react";
import { View, StyleSheet } from "react-native";
import * as AkarIcons from "akar-icons";

function HeaderIcons() {
  // return (
  //   <View style={styles.socialMediaIcons}>
  //     <AkarIcons.InstagramFill
  //       color="#2C9196"
  //       strokeWidth={2}
  //       size={20}
  //       style={{ display: "block" }}
  //     />
  //     <AkarIcons.TwitterFill
  //       color="#2C9196"
  //       strokeWidth={2}
  //       size={20}
  //       style={{ display: "block" }}
  //     />
  //     <AkarIcons.FacebookFill
  //       color="#2C9196"
  //       strokeWidth={2}
  //       size={20}
  //       style={{ display: "block" }}
  //     />
  //   </View>
  // );
}

const styles = StyleSheet.create({
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

export { HeaderIcons };
