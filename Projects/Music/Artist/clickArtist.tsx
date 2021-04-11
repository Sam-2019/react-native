import React, { useRef, useState } from "react";
import { View, Animated, Button, TouchableOpacity } from "react-native";
import ArtistItem from "./artiste-item";
import { styles } from "../styles";
import { data } from "./Artist";

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
        {data.map((item) => (
      
            <ArtistItem {...item} key={item.key}  open={openMenu}/>
    
        ))}
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
          <Button onPress={hideMenu} title="Hide" />
          <Text>

          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default ClickItem;
