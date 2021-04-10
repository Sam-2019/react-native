import React, { useRef, useState } from "react";
import { StyleSheet, View, Animated, Button, Text } from "react-native";

const File = () => {
  const y_translate = useRef(new Animated.Value(0)).current;
  const [expand, setExpand] = useState(false);

  const menu_moveY = y_translate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -500],
  });

  function openMenu() {
    setExpand(true);

    Animated.spring(y_translate, {
      toValue: expand ? 0 : 1,
      friction: 10,
      useNativeDriver: true,
    }).start();
  }

  function hideMenu() {
    setExpand(false);
    Animated.spring(y_translate, {
      toValue: expand ? 0 : 1,
      friction: 10,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}></View>
      <Animated.View
        style={[
          styles.another,
          {
            transform: [
              {
                translateY: menu_moveY,
              },
            ],
          },
        ]}
      >
        <View style={styles.tip_menu}>
          {expand ? (
            <Button onPress={hideMenu} title="Hide" />
          ) : (
            <Button onPress={openMenu} title="Open" />
          )}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: "red",
  },

  another: {
    position: "fixed",
    width: "100%",
    height: "100%",
    bottom: 0,
    top: "95%",
    backgroundColor: "#1fa67a",
    alignItems: "center",
  },
  tip_menu: {},
  button: {
    backgroundColor: "blue",
  },
});

export default File;
