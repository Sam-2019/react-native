import React from "react";
import { View, StyleSheet } from "react-native";
import Artists from "./Artist/Artist";

const Layout = () => {
  return (
    <View style={styles.container}>
      <Artists />
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
