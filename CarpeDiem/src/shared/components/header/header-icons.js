import React from "react";
import { View, StyleSheet, TouchableHighlight, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function HeaderIcons() {
  return (
    <View style={styles.socialMediaIcons}>
      {/* instagram */}
	    <TouchableHighlight onPress={() => { Linking.openURL('https://instagram.com/carpediem.pucmg?igshid=YmMyMTA2M2Y=')}}>
        <View>
          <Ionicons name="logo-instagram" color="#2C9196" strokeWidth={2}size={24} style={{ paddingRight: 4, paddingLeft: 4 }} />
        </View>
      </TouchableHighlight>
	  
      {/* twitter */}
	    <TouchableHighlight onPress={() => { Linking.openURL('https://mobile.twitter.com/carpedi04092443')}}>
        <View>
          <Ionicons name="logo-twitter" color="#2C9196" strokeWidth={2}size={24} style={{ paddingRight: 4, paddingLeft: 4 }} />
        </View>
      </TouchableHighlight>

      {/* facebook */}
	    <TouchableHighlight onPress={() => { Linking.openURL('https://www.facebook.com/profile.php?id=100081320832182')}}>
        <View>
          <Ionicons name="logo-facebook" color="#2C9196" strokeWidth={2}size={24} style={{ paddingRight: 4, paddingLeft: 4 }} />
        </View>
      </TouchableHighlight>	
    </View>
  );
}

const styles = StyleSheet.create({
  socialMediaIcons: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
    bottom: "1%",
  },
});

export { HeaderIcons };
