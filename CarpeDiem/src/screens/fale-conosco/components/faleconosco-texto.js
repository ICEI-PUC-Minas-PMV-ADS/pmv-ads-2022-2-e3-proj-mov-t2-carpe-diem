import React from "react";
import { View, Text, StyleSheet } from "react-native";

function FaleConoscoTexto() {
  return (
    <View style={styles.containerFaleConosco}>
      <Text style={styles.faleconoscoText}>Como podemos te ajudar?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerFaleConosco: {
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    height: 250,
  },
  faleconoscoText: {
    fontWeight: "700",
    fontSize: 36,
    textAlign: "center",
  },
<<<<<<< HEAD

=======
  /*  cadastroSubText: {
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
  }, */
>>>>>>> 6e70244e7aec735b74d7a22232bb41e9abaf21e4
});

export { FaleConoscoTexto };
