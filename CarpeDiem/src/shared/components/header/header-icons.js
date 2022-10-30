import React from "react";
import { View, StyleSheet } from "react-native";
import * as AkarIcons from "akar-icons";
import { Ionicons } from '@expo/vector-icons';

function HeaderIcons() {
  return (
    <View style={styles.socialMediaIcons}>
      <Ionicons
        name="logo-instagram"
        color="#2C9196"
        strokeWidth={2}
        size={24}
        style={{ paddingRight: 4, paddingLeft: 4,}}
      />
      <Ionicons
        name="logo-twitter"
        color="#2C9196"
        strokeWidth={2}
        size={24}
        style={{ paddingRight: 4, paddingLeft: 4,}}
      />
      <Ionicons
        name="logo-facebook"
        color="#2C9196"
        strokeWidth={2}
        size={24}
        style={{ paddingRight: 10, paddingLeft: 4,}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  socialMediaIcons: {    
    paddingTop: 15,        
    flexDirection: "row",
    justifyContent: "flex-end", 
    bottom: "1%",
    //left: "42%",
  },
});

export { HeaderIcons };
