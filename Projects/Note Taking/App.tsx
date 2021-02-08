
import * as React from 'react';
import {
  Image, Platform, StyleSheet, Text, View,
  Animated, Easing, TouchableWithoutFeedback
} from 'react-native';


export default function App() {
  let scaleValue = new Animated.Value(0);

  const cardScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.1, 1.2]
  });

  let transformStyle = { transform: [{ scale: cardScale }] };
  const onLoad = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  }

  React.useEffect(() => {
    onLoad()
  }, [onLoad])

  return (
    <TouchableWithoutFeedback

      onPress={() => {
        scaleValue.setValue(0);


      }}

      onPressOut={() => {
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true
        }).start();
      }}>
      <View style={styles.container}>
        <Animated.View style={transformStyle}>
          <Image
            style={{
              resizeMode: "contain",
              height: 50,
              width: 100
            }}
            fadeDuration={300}
            source={require("./logo.png")}
          />
        </Animated.View>
      </View>

    </TouchableWithoutFeedback>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato'
  }
});
