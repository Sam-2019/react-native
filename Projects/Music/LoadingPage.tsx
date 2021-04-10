import React from "react";
import { Animated, Text } from "react-native";
import { usePulse } from "./usePulse";
import { styles } from "./styles";

const Loading = () => {
  const Scale = usePulse();

  return (
    <Animated.View style={[{ transform: [{ scale: Scale }] }]}>
      <Text style={styles.text}>Music</Text>
    </Animated.View>
  );
};

export default Loading;
