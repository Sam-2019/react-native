
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, View, Animated, Easing, TouchableWithoutFeedback } from 'react-native';


export default function App() {
  let scaleValue = new Animated.Value(0);

  const cardScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.1, 1.2]
  });

  let transformStyle = { ...styles.container, transform: [{ scale: cardScale }] };

  return (
    <TouchableWithoutFeedback onPress={() => {
      scaleValue.setValue(0);
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 250,
        easing: Easing.linear,
        useNativeDriver: true
      }).start();
    }} onPressOut={() => {
      Animated.timing(scaleValue, {
        toValue: 0, // reset the animated value to 0
        duration: 100, // animate over 100ms
        easing: Easing.linear,
        useNativeDriver: true
      }).start();
    }}>
      <Animated.View style={transformStyle}>
        <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          fadeDuration={300}
          source={require("./logo.png")}
        />
      </Animated.View>
    </TouchableWithoutFeedback>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
