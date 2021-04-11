import React, { useRef, useState } from "react";
import { View, Animated, Button } from "react-native";
import ArtistItem from "./artiste-item";
import { styles } from "../styles";

const ClickItem = () => {
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
      <View style={styles.body}>

      {expand ? (
            <Button onPress={hideMenu} title="Hide" />
          ) : (
            <Button onPress={openMenu} title="Open" />
          )}


          
        <ArtistItem
          imageURL='
      "https://media.gq.com/photos/5c8ef5e207a98f3722295cb8/16:9/w_1280,c_limit/j-cole-cover-gq-april-2019_social.jpg",
   '
          name="Marley G"
          key={1}
        />
      </View>
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

export default ClickItem;
