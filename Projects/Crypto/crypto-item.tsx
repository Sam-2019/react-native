import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { CryptoItemProps } from "./types";
import { useNavigation } from "@react-navigation/native";

function CryptoItem({ name, symbol, price_usd, id }: CryptoItemProps) {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Crypto Detail", {
            name,
            id: symbol,
            otherParam: "anything you want here",
          })
        }
        style={styles.item}
      >
        <View style={styles.logoXname}>
          <Text style={styles.logo}></Text>
          <Text style={styles.name}> {name}</Text>
        </View>

        <View style={styles.symbol}>
          <Text>{symbol}</Text>
        </View>

        <View style={styles.price}>
          <Text>${price_usd} </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CryptoItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 7,
    marginHorizontal: 5,
  },
  logoXname: {
    flexDirection: "row",
    width: 120,
  },
  logo: {},
  name: {},
  symbol: {
    width: 60,
  },
  price: {
    width: 70,
    alignItems: "flex-end",
  },
});
