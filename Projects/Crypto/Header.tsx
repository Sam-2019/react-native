import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View>
      <View style={styles.list}>
        <View style={styles.name}>
          <Text> Name</Text>
        </View>

        <View style={styles.symbol}>
          <Text>Symbol</Text>
        </View>

        <View style={styles.price_usd}>
          <Text>Price (US$)</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  head: {
    paddingVertical: 15,
    textAlign: "center",
    color: "black",
    fontWeight: "700",
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  name: {
    width: 120,
  },
  symbol: {
    width: 60,
  },
  price_usd: {
    width: 70,
  },
});
