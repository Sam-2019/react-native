import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./Header";
import CryptoList from "./List";
import CryptoDetail from "./crypto-info";

const Stack = createStackNavigator();

const CryptoHome = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Cryptocurrencies"
          component={CryptoList}
          options={{ title: "Cryptocurrencies" }}
        />
        <Stack.Screen
          name="Crypto Detail"
          component={CryptoDetail}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "aliceblue",
    flex: 1,
  },
});

export default CryptoHome;
